import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
export default function Navigation({ setIsLogged }) {
  const logout = () => {
    Cookies.remove("token");
    setIsLogged(false);
    return <Navigate to="/"/>;
  };
  const items = [
    {
      title: "Datos",
      route: "datos",
      hasMenu: true,
      menu: [
        { title: "Clientes", hasMenu: false, route: "datos/clientes" },
        { title: "Proveedores", hasMenu: false, route: "datos/proveedores" },
        {
          title: "Articulos",
          hasMenu: true,
          route: "datos/articulos",
          menu: [
            {
              title: "Ver Stock",
              hasMenu: false,
              route: "datos/articulos/stock",
            },
            {
              title: "Mermas Reutilizables",
              hasMenu: false,
              route: "datos/articulos/mermas",
            },
            {
              title: "Familia de Articulos",
              hasMenu: false,
              route: "datos/articulos/familias",
            },
            {
              title: "Unidades de Medida",
              hasMenu: false,
              route: "datos/articulos/unidades",
            },
          ],
        },
        { title: "Servicio Terceros", hasMenu: false, route: "datos/terceros" },
        {
          title: "Empleados",
          hasMenu: true,
          route: "datos/empleados",
          menu: [
            { title: "Areas", hasMenu: false, route: "datos/empleados/areas" },
            {
              title: "Cargos",
              hasMenu: false,
              route: "datps/empleados/cargos",
            },
            {
              title: "Inactivos",
              hasMenu: false,
              route: "datos/empleados/inactivos",
            },
          ],
        },
        {
          title: "Ordenes Rapidas",
          hasMenu: true,
          route: "datos/ordenesRapidas",
          menu: [
            {
              title: "Articulos",
              hasMenu: false,
              route: "datos/ordenesRapidas/articulos",
            },
            {
              title: "Transporte Envios",
              hasMenu: false,
              route: "datos/ordenesRapidas/transporte",
            },
            {
              title: "Inactivos",
              hasMenu: false,
              route: "datos/ordenesRapidas/inactivos",
            },
            {
              title: "Tipos Clientes",
              hasMenu: false,
              route: "datos/ordenesRapidas/clientes",
            },
          ],
        },
        {
          title: "Producto/Servicio",
          hasMenu: false,
          route: "datos/producto&servicio",
        },
        { title: "Viaticos", hasMenu: false, route: "datos/viaticos" },
        { title: "Mano de Obra", hasMenu: false, route: "datos/manoObra" },
        { title: "Impresoras", hasMenu: false, route: "datos/impresoras" },
        { title: "Impuestos", hasMenu: false, route: "datos/impuestos" },
        { title: "Documentos", hasMenu: false, route: "datos/documentos" },
        { title: "Factor de Gastos", hasMenu: false, route: "datos/gastos" },
        { title: "Condiciones de Pago", hasMenu: false, route: "datos/pago" },
      ],
    },
    {
      title: "Procesos",
      hasMenu: true,
      route: "procesos",
      menu: [
        { title: "Agenda Virtual", hasMenu: false, route: "procesos/agenda" },
        {
          title: "Presupuestos",
          route: "procesos/presupuestos",
          hasMenu: true,
          menu: [
            {
              title: "Nuevo Presupuesto",
              hasMenu: false,
              route: "procesos/presupuestos/nuevo",
            },
            {
              title: "Plantillas",
              hasMenu: false,
              route: "procesos/presupuestos/plantillas",
            },
            {
              title: "Presupuestos",
              hasMenu: false,
              route: "procesos/presupuestos/presupuestos",
            },
          ],
        },
        { title: "Logistica", hasMenu: false, route: "procesos/logistica" },
        { title: "Impresiones", hasMenu: false, route: "procesos/impresiones" },
        {
          title: "Produccion",
          hasMenu: true,
          route: "produccion",
          menu: [
            {
              title: "Control Mano de Obra",
              hasMenu: false,
              route: "produccion/controlObra",
            },
            {
              title: "Produccion Pendientes",
              hasMenu: false,
              route: "produccion/pendientes",
            },
            {
              title: "Produccion en Proceso",
              hasMenu: false,
              route: "produccion/enProceso",
            },
            {
              title: "Produccion Terminados",
              hasMenu: false,
              route: "produccion/terminados",
            },
          ],
        },
        { title: "Cnc", hasMenu: false, route: "produccion/cnc" },
        { title: "Diseño", hasMenu: false, route: "produccion/diseño" },
      ],
    },
    {
      title: "Ventas",
      hasMenu: true,
      route: "ventas",
      menu: [
        { title: "Presupuestos", hasMenu: false, route: "ventas/presupuestos" },
        {
          title: "Ordenes",
          hasMenu: true,
          route: "ventas/ordenes",
          menu: [
            {
              title: "Ord Aprobadas",
              hasMenu: false,
              route: "ventas/ordenes/aprobadas",
            },
            {
              title: "Ord Terminadas",
              hasMenu: false,
              route: "ventas/ordenes/terminadas",
            },
            {
              title: "Ord Anuladas",
              hasMenu: false,
              route: "ventas/ordenes/anuladas",
            },
            {
              title: "Ord Reabiertas",
              hasMenu: false,
              route: "ventas/ordenes/reabiertas",
            },
            {
              title: "Ord para Revisar",
              hasMenu: false,
              route: "ventas/ordenes/revisar",
            },
            {
              title: "Ord sin Factura",
              hasMenu: false,
              route: "ventas/ordenes/sinFactura",
            },
          ],
        },
        { title: "Ver Procesos", hasMenu: false, route: "ventas/procesos" },
        {
          title: "Facturacion",
          hasMenu: true,
          route: "ventas/facturacion",
          menu: [
            {
              title: "Nueva Factura",
              hasMenu: false,
              route: "ventas/facturacion/nueva",
            },
            {
              title: "Ordenes para Facturar",
              hasMenu: false,
              route: "ventas/facturacion/paraFacturar",
            },
          ],
        },
        {
          title: "Listas Pptos y Ordenes",
          hasMenu: false,
          route: "ventas/pptosOrdenes",
        },
      ],
    },
    {
      title: "Reportes y Consultas",
      hasMenu: true,
      route: "reportes&consultas",
      menu: [],
    },
    {
      title: "Tesoreria",
      hasMenu: true,
      route: "tesoreria",
      menu: [
        {
          title: "Facturas",
          hasMenu: true,
          route: "tesoreria/facturas",
          menu: [
            {
              title: "Nueva factura",
              hasMenu: false,
              route: "tesoreria/facturas/nueva",
            },
            {
              title: "Registro de Datos",
              hasMenu: false,
              route: "tesoreria/facturas/datos",
            },
          ],
        },
        {
          title: "Libro de Caja",
          hasMenu: true,
          route: "tesoreria/caja",
          menu: [
            {
              title: "Caja Menor",
              hasMenu: false,
              route: "tesoreria/caja/menor",
            },
            {
              title: "Hola de Movimientos",
              hasMenu: false,
              route: "tesoreria/caja/movimientos",
            },
            {
              title: "Egresos por Orden",
              hasMenu: false,
              route: "tesoreria/caja/egresos",
            },
          ],
        },
        { title: "Bancos", hasMenu: false, route: "tesoreria/bancos" },
        { title: "Conceptos de Caja", hasMenu: false, route: "tesoreria/caja" }, //obversar
      ],
    },
    {
      title: "Despachos",
      hasMenu: true,
      route: "despachos",
      menu: [{ title: "Guia de Remision", hasMenu: false, route: "despachos" }],
    },
    {
      title: "RR.HH",
      hasMenu: true,
      route: "rrhh",
      menu: [
        { title: "Marcador Servidor", hasMenu: false, route: "rrhh/marcador" },
        { title: "Prueba Tareo", hasMenu: false, route: "rrhh/tareo" },
      ],
    },
    {
      title: "Area Presupuestos",
      hasMenu: true,
      route: "areaPresupuestos",
      menu: [
        { title: "Tiempos", hasMenu: false, route: "areaPresupuestos/tiempos" },
        {
          title: "Trabajos Pendientes",
          hasMenu: false,
          route: "areaPresupuestos/pendientes",
        },
      ],
    },
    {
      title: "Cierre de Areas",
      hasMenu: true,
      route: "cierreAreas",
      menu: [
        { title: "Desp-Alm-Prod", hasMenu: false, route: "cierreAreas" },
        { title: "Impr-Vinil-Diseño", hasMenu: false, route: "cierreAreas" },
        { title: "Carp-Acri-Cnc", hasMenu: false, route: "cierreAreas" },
        { title: "Solda-Install", hasMenu: false, route: "cierreAreas" },
      ],
    },
    {
      title: "CRM",
      hasMenu: true,
      route: "crm",
      menu: [
        { title: "Prospecciones", hasMenu: false, route: "crm/prospecciones" },
        {
          title: "Prospecciones Todos",
          hasMenu: false,
          route: "crm/prospeccionesTodos",
        },
        {
          title: "Tablas CRM",
          hasMenu: true,
          route: "crm/tablas",
          menu: [
            { title: "Acciones", hasMenu: false, route: "crm/tablas/acciones" },
            { title: "Estados", hasMenu: false, route: "crm/tablas/estados" },
          ],
        },
        {
          title: "Reportes - Prospecciones",
          hasMenu: false,
          route: "crm/prospecciones/reportes",
        },
      ],
    },
  ];
  return (
    <div className="flex justify-between">
      <nav className="antialiased bg-gray-200 flex justify-start">
        {items.map((item) => (
          <div
            key={item.title}
            className="group inline-block whitespace-nowrap"
          >
            {item.hasMenu ? (
              <>
                <Link to={item.route}>
                  <button
                    aria-haspopup="true"
                    aria-controls="menu"
                    className="outline-none px-3 focus:outline-none border py-1 bg-white rounded-sm flex items-center min-w-32 hover:bg-slate-400"
                  >
                    <span className="font-semibold flex-1 text-sm">
                      {item.title}
                    </span>
                  </button>
                </Link>
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
                              to={subItem.route}
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
                                <Link
                                  to={subSubItem.route}
                                  className="flex-1 w-full px-3 py-1 text-sm bg-slate-100 hover:bg-slate-300 whitespace-nowrap"
                                >
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
                          to={subItem.route}
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
      </nav>
      <div onClick={logout} className="flex"><button className="w-full px-4 bg-red-500 text-white flex-1">Logout</button></div>
    </div>
  );
}
