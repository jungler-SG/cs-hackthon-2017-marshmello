package com.cs.hackathon2017.marshmellow;

import com.cs.hackathon2017.marshmellow.elastic.repository.AudioRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchAutoConfiguration;
import org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchDataAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.PropertySource;

@Slf4j
@PropertySource("application.yml")
@SpringBootApplication(exclude = {ElasticsearchAutoConfiguration.class, ElasticsearchDataAutoConfiguration.class})
public class MarshMellowApp {

    @Autowired
    private static AudioRepository repository;

    public static void main(String[] args) {
        ConfigurableApplicationContext ctx = SpringApplication.run(MarshMellowApp.class);
    }
}
