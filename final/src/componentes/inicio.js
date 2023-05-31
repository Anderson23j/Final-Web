import React from "react";
import "../styles/inicio.css";
import StarRating from "./StarRating";

function Inicio() {
  return (
    <>
      <div className="inicio">
        <h2 className="h1">BIENVENIDO A TALLER M&A</h2>

        <div className="card-container">
          <div className="card_1">
            <img
              className="card-image"
              src={require("../img/IMG1.png")}
              alt="Poster"
            />
            <h2>Tu taller mecánico de confianza en Medellín</h2>
            <p>Califica nuestro servicio</p>
            <StarRating />
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <img
            className="icon"
            src={require("../img/icono1.png")}
            alt="Icono 1"
          />
          <h2 className="titulo_h2">Técnicos especializados</h2>
          <p className="texto">
            Contamos con técnicos especializados, <br />
            para darte el mejor servicio de mecánica,
            <br /> en la ciudad de Medellín.
          </p>
        </div>
        <div className="card">
          <img
            className="icon"
            src={require("../img/icono2.png")}
            alt="Icono 2"
          />
          <h2 className="titulo_h2">Tecnología de punta</h2>
          <p className="texto">
            Ofrecemos las mejores soluciones profesionales y especializadas, con
            los mejores equipos en tecnología.
          </p>
        </div>
        <div className="card">
          <img
            className="icon"
            src={require("../img/icono1.png")}
            alt="Icono 3"
          />
          <h2 className="titulo_h2">Servicio de calidad</h2>
          <p className="texto">
            Nuestro objetivo es brindarte un servicio de alta calidad y
            satisfacción garantizada.
          </p>
        </div>
        <div className="card">
          <img
            className="icon"
            src={require("../img/icono2.png")}
            alt="Icono 4"
          />
          <h2 className="titulo_h2">Precios competitivos</h2>
          <p className="texto">
            Te ofrecemos precios competitivos y transparentes para todos
            nuestros servicios de mecánica.
          </p>
        </div>
      </div>
    </>
  );
}

export default Inicio;
