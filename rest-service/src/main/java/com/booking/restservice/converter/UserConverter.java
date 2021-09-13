package com.booking.restservice.converter;

import com.booking.restservice.dto.UserDTO;
import com.booking.restservice.model.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class UserConverter {
    public UserDTO entityToDTO(User user) {
        UserDTO dto = new UserDTO();

        dto.setId(user.getId());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setEmail(user.getEmail());
        dto.setPassword(user.getPassword());

        return dto;
    }

    public List<UserDTO> entityToDTO(List<User> users) {
        return users.stream().map(x -> entityToDTO(x)).collect(Collectors.toList());
    }
}
