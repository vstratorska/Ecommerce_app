package com.example.ecommerceapp.service;

import com.example.ecommerceapp.models.Order;
import com.example.ecommerceapp.models.User;

import java.util.List;
import java.util.Optional;

public interface OrderService {

    List<Order> findAll();

    Optional<Order> order(User user);

    List<Order> myOrders(User user);

}
