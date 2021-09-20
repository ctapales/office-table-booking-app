package com.booking.restservice.controller;

import com.booking.restservice.converter.ReservationConverter;
import com.booking.restservice.dto.ReservationDTO;
import com.booking.restservice.model.Reservation;
import com.booking.restservice.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @Autowired
    private ReservationConverter reservationConverter;

    @PostMapping("/saveReservation")
    public Reservation saveReservation(@RequestBody Reservation reservation) {
        return  reservationService.saveReservation(reservation);
    }

    @GetMapping("/getAllReservation")
    public List<ReservationDTO> getAllReservation() {
        List<Reservation> getAllReservation = reservationService.getAllReservation();

        return reservationConverter.entityToDTO(getAllReservation);
    }

    @DeleteMapping("/{id}/deleteReservation")
    public void DeleteReservation(@PathVariable Integer id) {
        reservationService.deleteReservation(id);
    }


}
