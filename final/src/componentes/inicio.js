import React from "react";
import "../styles/inicio.css";
function Inicio() {
  return (
    <>
      <div className="inicio">
        <h1>Taller Mecánico</h1>
        <p className="p">
          Tu taller mecánico de <br />
          confianza en Medellín
        </p>
      </div>
      <div className="Card">
        <img className="Card_img" src={require("../img/IMG1.png")} />
        <p>Calificado por 4000 clientes de Taller M&A</p>
      </div>
    </>
  );
}

export default Inicio;
