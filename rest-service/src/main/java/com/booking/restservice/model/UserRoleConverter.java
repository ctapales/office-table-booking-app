package com.booking.restservice.model;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class UserRoleConverter  implements AttributeConverter<UserRole, String> {

    @Override
    public String convertToDatabaseColumn(UserRole role) {
        switch (role) {
            case ADMIN: return "Admin";
            case EMPLOYEE: return "Employee";
            default:
                throw new IllegalArgumentException("UserRole ["+role+"] not supported.");
        }
    }

    @Override
    public UserRole convertToEntityAttribute(String role) {
        switch (role){
            case "Admin": return UserRole.ADMIN;
            case "Employee": return UserRole.EMPLOYEE;
            default:
                throw new IllegalArgumentException("UserRole ["+role+"] not supported.");
        }
    }
}
