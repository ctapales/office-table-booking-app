package com.booking.restservice.controller;

import com.booking.restservice.converter.ReservationConverter;
import com.booking.restservice.converter.UserConverter;
import com.booking.restservice.dto.ReservationDTO;
import com.booking.restservice.dto.UserDTO;
import com.booking.restservice.model.Reservation;
import com.booking.restservice.model.User;
import com.booking.restservice.service.ReservationService;
import com.booking.restservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserConverter userConverter;

    @Autowired
    private ReservationService reservationService;

    @Autowired
    private ReservationConverter reservationConverter;

    @PostMapping("/saveUser")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/getUserById/{id}")
    public UserDTO getUserById(@PathVariable("id") Integer id) {
        Optional<User> getUserById = userService.getUserById(id);
        User user = getUserById.get();
        return userConverter.entityToDTO(user);
    }

    @GetMapping("/findUserByEmailAndPassword/{email}/{password}")
    public List<UserDTO> getUsersByEmailAndPassword(@PathVariable("email") String email, @PathVariable("password") String password) {
        List<User> findAll = userService.getUsersByEmailAndPassword(email, password);
        return userConverter.entityToDTO(findAll);
    }

    @GetMapping("/{id}/reservations/{schedule}")
    public List<ReservationDTO> getReservationsByUserAndSchedule(@PathVariable Integer id, @PathVariable String schedule) {
        Optional<User> user = userService.getUserById(id);

        if (user.isPresent()) {
            List<Reservation> getReservationsByUserIdAndSchedule = reservationService.getReservationsByUserIdAndSchedule(id, schedule);
            return reservationConverter.entityToDTO(getReservationsByUserIdAndSchedule);
        }

        return null;
    }
}
