package com.example.ecommerceapp.service;

import com.example.ecommerceapp.models.Product;
import com.example.ecommerceapp.models.dto.ProductDto;
import com.example.ecommerceapp.models.enumerations.Category;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    Optional<Product> getProductById(Long id);
    List<Product> getAllProducts();
    Optional<Product> save(ProductDto productDto);
    Optional<Product> edit(Long id, ProductDto productDto);
    void delete(Long id);
}
