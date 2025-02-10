package com.example.ecommerceapp.repository;

import com.example.ecommerceapp.models.Product;
import com.example.ecommerceapp.models.enumerations.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findAllByCategory(Category category);

    List<Product> findAllByNameContainingIgnoreCase(String name);
}
