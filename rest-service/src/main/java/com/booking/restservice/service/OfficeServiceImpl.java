package com.booking.restservice.service;

import com.booking.restservice.model.Office;
import com.booking.restservice.repository.OfficeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OfficeServiceImpl implements OfficeService {

    @Autowired
    private OfficeRepository officeRepository;

    @Override
    public Office saveOffice(Office office) {
        return officeRepository.save(office);
    }

    @Override
    public Optional<Office> getOfficeById(Integer id) {
        return officeRepository.findById(id);
    }

    @Override
    public List<Office> getAllOffice() {
        return officeRepository.findAll();
    }
}
