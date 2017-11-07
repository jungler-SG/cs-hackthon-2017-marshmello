package com.cs.hackathon2017.marshmellow.service;

import com.cs.hackathon2017.marshmellow.batch.Speech;
import com.cs.hackathon2017.marshmellow.config.MarshMellowBatchProperties;
import com.cs.hackathon2017.marshmellow.elastic.repository.AudioRepository;
import com.cs.hackathon2017.marshmellow.elastic.repository.KeywordRepository;
import com.cs.hackathon2017.marshmellow.model.ElasticAudio;
import com.cs.hackathon2017.marshmellow.model.Keyword;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.core.io.FileSystemResource;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Slf4j
@AllArgsConstructor
public class MarshMellowService {
    private static String NOT_FOUND = "{\"error\":\"not-found\"}";

    MarshMellowBatchProperties batchProperties;
    AudioRepository audioRepository;
    KeywordRepository keywordRepository;

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
        if(keyWord == null || keyWord.trim().isEmpty()) keyWord = "*";
        String[] splited = keyWord.split("\\s+");
        this.incrementKeywordCount(splited);
        if (clientId == null && rmId == null) return this.audioRepository.findAllByFullTextIn(splited);
        if (clientId ==null) return this.audioRepository.findAllByRmIdEqualsAndFullTextIn(rmId, splited);
        if (rmId ==null) return this.audioRepository.findAllByClientIdEqualsAndFullTextIn(clientId, splited);
        return this.audioRepository.findAllByRmIdEqualsAndClientIdEqualsAndFullTextIn(rmId, clientId, splited);

    }

    private void incrementKeywordCount(String[] keywords) {
        try {
            for (String word : keywords) {
                List<Keyword> storedKeywords = this.keywordRepository.findAllByKeyword(word);
                if (storedKeywords.size() == 0) {
                    log.info("new keyword: {}", word);
                    this.keywordRepository.save(new Keyword(UUID.randomUUID().toString(), word, 1));
                } else {
                    log.info("increment keyword: {}", word);
                    Keyword storedKeyword = storedKeywords.get(0);
                    this.keywordRepository.save(new Keyword(storedKeyword.getId(), storedKeyword.getKeyword(), storedKeyword.getCount() + 1));
                }
            }
        } catch (Exception e) {
            log.info(e.getMessage());
        }
    }

    public List<Keyword> getPopularKeywords() {
        return this.keywordRepository.findAllByKeywordOrderByCount("*",  new Sort(Sort.Direction.DESC, "count"));
    }

    public void saveAudio() {
        this.audioRepository.save(new ElasticAudio("4",
                        "y224480@rtcuat.credit-suisse.com--conference_2017-11-02_12-41.wav",
                        "2017-11-02 12:41:10",
                        "y2244880",
                        "20978910",
                        "this is a full audio text inserted by API",
                        new String[][]{new String[]{"this", "10", "20"}, new String[]{"is", "25", "45"}}));
    }

    public void saveAudio(String fileId, String wavfile, Speech speech, String rmId, String clientId, String createdTime) {
        ElasticAudio elasticAudio =
                new ElasticAudio(
                        fileId,
                        wavfile,
                        createdTime,
                        rmId,
                        clientId,
                        speech.getFullText(),
                        toStringArray(speech.getWordsList())
                );

        this.audioRepository.save(elasticAudio);
    }

    private String[][] toStringArray(List<Speech.Word> keyWords) {
        return keyWords.stream()
                .map(w ->
                        new String[]{
                                w.getWord(),
                                String.valueOf(w.getStartTime()),
                                String.valueOf(w.getEndTime())
                        }
                )
                .toArray(String[][]::new);
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
                new String[][]{new String[]{"this", "10", "20"}, new String[]{"is", "25", "45"}}
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
