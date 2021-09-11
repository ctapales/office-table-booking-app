package com.booking.restservice.model;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class ReservationTimeOfDayConverter implements AttributeConverter<ReservationTimeOfDay, String> {

    @Override
    public String convertToDatabaseColumn(ReservationTimeOfDay reservationTimeOfDay) {
        switch (reservationTimeOfDay) {
            case MORNING: return "Morning";
            case AFTERNOON: return "Afternoon";
            case WHOLE_DAY: return "Whole Day";
            default:
                throw new IllegalArgumentException("ReservationTimeOfDay ["+reservationTimeOfDay+"] not supported.");
        }
    }

    @Override
    public ReservationTimeOfDay convertToEntityAttribute(String reservationTimeOfDay) {
        switch (reservationTimeOfDay){
            case "Morning": return ReservationTimeOfDay.MORNING;
            case "Afternoon": return ReservationTimeOfDay.AFTERNOON;
            case "Whole Day": return ReservationTimeOfDay.WHOLE_DAY;
            default:
                throw new IllegalArgumentException("ReservationTimeOfDay ["+reservationTimeOfDay+"] not supported.");
        }
    }
}
