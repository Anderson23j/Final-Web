import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert"; // Importar SweetAlert
import "../index.css";

function RegistroVehiculo() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState("");

  const handleRegistro = () => {
    axios
      .post("http://localhost:3001/vehiculos", { marca, modelo, anio })
      .then((response) => {
        swal("Registro Exitoso", response.data.message, "success"); // Mostrar SweetAlert de éxito
        limpiarCampos();
      })
      .catch((error) => {
        swal("Error", "Error al registrar el vehículo", "error"); // Mostrar SweetAlert de error
        console.error("Error al registrar el vehículo:", error);
      });
  };

  const limpiarCampos = () => {
    setMarca("");
    setModelo("");
    setAnio("");
  };

  return (
    <div className="registro-vehiculo">
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
