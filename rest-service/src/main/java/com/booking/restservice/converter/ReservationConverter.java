package com.booking.restservice.converter;

import com.booking.restservice.dto.ReservationDTO;
import com.booking.restservice.model.Desk;
import com.booking.restservice.model.Office;
import com.booking.restservice.model.Reservation;
import com.booking.restservice.service.DeskService;
import com.booking.restservice.service.OfficeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class ReservationConverter {
    @Autowired
    private DeskService deskService;

    @Autowired
    private OfficeService officeService;


    public ReservationDTO entityDTO(Reservation reservation) {
        Integer desk = null;
        Integer office = null;
        ReservationDTO dto = new ReservationDTO();

        dto.setId(reservation.getId());
        dto.setSchedule(reservation.getSchedule());
        dto.setTimeOfDay(reservation.getTimeOfDay());

        Optional<Desk> getDeskById = deskService.getDeskById(reservation.getDeskid());

        if(getDeskById.isPresent()) {
            Desk newDesk = getDeskById.get();
            desk = newDesk.getNumber();

            Optional<Office> getOfficeById = officeService.getOfficeById(newDesk.getOfficeid());

            if(getOfficeById.isPresent()) {
                Office newOffice = getOfficeById.get();
                office = newOffice.getNumber();
            }
        }

        dto.setDesk(desk);
        dto.setOffice(office);

        return dto;
    }

    public List<ReservationDTO> entityToDTO(List<Reservation> reservations) {
        return reservations.stream().map(x -> entityDTO(x)).collect(Collectors.toList());
    }
}
