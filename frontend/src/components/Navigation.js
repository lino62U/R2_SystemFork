import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function Navigation({ setIsLogged }) {
  const logout = () => {
    Cookies.remove("token");
    setIsLogged(false);
  };
  const items = [
    {
      title: "Datos",
      hasMenu: true,
      menu: [
        { title: "Clientes", hasMenu: false },
        { title: "Proveedores", hasMenu: false },
        {
          title: "Articulos",
          hasMenu: true,
          menu: [
            { title: "Ver Stock" },
            { title: "Mermas Reutilizables", hasMenu: false },
            { title: "Familia de Articulos", hasMenu: false },
            { title: "Unidades de Medida", hasMenu: false },
          ],
        },
        { title: "Servicio Terceros", hasMenu: false },
        {
          title: "Empreados",
          hasMenu: true,
          menu: [
            { title: "Areas", hasMenu: false },
            { title: "Cargos", hasMenu: false },
            { title: "Inactivos", hasMenu: false },
          ],
        },
        {
          title: "Ordenes Rapidas",
          hasMenu: true,
          menu: [
            { title: "Articulos", hasMenu: false },
            { title: "Transporte Envios", hasMenu: false },
            { title: "Inactivos", hasMenu: false },
            { title: "Tipos Clientes", hasMenu: false },
          ],
        },
        { title: "Producto/Servicio", hasMenu: false },
        { title: "Viaticos", hasMenu: false },
        { title: "Mano de Obra", hasMenu: false },
        { title: "Impresoras", hasMenu: false },
        { title: "Impuestos", hasMenu: false },
        { title: "Documentos", hasMenu: false },
        { title: "Factor de Gastos", hasMenu: false },
        { title: "Condiciones de Pago", hasMenu: false },
      ],
    },
    {
      title: "Procesos",
      hasMenu: true,
      menu: [
        { title: "Agenda Virtual", hasMenu: false },
        {
          title: "Presupuestos",
          hasMenu: true,
          menu: [
            { title: "Nuevo Presupuesto", hasMenu: false },
            { title: "Plantillas", hasMenu: false },
            { title: "Presupuestos", hasMenu: false },
          ],
        },
        { title: "Logistica", hasMenu: false },
        { title: "Impresiones", hasMenu: false },
        {
          title: "Produccion",
          hasMenu: true,
          menu: [
            { title: "Control Mano de Obra", hasMenu: false },
            { title: "Produccion Pendientes", hasMenu: false },
            { title: "Produccion en Proceso", hasMenu: false },
            { title: "Produccion Terminados", hasMenu: false },
          ],
        },
        { title: "Cnc", hasMenu: false },
        { title: "Diseño", hasMenu: false },
      ],
    },
    {
      title: "Ventas",
      hasMenu: true,
      menu: [
        { title: "Presupuestos", hasMenu: false },
        {
          title: "Ordenes",
          hasMenu: true,
          menu: [
            { title: "Ord Aprobadas", hasMenu: false },
            { title: "Ord Terminadas", hasMenu: false },
            { title: "Ord Anuladas", hasMenu: false },
            { title: "Ord Reabiertas", hasMenu: false },
            { title: "Ord para Revisar", hasMenu: false },
            { title: "Ord sin Factura", hasMenu: false },
          ],
        },
        { title: "Ver Procesos", hasMenu: false },
        {
          title: "Facturacion",
          hasMenu: true,
          menu: [
            { title: "Nueva Factura", hasMenu: false },
            { title: "Ordenes para Facturar", hasMenu: false },
          ],
        },
        { title: "Listas Pptos y Ordenes", hasMenu: false },
      ],
    },
    {
      title: "Reportes y Consultas",
      hasMenu: true,
      menu: [],
    },
    {
      title: "Tesoreria",
      hasMenu: true,
      menu: [
        {
          title: "Facturas",
          hasMenu: true,
          menu: [
            { title: "Nueva factura", hasMenu: false },
            { title: "Registro de Datos", hasMenu: false },
          ],
        },
        {
          title: "Libro de Caja",
          hasMenu: true,
          menu: [
            { title: "Caja Menor", hasMenu: false },
            { title: "Hola de Movimientos", hasMenu: false },
            { title: "Egresos por Orden", hasMenu: false },
          ],
        },
        { title: "Bancos", hasMenu: false },
        { title: "Conceptos de Caja", hasMenu: false },
      ],
    },
    {
      title: "Despachos",
      hasMenu: true,
      menu: [{ title: "Guia de Remision", hasMenu: false }],
    },
    {
      title: "RR.HH",
      hasMenu: true,
      menu: [
        { title: "Marcador Servidor", hasMenu: false },
        { title: "Prueba Tareo", hasMenu: false },
      ],
    },
    {
      title: "Area Presupuestos",
      hasMenu: true,
      menu: [
        { title: "Tiempos", hasMenu: false },
        { title: "Trabajos Pendientes", hasMenu: false },
      ],
    },
    {
      title: "Cierre de Areas",
      hasMenu: true,
      menu: [
        { title: "Desp-Alm-Prod", hasMenu: false },
        { title: "Impr-Vinil-Diseño", hasMenu: false },
        { title: "Carp-Acri-Cnc", hasMenu: false },
        { title: "Solda-Install", hasMenu: false },
      ],
    },
    {
      title: "CRM",
      hasMenu: true,
      menu:[
        { title: "Prospecciones", hasMenu: false },
        { title: "Prospecciones Todos", hasMenu: false },
        { title: "Tablas CRM", hasMenu: true, menu:[
          { title: "Acciones", hasMenu: false },
          { title: "Estados", hasMenu: false },

        ] },
        { title: "Reportes - Prospecciones", hasMenu: false },

      ]
    }

  ];
  return (
    <nav className="antialiased bg-gray-200 flex justify-start">
      {items.map((item) => (
        <div key={item.title} className="group inline-block whitespace-nowrap">
          {item.hasMenu ? (
            <>
              <button
                aria-haspopup="true"
                aria-controls="menu"
                className=" w-36 outline-none focus:outline-none border py-1 bg-white rounded-sm flex items-center min-w-32 hover:bg-slate-400"
              >
                <span className="font-semibold flex-1 text-sm">
                  {item.title}
                </span>
                
              </button>
              <ul
                id="menu"
                aria-hidden="true"
                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-75 ease-in-out origin-top min-w-32"
              >
                {item.menu.map((subItem) =>
                  subItem.hasMenu ? (
                    <>
                      <li class="rounded-sm relative hover:bg-gray-100">
                        <button
                          aria-haspopup="true"
                          aria-controls="menu-lang"
                          class="w-full text-left flex items-center outline-none focus:outline-none"
                        >
                          <Link
                            to="/articulos"
                            className="flex-1 w-full px-3 py-1  bg-sky-0 flex items-center text-sm bg-slate-100 hover:bg-slate-300  whitespace-nowrap"
                          >
                            <span class="pr-1 flex-1 text-sm ">
                              {subItem.title}
                            </span>
                            <span class="mr-auto">
                              <svg
                                class="fill-current h-4 w-4
  transition duration-75 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </span>
                          </Link>
                        </button>
                        <ul
                          id="menu-lang"
                          aria-hidden="true"
                          class="bg-white border rounded-sm absolute top-0 right-0 
transition duration-75 ease-in-out origin-top-left
min-w-24
"
                        >
                          {subItem.menu.map((subSubItem) => (
                            <li class="rounded-sm flex bg-slate-100">
                              <Link className="flex-1 w-full px-3 py-1 text-sm bg-slate-100 hover:bg-slate-300 whitespace-nowrap">
                                {subSubItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </>
                  ) : (
                    <li
                      key={subItem.title}
                      className="rounded-sm flex bg-slate-100"
                    >
                      <Link
                        className="hover:bg-slate-300 flex-1 w-full px-3 py-1 text-sm bg-slate-100"
                        to={`/${subItem.title.toLowerCase()}`}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </>
          ) : (
            <></>
          )}
        </div>
      ))}
      <div onClick={logout}>Logout</div>
    </nav>
  );
}
