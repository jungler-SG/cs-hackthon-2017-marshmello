package com.cs.hackathon2017.marshmellow.batch;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class Speech {
    private String fullText;
    private List<Word> wordsList = new ArrayList<>();

    public void addWord(String word, long startTime, long endTime) {
        wordsList.add(new Word(word, startTime, endTime));
    }

    public String toJSON() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(this);
        } catch (JsonProcessingException jpe) {
            throw new RuntimeException("Cannot parse as json", jpe);
        }
    }

    @Data
    @AllArgsConstructor
    public static class Word {
        private String word;
        private long startTime;
        private long endTime;
    }
}
