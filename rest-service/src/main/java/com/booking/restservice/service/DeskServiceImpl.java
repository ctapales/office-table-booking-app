package com.booking.restservice.service;

import com.booking.restservice.model.Desk;
import com.booking.restservice.repository.DeskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeskServiceImpl implements DeskService {

    @Autowired
    private DeskRepository deskRepository;

    @Override
    public Desk saveDesk(Desk desk) {
        return deskRepository.save(desk);
    }

    @Override
    public List<Desk> getAllDesk() {
        return deskRepository.findAll();
    }

    @Override
    public Optional<Desk> getDeskById(Integer id) {
        return deskRepository.findById(id);
    }
}
