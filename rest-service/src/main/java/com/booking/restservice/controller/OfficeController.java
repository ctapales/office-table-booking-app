package com.booking.restservice.controller;

import com.booking.restservice.model.Desk;
import com.booking.restservice.model.Office;
import com.booking.restservice.service.OfficeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/office")
public class OfficeController {

    @Autowired
    private OfficeService officeService;

    @PostMapping("/saveOffice")
    public Office saveOffice(@RequestBody Office office) {
        return officeService.saveOffice(office);
    }

    @GetMapping("/getAllOffice")
    public List<Office> getAllOffice() {
        return officeService.getAllOffice();
    }

    @GetMapping("/{id}/desks")
    public List<Desk> getDesksByOffice(@PathVariable Integer id) {
        Optional<Office> office = officeService.getOfficeById(id);

        if(office.isPresent()) {
            Office newOffice = office.get();

            return newOffice.getDesks();
        }

        return null;
    }
}
