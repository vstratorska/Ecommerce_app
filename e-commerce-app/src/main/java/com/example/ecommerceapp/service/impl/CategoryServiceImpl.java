package com.example.ecommerceapp.service.impl;

import com.example.ecommerceapp.models.enumerations.Category;
import com.example.ecommerceapp.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Override
    public List<String> getCategories() {
        return Arrays.stream(Category.values())
                .map(c -> c.toString().replace("_", "-"))
                .map(c -> Character.toUpperCase(c.charAt(0)) + c.substring(1).toLowerCase()).toList();
    }
}
