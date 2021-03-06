package com.booking.restservice.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "tbl_reservation")
public class Reservation extends Auditable<String>{

    @Column(name = "schedule")
    private String schedule;

    @Column(name = "time_of_day", columnDefinition = "varchar(10) default 'MORNING'")
    private ReservationTimeOfDay timeOfDay = ReservationTimeOfDay.MORNING;

    @ManyToOne
    @JoinColumn(name = "userid", insertable = false, updatable = false)
    private User user;

    private Integer userid;

    @ManyToOne
    @JoinColumn(name = "deskid", insertable = false, updatable = false)
    private Desk desk;

    private Integer deskid;

    public Reservation() {
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

    @JsonBackReference(value="user-reservation")
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    @JsonBackReference(value="desk-reservation")
    public Desk getDesk() {
        return desk;
    }

    public void setDesk(Desk desk) {
        this.desk = desk;
    }

    public Integer getDeskid() {
        return deskid;
    }

    public void setDeskid(Integer deskid) {
        this.deskid = deskid;
    }
}
