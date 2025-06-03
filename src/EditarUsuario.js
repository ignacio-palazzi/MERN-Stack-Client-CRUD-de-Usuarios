import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditarUsuario() {
  const params = useParams();
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  useEffect(() => {
    axios
      .get(`/api/usuario/editar/${params.idusuario}`)
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del usuario:", error);
      });
  }, [params.idusuario]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`/api/usuario/editar/${params.idusuario}`, usuario)
      .then(() => {
        alert("Usuario actualizado correctamente");
      })
      .catch((error) => {
        console.error("Error al actualizar el usuario:", error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Editar Usuario</h2>
      <h3>ID del Usuario: {params.idusuario}</h3>
      <div className="row">
        <div className="col-6 offset-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                placeholder="Ingrese su nombre"
                value={usuario.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Ingrese su email"
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono
              </label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                name="telefono"
                placeholder="Ingrese su teléfono"
                value={usuario.telefono}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Guardar Cambios
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditarUsuario;
