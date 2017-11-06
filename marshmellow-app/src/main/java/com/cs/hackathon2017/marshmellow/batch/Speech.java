package com.cs.hackathon2017.marshmellow.batch;

import lombok.Data;

import java.util.List;

@Data
public class Speech {
    private String fullText;
    private List<Word> wordsList;

    public static class Word {
        private String word;
        private long startTime;
        private long endTime;
    }
}
