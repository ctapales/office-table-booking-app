package com.booking.restservice.service;

import com.booking.restservice.model.Office;

import java.util.List;
import java.util.Optional;

public interface OfficeService {
    public Office saveOffice(Office office);

    public Optional<Office> getOfficeById(Integer id);

    public List<Office> getAllOffice();
}
