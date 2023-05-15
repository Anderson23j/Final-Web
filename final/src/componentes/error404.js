import React from "react";
import "../styles/error.css";

function Error404() {
  return (
    <>
      <div className="conten">
        <div className="conten__img">
          <img className="img" s src={require("../img/404.png")} />
          <p className="conten__number">404</p>
        </div>
        <div classNames="conten__Description">
          <p className="conten__error">
            UPSSSS!!!! Algo salio mal, pagina no encontrada.
          </p>
        </div>
      </div>
    </>
  );
}

export default Error404;
