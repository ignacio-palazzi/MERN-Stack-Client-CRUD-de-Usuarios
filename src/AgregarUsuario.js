import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";

function AgregarUsuario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  function addUser(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    var usuario = {
      nombre,
      email,
      telefono,
      idusuario: uniqid(), // Generar un ID único para el usuario
    };

    axios
      .post("api/usuario/agregar", usuario)
      .then((response) => {
        alert("Usuario agregado", response.data);
        // Aquí podrías redirigir al usuario a la lista de usuarios o mostrar un mensaje de éxito
      })
      .catch((error) => {
        console.error("Error al agregar el usuario:", error);
        // Aquí podrías manejar el error, por ejemplo, mostrando un mensaje al usuario
      });
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h2>Crear un nuevo usuario</h2>
        </div>
        <div className="col-6 offset-3">
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Ingrese su nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
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
                placeholder="Ingrese su email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                placeholder="Ingrese su teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={addUser}>
              Crear Usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AgregarUsuario;
