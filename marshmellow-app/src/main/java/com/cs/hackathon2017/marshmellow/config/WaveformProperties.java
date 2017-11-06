package com.cs.hackathon2017.marshmellow.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "waveform")
@Data
public class WaveformProperties {
    private String waveformBinaryPath;
}
