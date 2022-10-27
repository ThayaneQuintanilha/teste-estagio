import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import MyContext from '../context/myContext';

function InterestDestinations() {
  const { handleClick, handleValueCountry, handleValueCity, selectCountry,
    selectCity } = useContext(MyContext);

  return (
    <section>
      <h1>Destinos de Interesse</h1>
      <Select
        isMulti
        options={ selectCountry }
        isClearable
        isSearchable
        isDisabled={ false }
        isLoading={ false }
        isRtl={ false }
        onChange={ (country) => handleValueCountry(country) }
      />

      <Select
        isMulti
        options={ selectCity }
        isClearable
        isSearchable
        isDisabled={ false }
        isLoading={ false }
        isRtl={ false }
        onChange={ (city) => handleValueCity(city) }
      />

      <div>
        <Link to="/saveform" refresh="true">
          <button type="button" onClick={ handleClick }>Enviar</button>
        </Link>
      </div>
    </section>
  );
}

export default InterestDestinations;
