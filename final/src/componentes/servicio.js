import React from 'react';
import '../styles/servicio.css';

const cardsData = [
  { title: 'MECANICA BASICA', content: 'Alineación y Balanceo<br>Cambio de Aceite<br>Cambio de Frenos<br>Sincronización' },
  { title: 'MECANICA ESPECIALIZADA', content: 'Aire acondicionado<br>Amortiguadores<br>Correa de Repartición<br>Eléctrica y Electrónica<br>Kit de Embrague<br>Reparación de Motor<br>Suspensión' },
  { title: 'REVISION AUTOMOTRIZ', content: 'Diagnóstico Automotriz<br>Peritaje<br>Revisión Mecánica<br>Revisión Por Kilometraje<br>Revisión Tecno-Mecánica' },
  { title: 'ESTETICA AUTOMOTRIZ', content: 'Latoneria<br>Pintura' },
];

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

const Servicio = () => {
  return (
    <div className="container">
      <div className="grid">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default Servicio;
