package com.example.ecommerceapp.service.impl;

import com.example.ecommerceapp.exceptions.ManufacturerNotFoundException;
import com.example.ecommerceapp.models.Manufacturer;
import com.example.ecommerceapp.repository.ManufacturerRepository;
import com.example.ecommerceapp.service.ManufacturerService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ManufacturerServiceImpl implements ManufacturerService {

    private final ManufacturerRepository manufacturerRepository;

    public ManufacturerServiceImpl(ManufacturerRepository manufacturerRepository) {
        this.manufacturerRepository = manufacturerRepository;
    }

    @Override
    public Optional<Manufacturer> findManufacturerById(Long id) {
      return this.manufacturerRepository.findById(id);
    }

    @Override
    public List<Manufacturer> getAllManufacturers() {
        return this.manufacturerRepository.findAll();
    }

    @Override
    public Optional<Manufacturer> saveManufacturer(Manufacturer manufacturer) {
        return Optional.of(this.manufacturerRepository.save(manufacturer));
    }

    @Override
    public Optional<Manufacturer> editManufacturer(Long id, Manufacturer editedManufacturer) {
        Manufacturer manufacturer = this.findManufacturerById(id).get();

        manufacturer.setManufacturerName(editedManufacturer.getManufacturerName());
        manufacturer.setManufacturerDescription(editedManufacturer.getManufacturerDescription());
        manufacturer.setManufacturerCountry(editedManufacturer.getManufacturerCountry());

        return Optional.of(this.manufacturerRepository.save(manufacturer));
    }

    @Override
    public void deleteManufacturer(Long id) {
        this.manufacturerRepository.deleteById(id);
    }
}
