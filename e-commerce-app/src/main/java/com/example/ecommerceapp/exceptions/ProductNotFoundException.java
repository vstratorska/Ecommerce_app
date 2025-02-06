package com.example.ecommerceapp.exceptions;

public class ProductNotFoundException extends RuntimeException {
    public ProductNotFoundException(Long id) {
        super(String.format("Product with id %s not found!", id));
    }
}
