package com.project.r2system.data.client.service.impl;

import com.project.r2system.data.client.commons.GenericServiceImpl;
import com.project.r2system.data.client.domain.model.Clients;
import com.project.r2system.data.client.infrastructure.ClientRepository;
import com.project.r2system.data.client.service.api.ClientServiceApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class ClientServiceImpl extends GenericServiceImpl<Clients, Long> implements ClientServiceApi {

    @Autowired
    private ClientRepository clientRepository;
    @Override
    public CrudRepository<Clients, Long> getDao() {

        return clientRepository;
    }
}
