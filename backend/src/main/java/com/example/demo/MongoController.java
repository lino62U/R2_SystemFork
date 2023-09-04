package com.example.demo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;
import java.util.Map;

@RestController
class ProductController {
    @Autowired
    private MongoTemplate mongoTemplate;

    @GetMapping("/")
    public List<User> getProducts() {
        Query query = new Query();
        return mongoTemplate.find(query, User.class, "user");
    }

    @PostMapping("/products")
    public ResponseEntity<User> postTest(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<User>()
    }
}

@Data
@AllArgsConstructor
@NoArgsConstructor
class User {
    private String username;
    private String password;
}
