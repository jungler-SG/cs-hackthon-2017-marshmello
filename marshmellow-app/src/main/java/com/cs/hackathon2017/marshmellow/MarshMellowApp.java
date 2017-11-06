package com.cs.hackathon2017.marshmellow;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@Slf4j
@PropertySource("application.yml")
public class MarshMellowApp {

    public static void main(String[] args) {
        ConfigurableApplicationContext ctx = SpringApplication.run(MarshMellowApp.class);
    }
}
