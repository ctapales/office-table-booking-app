package com.booking.restservice.service;

import com.booking.restservice.model.User;

import java.util.Optional;

public interface UserService {
    public User saveUser(User user);

    public Optional<User> getUserById(Integer user_id);

    public boolean findByEmail(String email);
}
