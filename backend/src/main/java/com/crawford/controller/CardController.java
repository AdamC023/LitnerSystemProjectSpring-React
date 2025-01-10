package com.crawford.controller;

import com.crawford.model.Module;
import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.crawford.repository.ModuleRepository;
import com.crawford.model.Card;
import com.crawford.repository.CardRepository;
import com.crawford.model.Module;


@RestController
@RequestMapping("/cards")
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from your React frontend
public class CardController {

    Module module;
    @Autowired
    private CardRepository cardRepository;

    @Autowired
    private ModuleRepository moduleRepository;

    @PostMapping
    public Card addCard(@RequestBody Card card) {
    	return cardRepository.save(card);
    }

    @GetMapping("/getCards")
    public Iterable<Card> getCards(){
    	return cardRepository.findAll();
    }



}


