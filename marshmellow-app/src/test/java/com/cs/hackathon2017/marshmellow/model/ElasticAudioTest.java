package com.cs.hackathon2017.marshmellow.model;

import org.junit.Test;

import java.util.List;

import static java.util.List.of;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;
import static org.hamcrest.core.IsEqual.equalTo;

public class ElasticAudioTest {

    @Test
    public void ElasticAudioTest() throws Exception{
        String[] keyThis = {"this", "1000", "2000"};
        String[] keyIs = {"is", "2000", "2300"};

        List<String[]> keyWordTiming = of(keyIs, keyThis);
        ElasticAudio audio = new ElasticAudio(1,
                "y224480@rtcuat.credit-suisse.com--conference_2017-11-02_12-41.wav",
                "2017-11-02 12:41:10",
                "y2244880",
                "103308911",
                "this is a full audio text", keyWordTiming);

        assertThat(audio.getId(), is(1L));
        assertThat(audio.getWavfile(), equalTo("y224480@rtcuat.credit-suisse.com--conference_2017-11-02_12-41.wav"));
        assertThat(audio.getRmId(), equalTo("y2244880"));
        assertThat(audio.getClientId(), equalTo("103308911"));
        assertThat(audio.getCreatedTime(), equalTo("2017-11-02 12:41:10"));
        assertThat(audio.getFullText(), equalTo("this is a full audio text"));

    }

}