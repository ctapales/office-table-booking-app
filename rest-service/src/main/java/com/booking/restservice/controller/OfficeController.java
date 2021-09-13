package com.booking.restservice.controller;

import com.booking.restservice.converter.DeskConverter;
import com.booking.restservice.converter.OfficeConverter;
import com.booking.restservice.dto.DeskDTO;
import com.booking.restservice.dto.OfficeDTO;
import com.booking.restservice.model.Desk;
import com.booking.restservice.model.Office;
import com.booking.restservice.service.DeskService;
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

    @Autowired
    private DeskService deskService;

    @Autowired
    private OfficeConverter officeConverter;

    @Autowired
    private DeskConverter deskConverter;

    @PostMapping("/saveOffice")
    public Office saveOffice(@RequestBody Office office) {
        return officeService.saveOffice(office);
    }

    @GetMapping("/getAllOffice")
    public List<OfficeDTO> getAllOffice() {
        List<Office> getAllOffice = officeService.getAllOffice();
        return officeConverter.entityToDTO(getAllOffice);
    }

    @GetMapping("/{id}/desks")
    public List<DeskDTO> getDesksByOffice(@PathVariable Integer id) {
        Optional<Office> office = officeService.getOfficeById(id);

        if(office.isPresent()) {
            List<Desk> findByOfficeId = deskService.findByOfficeId(id);
            return deskConverter.entityToDTO(findByOfficeId);
        }

        return null;
    }
}
