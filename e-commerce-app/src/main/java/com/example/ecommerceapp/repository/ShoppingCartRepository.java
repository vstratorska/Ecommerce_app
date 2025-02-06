package com.example.ecommerceapp.repository;


import com.example.ecommerceapp.models.ShoppingCart;
import com.example.ecommerceapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {

    Optional<ShoppingCart> findByUser(User user);
}
