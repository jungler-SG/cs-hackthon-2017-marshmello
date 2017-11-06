package com.cs.hackathon2017.marshmellow.batch.sphinx;

import com.cs.hackathon2017.marshmellow.batch.Speech;
import com.cs.hackathon2017.marshmellow.batch.Speech2TextEngine;
import com.cs.hackathon2017.marshmellow.config.MarshMellowBatchProperties;
import com.cs.hackathon2017.marshmellow.config.SphinxProperties;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileAttribute;
import java.util.Arrays;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class SphinxSpeech2TextEngine implements Speech2TextEngine {

    MarshMellowBatchProperties batchProperties;
    SphinxProperties sphinxProperties;
    SphinxEngine sphinxEngine;

    public void process(Path inputVoiceFile) {
        log.info("Starting {}", inputVoiceFile);
        Optional<Path> convertedPath = convertTo16kWavAudio(inputVoiceFile);
        if (!convertedPath.isPresent()) {
            log.error("No output generated for {}, ignoring", inputVoiceFile);
            return;
        }

        log.info("Input file converted to 16k {} ", convertedPath);
        try {
            Speech speech = sphinxEngine.getSpeech(convertedPath.get());
            log.info("Extracted text: {}", speech);
        } catch (IOException ex) {
            log.error("Error while extracting speech from wav file.", ex);
        }
    }

    private Optional<Path> convertTo16kWavAudio(Path inputVoiceFile) {
        //ffmpeg -i <input-file> -ar 16000 -ac 1 <output-file>
        Path output16kWavFile = output16kWavFile(inputVoiceFile);
        if (Files.exists(output16kWavFile)) {
            try {
                Files.delete(output16kWavFile);
            } catch(IOException ex) {
                throw new RuntimeException("Unable to delete temporary conversion file:" + output16kWavFile, ex);
            }
        }

        String[] ffmpegCmd =
                {
                        sphinxProperties.getFfmpegPath(),
                        "-i",
                        inputVoiceFile.toString(),
                        "-ar",
                        "16000",
                        "-ac",
                        "1",
                        output16kWavFile.toString()
                };

        log.info("Executing {}", Arrays.toString(ffmpegCmd));
        try {
            ProcessBuilder procBuilder = new ProcessBuilder(ffmpegCmd);
            procBuilder.directory(new File(batchProperties.getVoiceLogInput()));
            File tempLogFile =
                    Files.createTempFile(
                            Paths.get(batchProperties.getVoiceLogOutput()),
                            "ffmpeg",
                            "log",
                            new FileAttribute[]{}).toFile();

            procBuilder.redirectOutput(tempLogFile);
            procBuilder.redirectErrorStream(true);

            Process process = procBuilder.start();
            process.waitFor();
            int exitCode = process.exitValue();
            if (exitCode != 0) {
                log.error("ffmpeg process exited with errors. exit code {}", exitCode);
                log.error("ffmpeg output {}", new String(Files.readAllBytes(tempLogFile.toPath())));
                return Optional.empty();
            } else {
                log.info("ffmpeg output {}", new String(Files.readAllBytes(tempLogFile.toPath())));
            }
        } catch (IOException | InterruptedException ex) {
            log.error("Error while running 'ffmpeg' process.", ex);
        }

        return Optional.of(output16kWavFile);
    }

    private Path output16kWavFile(Path inputVoiceFile) {
        String outputFilename = FilenameUtils.removeExtension(inputVoiceFile.toString())
                + "_converted_16k.wav";
        return Paths.get(batchProperties.getVoiceLogTmp(), outputFilename);
    }
}
