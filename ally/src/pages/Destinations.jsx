import React from 'react';
import PersonalData from '../components/PersonalData';
import InterestDestinations from '../components/InterestDestinations';

function Destinations() {
  return (
    <main>
      <PersonalData />
      <InterestDestinations />
      <button type="button">Enviar</button>
    </main>
  );
}

export default Destinations;
