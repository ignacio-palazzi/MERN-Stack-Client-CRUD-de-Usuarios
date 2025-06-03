import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function UsuarioIndivial({ usuario }) {
  const [dataUsuario, setDataUsuario] = useState([usuario]);

  const handleDelete = (idusuario) => {
    axios
      .delete(`api/usuario/eliminar/${idusuario}`)
      .then((response) => {
        alert("Usuario eliminado correctamente");
        setDataUsuario(
          dataUsuario.filter((user) => user.idusuario !== idusuario)
        );
      })
      .catch((error) => {
        console.error("Error al eliminar el usuario:", error);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <ul className="list-group">
            <li className="list-group-item">{usuario.idusuario}</li>
            <li className="list-group-item">Nombre: {usuario.nombre}</li>
            <li className="list-group-item">Email: {usuario.email}</li>
            <li className="list-group-item">Teléfono: {usuario.telefono}</li>
          </ul>
          <Link
            to={"/editar/" + usuario.idusuario}
            className="btn btn-primary mt-3"
          >
            {" Editar Usuario "}
          </Link>
          <button
            type="button"
            className="btn btn-danger mt-3 ms-2"
            onClick={() => handleDelete(usuario.idusuario)}
          >
            Eliminar Usuario
          </button>
        </div>
      </div>
    </div>
  );
}
export default UsuarioIndivial;
