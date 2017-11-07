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

    List<ElasticAudio> findAllByRmIdEqualsAndFullTextIn(String rmid,String ...keyword);
    List<ElasticAudio> findAllByClientIdEqualsAndFullTextIn(String clientId, String ...keyword);
    List<ElasticAudio> findAllByRmIdEqualsAndClientIdEqualsAndFullTextIn(String rmid, String clientId, String ...keyword);

    List<ElasticAudio> findAllByFullTextIn(String ...keywords);
}
