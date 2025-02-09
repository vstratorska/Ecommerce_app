package com.example.ecommerceapp.exceptions;

public class OrdersListEmptyException extends RuntimeException {
    public OrdersListEmptyException() {
        super("You have no orders in the list.");
    }
}
