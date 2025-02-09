package com.example.ecommerceapp.web;

import com.example.ecommerceapp.models.Product;
import com.example.ecommerceapp.models.ShoppingCart;
import com.example.ecommerceapp.models.User;
import com.example.ecommerceapp.service.ProductService;
import com.example.ecommerceapp.service.ShoppingCartService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/shopping-cart")
@CrossOrigin(origins = {"http://localhost:3000"})
public class ShoppingCartRestController {

    private final ShoppingCartService shoppingCartService;

    public ShoppingCartRestController(ShoppingCartService shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }

    @GetMapping()
    public List<Product> getProductsFromShoppingCart(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        ShoppingCart shoppingCart = this.shoppingCartService.findByUser(user.getUsername());
        return this.shoppingCartService.listAllProductsInShoppingCart(shoppingCart.getId());
    }

    @PostMapping("/add/{id}")
    public ResponseEntity<ShoppingCart> addProductToCart(Authentication authentication, @PathVariable long id) {
        User user = (User) authentication.getPrincipal();
        return this.shoppingCartService.addProductToShoppingCart(user.getUsername(), id)
                .map(shoppingCart -> ResponseEntity.ok().body(shoppingCart))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/remove/{id}")
    public ResponseEntity<ShoppingCart> removeProductFromCart(Authentication authentication, @PathVariable long id) {
        User user = (User) authentication.getPrincipal();
        return this.shoppingCartService.removeProductFromShoppingCart(user.getUsername(), id)
                .map(shoppingCart -> ResponseEntity.ok().body(shoppingCart))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
