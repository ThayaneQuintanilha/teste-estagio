import React, { useState, useEffect, useContext } from 'react';
// import Multiselect from 'multiselect-react-dropdown';
import { Link } from 'react-router-dom';
import { fetchCountry, fetchCity } from '../services/fetchApi';
import MyContext from '../context/myContext';

function InterestDestinations() {
  const { handleClick } = useContext(MyContext);

  const [countryApi, setCountryApi] = useState([]);
  const [cityApi, setCityApi] = useState([]);
  // const [results, setResults] = useState([]);

  // const reduce = () => {
  //   const result = countryApi.reduce((acc, curr) => {
  //     return { ...acc, [curr.code]: curr.code }
  //   }, {});
  //   console.log(result);
  //   const test = [code: { ...result }]
  //   setResults(test);
  // };

  useEffect(() => {
    const responseApi = async () => {
      setCountryApi(await fetchCountry());
      setCityApi(await fetchCity());
    };
    responseApi();
    // reduce();
  }, []);
  return (
    <section>
      <h1>Destinos de Interesse</h1>

      <div>
        {/* <Multiselect options={ results } displayValue={ results.test } /> */}
        <select name="city">
          {countryApi.map((country) => {
            const { name, code } = country;
            return <option key={ name }>{code}</option>;
          })}
        </select>

        <select name="" id="">
          {cityApi.map((city) => {
            const { name_ptbr: name, id } = city;
            return <option key={ id }>{name}</option>;
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
