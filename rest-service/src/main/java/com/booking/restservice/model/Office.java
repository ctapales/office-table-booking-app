package com.booking.restservice.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_office")
public class Office extends Auditable<String>{

    @Column(name = "number", nullable = false)
    private int number;

    @OneToMany(mappedBy = "office")
    private List<Desk> desks;

    public Office() {
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    @JsonManagedReference(value="office")
    public List<Desk> getDesks() {
        return desks;
    }

    public void setDesks(List<Desk> desks) {
        this.desks = desks;
    }
}
