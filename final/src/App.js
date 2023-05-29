import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/navBar.js";
import Inicio from "./componentes/inicio.js";
import Map from "./componentes/sedes.js";
import Servicios from "./componentes/servicio.js";
import Nosotros from "./componentes/nosotros.js";
import Footer from "./componentes/footer.js";
import App from "./componentes/RegistroyConsulta.js";
import Error404 from "./componentes/error404.js";
import ContactoChat from "./componentes/ContactoChat.js";

function MainApp() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/servicio" element={<Servicios />} />
          <Route exact path="/sedes" element={<Map />} />
          <Route exact path="/vehiculo" element={<App />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/contacto" element={<ContactoChat />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default MainApp;
