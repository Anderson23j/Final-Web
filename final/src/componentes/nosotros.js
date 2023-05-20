import React from 'react';
import '../styles/nosotros.css';

const nosotros = () => {
  return (
    <div className="container">
      <div className="card">
        <h2 className="card-title">Mision</h2>
        <p className="card-text">Ser una empresa especializad repuestos, accesorios, mantenimiento preventivo y correctivo y trabajos de carrocería y pintura. Contar con personal altamente cualificado, tecnología punta e infraestructura que garanticen siempre un servicio integral de máxima calidad. Cumplir con los estándares de las marca, normas ambientales y del entorno social y trabajar por el bienestar y crecimiento de nuestro talento humano.</p>
      </div>

      <div className="card">
        <h2 className="card-title">Vision</h2>
        <p className="card-text">Ser la empresa referente y mantener la posición de liderazgo en su mercado, manteniendo unos volúmenes que le proporcionen una rentabilidad adecuada para la continuidad de la misma. Ser una empresa colombiana de referencia en el sector automotriz en calidad, tecnología, infraestructura, capital humano, rentabilidad y solidez financiera, excediendo las expectativas de clientes, empleados y proveedores.</p>
      </div>
    </div>
  );
};

export default nosotros;

