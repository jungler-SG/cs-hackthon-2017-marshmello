package com.cs.hackathon2017.marshmellow.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "elasticsearch")
@Data
public class ElasticSearchProperties {
    private String elasticVersion;
    private String domainArn;
}
