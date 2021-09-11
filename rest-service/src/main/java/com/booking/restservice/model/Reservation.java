package com.booking.restservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "reservations")
public class Reservation extends Auditable<String>{
}
