package com.cs.hackathon2017.marshmellow.config;

import com.cs.hackathon2017.marshmellow.MarshMellowBatchProperties;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;

@Configuration
@EnableConfigurationProperties({
        MarshMellowBatchProperties.class
})
@Slf4j
public class PropertiesConfiguration {

    @PostConstruct
    public void postConstruct() {
        log.info("properties configuration - completed");
    }
}
