import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountry, fetchCity } from '../services/fetchApi';
import MyContext from '../context/myContext';

function InterestDestinations() {
  const { handleClick, inputCountry, inputCity, handleValueCountry,
    handleValueCity } = useContext(MyContext);

  const [countryApi, setCountryApi] = useState([]);
  const [cityApi, setCityApi] = useState([]);

  useEffect(() => {
    const responseApi = async () => {
      setCountryApi(await fetchCountry());
      setCityApi(await fetchCity());
    };
    responseApi();
  }, []);
  return (
    <section>
      <h1>Destinos de Interesse</h1>

      <div>

        <select
          name="city"
          value={ inputCountry }
          onChange={ handleValueCountry }
        >
          {countryApi.map((country) => {
            const { name, code } = country;
            return (
              <option
                key={ name }
              >
                {code}
              </option>
            );
          })}
        </select>

        <select
          name=""
          id=""
          value={ inputCity }
          onChange={ handleValueCity }
        >
          {cityApi.map((city) => {
            const { name_ptbr: name, id } = city;
            return (
              <option
                key={ id }
              >
                {name}
              </option>
            );
          })}
        </select>
        <Link to="/saveform" refresh="true">
          <button type="button" onClick={ handleClick }>Enviar</button>
        </Link>
      </div>
    </section>
  );
}

export default InterestDestinations;
