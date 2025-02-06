package com.example.ecommerceapp.exceptions;

public class PasswordsDoNotMatchException extends RuntimeException {
    public PasswordsDoNotMatchException() {
        super( "Passwords do not match! Try again.");
    }
}
