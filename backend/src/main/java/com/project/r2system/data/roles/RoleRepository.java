package com.project.r2system.data.roles;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
        Optional<Role> findByName(ERole name);
}
