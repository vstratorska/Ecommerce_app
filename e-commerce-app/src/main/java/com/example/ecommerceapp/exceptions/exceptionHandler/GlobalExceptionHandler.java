package com.example.ecommerceapp.exceptions.exceptionHandler;

import com.example.ecommerceapp.exceptions.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private ResponseEntity<Map<String, String>> buildErrorResponse(Exception ex, HttpStatus status) {
        Map<String, String> response = new HashMap<>();
        response.put("error", ex.getMessage());
        return new ResponseEntity<>(response, status);
    }

    @ExceptionHandler(CategoryNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleCategoryNotFoundException(CategoryNotFoundException ex) {
        return buildErrorResponse(ex, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(InvalidArgumentsException.class)
    public ResponseEntity<Map<String, String>> handleInvalidArgumentsException(InvalidArgumentsException ex) {
        return buildErrorResponse(ex, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidUsernameOrPasswordException.class)
    public ResponseEntity<Map<String, String>> handleInvalidUsernameOrPasswordException(InvalidUsernameOrPasswordException ex) {
        return buildErrorResponse(ex, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ManufacturerNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleManufacturerNotFoundException(ManufacturerNotFoundException ex) {
        return buildErrorResponse(ex, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(PasswordsDoNotMatchException.class)
    public ResponseEntity<Map<String, String>> handlePasswordsDoNotMatchException(PasswordsDoNotMatchException ex) {
        return buildErrorResponse(ex, HttpStatus.BAD_REQUEST);
    }


    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleProductNotFoundException(ProductNotFoundException ex) {
        return buildErrorResponse(ex, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ShoppingCartNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleShoppingCartNotFoundException(ShoppingCartNotFoundException ex) {
        return buildErrorResponse(ex, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(UsernameAlreadyExistsException.class)
    public ResponseEntity<Map<String, String>> handleUsernameAlreadyExistsException(UsernameAlreadyExistsException ex) {
        return buildErrorResponse(ex, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleUserNotFoundException(UserNotFoundException ex) {
        return buildErrorResponse(ex, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ProductSoldOutException.class)
    public ResponseEntity<Map<String, String>> handleProductSoldOutException(ProductSoldOutException ex) {
        return buildErrorResponse(ex, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(OrdersListEmptyException.class)
    public ResponseEntity<Map<String, String>> handleOrdersListEmptyException(OrdersListEmptyException ex) {
        return buildErrorResponse(ex, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class) // Catch any unhandled exceptions
    public ResponseEntity<Map<String, String>> handleAllExceptions(Exception ex) {
        return buildErrorResponse(ex, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
