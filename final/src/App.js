import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/navBar";
import Inicio from "./componentes/inicio";
import Footer from "./componentes/footer";
import Servicio from "./componentes/servicio";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Inicio />}></Route>
          <Route exact path="/servicio" element={<Servicio />}></Route>
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
