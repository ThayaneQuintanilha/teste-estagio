import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [inputCountry, setInputCountry] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [save, setSave] = useState('');

  const handleValueName = ({ target: { value } }) => setInputName(value);
  const handleValueEmail = ({ target: { value } }) => setInputEmail(value);
  const handleValuePhone = ({ target: { value } }) => setInputPhone(value);
  const handleValueCpf = ({ target: { value } }) => setInputCpf(value);
  const handleValueCountry = ({ target: { value } }) => setInputCountry(value);
  const handleValueCity = ({ target: { value } }) => setInputCity(value);

  const handleClick = useCallback(() => {
    const values = { inputName,
      inputEmail,
      inputPhone,
      inputCpf,
      inputCountry,
      inputCity };
    setSave(values);
  }, [inputCity, inputCountry, inputCpf, inputEmail, inputName, inputPhone]);

  const contextValue = useMemo(() => ({
    inputName,
    inputEmail,
    inputPhone,
    inputCpf,
    inputCountry,
    inputCity,
    handleValueName,
    handleValueEmail,
    handleValuePhone,
    handleValueCpf,
    handleValueCountry,
    handleValueCity,
    save,
    handleClick,
  }), [inputName,
    inputEmail, inputPhone, inputCpf, inputCountry, inputCity, save, handleClick]);

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
