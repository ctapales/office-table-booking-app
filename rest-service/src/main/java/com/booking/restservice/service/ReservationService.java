package com.booking.restservice.service;

import com.booking.restservice.model.Reservation;

import java.util.List;

public interface ReservationService {
    public Reservation saveReservation(Reservation reservation);

    public List<Reservation> getAllReservation();

    public List<Reservation> getReservationsByDeskId(Integer id);

    public List<Reservation> getReservationsByUserIdAndSchedule(Integer id, String schedule);

    public List<Reservation> getReservationsByDeskIdAndSchedule(Integer id, String schedule);

    public void deleteReservation(Integer id);
}
