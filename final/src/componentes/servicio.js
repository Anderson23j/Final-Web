import React from 'react';
import '../styles/servicio.css';

const cardsData = [
  { title: 'MECANICA BASICA', content: 'Alineación y Balanceo Cambio de Aceite Cambio de Frenos Sincronización' },
  { title: 'MECANICA ESPECIALIZADA', content: 'Aire acondicionado Amortiguadores Correa de Repartición Eléctrica y Electrónica Kit de Embrague Reparación de Motor Suspensión' },
  { title: 'REVISION AUTOMOTRIZ', content: 'Diagnóstico Automotriz Peritaje Revisión Mecánica Revisión Por Kilometraje Revisión Tecno-Mecánica' },
  { title: 'ESTETICA AUTOMOTRIZ', content: 'Latoneria Pintura' },
];

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const servicio = () => {
  return (
    <div className="container">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default servicio;
