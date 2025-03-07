package com.example.ecommerceapp.service.impl;

import com.example.ecommerceapp.exceptions.CategoryNotFoundException;
import com.example.ecommerceapp.exceptions.ManufacturerNotFoundException;
import com.example.ecommerceapp.exceptions.ProductNotFoundException;
import com.example.ecommerceapp.exceptions.ProductWithNameNotFound;
import com.example.ecommerceapp.models.Manufacturer;
import com.example.ecommerceapp.models.Product;
import com.example.ecommerceapp.models.dto.ProductDto;
import com.example.ecommerceapp.models.enumerations.Category;
import com.example.ecommerceapp.repository.ManufacturerRepository;
import com.example.ecommerceapp.repository.ProductRepository;
import com.example.ecommerceapp.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ManufacturerRepository manufacturerRepository;

    public ProductServiceImpl(ProductRepository productRepository, ManufacturerRepository manufacturerRepository) {
        this.productRepository = productRepository;
        this.manufacturerRepository = manufacturerRepository;
    }

    @Override
    public Optional<Product> getProductById(Long id) {
        return this.productRepository.findById(id);
    }

    @Override
    public List<Product> getAllProducts() {
        return this.productRepository.findAll();
    }

    @Override
    @Transactional
    public Optional<Product> save(ProductDto productDto) {
        Manufacturer manufacturer = this.manufacturerRepository.findById(productDto.getManufacturerId())
                .orElseThrow(() -> new ManufacturerNotFoundException(productDto.getManufacturerId()));
        try {
            Category.valueOf(productDto.getCategory().toUpperCase().replace("-", "_"));
        } catch (IllegalArgumentException e) {
            throw new CategoryNotFoundException(productDto.getCategory());
        }

        Category category = Category.valueOf(productDto.getCategory().toUpperCase().replace("-", "_"));


        Product product = new Product(productDto.getName(), productDto.getPrice(), productDto.getDescription(), productDto.getImage(), productDto.getQuantity(), category, manufacturer);
        return Optional.of(this.productRepository.save(product));
    }

    @Override
    @Transactional
    public Optional<Product> edit(Long id, ProductDto productDto) {
        Product product = this.productRepository.findById(id).get();
        Manufacturer manufacturer = this.manufacturerRepository.findById(productDto.getManufacturerId())
                .orElseThrow(() -> new ManufacturerNotFoundException(productDto.getManufacturerId()));

        try {
            Category.valueOf(productDto.getCategory().toUpperCase().replace("-", "_"));
        } catch (IllegalArgumentException e) {
            throw new CategoryNotFoundException(productDto.getCategory());
        }

        Category category = Category.valueOf(productDto.getCategory().toUpperCase().replace("-", "_"));


        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());
        product.setDescription(productDto.getDescription());
        product.setImage(productDto.getImage());
        product.setQuantity(productDto.getQuantity());
        product.setCategory(category);
        product.setManufacturer(manufacturer);
        return Optional.of(this.productRepository.save(product));
    }

    @Override
    public void delete(Long id) {
        this.productRepository.deleteById(id);
    }

    @Override
    public List<Product> getProductsByCategory(String category) {
        Category c = Category.valueOf(category.toUpperCase().replace("-", "_"));
        return this.productRepository.findAllByCategory(c);
    }

    @Override
    public List<Product> getProductsByName(String name) {
        List<Product> products = this.productRepository.findAllByNameContainingIgnoreCase(name);

        if (products.isEmpty()) {
            throw new ProductWithNameNotFound(name);
        }
        return products;
    }
}
