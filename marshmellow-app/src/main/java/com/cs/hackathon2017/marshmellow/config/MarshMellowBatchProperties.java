package com.cs.hackathon2017.marshmellow.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "batch")
@Data
public class MarshMellowBatchProperties {
    private String voiceLogInput;
    private String voiceLogOutput;
    private String voiceLogTmp;
}
