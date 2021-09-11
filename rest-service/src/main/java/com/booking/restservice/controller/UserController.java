package com.booking.restservice.controller;

import com.booking.restservice.model.User;
import com.booking.restservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/saveUser")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/getUserById/{user_id}")
    public Optional<User> getUserById(@PathVariable("user_id") int user_id) {
        return userService.getUserById(user_id);
    }

    @GetMapping("/findUserByEmailAndPassword/{email}/{password}")
    public List<User> findUserByEmailAndPassword(@PathVariable("email") String email,@PathVariable("password") String password){
        return userService.findUserByEmailAndPassword(email,password);
    }
}
