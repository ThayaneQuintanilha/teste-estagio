import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/myContext';

function SaveData() {
  const { save, country, city } = useContext(MyContext);
  return (
    <section>
      <ul>
        <li>{save.inputName}</li>
        <li>{save.inputEmail}</li>
        <li>{save.inputPhone}</li>
        <li>{save.inputCpf}</li>
        <li>
          {country.map((e, index) => <span key={ index }>{`${e.value}, `}</span>)}
        </li>
        <li>
          {city.map((e, index) => <span key={ index }>{`${e.value}, `}</span>)}
        </li>
      </ul>
      <Link to="/">
        <button type="button">Voltar</button>
      </Link>
    </section>
  );
}

export default SaveData;
