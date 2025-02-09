package com.example.ecommerceapp.web;

import com.example.ecommerceapp.models.Order;
import com.example.ecommerceapp.models.ShoppingCart;
import com.example.ecommerceapp.models.User;
import com.example.ecommerceapp.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = {"http://localhost:3000"})
public class OrderRestController {

    private final OrderService orderService;

    public OrderRestController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getOrders() {
        return this.orderService.findAll();
    }

    @GetMapping("/my-orders")
    public List<Order> getMyOrders(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return this.orderService.myOrders(user);
    }

    @GetMapping("/create")
    public ResponseEntity<Order> order(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return this.orderService.order(user)
                .map((shoppingCart) -> ResponseEntity.ok().body(shoppingCart))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

}
