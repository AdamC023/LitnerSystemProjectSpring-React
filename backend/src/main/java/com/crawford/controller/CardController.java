package com.crawford.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.crawford.model.Card;
import com.crawford.repository.CardRepository;

@RestController
@RequestMapping("/cards")
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from your React frontend
public class CardController {

    @Autowired
    private CardRepository cardRepository;

    @PostMapping
    public Card addCard(@RequestBody Card card) {
        return cardRepository.save(card);
    }
}


