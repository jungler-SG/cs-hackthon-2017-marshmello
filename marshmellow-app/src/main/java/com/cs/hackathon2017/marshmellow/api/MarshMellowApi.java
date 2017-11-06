package com.cs.hackathon2017.marshmellow.api;

import com.cs.hackathon2017.marshmellow.config.MarshMellowBatchProperties;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
@AllArgsConstructor
@Slf4j
public class MarshMellowApi {
    private static String NOT_FOUND = "{\"error\":\"not-found\"}";

    private MarshMellowBatchProperties batchProperties;

    @GetMapping("/api/waveform/{fileId}.json")
    @ResponseBody
    public String getWaveform(@PathVariable("fileId") String fileId) {
        log.info("waveform request received {}", fileId);

        try {
            byte[] waveformJsonData = Files.readAllBytes(Paths.get(batchProperties.getVoiceLogOutput(), fileId + ".json"));
            return new String(waveformJsonData);
        } catch (IOException ex) {
            log.error("Not found: {}", fileId);
            return NOT_FOUND;
        }
    }

    @GetMapping(value = "/api/voice/{filename:.+}")
    @ResponseBody
    public FileSystemResource getVoiceLog(@PathVariable("filename") String filename) throws IOException {
        log.info("voice log request received {}", filename);
        Path voiceFilePath = Paths.get(batchProperties.getVoiceLogOutput(), filename);
        return new FileSystemResource(voiceFilePath.toFile());
    }
}
