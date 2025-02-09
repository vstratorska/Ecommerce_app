package com.example.ecommerceapp.exceptions;

public class ProductSoldOutException extends RuntimeException {
    public ProductSoldOutException(String name) {
        super(
                String.format("Product %s has been sold out.", name)
        );
    }
}
