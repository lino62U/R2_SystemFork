package com.project.r2system.data.client.infrastructure;

import com.project.r2system.data.client.domain.model.Clients;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClientRepository extends MongoRepository <Clients, Long>{

}
