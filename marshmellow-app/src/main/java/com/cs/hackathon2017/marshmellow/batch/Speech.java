package com.cs.hackathon2017.marshmellow.batch;

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

    @Data
    @AllArgsConstructor
    public static class Word {
        private String word;
        private long startTime;
        private long endTime;
    }
}
