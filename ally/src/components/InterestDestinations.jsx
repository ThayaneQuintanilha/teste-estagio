import React, { useState, useEffect } from "react";
import { fetchCountry, fetchCity } from "../services/fetchApi";

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

      <form action="forum">
        <select name="city">
          {countryApi.map((country) => {
            const { name, code } = country;
            return <option key={name}>{ code }</option>;
          })}
        </select>

        <select name="" id="">
          {cityApi.map((city) => {
            const { name_ptbr, id } = city;
            return <option key={id}>{ name_ptbr }</option>
          })}
        </select>
      </form>
    </section>
  );
}

export default InterestDestinations;
