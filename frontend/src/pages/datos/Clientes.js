import axios from "../../config/axiosConfig";
import React, { useEffect, useRef, useState } from "react";

export default function Clientes() {
  const isMounted = useRef(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (isMounted.current === false) {
      const getUser = async () => {
        const { data } = await axios.get("/datos/clientes");
        setUser(data);
        console.log(data);
      };
      getUser();
      return () => (isMounted.current = true);
    }
  }, []);
  return (
    <div>
      Pagina de clientes
      <br></br>
      <h5>{JSON.stringify(user)}</h5>
    </div>
  );
}
