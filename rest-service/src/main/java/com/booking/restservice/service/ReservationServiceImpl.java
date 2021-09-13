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
    public Reservation saveReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    @Override
    public List<Reservation> getAllReservation() {
        return reservationRepository.findAll();
    }

    @Override
    public List<Reservation> getReservationsByDeskId(Integer id) {
        return reservationRepository.findByDeskId(id);
    }

    @Override
    public List<Reservation> getReservationsByUserIdAndSchedule(Integer id, String schedule) {
        return reservationRepository.findByUserIdAndSchedule(id,schedule);
    }

    @Override
    public List<Reservation> getReservationsByDeskIdAndSchedule(Integer id, String schedule) {
        return reservationRepository.findByDeskIdAndSchedule(id,schedule);
    }
}
