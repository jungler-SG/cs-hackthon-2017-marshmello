package com.cs.hackathon2017.marshmellow.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Slf4j
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@Document(indexName = "audios", type = "audio", refreshInterval = "-1")
@AllArgsConstructor
@Data
public class ElasticAudio {
    @Id
    private String id;
    private String wavfile;
    private String createdTime;
    private String rmId;
    private String clientId;
    private String fullText;

    private String[][] keywordTimes;


}
