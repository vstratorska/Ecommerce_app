package com.example.ecommerceapp.exceptions;

public class InvalidArgumentsException extends RuntimeException {
    public InvalidArgumentsException() {
        super("Invalid arguments! Fill in all fields.");
    }
}
