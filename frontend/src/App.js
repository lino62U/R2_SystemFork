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

function App() {
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    const token = Cookies.get("token")
    if(token) setIsLogged(true)
  },[])

  return (
    <div>
      <BrowserRouter>
      {isLogged && <Navigation setIsLogged={setIsLogged} />}
        <Routes>
          <Route
            path="/login"
            element={<Login  setIsLogged={setIsLogged}/>}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/home" element={<IndexPage isLogged={isLogged}/>}></Route>

          <Route path="*" element={<Error404 />}></Route>
          <Route element={<ProtectedRoute allowedRoles={["admin", "tesoreria","logistica"]}/>}>
            <Route path="/" element={<div>Hola perra</div>}></Route>
          </Route>
          <Route
            element={<ProtectedRoute allowedRoles={["admin", "tesoreria"]} />}
          >
            <Route path="/datos/clientes" element={<Clientes />}></Route>
          </Route>
          <Route
            element={<ProtectedRoute allowedRoles={["admin", "logistica","tesoreria"]} />}
          >
            <Route path="/datos/proveedores" element={<Proveedores />}></Route>
          </Route>
          <Route
            element={<ProtectedRoute allowedRoles={["admin", "logistica"]} />}
          >
            <Route
              path="/datos/servicioTerceros"
              element={<ServicioTerceros />}
            ></Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
