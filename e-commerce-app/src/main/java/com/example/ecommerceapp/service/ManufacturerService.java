package com.example.ecommerceapp.service;

import com.example.ecommerceapp.models.Manufacturer;

import java.util.List;
import java.util.Optional;

public interface ManufacturerService {

    Optional<Manufacturer> findManufacturerById(Long id);
    List<Manufacturer> getAllManufacturers();
    Optional<Manufacturer> saveManufacturer(Manufacturer manufacturer);
    Optional<Manufacturer> editManufacturer(Long id, Manufacturer manufacturer);
    void deleteManufacturer(Long id);
}
