package com.booking.restservice.model;

import javax.persistence.*;

@Entity
@Table(name = "desks")
public class Desk extends Auditable<String> {

    @Column(name = "desk_name", nullable = false)
    private String deskName;

    @ManyToOne
    private Office office;

    public Desk() {
    }

    public String getDeskName() {
        return deskName;
    }

    public void setDeskName(String deskName) {
        this.deskName = deskName;
    }
}
