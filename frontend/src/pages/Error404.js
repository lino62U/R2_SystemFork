import Cookies from 'js-cookie'
import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Error404() {
  const token = Cookies.get("token")

  // Mensaje de error
  const errorMessage = "Pagina no encontrada";

  if (token) {
    // Si hay un token, muestra el mensaje y redirige a "/"
    alert(errorMessage);
    return <Navigate to="/" />;
  }

  // Si no hay token, muestra el mensaje y redirige a "/home"
  alert(errorMessage);
  return <Navigate to="/home" />;
}
