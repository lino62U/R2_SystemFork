import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',  // Reemplaza con la URL de tu backend
  timeout: 5000,  // Ajusta el tiempo de espera según tus necesidades
  withCredentials: true, // Habilita el envío de cookies
});

// ...

export default instance;
