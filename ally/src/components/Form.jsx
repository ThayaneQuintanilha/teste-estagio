import React, { useContext } from 'react';
import InterestDestinations from './InterestDestinations';
import MyContext from '../context/myContext';

function PersonalData() {
  const {
    inputName,
    inputEmail,
    inputPhone,
    inputCpf,
    handleValueName,
    handleValueEmail,
    handleValuePhone,
    handleValueCpf,
  } = useContext(MyContext);

  return (
    <section>
      <h1>Dados Pessoais</h1>

      <form action="formulario">
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            name="nome"
            placeholder="Nome Completo"
            value={ inputName }
            onChange={ handleValueName }
            required
          />
        </label>

        <label htmlFor="email">
          E-mail
          <input
            type="text"
            name="e-mail"
            value={ inputEmail.name }
            onChange={ handleValueEmail }
            required
          />
        </label>

        <label htmlFor="telefone">
          Telefone
          <input
            type="text"
            name="telefone"
            value={ inputPhone.name }
            onChange={ handleValuePhone }
            required
          />
        </label>

        <label htmlFor="cpf">
          CPF
          <input
            type="text"
            name="cpf"
            value={ inputCpf.name }
            onChange={ handleValueCpf }
            required
          />
        </label>
        <InterestDestinations />
      </form>

    </section>
  );
}

export default PersonalData;
