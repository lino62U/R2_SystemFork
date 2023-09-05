import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from 'jwt-decode';

export default function ProtectedRoute({allowedRoles}) {
    const token = Cookies.get("token");
    if(token) {
      
      const decodedToken = jwt_decode(token);
      
      // Verificar si el usuario tiene uno de los roles permitidos
      if (!decodedToken || !decodedToken.roles.some((role) => allowedRoles.includes(role))) {
        return <Navigate to="/" />;
      }
      
      return <Outlet />
    }
    else return <Navigate to="/home" />
}
