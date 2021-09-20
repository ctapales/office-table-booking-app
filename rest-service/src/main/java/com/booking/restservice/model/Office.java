package com.booking.restservice.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_office")
public class Office extends Auditable<String>{

    @Column(name = "number", nullable = false)
    private Integer number;

    @Lob @JsonProperty("image")
    @Column(name="layout")
    private byte[] layout;

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

    public byte[] getLayout() {
        return layout;
    }

    public void setLayout(byte[] layout) {
        this.layout = layout;
    }

    @JsonManagedReference(value="office")
    public List<Desk> getDesks() {
        return desks;
    }

    public void setDesks(List<Desk> desks) {
        this.desks = desks;
    }
}
