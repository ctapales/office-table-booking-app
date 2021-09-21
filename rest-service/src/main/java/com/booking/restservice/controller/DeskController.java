package com.booking.restservice.controller;

import com.booking.restservice.converter.DeskConverter;
import com.booking.restservice.converter.ReservationConverter;
import com.booking.restservice.dto.DeskDTO;
import com.booking.restservice.dto.ReservationDTO;
import com.booking.restservice.model.Desk;
import com.booking.restservice.model.Reservation;
import com.booking.restservice.model.User;
import com.booking.restservice.service.DeskService;
import com.booking.restservice.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/desk")
public class DeskController {

    @Autowired
    private DeskService deskService;

    @Autowired
    private DeskConverter deskConverter;

    @Autowired
    private ReservationService reservationService;

    @Autowired
    private ReservationConverter reservationConverter;

    @PostMapping("/saveDesk")
    public Desk saveDesk(@RequestBody Desk desk) {
        return deskService.saveDesk(desk);
    }

    @GetMapping("/getAllDesk")
    public List<DeskDTO> getAllDesk() {
        List<Desk> getAllDesk = deskService.getAllDesk();
        return deskConverter.entityToDTO(getAllDesk);
    }

    @GetMapping("/getDeskById/{id}")
    public DeskDTO getAllDesk(@PathVariable Integer id) {
        Optional<Desk> getDeskById = deskService.getDeskById(id);

        if(!getDeskById.isPresent()) {
            return null;
        }

        Desk desk = getDeskById.get();
        return deskConverter.entityToDTO(desk);
    }

    @GetMapping("{id}/reservations")
    public List<ReservationDTO> getReservationsByDesk(@PathVariable Integer id) {
        Optional<Desk> desk = deskService.getDeskById(id);

        if(desk.isPresent()) {
            List<Reservation> getReservationsByDeskId = reservationService.getReservationsByDeskId(id);

            return reservationConverter.entityToDTO(getReservationsByDeskId);
        }

        return null;
    }

    @GetMapping("/{id}/reservations/{schedule}")
    public List<ReservationDTO> getReservationsByUserAndSchedule(@PathVariable Integer id, @PathVariable String schedule) {
        Optional<Desk> desk = deskService.getDeskById(id);

        if (!desk.isPresent()) {
            return null;
        }

        List<Reservation> getReservationsByDeskIdAndSchedule = reservationService.getReservationsByDeskIdAndSchedule(id, schedule);
        return reservationConverter.entityToDTO(getReservationsByDeskIdAndSchedule);
    }
}
