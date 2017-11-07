package com.cs.hackathon2017.marshmellow.batch.waveform;

import com.cs.hackathon2017.marshmellow.config.MarshMellowBatchProperties;
import com.cs.hackathon2017.marshmellow.config.WaveformProperties;
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

@Service
@AllArgsConstructor
@Slf4j
public class WaveformGenerator {

    private MarshMellowBatchProperties batchProperties;
    private WaveformProperties waveformProperties;

    public String generate(Path inputVoiceFile) {
        Path jsonOutputFile = outputJson(inputVoiceFile);
        deleteIfExists(jsonOutputFile);

        try {
            if (executeWaveformGenerator(inputVoiceFile, jsonOutputFile)) {
                return new String(Files.readAllBytes(jsonOutputFile));
            }
        } catch (IOException ex) {
            log.error("Error while generating waveform for {}.", inputVoiceFile, ex);
        } finally {
            deleteIfExists(jsonOutputFile);
        }
        return null;
    }

    private boolean executeWaveformGenerator(Path inputVoiceFile, Path jsonOutputFile) throws IOException {
        //audiowaveform -i <file-name> -o <outut-file.json> -z 256 -b 8
        String[] waveformCmd =
                {
                        waveformProperties.getWaveformBinaryPath(),
                        "-i",
                        inputVoiceFile.toString(),
                        "-o",
                        jsonOutputFile.toString(),
                        "-z",
                        "256",
                        "-b",
                        "8"
                };

        File tempLogFile = null;
        try {
            ProcessBuilder procBuilder = new ProcessBuilder(waveformCmd);
            procBuilder.directory(new File(batchProperties.getVoiceLogInput()));
            tempLogFile =
                    Files.createTempFile(
                            Paths.get(batchProperties.getVoiceLogTmp()),
                            "waveform",
                            "log",
                            new FileAttribute[]{}).toFile();

            procBuilder.redirectOutput(tempLogFile);
            procBuilder.redirectErrorStream(true);

            Process process = procBuilder.start();
            process.waitFor();
            int exitCode = process.exitValue();
            if (exitCode != 0) {
                log.error("waveform process exited with errors. exit code {}", exitCode);
                log.error("waveform log {}", new String(Files.readAllBytes(tempLogFile.toPath())));
                return false;
            } else {
                log.info("waveform log {}", new String(Files.readAllBytes(tempLogFile.toPath())));
            }
        } catch (IOException | InterruptedException ex) {
            log.error("Error while running 'ffmpeg' process.", ex);
            return false;
        } finally {
            deleteIfExists(tempLogFile.toPath());
        }
        return true;
    }

    private Path outputJson(Path inputVoiceFile) {
        String outputFilename = FilenameUtils.removeExtension(inputVoiceFile.getFileName().toString()) + "_waveform.json";
        return Paths.get(batchProperties.getVoiceLogTmp(), outputFilename);
    }

    private void deleteIfExists(Path file) {
        if (Files.exists(file)) {
            try {
                Files.delete(file);
            } catch (IOException ex) {
                throw new RuntimeException("Unable to delete temporary file:" + file, ex);
            }
        }
    }
}
