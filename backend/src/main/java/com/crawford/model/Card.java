package com.crawford.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
@Entity
public class Card {
  @Id
  @GeneratedValue
  private Integer id;
  private String question;
  private String answer;
  private boolean correct;
  @ManyToOne
  @JoinColumn(name="code")
  private Module module;
  /**Blank constructor for hibernate. */
  public Card(){
  }
  /** Constructor for Registration. */
  public Card(String question, String answer, boolean correct, Module module) {
    this.answer = answer;
    this.question = question;
    this.correct = correct;
    this.module = module;
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
  
  public boolean getCorrect() {
	  return correct;
  }
  
  public void setCorrect(boolean correct) {
	  this.correct = correct;
  }

  public void setAnswer(String answer){
    this.answer = answer;
  }

  public void setQuestion(String question){
      this.question = question;
   }
  
  public void setModule(Module module) {
	  this.module = module;
  }
  
  public Module getModule() {
	  return module;
  }
}