package com.example.ecommerceapp.web;

import com.example.ecommerceapp.models.Manufacturer;
import com.example.ecommerceapp.service.ManufacturerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/manufacturers")
@CrossOrigin(origins = {"http://localhost:3000"})
public class ManufacturerRestController {

    private final ManufacturerService manufacturerService;

    public ManufacturerRestController(ManufacturerService manufacturerService) {
        this.manufacturerService = manufacturerService;
    }

    @GetMapping
    public List<Manufacturer> findAll() {
        return this.manufacturerService.getAllManufacturers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Manufacturer> findById(@PathVariable Long id) {
        return this.manufacturerService.findManufacturerById(id)
                .map(manufacturer -> ResponseEntity.ok().body(manufacturer))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Manufacturer> save(@RequestBody Manufacturer manufacturer) {
        return this.manufacturerService.saveManufacturer(manufacturer)
                .map(man -> ResponseEntity.ok().body(man))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Manufacturer> edit(@PathVariable Long id, @RequestBody Manufacturer manufacturer) {
        return this.manufacturerService.editManufacturer(id, manufacturer)
                .map(man -> ResponseEntity.ok().body(man))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        this.manufacturerService.deleteManufacturer(id);
        if (this.manufacturerService.findManufacturerById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }
}
