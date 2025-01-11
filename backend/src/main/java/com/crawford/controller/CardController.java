package com.crawford.controller;

import com.crawford.model.Module;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.crawford.repository.ModuleRepository;
import com.crawford.model.Card;
import com.crawford.repository.CardRepository;


@RestController
@RequestMapping("/cards")
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from your React frontend
public class CardController {

    @Autowired
    private CardRepository cardRepository;
    @Autowired
    private ModuleRepository moduleRepository;

    

    @PostMapping("/addCard")
    public Card addCard(@RequestBody Card card) {
    	return cardRepository.save(card);
    }

    @GetMapping("/getCards/{code}")
    public Iterable<Card> getCards(@PathVariable String code){
    	return cardRepository.findAllByModule_Code(code);
    }
    
    @PostMapping("/updateTrue")
    public Card updateCards(@RequestBody Card card) {
    	
    	Optional<Card> cardOptional = cardRepository.findById(card.getCard_id());
    	if(cardOptional.isPresent()) {
    		Card cardToUpdate = cardOptional.get();
    		cardToUpdate.setCorrect(true);
    		cardRepository.save(cardToUpdate);
    	}
    	return card;
    	
    }
    
    @GetMapping("/getModuleCardCount/{code}")
    public int countCards(@PathVariable String code) {
    	int count = cardRepository.countByModule_Code(code);
    	return count;
    }


}


