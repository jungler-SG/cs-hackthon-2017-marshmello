package com.cs.hackathon2017.marshmellow.config;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.ConfigurationProperties;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@ConfigurationProperties(prefix = "batch")
@Data
@Slf4j
public class MarshMellowBatchProperties {
    private String voiceLogBase;
    private String voiceLogInput;
    private String voiceLogOutput;
    private String voiceLogTmp;

    @PostConstruct
    public void logFolderNames() {
        log.info("Base folder {}, input:{}, output:{}, tmp:{}",
                voiceLogBase, voiceLogInput, voiceLogOutput, voiceLogTmp);
        createIfNotExists(voiceLogInput);
        createIfNotExists(voiceLogOutput);
        createIfNotExists(voiceLogTmp);
    }

    private void createIfNotExists(String folder){
        if (!Files.exists(Paths.get(folder))) {
            log.info("{} does not exists, creating it.", folder);
            try {
                Files.createDirectories(Paths.get(folder));
            } catch (IOException ex) {
                log.error("Unable to create folder {}", folder);
                throw new RuntimeException("Unable to create folder: " + folder, ex);
            }
        }
    }
}
