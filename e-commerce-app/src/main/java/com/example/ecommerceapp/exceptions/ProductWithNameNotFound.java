package com.example.ecommerceapp.exceptions;

public class ProductWithNameNotFound extends RuntimeException {
    public ProductWithNameNotFound(String name) {
        super(
                String.format("Product with name %s not found!", name)
        );
    }
}
