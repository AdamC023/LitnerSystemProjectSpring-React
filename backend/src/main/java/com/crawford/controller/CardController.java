package com.crawford.controller;


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

    @GetMapping("/testDevTools")
    public String testDevTools() {
        System.out.println("Testing Spring DevTools.....");
        return "DevTools is working! " + System.currentTimeMillis();
    }


    @PostMapping("/updateTrue")
    public String updateCards(@RequestBody Card card) {
        System.out.println("HELLO WORLD THIS A TEST");
        Card cardToUpdate = cardRepository.findCardById(card.getCard_id());
        if (cardToUpdate == null) {return "card not found";}
        cardToUpdate.setCorrect(card.getCorrect());
        cardToUpdate.setLastAnswered(card.getLastAnswered());
        cardToUpdate.setBox(card.getBox());
        cardRepository.save(cardToUpdate);
        return "Card was updated" + card.toString();
    	
    }

    
    @GetMapping("/getModuleCardCount/{code}")
    public int countCards(@PathVariable String code) {
        return cardRepository.countByModule_Code(code);
    }


}


