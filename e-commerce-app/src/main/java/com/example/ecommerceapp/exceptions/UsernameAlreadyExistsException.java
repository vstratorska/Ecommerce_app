package com.example.ecommerceapp.exceptions;

public class UsernameAlreadyExistsException extends RuntimeException {
    public UsernameAlreadyExistsException(String username) {
        super(String.format("Username %s already exists! Please choose another username.", username));
    }
}
