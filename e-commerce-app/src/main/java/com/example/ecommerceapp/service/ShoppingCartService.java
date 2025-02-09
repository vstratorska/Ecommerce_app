package com.example.ecommerceapp.service;

import com.example.ecommerceapp.models.Product;
import com.example.ecommerceapp.models.ShoppingCart;

import java.util.List;
import java.util.Optional;

public interface ShoppingCartService {

    List<Product> listAllProductsInShoppingCart(Long id);
    ShoppingCart findByUser(String username);
    Optional<ShoppingCart> addProductToShoppingCart(String username, Long productId);
    Optional<ShoppingCart> removeProductFromShoppingCart(String username, Long productId);
  //  Optional<ShoppingCart> order(String username);


}
