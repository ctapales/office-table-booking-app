package com.booking.restservice.controller;

import com.booking.restservice.converter.DeskConverter;
import com.booking.restservice.converter.ReservationConverter;
import com.booking.restservice.dto.DeskDTO;
import com.booking.restservice.dto.ReservationDTO;
import com.booking.restservice.model.Desk;
import com.booking.restservice.model.Reservation;
import com.booking.restservice.repository.ReservationRepository;
import com.booking.restservice.service.DeskService;
import com.booking.restservice.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
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

    @GetMapping("{id}/reservations")
    public List<ReservationDTO> getReservationsByDesk(@PathVariable Integer id) {
        Optional<Desk> desk = deskService.getDeskById(id);

        if(desk.isPresent()) {
            List<Reservation> getReservationsByDeskId = reservationService.getReservationsByDeskId(id);

            return reservationConverter.entityToDTO(getReservationsByDeskId);
        }

        return null;
    }
}
