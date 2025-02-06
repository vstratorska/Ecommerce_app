package com.example.ecommerceapp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Manufacturer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String manufacturerName;
    private String manufacturerDescription;
    private String manufacturerCountry;

    public Manufacturer() {
    }

    public Manufacturer(String manufacturerName, String manufacturerDescription, String manufacturerCountry) {
        this.manufacturerName = manufacturerName;
        this.manufacturerDescription = manufacturerDescription;
        this.manufacturerCountry = manufacturerCountry;
    }
}
