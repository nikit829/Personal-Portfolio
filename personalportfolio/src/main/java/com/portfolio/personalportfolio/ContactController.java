package com.portfolio.personalportfolio;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final JavaMailSender mailSender;
    private final String toMail;

    // Constructor Injection
    public ContactController(JavaMailSender mailSender, @Value("${spring.mail.username}") String toMail) {
        this.mailSender = mailSender;
        this.toMail = toMail;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/mail")

    public ResponseEntity<String> sendMail(@RequestBody Contact contact){
        try {
            SimpleMailMessage simpleMailMessage=new SimpleMailMessage();
            simpleMailMessage.setTo(toMail);
            simpleMailMessage.setFrom(contact.getEmail());
            simpleMailMessage.setSubject(contact.getSubject());
            simpleMailMessage.setText("Message from: " + contact.getEmail() + "\n" + "Name: " + contact.getName() + "\n\n" + contact.getMessage());

            mailSender.send(simpleMailMessage);

            return ResponseEntity.status(HttpStatus.OK).body("Email Successfully Sent!");

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send Email!" + e.getMessage());
        }
    }
}
