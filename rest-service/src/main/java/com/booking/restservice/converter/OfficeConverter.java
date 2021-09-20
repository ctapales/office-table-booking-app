package com.booking.restservice.converter;

import com.booking.restservice.dto.OfficeDTO;
import com.booking.restservice.model.Office;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class OfficeConverter {
    public OfficeDTO entityToDTO(Office office) {
        OfficeDTO dto = new OfficeDTO();

        dto.setId(office.getId());
        dto.setNumber(office.getNumber());
        dto.setLayout(office.getLayout());

        return dto;
    }

    public List<OfficeDTO> entityToDTO(List<Office> offices) {
    return offices.stream().map(x -> entityToDTO(x)).collect(Collectors.toList());
    }
}
