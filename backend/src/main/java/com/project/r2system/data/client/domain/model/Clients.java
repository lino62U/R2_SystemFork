package com.project.r2system.data.client.domain.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "clients")
public class Clients {
    @Id
    private Long id;

    private Integer idNum;
    private String name;
    private Integer dniRuc;
    private String address;
    private String telephone;
    private String clientType;
    private Boolean state;

}
