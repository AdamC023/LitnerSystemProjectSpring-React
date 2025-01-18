package com.crawford.repository;

import org.springframework.data.domain.Limit;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.crawford.model.Card;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CardRepository extends CrudRepository<Card, Integer> {
	
	int countByModule_Code(String code);

	Iterable<Card> findAllByModule_Code(String code);

	Card findCardById(Integer cardId);

	@Query("SELECT c FROM Card c WHERE (c.module.code = :moduleCode)" +
			" AND ((c.box = 1 AND c.lastAnswered <= :boxOneDate)" +
			"OR (c.box = 2 AND c.lastAnswered <= :boxTwoDate)" +
			"OR (c.box = 3 AND c.lastAnswered <= :boxThreeDate))")
	List<Card> findByModuleCode(@Param("moduleCode") String moduleCode,
								@Param("boxOneDate") LocalDate boxOneDate,
								@Param("boxTwoDate") LocalDate boxTwoDate,
								@Param("boxThreeDate") LocalDate boxThreeDate);
}