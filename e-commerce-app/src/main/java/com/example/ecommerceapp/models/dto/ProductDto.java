package com.example.ecommerceapp.models.dto;

import com.example.ecommerceapp.models.Manufacturer;
import com.example.ecommerceapp.models.enumerations.Category;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
public class ProductDto {

    private String name;
    private Double price;
    private String description;
    private String image;
    private Integer quantity;
    private String category;
    private Long manufacturerId;

    public ProductDto() {
    }

    public ProductDto(String name, Double price, String description, String image, Integer quantity, String category, Long manufacturerId) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.quantity = quantity;
        this.category = category;
        this.manufacturerId = manufacturerId;
    }
}
