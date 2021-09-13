package com.booking.restservice.dto;

import com.booking.restservice.model.ReservationTimeOfDay;

public class ReservationDTO {
    private Integer id;
    private Integer number;
    private String schedule;
    private ReservationTimeOfDay timeOfDay;

    public ReservationDTO() {
    }

    public ReservationDTO(Integer id, Integer number, String schedule, ReservationTimeOfDay timeOfDay) {
        this.id = id;
        this.number = number;
        this.schedule = schedule;
        this.timeOfDay = timeOfDay;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public ReservationTimeOfDay getTimeOfDay() {
        return timeOfDay;
    }

    public void setTimeOfDay(ReservationTimeOfDay timeOfDay) {
        this.timeOfDay = timeOfDay;
    }
}
