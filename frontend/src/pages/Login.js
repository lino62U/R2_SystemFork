import axios from "../config/axiosConfig";
import React, { useState } from "react";
import Cookies from "js-cookie"; // Importa la librería js-cookie
import { useNavigate } from "react-router-dom";

export default function Login({setIsLogged}) {
  const [user, setUser] = useState({});
  const navigate = useNavigate(); // Obtiene la función de navegación

  const handleClick = async (e) => {

    e.preventDefault();
    if (user) {
      try {
        const res = await axios.post("/login", user);
        Cookies.set("token", res.data.token);
        setIsLogged(true)
        navigate("/")
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form>
        <input onChange={handleChange} placeholder="Username" name="username" />
        <input onChange={handleChange} placeholder="Password" name="password" />
        <button onClick={handleClick}>Login</button>
      </form>
    </div>
  );
}
