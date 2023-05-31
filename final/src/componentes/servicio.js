import React from "react";
import "../styles/servicio.css";

const CartasAzules = () => {
  return (
    <div className="contenedor">
      <div className="carta">
        <div className="contenido">
          <h3 className="h3">MECANICA BASICA</h3>
          <p className="editable">
            Alineacion y Balenceo Cambio de
            Aceite<br/>Cambio de Frenos<br/>Sincronizacion
          </p>
        </div>
      </div>
      <div className="carta">
        <div className="contenido">
          <h3 className="h3">MECANICA ESPECIALIZADA</h3>
          <p className="editable">
            Aire Acondicionado<br/>Amortiguadores<br/>Correa de Reparticion<br/>Kit de
            Embrague<br/>Reparacion de Motor
          </p>
        </div>
      </div>
      <div className="carta">
        <div className="contenido">
          <h3 className="h3">ESTETICA AUTOMOTRIZ</h3>
          <p className="editable">Latoneria<br/>Pintura</p>
        </div>
      </div>
    </div>
  );
};

export default CartasAzules;
