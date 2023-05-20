import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/navBar";
import Inicio from "./componentes/inicio";
import Footer from "./componentes/footer";
import Error404 from "./componentes/error404";
import Vehiculo from "./componentes/vehiculo";
import Map from "./componentes/sedes";
import Servicios from "./componentes/servicio";
import Nosotros from "./componentes/nosotros";


function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Inicio />}></Route>
          <Route exact path="/servicio" element={<Servicios />}></Route>
          <Route exact path="/Sedes" element={<Map />}></Route>
          <Route exact path="/vehiculo" element={<Vehiculo />}></Route>
          <Route exact path="/nosotros" element={<Nosotros />}></Route>
          <Route exact path="/contacto" element={<Error404 />}></Route>
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
