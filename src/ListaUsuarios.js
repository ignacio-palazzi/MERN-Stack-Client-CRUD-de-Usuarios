import React, { useState, useEffect } from "react";
import UsuarioIndivial from "./UsuarioIndivial";
import axios from "axios";

function ListaUsuarios() {
  const [dataUsuario, setDataUsuario] = useState([]);

  useEffect(() => {
    axios
      .get("api/usuario/lista")
      .then((res) => {
        setDataUsuario(res.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de usuarios:", error);
      });
  });

  //Mapear los datos de los usuarios
  const listaUsuarios = dataUsuario.map((usuario) => {
    return <UsuarioIndivial usuario={usuario} />;
  });
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {listaUsuarios}
    </div>
  );
}

export default ListaUsuarios;
