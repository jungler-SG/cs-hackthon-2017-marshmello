package com.cs.hackathon2017.marshmellow.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Data;
<<<<<<< HEAD
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
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

//    @Transient
//    private List<String[]> keywordTimes;

=======

import java.util.List;

@AllArgsConstructor
@Data
public class ElasticAudio {
    final private String id;
    final private String wavfile;
    final private String createdTime;
    final private String rmId;
    final private String clientId;
    final private String fullText;
    final private List<String[]> keywordTimes;
>>>>>>> 00b5a8c165cae6e34c39b2ed7fe78d5727956efb
}
