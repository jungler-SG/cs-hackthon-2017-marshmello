package com.cs.hackathon2017.marshmellow.batch;

import com.cs.hackathon2017.marshmellow.config.MarshMellowBatchProperties;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.nio.file.*;
import java.util.concurrent.Executors;

@Component
@AllArgsConstructor
@Slf4j
public class VoiceLogProcessor {

    private MarshMellowBatchProperties batchProperties;
    private Speech2TextEngine speech2TextEngine;

    @PostConstruct
    public void startProcessorInBackground() {
        log.info("starting voice log processor, batchProps: {}", batchProperties);
        validateBatchProps();
        Executors.newSingleThreadExecutor().submit(this::watchForVoiceLogs);
    }

    private void validateBatchProps() {
        if (!Files.exists(Paths.get(batchProperties.getVoiceLogInput()))) {
            log.error("{} does not exists.", batchProperties.getVoiceLogInput());
        }
        if (!Files.exists(Paths.get(batchProperties.getVoiceLogOutput()))) {
            log.error("{} does not exists.", batchProperties.getVoiceLogOutput());
        }
        if (!Files.exists(Paths.get(batchProperties.getVoiceLogTmp()))) {
            log.error("{} does not exists.", batchProperties.getVoiceLogTmp());
        }
    }

    private void watchForVoiceLogs() {
        try {
            Path inputPath = Paths.get(batchProperties.getVoiceLogInput());
            WatchService watchService = inputPath.getFileSystem().newWatchService();
            inputPath.register(watchService, StandardWatchEventKinds.ENTRY_CREATE);

            for (;;) {
                WatchKey watchKey = null;
                while(watchKey == null) {
                    try {
                        log.info("Waiting for new voice logs.");
                        watchKey = watchService.take();
                    } catch (InterruptedException ex) {
                        log.error("Watcher is interrupted, will poll for new files after a delay of 1 sec", ex);
                        try {
                            Thread.sleep(1000);
                        } catch (InterruptedException e) {}
                    }
                }

                for (WatchEvent<?> event : watchKey.pollEvents()) {
                    if (event.kind() == StandardWatchEventKinds.ENTRY_CREATE) {
                        WatchEvent<Path> newFileEvent = (WatchEvent<Path>)event;
                        Path newFile = newFileEvent.context();
                        log.info("New File created :{}", newFile);
                        speech2TextEngine.process(newFile);
                    } else {
                        throw new IllegalStateException("Impossible!!");
                    }
                }

                if (!watchKey.reset()) {
                    log.error("{} folder became inaccessible, exiting voice log watcher.", inputPath);
                    break;
                }
            }

        } catch (IOException ex) {
            log.error("Error in watcher service.", ex);
            throw new RuntimeException(ex);
        }
    }
}
