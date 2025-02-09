package com.example.ecommerceapp.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "orders_table")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToMany
    private List<Product> products;

    private Double total;
    private LocalDateTime date;

    public Order() {
    }

    public Order(User user, Double total, List<Product> products) {
        this.user = user;
        this.total = total;
        this.products = products;
        this.date = LocalDateTime.now();
    }
}
