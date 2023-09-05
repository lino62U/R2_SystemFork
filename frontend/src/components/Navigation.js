import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function Navigation({setIsLogged }) {
  const logout = () => {
    Cookies.remove("token");
    setIsLogged(false);
  };

  return (
    <>
      <nav className="antialiased  p-4 text-sm bg-blue-800">
        <div className="group inline-block">
          <button
            aria-haspopup="true"
            aria-controls="menu"
            class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
          >
            <span class="pr-1 font-semibold flex-1">Datos</span>
            <span>
              <svg
                class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            aria-hidden="true"
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
          >
            <li className="rounded-sm px-8 py-1 hover:bg-gray-100">
              <Link to="datos/clientes">Clientes</Link>
            </li>
            <li className="rounded-sm px-8 py-1 hover:bg-gray-100">
              <Link>Provedores</Link>
            </li>
            <li className="rounded-sm relative px-8 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Articulos</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32 
  "
              >
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Ver Stock</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Mermas Reutilizables</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Familia de Articulos</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Unidades de medida</Link>
                </li>
              </ul>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <Link>Servicio de Terceros</Link>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Empleados</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-28 right-0
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Areas</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Cargos</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Inactivos</Link>
                </li>
              </ul>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Ordenes Rapidas</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-36 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Articulos</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Transporte</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Envios</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Clases de Clientes</Link>
                </li>
              </ul>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <Link>Productos/Servicio</Link>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <Link>Viaticos</Link>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <Link>Mano de Obra</Link>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <Link>Impresoras</Link>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <Link>Impuestos</Link>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <Link>Documentos</Link>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <Link>Factor de Gastos</Link>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <Link>Condiciones de Pago</Link>
            </li>
          </ul>
        </div>
        {/*procesos*/}
        <div className="group inline-block">
          <button
            aria-haspopup="true"
            aria-controls="menu"
            class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
          >
            <span class="pr-1 font-semibold flex-1">Procesos</span>
            <span>
              <svg
                class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            aria-hidden="true"
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
          >
            <li className="rounded-sm px-8 py-1 hover:bg-gray-100">
              <Link>Agenda Virtual</Link>
            </li>
            <li className="rounded-sm relative px-8 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Presupuestos</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32 
  "
              >
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Nuevo Presupuesto</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Plantillas</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Presupuestos</Link>
                </li>
              </ul>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Logistica</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute  top-14 right-0
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    aria-controls="menu-lang-python"
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Compras</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul
                    id="menu-lang-python"
                    aria-hidden="true"
                    className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                  >
                    <li className="px-8 py-1 hover:bg-gray-100">
                      <Link>Registrar Compra</Link>
                    </li>
                    <li className="px-8 py-1 hover:bg-gray-100">
                      <Link>Orden Compra</Link>
                    </li>
                  </ul>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    aria-controls="menu-lang-python"
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Salidas</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul
                    id="menu-lang-python"
                    aria-hidden="true"
                    className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                  >
                    <li className="px-8 py-1 hover:bg-gray-100">
                      <Link>Salida de Articulo</Link>
                    </li>
                    <li className="px-8 py-1 hover:bg-gray-100">
                      <Link>Descargar de Tintas</Link>
                    </li>
                  </ul>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    aria-controls="menu-lang-python"
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Inventario</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul
                    id="menu-lang-python"
                    aria-hidden="true"
                    className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                  >
                    <li className="px-8 py-1 hover:bg-gray-100">
                      <Link>Nuevo Inventario</Link>
                    </li>
                  </ul>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    aria-controls="menu-lang-python"
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Devolucion</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul
                    id="menu-lang-python"
                    aria-hidden="true"
                    className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                  >
                    <li className="px-8 py-1 hover:bg-gray-100">
                      <Link>Devolucion</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="px-8 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Impresiones</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-20 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Descargar Tintas</Link>
                </li>
              </ul>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Produccion</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-20 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Control de Mano de Obra</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Produccion Pendientes</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Produccion en Proceso</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Produccion Terminados</Link>
                </li>
              </ul>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <Link>Cnc</Link>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <Link>Diseños</Link>
            </li>
          </ul>
        </div>
        {/*ventas */}
        <div className="group inline-block">
          <button
            aria-haspopup="true"
            aria-controls="menu"
            class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
          >
            <span class="pr-1 font-semibold flex-1">Ventas</span>
            <span>
              <svg
                class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            aria-hidden="true"
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
          >
            <li className="rounded-sm relative px-8 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Presupuestos</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32 
  "
              >
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Nuevo Presupuesto</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Plantilla</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Presupuesto</Link>
                </li>
              </ul>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Ordenenes</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-7 right-0
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Ordenenes Aprodadas</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                <Link>Ordenenes Terminadas</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                <Link>Ordenenes Anuladas</Link>
                </li>
                
                <li className="px-8 py-1 hover:bg-gray-100">
                <Link>Ordenenes Reabiertas</Link>
                </li>
                
                <li className="px-8 py-1 hover:bg-gray-100">
                <Link>Ordenenes para Revisar</Link>
                </li>
                
                <li className="px-8 py-1 hover:bg-gray-100">
                <Link>Terminadas sin Factura</Link>
                </li>
              </ul>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <Link>Ver Procesos</Link>
            </li>
            <li className="px-8 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Facturacion</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-20 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Nueva Factura</Link>
                </li>
                <li className="px-8 py-1 hover:bg-gray-100">
                  <Link>Ordenes para Facturar</Link>
                </li>
                
              </ul>
            </li>
            
            <li className="px-8 py-1 hover:bg-gray-100">
              <Link>Lista Pptos y Ordenes</Link>
            </li>
            
          </ul>
        </div>
        <div onClick={logout}>Logout</div>
      </nav>
    </>
  );
}
