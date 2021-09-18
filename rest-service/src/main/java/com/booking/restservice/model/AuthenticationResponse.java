package com.booking.restservice.model;

import com.booking.restservice.service.UserDetailsImpl;

public class AuthenticationResponse {

    private final Integer id;
    private final String firstName;
    private final String lastName;
    private final String jwt;

    public AuthenticationResponse(String jwt, UserDetailsImpl userDetails) {
        this.jwt = jwt;
        this.id = userDetails.getId();
        this.firstName = userDetails.getFirstName();
        this.lastName = userDetails.getLastName();
    }

    public String getJwt() {
        return jwt;
    }

    public Integer getId() { return id;}

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}
