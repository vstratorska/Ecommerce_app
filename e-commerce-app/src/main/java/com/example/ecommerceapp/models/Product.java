package com.example.ecommerceapp.models;

import com.example.ecommerceapp.models.enumerations.Category;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Double price;
    private String description;
    private String image;
    private Integer quantity;

    @Enumerated(EnumType.STRING)
    private Category category;

    @ManyToOne
    private Manufacturer manufacturer;

    public Product() {
    }

    public Product(String name, Double price, String description, String image, Integer quantity, Category category, Manufacturer manufacturer) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.quantity = quantity;
        this.category = category;
        this.manufacturer = manufacturer;
    }
}
