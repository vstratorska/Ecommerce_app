package com.example.ecommerceapp.web;

import com.example.ecommerceapp.models.User;
import com.example.ecommerceapp.models.dto.UserDto;
import com.example.ecommerceapp.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/register")
@CrossOrigin(origins = {"http://localhost:3000"})
public class RegisterRestController {

    private final UserService userService;

    public RegisterRestController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<User> register(@RequestBody UserDto userDto) {
        return this.userService.register(userDto)
                .map(user-> ResponseEntity.ok().body(user))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
