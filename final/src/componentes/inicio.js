import React from "react";
import "../styles/inicio.css";
import StarRating from "./StarRating";
function Inicio() {
  return (
    <>
      <div className="inicio">
        <h2 className="h1">Taller Mecánico</h2>
        <p className="p">
          Tu taller mecánico de <br />
          confianza en Medellín
        </p>
        <div>
          <h2 className="estrellas">Califica el producto</h2>
          <StarRating />
        </div>
      </div>
      <div className="Card">
        <img className="Card_img" src={require("../img/IMG1.png")} />
        <p>Calificado por 4000 clientes de Taller M&A</p>
      </div>
      <h1 class="animated-h1">
        <span>B</span>
        <span>I</span>
        <span>E</span>
        <span>N</span>
        <span>V</span>
        <span>E</span>
        <span>N</span>
        <span>I</span>
        <span>D</span>
        <span>O</span>
        <span>S</span>
      </h1>

      <div className="conatiner">
        <div className="Card1">
          <img className="icon1" src={require("../img/icono1.png")} />
          <h2 className="titulo_h2">Técnicos especializados</h2>
          <p className="texto">
            Contamos con técnicos especializados, <br />
            para darte el mejor servicio de mecánica,
            <br /> en la ciudad de Medellín.
          </p>
        </div>
        <div className="Card1">
          <img className="icon1" src={require("../img/icono2.png")} />
          <h2 className="titulo_h2">Técnicos especializados</h2>
          <p className="texto">
            Contamos con técnicos especializados, <br />
            para darte el mejor servicio de mecánica,
            <br /> en la ciudad de Medellín.
          </p>
        </div>
      </div>
    </>
  );
}

export default Inicio;
