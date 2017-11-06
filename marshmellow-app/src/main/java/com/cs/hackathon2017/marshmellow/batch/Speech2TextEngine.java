package com.cs.hackathon2017.marshmellow.batch;

import org.springframework.stereotype.Service;

import java.nio.file.Path;

@Service
public interface Speech2TextEngine {
    void process(Path inputVoiceLog);
}
