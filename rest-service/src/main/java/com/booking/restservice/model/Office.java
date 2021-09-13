package com.booking.restservice.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_office")
public class Office extends Auditable<String>{

    @Column(name = "number", nullable = false)
    private Integer number;

    @OneToMany(mappedBy = "office")
    private List<Desk> desks;

    public Office() {
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
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
