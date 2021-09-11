package com.booking.restservice.service;

import com.booking.restservice.model.Reservation;

import java.util.List;

public interface ReservationService {
    public List<Reservation> getReservationsByUserIdAndSchedule(Integer id, String schedule);
}
