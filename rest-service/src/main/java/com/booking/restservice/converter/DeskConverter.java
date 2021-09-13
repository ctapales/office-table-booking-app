package com.booking.restservice.converter;

import com.booking.restservice.dto.DeskDTO;
import com.booking.restservice.model.Desk;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class DeskConverter {
    public DeskDTO entityToDTO(Desk desk) {
        DeskDTO dto = new DeskDTO();

        dto.setId(desk.getId());
        dto.setNumber(desk.getNumber());

        return dto;
    }

    public List<DeskDTO> entityToDTO(List<Desk> desks) {
        return desks.stream().map(x -> entityToDTO(x)).collect(Collectors.toList());
    }
}
