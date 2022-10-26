import React, { useState, useEffect } from 'react';
import { fetchCountry, fetchCity } from '../services/fetchApi';

function InterestDestinations() {
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
        <select name="city">
          {countryApi.map((country) => {
            const { name, code } = country;
            return <option key={ name }>{ code }</option>;
          })}
        </select>

        <select name="" id="">
          {cityApi.map((city) => {
            const { name_ptbr: name, id } = city;
            return <option key={ id }>{ name }</option>;
          })}
        </select>
        <button type="submit">Enviar</button>
      </div>
    </section>
  );
}

export default InterestDestinations;
