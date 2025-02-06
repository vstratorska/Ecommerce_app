package com.example.ecommerceapp.service.impl;

import com.example.ecommerceapp.exceptions.InvalidArgumentsException;
import com.example.ecommerceapp.exceptions.PasswordsDoNotMatchException;
import com.example.ecommerceapp.exceptions.UsernameAlreadyExistsException;
import com.example.ecommerceapp.models.User;
import com.example.ecommerceapp.models.dto.UserDto;
import com.example.ecommerceapp.repository.UserRepository;
import com.example.ecommerceapp.service.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Optional<User> register(UserDto userDto) {
        if (userDto.getUsername() == null || userDto.getUsername().isEmpty()
                || userDto.getPassword() == null || userDto.getPassword().isEmpty()
                || userDto.getRepeatPassword() == null || userDto.getRepeatPassword().isEmpty()
                || userDto.getName() == null || userDto.getName().isEmpty()
                || userDto.getSurname() == null || userDto.getSurname().isEmpty())
            throw new InvalidArgumentsException();
        if (!userDto.getPassword().equals(userDto.getRepeatPassword()))
            throw new PasswordsDoNotMatchException();
        if (this.userRepository.findByUsername(userDto.getUsername()).isPresent())
            throw new UsernameAlreadyExistsException(userDto.getUsername());
        User user = new User(userDto.getUsername(), passwordEncoder.encode(userDto.getPassword()), userDto.getName(), userDto.getSurname());
        return Optional.of(this.userRepository.save(user));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return this.userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username));
    }
}
