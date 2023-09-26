package com.project.r2system.domain.data.entities;

import org.bson.types.ObjectId;

import java.util.Date;

public class Budget {
    private ObjectId id;
    private Integer idN;


    private Integer numeroPresupuesto;
    private String estado;
    private String formaPago;
    private String referencia;
    private Date fechaCreacion;
    private Date fechaValidez;
    private Boolean precio;
    private String tipo;

    // clients attributes
    private String cliente;
    private String nombre;
    private String direccion;
    private String atencion;

    // table attributes





}
