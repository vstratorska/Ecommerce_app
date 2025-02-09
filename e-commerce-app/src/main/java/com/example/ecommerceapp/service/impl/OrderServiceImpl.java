package com.example.ecommerceapp.service.impl;

import com.example.ecommerceapp.exceptions.OrdersListEmptyException;
import com.example.ecommerceapp.exceptions.ProductSoldOutException;
import com.example.ecommerceapp.models.Order;
import com.example.ecommerceapp.models.Product;
import com.example.ecommerceapp.models.ShoppingCart;
import com.example.ecommerceapp.models.User;
import com.example.ecommerceapp.repository.OrderRepository;
import com.example.ecommerceapp.repository.ProductRepository;
import com.example.ecommerceapp.repository.ShoppingCartRepository;
import com.example.ecommerceapp.service.OrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Indexed;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final ShoppingCartRepository shoppingCartRepository;
    private final ProductRepository productRepository;

    public OrderServiceImpl(OrderRepository orderRepository, ShoppingCartRepository shoppingCartRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.shoppingCartRepository = shoppingCartRepository;
        this.productRepository = productRepository;
    }

    @Override
    public List<Order> findAll() {
        return this.orderRepository.findAll();
    }

    @Override
    public Optional<Order> order(User user) {
        ShoppingCart shoppingCart = this.shoppingCartRepository.findByUser(user).get();
        List<Product> products = shoppingCart.getProducts();
        products.forEach(p -> {
            if(p.getQuantity()==0)
                throw new ProductSoldOutException(p.getName());
        });

        products.forEach(p -> p.setQuantity(p.getQuantity() - 1));
        this.productRepository.saveAll(products);

        Double total = products.stream().map(Product::getPrice).reduce(Double::sum).get();
        Order order = new Order(user, total, new ArrayList<>(products));

        shoppingCart.getProducts().clear();
        shoppingCartRepository.save(shoppingCart);
        return Optional.of(this.orderRepository.save(order));
    }

    @Override
    public List<Order> myOrders(User user) {
        List<Order> orders = this.findAll().stream().filter(o -> o.getUser().equals(user)).toList();
        if (orders.isEmpty()) throw new OrdersListEmptyException();
        return orders;
    }
}
