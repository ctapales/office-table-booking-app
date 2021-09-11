package com.booking.restservice.repository;

import com.booking.restservice.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Integer> {

    List<Reservation> findByUserIdAndSchedule(Integer id, String schedule);
}
