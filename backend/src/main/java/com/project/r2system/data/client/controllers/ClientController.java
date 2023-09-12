package com.project.r2system.data.client.controllers;

import com.project.r2system.data.client.domain.model.Clients;
import com.project.r2system.data.client.service.api.ClientServiceApi;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/data/v1/clients")
public class ClientController {

    @Autowired
    private ClientServiceApi clientServiceApi;

    //private final ClientsService clientsService;

    @GetMapping(value = "/all")
    public ResponseEntity<List<Clients>> getAllClients() {
        List<Clients> clients = clientServiceApi.getAll();
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Clients> getClientById(@PathVariable Long id) {
//        return clientServiceApi.get(id)
//                .map(clients -> new ResponseEntity<>(clients, HttpStatus.OK))
//                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
        Clients client = clientServiceApi.get(id);

        if (client != null) {
            return new ResponseEntity<>(client, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }




    @PostMapping("create")
    public ResponseEntity<?> createClients(@RequestBody Clients clients) {

        try {
            Clients createdClients = clientServiceApi.save(clients);
            return new ResponseEntity<Clients>(createdClients, HttpStatus.CREATED);
        }catch (Exception e)
        {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }





    @PutMapping("/{clientId}")
    public ResponseEntity<?> updateClients(@PathVariable Long clientId, @RequestBody Clients updatedClient) {
//        return clientsService.updateClientData(clientId, updatedClient)
//                .map(clients -> new ResponseEntity<>(clients, HttpStatus.OK))
//                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
        try {
            Clients createdClients = clientServiceApi.save(updatedClient);
            return new ResponseEntity<Clients>(createdClients, HttpStatus.OK);
        }catch (Exception e)
        {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//    @DeleteMapping("/{clientId}")
//    public ResponseEntity<Void> deleteClientsById(@PathVariable Long clientId) {
//        if (clientsService.deleteClient(clientId)) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

}
