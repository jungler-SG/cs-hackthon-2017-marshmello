package com.cs.hackathon2017.marshmellow.batch.sphinx;

import com.cs.hackathon2017.marshmellow.batch.Speech;
import edu.cmu.sphinx.api.Configuration;
import edu.cmu.sphinx.api.SpeechResult;
import edu.cmu.sphinx.api.StreamSpeechRecognizer;
import edu.cmu.sphinx.linguist.dictionary.Word;
import edu.cmu.sphinx.result.WordResult;
import edu.cmu.sphinx.util.TimeFrame;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.util.List;

@Component
@Slf4j
public class SphinxEngine {

    private StreamSpeechRecognizer speechRecognizer;

    public SphinxEngine() throws IOException {
        Configuration configuration = new Configuration();
        configuration.setAcousticModelPath("resource:/models/vox/en-us");
        configuration.setDictionaryPath("resource:/edu/cmu/sphinx/models/en-us/cmudict-en-us.dict");

        configuration.setLanguageModelPath("resource:/edu/cmu/sphinx/models/en-us/en-us.lm.bin");
        speechRecognizer = new StreamSpeechRecognizer(configuration);
    }

    public Speech getSpeech(Path voiceFile) throws IOException {
        try (InputStream stream = new FileInputStream(voiceFile.toFile())) {
            speechRecognizer.startRecognition(stream);

            Speech speech = new Speech();

            SpeechResult result;
            StringBuilder fullText = new StringBuilder();
            try {
                while ((result = speechRecognizer.getResult()) != null) {
                    List<WordResult> wordResultList = result.getWords();
                    for (WordResult wordResult : wordResultList) {
                        Word word = wordResult.getWord();
                        TimeFrame timeFrame = wordResult.getTimeFrame();

                        if ("<sil>".equalsIgnoreCase(word.getSpelling())
                                || "sil".equalsIgnoreCase(word.getSpelling())) {
                            continue;
                        }

                        speech.addWord(word.getSpelling(), timeFrame.getStart(), timeFrame.getEnd());
                        fullText.append(word.getSpelling()).append(" ");
                    }
                    log.info("Speech :{}", fullText);
                }
            } catch (Exception ex) {
                log.error("ERROR while extracting speech, ignoring for now.", ex);
            }
            speechRecognizer.stopRecognition();

            speech.setFullText(fullText.toString());

            return speech;
        }
    }
}
