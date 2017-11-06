package com.cs.hackathon2017.marshmellow.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "sphinx")
@Data
public class SphinxProperties {
    private String ffmpegPath;
}
