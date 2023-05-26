import React, { useState } from "react";
import axios from "axios";

function ConsultaVehiculo() {
  const [id, setId] = useState("");
  const [vehiculo, setVehiculo] = useState(null);

  const handleConsulta = () => {
    axios
      .get(`http://localhost:3001/vehiculos/${id}`)
      .then((response) => {
        setVehiculo(response.data);
      })
      .catch((error) => {
        console.error("Error al consultar el vehículo:", error);
        setVehiculo(null);
      });
  };

  return (
    <div>
      <h1>Consulta de Vehículo</h1>
      <input
        type="text"
        placeholder="ID del vehículo"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleConsulta}>Consultar vehículo</button>
      {vehiculo && (
        <div>
          <h2>Información del vehículo:</h2>
          <p>Marca: {vehiculo.marca}</p>
          <p>Modelo: {vehiculo.modelo}</p>
          <p>Año: {vehiculo.anio}</p>
        </div>
      )}
    </div>
  );
}

export default ConsultaVehiculo;
