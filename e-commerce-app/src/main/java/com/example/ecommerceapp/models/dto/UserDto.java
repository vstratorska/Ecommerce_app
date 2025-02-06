package com.example.ecommerceapp.models.dto;

import com.example.ecommerceapp.models.enumerations.Role;
import lombok.Data;

@Data
public class UserDto {
    private String username;
    private String password;
    private String repeatPassword;
    private String name;
    private String surname;

    public UserDto() {
    }

    public UserDto(String username, String password, String repeatPassword, String name, String surname) {
        this.username = username;
        this.password = password;
        this.repeatPassword = repeatPassword;
        this.name = name;
        this.surname = surname;
    }
}
