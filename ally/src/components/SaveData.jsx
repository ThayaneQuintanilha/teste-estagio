import React, { useContext } from 'react';
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
    </section>
  );
}

export default SaveData;
