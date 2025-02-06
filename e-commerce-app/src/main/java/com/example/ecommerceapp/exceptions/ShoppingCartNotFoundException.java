package com.example.ecommerceapp.exceptions;

public class ShoppingCartNotFoundException extends RuntimeException {
    public ShoppingCartNotFoundException(Long id) {
        super(String.format("Shopping cart with id %s not found!", id));
    }
}
