import React, { useState, useMemo, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchCountry, fetchCity } from '../services/fetchApi';
import MyContext from './myContext';

function Provider({ children }) {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [save, setSave] = useState('');
  const [countryApi, setCountryApi] = useState([]);
  const [cityApi, setCityApi] = useState([]);
  const [selectCountry, setSelectCountry] = useState([]);
  const [selectCity, setSelectCity] = useState([]);
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const responseApi = async () => {
      setCountryApi(await fetchCountry());
      setCityApi(await fetchCity());
    };
    responseApi();
  }, []);

  const handleValueName = ({ target: { value } }) => setInputName(value);
  const handleValueEmail = ({ target: { value } }) => setInputEmail(value);
  const handleValuePhone = ({ target: { value } }) => setInputPhone(value);
  const handleValueCpf = ({ target: { value } }) => setInputCpf(value);
  const handleValueCountry = (value) => setCountry(value);
  const handleValueCity = (value) => setCity(value);

  const handleClick = useCallback(() => {
    const values = { inputName,
      inputEmail,
      inputPhone,
      inputCpf,
      selectCountry,
      selectCity,
      country,
      city };
    setSave(values);
  }, [city, country, inputCpf, inputEmail, inputName, inputPhone, selectCity,
    selectCountry]);

  const reduceCountry = useCallback(() => {
    const response = countryApi.reduce((acc, curr) => {
      const result = [...acc, { label: curr.code, value: curr.code }];
      return result;
    }, []);
    return setSelectCountry(response);
  }, [countryApi]);

  const reduceCity = useCallback(() => {
    const response = cityApi.reduce((acc, curr) => {
      const result = [...acc, { label: curr.name, value: curr.name }];
      return result;
    }, []);
    return setSelectCity(response);
  }, [cityApi]);

  useEffect(() => {
    reduceCountry();
    reduceCity();
  }, [countryApi, cityApi, reduceCountry, reduceCity]);

  const contextValue = useMemo(() => ({
    inputName,
    inputEmail,
    inputPhone,
    inputCpf,
    selectCountry,
    selectCity,
    country,
    city,
    handleValueName,
    handleValueEmail,
    handleValuePhone,
    handleValueCpf,
    save,
    handleValueCountry,
    handleValueCity,
    handleClick,
  }), [inputName, inputEmail, inputPhone, inputCpf, selectCountry,
    selectCity,
    country,
    city,
    save,
    handleClick]);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
