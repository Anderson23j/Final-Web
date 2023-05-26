import React, { useState } from "react";
import axios from "axios";

function RegistroVehiculo() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState("");

  const handleRegistro = () => {
    axios
      .post("http://localhost:3001/vehiculos", { marca, modelo, anio })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error("Error al registrar el vehículo:", error);
      });
  };

  return (
    <div>
      <h1>Registro de Vehículo</h1>
      <input
        type="text"
        placeholder="Marca"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
      />
      <input
        type="text"
        placeholder="Modelo"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
      />
      <input
        type="number"
        placeholder="Año"
        value={anio}
        onChange={(e) => setAnio(e.target.value)}
      />
      <button onClick={handleRegistro}>Registrar vehículo</button>
    </div>
  );
}

export default RegistroVehiculo;
