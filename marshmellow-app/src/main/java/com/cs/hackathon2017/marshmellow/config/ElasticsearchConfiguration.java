package com.cs.hackathon2017.marshmellow.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;

@Slf4j
@Configuration
@EnableElasticsearchRepositories(basePackages = "com.cs.hackathon2017.marshmellow.elastic.repository")
public class ElasticsearchConfiguration {
}
