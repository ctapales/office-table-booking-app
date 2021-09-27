package com.booking.restservice.repository;

import com.booking.restservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByEmailAndPassword(String email, String password);

    Optional<User> findByEmail(String email);
}
