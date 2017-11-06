package com.cs.hackathon2017.marshmellow.elastic.repository;

import com.cs.hackathon2017.marshmellow.model.ElasticAudio;
import org.springframework.data.domain.Sort;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AudioRepository extends ElasticsearchRepository<ElasticAudio, String>{

    List<ElasticAudio> findAllByClientId(String clientId);

    List<ElasticAudio> findAllByWavfile(String wavfile);

    List<ElasticAudio> findAllByFullTextContaining(String keyword);

    List<ElasticAudio> findAllByFullTextContainsAndRmIdEquals(String keyword, String rmid);
    List<ElasticAudio> findAllByFullTextContainsAndClientIdEquals(String keyword, String clientId);
    List<ElasticAudio> findAllByFullTextContainsAndRmIdEqualsAndClientIdEquals(String keyword, String rmid, String clientId);

}
