package com.crawford.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.crawford.model.Card;

@Repository
public interface CardRepository extends CrudRepository<Card, Long> {
}