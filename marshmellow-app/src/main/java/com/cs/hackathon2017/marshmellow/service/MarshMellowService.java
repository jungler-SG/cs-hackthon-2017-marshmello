package com.cs.hackathon2017.marshmellow.service;

import com.cs.hackathon2017.marshmellow.config.MarshMellowBatchProperties;
import com.cs.hackathon2017.marshmellow.model.ElasticAudio;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@AllArgsConstructor
public class MarshMellowService {
    private static String NOT_FOUND = "{\"error\":\"not-found\"}";

    MarshMellowBatchProperties batchProperties;

    public String getWaveform(String fileId) {
        try {
            byte[] waveformJsonData = Files.readAllBytes(Paths.get(batchProperties.getVoiceLogOutput(), fileId + ".json"));
            return new String(waveformJsonData);
        } catch (IOException ex) {
            log.error("Not found: {}", fileId);
            return NOT_FOUND;
        }
    }

    public FileSystemResource getVoiceLogAsResource(String filename) {
        Path voiceFilePath = Paths.get(batchProperties.getVoiceLogOutput(), filename);
        return new FileSystemResource(voiceFilePath.toFile());
    }

    public List<ElasticAudio> searchFor(String keyWords) {
        log.info("Searching for {}", keyWords);
        return mockResult();
    }

    private List<ElasticAudio> mockResult() {
        try {
            return Files.list(Paths.get(batchProperties.getVoiceLogOutput()))
                    .peek(f -> log.info("Path :" + f.getFileName() + ", " + f.getFileName().toString().endsWith(".json")))
                    .filter(f -> f.getFileName().toString().endsWith(".json"))
                    .peek(f -> log.info("After filter :" + f.getFileName()))
                    .map(this::convertToElasticAudio)
                    .collect(Collectors.toList());
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    private ElasticAudio convertToElasticAudio(Path path) {
        return new ElasticAudio(
                FilenameUtils.getName(path.toString()),
                FilenameUtils.getName(path.toString()) + ".wav",
                LocalTime.now().toString(),
                "RMID1",
                "clientId1",
                "this is full text of the speech from mock search",
                List.of(new String[]{"this", "10", "20"}, new String[]{"is", "25", "45"})
        );
    }
}
