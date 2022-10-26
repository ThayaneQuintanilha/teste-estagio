import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MyContext from './myContext';

function Provider({ children }) {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [save, setSave] = useState([]);

  const history = useHistory();
  console.log(history);

  const handleValueName = ({ target: { value } }) => {
    setInputName(value);
  };
  const handleValueEmail = ({ target: { value } }) => {
    setInputEmail(value);
  };
  const handleValuePhone = ({ target: { value } }) => {
    setInputPhone(value);
  };
  const handleValueCpf = ({ target: { value } }) => {
    setInputCpf(value);
  };

  const handleClick = useCallback(() => {
    const values = { inputName, inputEmail, inputPhone, inputCpf };
    setSave(values);
  }, [inputCpf, inputEmail, inputName, inputPhone]);

  const contextValue = useMemo(() => ({
    inputName,
    inputEmail,
    inputPhone,
    inputCpf,
    handleValueName,
    handleValueEmail,
    handleValuePhone,
    handleValueCpf,
    save,
    handleClick,
  }), [inputName, inputEmail, inputPhone, inputCpf, save, handleClick]);

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
