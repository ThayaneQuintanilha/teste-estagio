import React from 'react';

function PersonalData() {
  return (
    <section>
        <h1>Dados Pessoais</h1>

        <form action="">
          <label>Nome
          <input type="text" name="nome" placeholder="Nome Completo"/>
          </label>

          <label>E-mail
          <input type="text" name="e-mail" />
          </label>

          <label>Telefone
          <input type="text" name="telefone" />
          </label>

          <label>CPF
          <input type="text" name="cpf" />
          </label>
        </form>

      </section>
  );
}

export default PersonalData;
