package com.booking.restservice.dto;

import com.booking.restservice.model.ReservationTimeOfDay;

public class ReservationDTO {
    private Integer id;
    private Integer desk;
    private Integer office;
    private String schedule;
    private ReservationTimeOfDay timeOfDay;

    public ReservationDTO() {
    }

    public ReservationDTO(Integer id, Integer desk, Integer office, String schedule, ReservationTimeOfDay timeOfDay) {
        this.id = id;
        this.desk = desk;
        this.office = office;
        this.schedule = schedule;
        this.timeOfDay = timeOfDay;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getDesk() {
        return desk;
    }

    public void setDesk(Integer desk) {
        this.desk = desk;
    }

    public Integer getOffice() {
        return office;
    }

    public void setOffice(Integer office) {
        this.office = office;
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
