import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert"; // Importar SweetAlert
import "../styles/ConsultaVehiculo.css"; // Importar el archivo CSS personalizado

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

  const handleGuardar = () => {
    if (vehiculo) {
      // Realizar la solicitud PUT para modificar la información del vehículo
      axios
        .put(`http://localhost:3001/vehiculos/${vehiculo._id}`, {
          marca: vehiculo.marca,
          modelo: vehiculo.modelo,
          anio: vehiculo.anio,
        })
        .then((response) => {
          swal(
            "Vehículo modificado",
            response.data && response.data.toString(),
            "success"
          ); // Mostrar SweetAlert de éxito
          setVehiculo(null); // Limpiar los campos después de guardar
        })
        .catch((error) => {
          swal("Error", error.message, "error"); // Mostrar SweetAlert de error
        });
    }
  };

  const handleChangeMarca = (e) => {
    setVehiculo({ ...vehiculo, marca: e.target.value });
  };

  const handleChangeModelo = (e) => {
    setVehiculo({ ...vehiculo, modelo: e.target.value });
  };

  const handleChangeAnio = (e) => {
    setVehiculo({ ...vehiculo, anio: e.target.value });
  };

  return (
    <div className="consulta-vehiculo">
      <h1 className="consulta-vehiculo__title">Consulta de Vehículo</h1>
      <input
        type="text"
        placeholder="ID del vehículo"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="consulta-vehiculo__input"
      />
      <button className="consulta-vehiculo__button" onClick={handleConsulta}>
        Consultar vehículo
      </button>
      {vehiculo && (
        <div className="consulta-vehiculo__info">
          <h2>Información del vehículo:</h2>
          <label htmlFor="marcaInput">Marca:</label>
          <input
            type="text"
            value={vehiculo.marca}
            onChange={handleChangeMarca}
            id="marcaInput"
            className="consulta-vehiculo__input"
          />

          <label htmlFor="modeloInput">Modelo:</label>
          <input
            type="text"
            value={vehiculo.modelo}
            onChange={handleChangeModelo}
            id="modeloInput"
            className="consulta-vehiculo__input"
          />

          <label htmlFor="anioInput">Año:</label>
          <input
            type="number"
            value={vehiculo.anio}
            onChange={handleChangeAnio}
            id="anioInput"
            className="consulta-vehiculo__input"
          />

          <button className="consulta-vehiculo__button" onClick={handleGuardar}>
            Guardar
          </button>
        </div>
      )}
    </div>
  );
}

export default ConsultaVehiculo;
