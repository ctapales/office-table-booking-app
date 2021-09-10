package com.booking.restservice.controller;

import com.booking.restservice.model.User;
import com.booking.restservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/get/{user_id}")
    public Optional<User> getUserById(@PathVariable("user_id") int user_id) {
        return userService.getUserById(user_id);
    }

    @GetMapping("/find/{email}")
    public boolean findByEmail(@PathVariable("email") String email){
        return userService.findByEmail(email);
    }
}
