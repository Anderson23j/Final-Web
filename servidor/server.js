const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swal = require("sweetalert");

const app = express();
const port = 3001;

// Conexión a la base de datos MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/vehiculos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((error) => {
    console.log("Error al conectar a MongoDB: " + error);
  });

// Definir el esquema del vehículo
const vehiculoSchema = new mongoose.Schema({
  marca: String,
  modelo: String,
  anio: Number,
});

// Definir el modelo del vehículo
const Vehiculo = mongoose.model("Vehiculo", vehiculoSchema);

app.use(express.json());
app.use(cors());

// Ruta para registrar un vehículo
app.post("/vehiculos", (req, res) => {
  const { marca, modelo, anio } = req.body;

  const nuevoVehiculo = new Vehiculo({
    marca,
    modelo,
    anio,
  });

  nuevoVehiculo
    .save()
    .then(() => {
      swal("Vehículo registrado exitosamente");
      res.status(201).json({ message: "Vehículo registrado exitosamente" });
    })
    .catch((error) => {
      swal("Error al registrar el vehículo: " + error);
      res.status(500).json({ error: "Error al registrar el vehículo" });
    });
});

// Ruta para consultar un vehículo por ID
app.get("/vehiculos/:id", (req, res) => {
  const { id } = req.params;

  Vehiculo.findById(id)
    .then((vehiculo) => {
      if (vehiculo) {
        res.status(200).json(vehiculo);
      } else {
        res.status(404).json({ error: "Vehículo no encontrado" });
      }
    })
    .catch((error) => {
      swal("Error al consultar el vehículo: " + error);
      res.status(500).json({ error: "Error al consultar el vehículo" });
    });
});

// Ruta para modificar un vehículo por ID
app.put("/vehiculos/:id", (req, res) => {
  const { id } = req.params;
  const { marca, modelo, anio } = req.body;

  Vehiculo.findByIdAndUpdate(id, { marca, modelo, anio }, { new: true })
    .then((vehiculo) => {
      if (vehiculo) {
        swal("Vehículo modificado exitosamente");
        res.status(200).json({ message: "Vehículo modificado exitosamente" });
      } else {
        res.status(404).json({ error: "Vehículo no encontrado" });
      }
    })
    .catch((error) => {
      swal("Error al modificar el vehículo: " + error);
      res.status(500).json({ error: "Error al modificar el vehículo" });
    });
});

// Ruta para eliminar un vehículo por ID
app.delete("/vehiculos/:id", (req, res) => {
  const { id } = req.params;

  Vehiculo.findByIdAndRemove(id)
    .then((vehiculo) => {
      if (vehiculo) {
        swal("Vehículo eliminado exitosamente");
        res.status(200).json({ message: "Vehículo eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "Vehículo no encontrado" });
      }
    })
    .catch((error) => {
      swal("Error al eliminar el vehículo: " + error);
      res.status(500).json({ error: "Error al eliminar el vehículo" });
    });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log("Servidor escuchando en http://localhost:" + port);
});
