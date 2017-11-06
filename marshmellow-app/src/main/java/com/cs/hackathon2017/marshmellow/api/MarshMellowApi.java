package com.cs.hackathon2017.marshmellow.api;

import com.cs.hackathon2017.marshmellow.model.ElasticAudio;
import com.cs.hackathon2017.marshmellow.service.MarshMellowService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.List;

@Controller
@AllArgsConstructor
@Slf4j
public class MarshMellowApi {
    private MarshMellowService service;

    @GetMapping("/api/waveform/{fileId}.json")
    @ResponseBody
    public String getWaveform(@PathVariable("fileId") String fileId) {
        log.info("waveform request received {}", fileId);
        return service.getWaveform(fileId);
    }

    @GetMapping(value = "/api/voice/{filename:.+}")
    @ResponseBody
    public FileSystemResource getVoiceLog(@PathVariable("filename") String filename) throws IOException {
        log.info("voice log request received {}", filename);
        return service.getVoiceLogAsResource(filename);

    }

    @GetMapping("/api/search/{keywords}")
    @ResponseBody
    public List<ElasticAudio> searchFor(String keyWords) {
        return service.searchFor(keyWords);
    }
}
