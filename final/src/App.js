import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/navBar";
import Inicio from "./componentes/inicio";
import Footer from "./componentes/footer";
import Error404 from "./componentes/error404";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Inicio />}></Route>
          <Route exact path="/servicio" element={<Error404 />}></Route>
          <Route exact path="/Sedes" element={<Error404 />}></Route>
          <Route exact path="/Blog" element={<Error404 />}></Route>
          <Route exact path="/nosotros" element={<Error404 />}></Route>
          <Route exact path="/contacto" element={<Error404 />}></Route>
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
