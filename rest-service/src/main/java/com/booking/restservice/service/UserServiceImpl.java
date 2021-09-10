package com.booking.restservice.service;

import com.booking.restservice.model.User;
import com.booking.restservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> getUserById(Integer user_id) {
        return userRepository.findById(user_id);
    }

    @Override
    public boolean findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
