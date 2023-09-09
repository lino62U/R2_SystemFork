import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import IndexPage from "./pages/Index";
import Navigation from "./components/Navigation";
import Clientes from "./pages/datos/Clientes";
import ProtectedRoute from "./components/ProtectedRoute";
import Error404 from "./pages/Error404";
import Proveedores from "./pages/datos/Proveedores";
import ServicioTerceros from "./pages/datos/ServicioTerceros";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import IndexArticulos from "./pages/datos/articulos/IndexArticulos";
import Familia from "./pages/datos/articulos/Familia";
import Mermas from "./pages/datos/articulos/Mermas";
import Medidas from "./pages/datos/articulos/Medidas";
import Stock from "./pages/datos/articulos/Stock";
import IndexEmpleados from "./pages/datos/empleados/IndexEmpleados";
import Areas from "./pages/datos/empleados/Areas";
import Cargos from "./pages/datos/empleados/Cargos";
import Inactivos from "./pages/datos/empleados/Inactivos";
import OrdArticulos from "./pages/datos/ordenesRapidas/Articulos";
import OrdInactivos from "./pages/datos/ordenesRapidas/Inactivos";
import TiposClientes from "./pages/datos/ordenesRapidas/TiposClientes";
import Transporte from "./pages/datos/ordenesRapidas/Transporte";
import ProductoServicio from "./pages/datos/ProductoServicio";
import Viaticos from "./pages/datos/Viaticos";
import ManoObra from "./pages/datos/ManoObra";
import Impresoras from "./pages/datos/Impresoras";
import Impuestos from "./pages/datos/Impuestos";
import Documentos from "./pages/datos/Documentos";
import FactorGastos from "./pages/datos/FactorGastos";
import CondicionesPago from "./pages/datos/CondicionesPago";
import New from "./pages/New";
import Footer from "./pages/UserDetail";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) setIsLogged(true);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <IndexPage isLogged={false} />
              </div>
            }
          ></Route>
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<IndexPage isLogged={isLogged} />} />
          <Route path="/new" element={<New />} />

          {/* Rutas protegidas */}
          <Route
            path="/system/*"
            element={
              isLogged ? (
                <>
                  <Navigation setIsLogged={setIsLogged} />
                  <ProtectedRoute
                    allowedRoles={["admin", "tesoreria", "logistica"]}
                  />
                  <Routes>
                    <Route
                      path="datos"
                      element={
                        <ProtectedRoute
                          allowedRoles={["admin", "tesoreria", "logistica"]}
                        />
                      }
                    >
                      <Route path="clientes" element={<Clientes />} />
                      <Route path="proveedores" element={<Proveedores />} />
                      <Route path="articulos">
                        <Route path="" element={<IndexArticulos />} />
                        <Route path="stock" element={<Stock />} />
                        <Route path="familias" element={<Familia />} />
                        <Route path="mermas" element={<Mermas />} />
                        <Route path="unidades" element={<Medidas />} />
                      </Route>
                      <Route path="terceros" element={<ServicioTerceros />} />
                      <Route path="empleados">
                        <Route path="" element={<IndexEmpleados />} />
                        <Route path="areas" element={<Areas />} />
                        <Route path="cargos" element={<Cargos />} />
                        <Route path="inactivos" element={<Inactivos />} />
                      </Route>
                      <Route path="ordenesRapidas">
                        <Route path="" element={<div>Ordenes Rapidas</div>} />
                        <Route path="articulos" element={<OrdArticulos />} />
                        <Route path="inactivos" element={<OrdInactivos />} />
                        <Route path="clientes" element={<TiposClientes />} />
                        <Route path="transporte" element={<Transporte />} />
                      </Route>
                      <Route
                        path="producto&servicio"
                        element={<ProductoServicio />}
                      />
                      <Route path="viaticos" element={<Viaticos />} />
                      <Route path="manoObra" element={<ManoObra />} />
                      <Route path="impresoras" element={<Impresoras />} />
                      <Route path="impuestos" element={<Impuestos />} />
                      <Route path="documentos" element={<Documentos />} />
                      <Route path="gastos" element={<FactorGastos />} />
                      <Route path="pago" element={<CondicionesPago />} />
                    </Route>
                  </Routes>
                </>
              ) : (
                // Aquí puedes agregar un componente para mostrar un mensaje o redirigir al usuario no autenticado.
                <div>No estás autenticado.</div>
              )
            }
          />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
