package com.booking.restservice.service;

import com.booking.restservice.repository.DeskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeskServiceImpl implements DeskService {

    @Autowired
    private DeskRepository deskRepository;
}
