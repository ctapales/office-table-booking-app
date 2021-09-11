package com.booking.restservice.service;

import com.booking.restservice.repository.OfficeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OfficeServiceImpl implements OfficeService {

    @Autowired
    private OfficeRepository officeRepository;
}
