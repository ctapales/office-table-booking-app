package com.booking.restservice.service;

import com.booking.restservice.model.Desk;

import java.util.List;
import java.util.Optional;

public interface DeskService {
    public Desk saveDesk(Desk desk);

    public List<Desk> getAllDesk();

    public Optional<Desk> getDeskById(Integer id);
}
