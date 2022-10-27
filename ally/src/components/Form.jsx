import React, { useContext } from 'react';
import InterestDestinations from './InterestDestinations';
import MyContext from '../context/myContext';
import '../styles/form.css';

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
    <section className="section-form">
      <h1>Dados Pessoais</h1>

      <form action="formulario">
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            name="nome"
            placeholder="Nome Completo"
            value={ inputName }
            onChange={ handleValueName }
            data-testid="name-input"
            required
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            type="text"
            name="e-mail"
            value={ inputEmail }
            onChange={ handleValueEmail }
            data-testid="email-input"
            required
          />
        </label>

        <label htmlFor="telefone">
          Telefone:
          <input
            type="text"
            name="telefone"
            value={ inputPhone }
            onChange={ handleValuePhone }
            data-testid="phone-input"
            required
          />
        </label>

        <label htmlFor="cpf">
          CPF:
          <input
            type="text"
            name="cpf"
            value={ inputCpf }
            onChange={ handleValueCpf }
            data-testid="cpf-input"
            required
          />
        </label>
        <InterestDestinations />
      </form>
    </section>
  );
}

export default PersonalData;
