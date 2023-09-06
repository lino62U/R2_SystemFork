package com.example.demo.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/data/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<List<User>>(userService.allUsers(),HttpStatus.OK);
    }

    @PostMapping("/testing")
    public ResponseEntity<User> createUser(@RequestBody Map<String,String> payload) {
        return new ResponseEntity<User>(userService.createUser(payload.get("username"), payload.get("password")),HttpStatus.CREATED);
    }
}
