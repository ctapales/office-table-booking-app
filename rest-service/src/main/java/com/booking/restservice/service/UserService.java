package com.booking.restservice.service;

import com.booking.restservice.dto.UserDTO;
import com.booking.restservice.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public User saveUser(User user);

    public Optional<User> getUserById(Integer id);

    public List<User> getUsersByEmailAndPassword(String email, String password);
}
