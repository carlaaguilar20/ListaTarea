import React from 'react';

const fechaActual = new Date();
const formatoFecha = fechaActual.toLocaleDateString('es-AR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});


const ComponenteFecha = () => {
  const fechaActual = new Date();
  const formatoFecha = fechaActual.toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className='formato__fecha' >
      <h1 className='formato__fecha' >
      {formatoFecha}
        </h1>
    </div>
  );
};

export default ComponenteFecha;
