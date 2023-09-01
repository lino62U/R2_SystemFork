import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
export default function IndexPage() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get("http://192.168.1.3:5000/products");
      setProduct(data);
    };
    getProduct();
  }, []);
  return <div>{JSON.stringify(product)}</div>;
}
