package com.booking.restservice.model;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "offices")
public class Office extends Auditable<String>{

    @Column(name = "office_name", nullable = false)
    private String officeName;

    @OneToMany(mappedBy = "office")
    private List<Desk> desks;

    public Office() {
    }

    public String getOfficeName() {
        return officeName;
    }

    public void setOfficeName(String officeName) {
        this.officeName = officeName;
    }
}
