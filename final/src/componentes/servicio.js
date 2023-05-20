import React from "react";
import "../styles/servicio.css";

const CartasAzules = () => {
  return (
    <div className="contenedor">
      <div className="carta">
        <div className="contenido">
          <h3 className="h3">MECANICA BASICA</h3>
          <p className="editable">Texto de la Carta 1</p>
        </div>
      </div>
      <div className="carta">
        <div className="contenido">
          <h3 className="h3">MECANICA ESPECIALIZADA</h3>
          <p contentEditable="true" className="editable">
            asds
          </p>
        </div>
      </div>
      <div className="carta">
        <div className="contenido">
          <h3 className="h3">ESTETICA AUTOMOTRIZ</h3>
          <p contentEditable="true" className="editable">
            ASDASDA
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartasAzules;
