package com.cs.hackathon2017.marshmellow.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.List;


@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@Document(indexName = "audios", type = "audio")
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
    private List<String[]> keywordTimes;

}
