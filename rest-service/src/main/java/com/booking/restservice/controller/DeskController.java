package com.booking.restservice.controller;

import com.booking.restservice.model.Desk;
import com.booking.restservice.model.Reservation;
import com.booking.restservice.service.DeskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/desk")
public class DeskController {

    @Autowired
    private DeskService deskService;

    @PostMapping("/saveDesk")
    public Desk saveDesk(@RequestBody Desk desk) {
        return deskService.saveDesk(desk);
    }

    @GetMapping("/getAllDesk")
    public List<Desk> saveDesk() {
        return deskService.getAllDesk();
    }

    @GetMapping("{id}/reservations")
    public List<Reservation> getReservationsByDesk(@PathVariable Integer id) {
        Optional<Desk> desk = deskService.getDeskById(id);

        if(desk.isPresent()) {
            Desk newDesk = desk.get();

            return newDesk.getReservations();
        }

        return null;
    }
}
