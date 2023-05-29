import React from "react";
import "../styles/servicio.css";

const CartasAzules = () => {
  return (
    <div className="contenedor">
      <div className="carta">
        <div className="contenido">
          <h3 className="h3">MECANICA BASICA</h3>
          <p className="editable">
            Alineacion y Balenceo Cambio de <br />
            Aceite Cambio de Frenos Sincronizacion
          </p>
        </div>
      </div>
      <div className="carta">
        <div className="contenido">
          <h3 className="h3">MECANICA ESPECIALIZADA</h3>
          <p contentEditable="true" className="editable">
            Aire Acondicionado Amortiguadores Correa de Reparticion Kit de
            Embrague Reparacion de Motor
          </p>
        </div>
      </div>
      <div className="carta">
        <div className="contenido">
          <h3 className="h3">ESTETICA AUTOMOTRIZ</h3>
          <p contentEditable="true" className="editable">
            Latoneria Pintura
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartasAzules;
