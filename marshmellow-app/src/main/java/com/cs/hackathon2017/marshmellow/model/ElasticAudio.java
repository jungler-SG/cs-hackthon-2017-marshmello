package com.cs.hackathon2017.marshmellow.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class ElasticAudio {
    final private long id;
    final private String wavfile;
    final private String createdTime;
    final private String rmId;
    final private String clientId;
    final private String fullText;
    final private List<String[]> keywordTimes;

}
