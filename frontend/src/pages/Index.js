import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function IndexPage({ isLogged }) {
  const [product, setProduct] = useState([]);
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current === false) {
      const getProduct = async () => {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setProduct(data);
        console.log(product);
      };

      getProduct();
      return () => (isMounted.current = true);
    }
  }, [product]);
  return (
    <div>
      {!isLogged ? (
        <div>
          <Link to="/login" className="p-3 bg-sky-600">
            Inisiar Sesion
          </Link>
        </div>
      ) : (
        <></>
      )}
      
    </div>
  );
}
