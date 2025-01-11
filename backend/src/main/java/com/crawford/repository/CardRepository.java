package com.crawford.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.crawford.model.Card;

@Repository
public interface CardRepository extends CrudRepository<Card, Integer> {
	
	int countByModule_Code(String code);

	Iterable<Card> findAllByModule_Code(String code);

}