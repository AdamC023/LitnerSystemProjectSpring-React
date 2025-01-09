package com.crawford.model;

import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

@Entity
public class Card {
  @Id
  @GeneratedValue
  private Integer id;

  private String question;
  private String answer;

  /**Blank constructor for hibernate. */

  public Card(){
  }
  /** Constructor for Registration. */
  public Card(String question, String answer) {
    this.answer = answer;
    this.question = question;
  }

  public Integer getCard_id(){
    return id;
  }

  public void setCard_id(Integer id){
    this.id = id;
  }

  public String getAnswer(){
    return answer;
  }

  public String getQuestion(){
      return question;
  }

  public void setAnswer(String answer){
    this.answer = answer;
  }

  public void setQuestion(String question){
      this.question = question;
   }
}