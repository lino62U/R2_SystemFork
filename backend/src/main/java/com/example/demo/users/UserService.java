package com.example.demo.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    public List<User> allUsers() {
        return userRepository.findAll();
    }

    public User createUser(String username, String password){
        List<Integer> test = new ArrayList<Integer>(){{add(1);add(2);}};
        User user = new User(username,password,test);
        userRepository.insert(user);
        return user;
    }
}
