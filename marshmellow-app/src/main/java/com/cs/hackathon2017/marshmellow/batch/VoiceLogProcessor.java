package com.cs.hackathon2017.marshmellow.batch;

import com.cs.hackathon2017.marshmellow.batch.waveform.WaveformGenerator;
import com.cs.hackathon2017.marshmellow.config.MarshMellowBatchProperties;
import com.cs.hackathon2017.marshmellow.service.MarshMellowService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.data.elasticsearch.ElasticsearchException;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.Executors;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
@Slf4j
public class VoiceLogProcessor {

    private static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    private MarshMellowBatchProperties batchProperties;
    private Speech2TextEngine speech2TextEngine;
    private WaveformGenerator waveformGenerator;
    private MarshMellowService marshMellowService;

    @PostConstruct
    public void startProcessorInBackground() {
        log.info("starting voice log processor, batchProps: {}", batchProperties);
        validateBatchProps();
        Executors.newSingleThreadExecutor().submit(this::watchForVoiceLogs);
    }

    private void validateBatchProps() {
        boolean good = true;
        if (!Files.exists(Paths.get(batchProperties.getVoiceLogInput()))) {
            log.error("{} does not exists.", batchProperties.getVoiceLogInput());
            good = false;
        }
        if (!Files.exists(Paths.get(batchProperties.getVoiceLogOutput()))) {
            log.error("{} does not exists.", batchProperties.getVoiceLogOutput());
            good = false;
        }
        if (!Files.exists(Paths.get(batchProperties.getVoiceLogTmp()))) {
            log.error("{} does not exists.", batchProperties.getVoiceLogTmp());
            good = false;
        }

        if (!good) {
            //throw new IllegalArgumentException("One of the setup parameters are wrong");
        }
    }

    private void watchForVoiceLogs() {
        try {
            //Path inputPath = Paths.get(batchProperties.getVoiceLogInput());
            //WatchService watchService = inputPath.getFileSystem().newWatchService();
            //inputPath.register(watchService, StandardWatchEventKinds.ENTRY_CREATE);

            for (; ; ) {
                /*
                WatchKey watchKey = null;
                try {
                    log.info("Waiting for new voice logs.");
                    watchKey = watchService.poll(5, TimeUnit.SECONDS);
                } catch (InterruptedException ex) {
                    log.error("Watcher is interrupted", ex);
                }
                if (watchKey != null && !watchKey.reset()) {
                    log.error("{} folder became inaccessible, exiting voice log watcher.", inputPath);
                    break;
                }


                for (WatchEvent<?> event : watchKey.pollEvents()) {
                    if (event.kind() == StandardWatchEventKinds.ENTRY_CREATE) {
                        WatchEvent<Path> newFileEvent = (WatchEvent<Path>) event;
                        Path newFile = newFileEvent.context();
                        log.info("Processing new voice log :{}", newFile);

                        processVoiceLog(newFile);

                    } else {
                        throw new IllegalStateException("Impossible!!");
                    }
                }*/

                List<Path> newVoiceLogFiles = getNewFiles(Paths.get(batchProperties.getVoiceLogInput()));
                for (Path newVoiceLog : newVoiceLogFiles) {
                    try {
                        processVoiceLog(newVoiceLog);
                    } catch(Throwable ex) {
                        log.error("Cannot process {}, ignoring.", newVoiceLog, ex);
                    }
                }
                log.info("Waiting for new voice logs.");
                sleep(5);
            }

        } catch (IOException ex) {
            log.error("Error in watcher service.", ex);
            throw new RuntimeException(ex);
        }
    }

    private void sleep(int secs) {
        try {
            Thread.sleep(secs * 1000);
        } catch (InterruptedException iex) {
            log.error("Sleep interrupted", iex);
        }
    }

    private List<Path> getNewFiles(Path rootPath) throws IOException {
        return Files.list(rootPath)
                .collect(Collectors.toList());
    }


    private void processVoiceLog(Path voiceLog) {
        // extract speech
        Speech speech = speech2TextEngine.process(voiceLog);
        if (speech == null) {
            log.error("Unable to extract text from voice log: {}", voiceLog);
            return;
        }

        String waveformJson = waveformGenerator.generate(voiceLog);
        if (waveformJson == null) {
            log.error("Unable to generate waveform from voice log: {}", voiceLog);
            return;
        }

        writeToOutput(voiceLog, speech, waveformJson);
    }

    private void writeToOutput(Path voiceLog, Speech speech, String waveformJson) {
        String voiceFileId = generateFileId(voiceLog);
        String extn = FilenameUtils.getExtension(voiceLog.toString());
        Path outputVoiceLogPath = Paths.get(batchProperties.getVoiceLogOutput(), voiceFileId + "." + extn);
        Path outputWaveformPath = Paths.get(batchProperties.getVoiceLogOutput(), voiceFileId + ".json");
        Path outputSpeechPath = Paths.get(batchProperties.getVoiceLogOutput(), voiceFileId + "_speech.txt");

        try {
            log.info("Moving {} to {}", voiceLog, outputVoiceLogPath);
            Files.move(voiceLog, outputVoiceLogPath);

            log.info("Writing waveform to {}", outputWaveformPath);
            Files.write(outputWaveformPath, waveformJson.getBytes());

            log.info("Writing speech to {}", outputSpeechPath);
            Files.write(outputSpeechPath, speech.toJSON().getBytes());

            log.info("Uploading audio logs to elastic.");
            try {
                marshMellowService.saveAudio(
                        voiceFileId,
                        voiceLog.getFileName().toString(),
                        speech,
                        "M123456",
                        "SG-12345",
                        new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(voiceLog.toFile().lastModified()))
                );
            } catch (ElasticsearchException ex) {
                log.error("IGNORING ERROR: {}", ex.getMessage());
            }
        } catch (IOException ex) {
            log.error("Unable to move voice log input to output folder. input {}, output {}", voiceLog, outputVoiceLogPath, ex);
        }
    }

    private String generateFileId(Path voiceLog) {
        String extn = FilenameUtils.getExtension(voiceLog.toString());
        String randomFile;
        for (; ; ) {
            randomFile = UUID.randomUUID().toString().replaceAll("-", "");
            if (!Files.exists(Paths.get(batchProperties.getVoiceLogOutput(), randomFile + "." + extn))) {
                break;
            }
        }

        return randomFile;
    }
}
