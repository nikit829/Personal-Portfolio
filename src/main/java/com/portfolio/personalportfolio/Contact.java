package com.portfolio.personalportfolio;

public class Contact {
    String name;
    String email;
    String subject;
    String message;
    
    public void setName(String name){
        this.name=name;
    }
    public String getName(){
        return name;
    }
    public void setEmail(String email){
        this.email=email;
    }
    public String getEmail(){
        return email;
    }
    public void setSubject(String subject){
        this.subject=subject;
    }
    public String getSubject(){
        return subject;
    }
    public void setMessage(String message){
        this.message=message;
    }
    public String getMessage(){
        return message;
    }
}
