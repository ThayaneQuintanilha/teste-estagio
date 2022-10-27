import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import MyContext from '../context/myContext';
import '../styles/interest.css';

function InterestDestinations() {
  const { handleClick, handleValueCountry, handleValueCity, selectCountry,
    selectCity } = useContext(MyContext);

  return (
    <section className="section-interest">
      <h1>Destinos de Interesse</h1>

      <Select
        className="interest-section"
        isMulti
        options={ selectCountry }
        isClearable
        isSearchable
        isDisabled={ false }
        isLoading={ false }
        isRtl={ false }
        data-testid="country-input"
        onChange={ (country) => handleValueCountry(country) }
      />

      <Select
        className="interest-section"
        isMulti
        options={ selectCity }
        isClearable
        isSearchable
        isDisabled={ false }
        isLoading={ false }
        isRtl={ false }
        data-testid="city-input"
        onChange={ (city) => handleValueCity(city) }
      />
      <div>
        <Link to="/saveform" refresh="true">
          <button
            data-testid="send-btn"
            type="button"
            onClick={ handleClick }
          >
            Enviar
          </button>
        </Link>
      </div>
    </section>
  );
}

export default InterestDestinations;
