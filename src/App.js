import "./App.css";
import ListaUsuarios from "./ListaUsuarios";
import AgregarUsuario from "./AgregarUsuario";
import EditarUsuario from "./EditarUsuario";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Crud MERN Stack
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/agregar" className="nav-link">
                    Agregar Usuario
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ListaUsuarios />} />
          <Route path="/agregar" element={<AgregarUsuario />} />
          <Route path="/editar/:idusuario" element={<EditarUsuario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
