package com.example.ecommerceapp.service;

import com.example.ecommerceapp.models.User;
import com.example.ecommerceapp.models.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface UserService extends UserDetailsService {

    Optional<User> register(UserDto userDto);
}
