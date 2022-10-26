import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/myContext';

function SaveData() {
  const { save } = useContext(MyContext);
  return (
    <section>
      <ul>
        <li>{save.inputName}</li>
        <li>{save.inputEmail}</li>
        <li>{save.inputPhone}</li>
        <li>{save.inputCpf}</li>
        <li>{save.inputCountry}</li>
        <li>{save.inputCity}</li>
      </ul>
      <Link to="/">
        <button type="button">Voltar</button>
      </Link>
    </section>
  );
}

export default SaveData;
