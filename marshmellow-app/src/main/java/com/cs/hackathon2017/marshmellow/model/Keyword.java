package com.cs.hackathon2017.marshmellow.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@Document(indexName = "keywords", type = "keyword", refreshInterval = "-1")
@AllArgsConstructor
@Data
public class Keyword {

    @Id
    private String id;
    private String keyword;
    private int count;
}
