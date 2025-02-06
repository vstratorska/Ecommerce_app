package com.example.ecommerceapp.exceptions;

public class InvalidUsernameOrPasswordException extends RuntimeException {
    public InvalidUsernameOrPasswordException() {
        super(
                "Invalid username or password. Please try again."
        );
    }
}
