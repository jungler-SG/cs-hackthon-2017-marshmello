package com.cs.hackathon2017.marshmellow.elastic.repository;

import com.cs.hackathon2017.marshmellow.model.Keyword;
import org.springframework.data.domain.Sort;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KeywordRepository extends ElasticsearchRepository<Keyword, String> {
    List<Keyword> findAllByKeywordOrderByCount(String keyword, Sort sort);

    List<Keyword> findAllByKeyword(String keyword);
}
