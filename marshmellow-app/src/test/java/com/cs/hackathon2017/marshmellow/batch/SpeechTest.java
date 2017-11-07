package com.cs.hackathon2017.marshmellow.batch;

import org.junit.Assert;
import org.junit.Test;

public class SpeechTest {
    @Test
    public void test_toJSON() {
        Speech speech = new Speech();
        speech.setFullText("Full text of the speech");
        speech.addWord("Word1", 100, 200);
        speech.addWord("Word2", 200, 500);
        speech.addWord("Word3", 300, 600);
        speech.addWord("Word4", 400, 700);

        Assert.assertEquals("{\"fullText\":\"Full text of the speech\",\"wordsList\":[{\"word\":\"Word1\",\"startTime\":100,\"endTime\":200},{\"word\":\"Word2\",\"startTime\":200,\"endTime\":500},{\"word\":\"Word3\",\"startTime\":300,\"endTime\":600},{\"word\":\"Word4\",\"startTime\":400,\"endTime\":700}]}", speech.toJSON());
    }
}
