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

    public Speech process(Path inputVoiceFile) {
        log.info("Starting {}", inputVoiceFile);
        Optional<Path> convertedPath = convertTo16kWavAudio(inputVoiceFile);
        if (!convertedPath.isPresent()) {
            log.error("Unable to create temporary file.");
            return null;
        }

        log.info("Input file converted to 16k {} ", convertedPath);
        try {
            Speech speech = sphinxEngine.getSpeech(convertedPath.get());
            log.info("Extracted text: {}", speech);
            return speech;
        } catch (IOException ex) {
            log.error("Error while extracting speech from wav file.", ex);
            return null;
        } finally {
            deleteIfExists(convertedPath.get());
        }
    }

    private Optional<Path> convertTo16kWavAudio(Path inputVoiceFile) {
        //ffmpeg -i <input-file> -ar 16000 -ac 1 <output-file>
        Path output16kWavFile = output16kWavFile(inputVoiceFile);
        deleteIfExists(output16kWavFile);

        String[] ffmpegCmd =
                {
                        sphinxProperties.getFfmpegBinaryPath(),
                        "-i",
                        inputVoiceFile.toString(),
                        "-ar",
                        "16000",
                        "-ac",
                        "1",
                        output16kWavFile.toString()
                };

        log.info("Executing {}", Arrays.toString(ffmpegCmd));
        File tempLogFile = null;
        try {
            ProcessBuilder procBuilder = new ProcessBuilder(ffmpegCmd);
            procBuilder.directory(new File(batchProperties.getVoiceLogInput()));
            tempLogFile =
                    Files.createTempFile(
                            Paths.get(batchProperties.getVoiceLogTmp()),
                            "ffmpeg",
                            ".log",
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
        } finally {
            if (tempLogFile != null) {

            }
        }

        return Optional.of(output16kWavFile);
    }

    private void deleteIfExists(Path file) {
        if (Files.exists(file)) {
            try {
                Files.delete(file);
            } catch(IOException ex) {
                throw new RuntimeException("Unable to delete temporary file:" + file, ex);
            }
        }
    }

    private Path output16kWavFile(Path inputVoiceFile) {
        String outputFilename = FilenameUtils.removeExtension(inputVoiceFile.toString())
                + "_converted_16k.wav";
        return Paths.get(batchProperties.getVoiceLogTmp(), outputFilename);
    }
}
