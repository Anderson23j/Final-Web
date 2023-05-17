import React from "react";
import "../styles/vehiculo.css";

function Vehiculo() {
  return (
    <>
      <div className="main_vehiculo">
        <h1 className="titulo_vehiculo">Bienvenido a taller M&A</h1>
        <form>
          <label>
            Propietario:
            <input type="text" className="input_field" placeholder="Usuario" />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              className="input_field"
              placeholder="Contraseña"
            />
          </label>
          <button type="submit" className="submit_button">
            Iniciar
          </button>
          <button type="submit" className="submit_button">
            Registra tu vehiculo
          </button>
        </form>
      </div>
    </>
  );
}

export default Vehiculo;
