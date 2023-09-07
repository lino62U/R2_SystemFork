import Table from "../../components/Table";
import axios from "../../config/axiosConfig";
import React, { useEffect, useRef, useState } from "react";

export default function Clientes() {
  //const isMounted = useRef(false);
  const [user, setUser] = useState([
    [
      "id",
      "nombre",
      "dni/ruc",
      "direccion",
      "telefono",
      "tipo de cliente",
      "estado",
    ],
    [
      {
        id: "9545",
        nombre: "JAST",
        dni_ruc: "20133176404",
        direccion:
          "MZA. A LOTE. 17 URB. LOS ALAMOS A-17 - VALLECITO - AREQUIPA - AREQUIPA",
        telefono: "959 740 177",
        tipo_cliente: "R2",
        estado: "Activo",
      },
      {
        id: "9544",
        nombre: "DYNAMOD PERU E.I.R.L.",
        dni_ruc: "20600407709",
        direccion: "",
        telefono: "981262591",
        tipo_cliente: "R2",
        estado: "Activo",
      },
      {
        id: "9543",
        nombre: "SPORT CAFE",
        dni_ruc: "74859632",
        direccion: "- - AREQUIPA - AREQUIPA",
        telefono: "054208596",
        tipo_cliente: "R2",
        estado: "Activo",
      },
      {
        id: "9542",
        nombre: "ESTEBAN LAZARTE",
        dni_ruc: "74859632",
        direccion: "- - AREQUIPA - AREQUIPA",
        telefono: "054208596",
        tipo_cliente: "R2",
        estado: "Activo",
      },
      {
        id: "9541",
        nombre: "CONSULTIG PARTNERS",
        dni_ruc: "20519426804",
        direccion: "- - AREQUIPA - AREQUIPA",
        telefono: "054208596",
        tipo_cliente: "R2",
        estado: "Activo",
      },
      {
        id: "9540",
        nombre: "DISTRIBUIDORA MUTEKI S.A.C.",
        dni_ruc: "20603587180",
        direccion: "",
        telefono: "963417802",
        tipo_cliente: "R2",
        estado: "Activo",
      },
      {
        id: "9539",
        nombre: "TECHBRAND PERU S.A.C.",
        dni_ruc: "20551904882",
        direccion: "AV. LA ENCALADA NRO. 1090 INT. 503 - SURCO - LIMA - LIMA",
        telefono: "958 748 090",
        tipo_cliente: "R2",
        estado: "Activo",
      },
      {
        id: "9538",
        nombre: "MANUEL CASTRO",
        dni_ruc: "74859632",
        direccion: "- - AREQUIPA - AREQUIPA",
        telefono: "054202385",
        tipo_cliente: "R2",
        estado: "Activo",
      },
      {
        id: "9537",
        nombre: "COTECSA SAC",
        dni_ruc: "20606541580",
        direccion: "- - AREQUIPA - AREQUIPA",
        telefono: "906 930 984",
        tipo_cliente: "R2",
        estado: "Activo",
      },
      {
        id: "9536",
        nombre:
          "COOPERATIVA DE AHORRO Y CREDITO PRESTAMOS Y CREDITOS DEL SUR COOPACCREDISUR",
        dni_ruc: "20558231115",
        direccion: "",
        telefono: "946737115",
        tipo_cliente: "R2",
        estado: "Activo",
      },
      {
        id: "9535",
        nombre:
          "COOPERATIVA DE AHORRO Y CREDITO PRESTAMOS Y CREDITOS DEL SUR COOPACCREDISUR - COOPACCREDISUR",
        dni_ruc: "20558231115",
        direccion: "",
        telefono: "946737115",
        tipo_cliente: "R2",
        estado: "Activo",
      },
      {
        id: "9534",
        nombre: "LAYHER PERU S.A.C",
        dni_ruc: "20517439623",
        direccion: "- - AREQUIPA - AREQUIPA",
        telefono: "951 840 693",
        tipo_cliente: "R2",
        estado: "Activo",
      },
    ],
  ]);
  /*
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
  */
  return (
    <div>
      <Table columns={user[0]} info={user[1]}></Table>
    </div>
  );
}
