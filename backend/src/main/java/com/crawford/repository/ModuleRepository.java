package com.crawford.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.crawford.model.Module;

@Repository
public interface ModuleRepository extends CrudRepository<Module, Long> {

	Module findByCode(String code);
}