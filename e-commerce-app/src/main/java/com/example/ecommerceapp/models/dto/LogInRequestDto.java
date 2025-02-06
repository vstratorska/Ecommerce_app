package com.example.ecommerceapp.models.dto;

import lombok.Data;

@Data
public class LogInRequestDto {
    private String username;
    private String password;

    public LogInRequestDto() {
    }
}