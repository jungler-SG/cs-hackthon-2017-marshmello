package com.cs.hackathon2017.marshmellow.service;

import com.cs.hackathon2017.marshmellow.config.MarshMellowBatchProperties;
import com.cs.hackathon2017.marshmellow.elastic.repository.AudioRepository;
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
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@AllArgsConstructor
public class MarshMellowService {
    private static String NOT_FOUND = "{\"error\":\"not-found\"}";

    MarshMellowBatchProperties batchProperties;
    AudioRepository audioRepository;

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

    public List<ElasticAudio> searchFor(String keyWord, String clientId, String rmId) {
        log.info("Searching for {}, clientId {}, rmId {}", keyWord, clientId, rmId);

        if (clientId == null && rmId == null) return this.audioRepository.findAllByFullTextContaining(keyWord);
        if (clientId ==null) return this.audioRepository.findAllByFullTextContainsAndRmIdEquals(keyWord, rmId);
        if (rmId ==null) return this.audioRepository.findAllByFullTextContainsAndClientIdEquals(keyWord, clientId);
        return this.audioRepository.findAllByFullTextContainsAndRmIdEqualsAndClientIdEquals(keyWord, rmId, clientId);

    }

    private List<ElasticAudio> mockResult() {
        try {
            return Files.list(Paths.get(batchProperties.getVoiceLogOutput()))
                    .filter(f -> f.getFileName().toString().endsWith(".json"))
                    .map(this::convertToElasticAudio)
                    .collect(Collectors.toList());
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

    private ElasticAudio convertToElasticAudio(Path path) {
        return new ElasticAudio(
                FilenameUtils.getBaseName(path.toString()),
                findAudioFileName(path).getFileName().toString(),
                LocalTime.now().toString(),
                "RMID1",
                "clientId1",
                "this is full text of the speech from mock search",
                Arrays.asList(new String[]{"this", "10", "20"}, new String[]{"is", "25", "45"})
        );
    }

    private Path findAudioFileName(Path jsonFileName) {
        String baseName = FilenameUtils.getBaseName(jsonFileName.toString());
        try {
            return Files.list(Paths.get(batchProperties.getVoiceLogOutput()))
                    .filter(f -> f.getFileName().toString().contains(baseName))
                    .filter(f -> !f.getFileName().toString().endsWith(".json"))
                    .findFirst()
                    .orElse(jsonFileName);
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }
}
