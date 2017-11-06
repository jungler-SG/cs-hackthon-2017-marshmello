package com.cs.hackathon2017.marshmellow.elastic;

import com.cs.hackathon2017.marshmellow.elastic.repository.AudioRepository;
import com.cs.hackathon2017.marshmellow.model.ElasticAudio;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/audios/audio")
@Slf4j
public class ElasticSearchController {

    private final AudioRepository audioRepository;

    @GetMapping
    public List<ElasticAudio> findAllByClientId(@RequestParam(required = false) String clientId) {
        List<ElasticAudio> audios = this.audioRepository.findAllByClientId(clientId);
        log.error("clientId is: " + clientId);
        log.error("audios size: " + audios.size());
        return audios;
    }

    @GetMapping("/wavfile")
    public List<ElasticAudio> findAllByWavfile(@RequestParam(required = false) String wavfile) {
        List<ElasticAudio> audios = this.audioRepository.findAllByWavfile(wavfile);
        log.error("wavfile is: " + wavfile);
        log.error("audios size:" + audios.size());
        return audios;
    }

    @GetMapping("/{id}")
    public ElasticAudio get(@PathVariable String id) {
        ElasticAudio audio = this.audioRepository.findOne(id);

        return audio;
    }
}
