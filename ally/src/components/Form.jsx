import React from 'react';
import InterestDestinations from './InterestDestinations';

function PersonalData() {
  return (
    <section>
      <h1>Dados Pessoais</h1>

      <form action="">
        <label htmlFor="nome">
          Nome
          <input type="text" name="nome" placeholder="Nome Completo" required />
        </label>

        <label htmlFor="email">
          E-mail
          <input type="text" name="e-mail" required />
        </label>

        <label htmlFor="telefone">
          Telefone
          <input type="text" name="telefone" required />
        </label>

        <label htmlFor="cpf">
          CPF
          <input type="text" name="cpf" required />
        </label>
        <InterestDestinations />
      </form>

    </section>
  );
}

export default PersonalData;
