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
        //const res = await axios.post("/login", user);
        Cookies.set("token", "aaaa");
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
    <div className="flex justify-center p-10 bg-slate-800">
      <form className="flex gap-5">
        <input onChange={handleChange} placeholder="Username" name="username" className="p-5 text-center rounded-md" />
        <input onChange={handleChange} placeholder="Password" name="password" className="p-5 text-center rounded-md" />
        <button onClick={handleClick} className="bg-blue-200 rounded-md p-5">Login</button>
      </form>
    </div>
  );
}
