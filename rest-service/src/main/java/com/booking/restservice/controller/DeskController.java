package com.booking.restservice.controller;

import com.booking.restservice.service.DeskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/desk")
public class DeskController {

    @Autowired
    private DeskService deskService;
}
