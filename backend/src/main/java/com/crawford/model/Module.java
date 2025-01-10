package com.crawford.model;

import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Entity;
import jakarta.persistence.Column;

@Entity
public class Module {

  @Id
  @Column(name="code")
  private String code;
  private String name;




  /**Blank constructor for hibernate. */

  public Module(){
  }
  /** Constructor for Registration. */
  public Module(Integer Id,String name, String code) {

    this.code = code;
    this.name = name;
  }

  public String getCode(){
    return code;
  }

  public String getName(){
    return name;
  }


  public void setCode(String code){
    this.code = code;
  }

  public void setName(String name){
    this.name = name;
  }


}