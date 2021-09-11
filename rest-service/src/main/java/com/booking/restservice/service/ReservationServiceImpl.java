package com.booking.restservice.service;

import com.booking.restservice.model.Reservation;
import com.booking.restservice.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Override
    public List<Reservation> getReservationsByUserIdAndSchedule(Integer id, String schedule) {
        return reservationRepository.findByUserIdAndSchedule(id,schedule);
    }
}
