package com.example.ecommerceapp.exceptions;

public class ProductIsNotInShoppingCartException extends RuntimeException {
    public ProductIsNotInShoppingCartException(Long id) {
        super(String.format("Product %s is not in shopping cart.", id));
    }
}
