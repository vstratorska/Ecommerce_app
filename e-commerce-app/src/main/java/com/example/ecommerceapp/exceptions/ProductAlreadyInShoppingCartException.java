package com.example.ecommerceapp.exceptions;

public class ProductAlreadyInShoppingCartException extends RuntimeException {
    public ProductAlreadyInShoppingCartException(Long id, String username) {
        super(String.format("Product with id: %d already exists in shopping cart for user with username %s", id, username));

    }
}
