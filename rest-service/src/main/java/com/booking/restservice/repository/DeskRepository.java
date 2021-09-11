package com.booking.restservice.repository;

import com.booking.restservice.model.Desk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeskRepository extends JpaRepository<Desk, Integer> {
}
