package com.cs.hackathon2017.marshmellow.batch;

import com.cs.hackathon2017.marshmellow.batch.waveform.WaveformGenerator;
import com.cs.hackathon2017.marshmellow.config.MarshMellowBatchProperties;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;
import java.util.concurrent.Executors;

@Component
@AllArgsConstructor
@Slf4j
public class VoiceLogProcessor {

    private MarshMellowBatchProperties batchProperties;
    private Speech2TextEngine speech2TextEngine;
    private WaveformGenerator waveformGenerator;

    @PostConstruct
    public void startProcessorInBackground() {
        log.info("starting voice log processor, batchProps: {}", batchProperties);
        validateBatchProps();
        Executors.newSingleThreadExecutor().submit(this::watchForVoiceLogs);
    }

    private void validateBatchProps() {
        if (!Files.exists(Paths.get(batchProperties.getVoiceLogInput()))) {
            log.error("{} does not exists.", batchProperties.getVoiceLogInput());
        }
        if (!Files.exists(Paths.get(batchProperties.getVoiceLogOutput()))) {
            log.error("{} does not exists.", batchProperties.getVoiceLogOutput());
        }
        if (!Files.exists(Paths.get(batchProperties.getVoiceLogTmp()))) {
            log.error("{} does not exists.", batchProperties.getVoiceLogTmp());
        }
    }

    private void watchForVoiceLogs() {
        try {
            Path inputPath = Paths.get(batchProperties.getVoiceLogInput());
            WatchService watchService = inputPath.getFileSystem().newWatchService();
            inputPath.register(watchService, StandardWatchEventKinds.ENTRY_CREATE);

            for (; ; ) {
                WatchKey watchKey = null;
                while (watchKey == null) {
                    try {
                        log.info("Waiting for new voice logs.");
                        watchKey = watchService.take();
                    } catch (InterruptedException ex) {
                        log.error("Watcher is interrupted, will poll for new files after a delay of 1 sec", ex);
                        try {
                            Thread.sleep(1000);
                        } catch (InterruptedException e) {
                        }
                    }
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
                }

                if (!watchKey.reset()) {
                    log.error("{} folder became inaccessible, exiting voice log watcher.", inputPath);
                    break;
                }
            }

        } catch (IOException ex) {
            log.error("Error in watcher service.", ex);
            throw new RuntimeException(ex);
        }
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
        Path inputPath = Paths.get(batchProperties.getVoiceLogInput(), voiceLog.toString());
        String outputFilename = generateOutputFileName(voiceLog);
        String extn = FilenameUtils.getExtension(voiceLog.toString());
        Path outputVoiceLogPath = Paths.get(batchProperties.getVoiceLogOutput(), outputFilename + "." + extn);
        Path outputWaveformPath = Paths.get(batchProperties.getVoiceLogOutput(), outputFilename + ".json");

        try {
            Files.move(inputPath, outputVoiceLogPath);
            Files.write(outputWaveformPath, waveformJson.getBytes());
        } catch (IOException ex) {
            log.error("Unable to move voice log input to output folder. input {}, output {}", inputPath, outputVoiceLogPath, ex);
        }
    }

    private String generateOutputFileName(Path voiceLog) {
        String extn = FilenameUtils.getExtension(voiceLog.toString());
        String randomFile;
        for (;;) {
            randomFile = UUID.randomUUID().toString().replaceAll("-", "");
            if (!Files.exists(Paths.get(batchProperties.getVoiceLogOutput(), randomFile + "." + extn))) {
                break;
            }
        }

        return randomFile;
    }
}
