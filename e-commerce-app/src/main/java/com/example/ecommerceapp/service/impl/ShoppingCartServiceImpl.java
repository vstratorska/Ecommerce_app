package com.example.ecommerceapp.service.impl;

import com.example.ecommerceapp.exceptions.*;
import com.example.ecommerceapp.models.Product;
import com.example.ecommerceapp.models.ShoppingCart;
import com.example.ecommerceapp.models.User;
import com.example.ecommerceapp.repository.ProductRepository;
import com.example.ecommerceapp.repository.ShoppingCartRepository;
import com.example.ecommerceapp.repository.UserRepository;
import com.example.ecommerceapp.service.ShoppingCartService;
import com.example.ecommerceapp.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {

    private final ShoppingCartRepository shoppingCartRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public ShoppingCartServiceImpl(ShoppingCartRepository shoppingCartRepository, UserRepository userRepository, ProductRepository productRepository) {
        this.shoppingCartRepository = shoppingCartRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> listAllProductsInShoppingCart(Long id) {
        if(!this.shoppingCartRepository.findById(id).isPresent())
            throw new ShoppingCartNotFoundException(id);
        return this.shoppingCartRepository.findById(id).get().getProducts();
    }

    @Override
    public ShoppingCart findByUser(String username) {
        User user = this.userRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException(username));
        return this.shoppingCartRepository.findByUser(user).orElseGet(() -> {
            ShoppingCart cart = new ShoppingCart(user);
            return this.shoppingCartRepository.save(cart);
        });
    }

    @Override
    @Transactional
    public Optional<ShoppingCart> addProductToShoppingCart(String username, Long productId) {
        ShoppingCart shoppingCart = this.findByUser(username);
        Product product = this.productRepository.findById(productId)
                .orElseThrow(() -> new ProductNotFoundException(productId));
        shoppingCart.getProducts().add(product);
        return Optional.of(this.shoppingCartRepository.save(shoppingCart));
    }

    @Override
    public Optional<ShoppingCart> removeProductFromShoppingCart(String username, Long productId) {
        ShoppingCart shoppingCart = this.findByUser(username);
        Product product = this.productRepository.findById(productId)
                .orElseThrow(() -> new ProductNotFoundException(productId));
        shoppingCart.getProducts().remove(product);
        return Optional.of(this.shoppingCartRepository.save(shoppingCart));
    }


}
