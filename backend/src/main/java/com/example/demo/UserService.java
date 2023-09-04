package com.example.demo;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    public User createUser(String username, String password) {
        User user = new User(username,password);
    }
}
