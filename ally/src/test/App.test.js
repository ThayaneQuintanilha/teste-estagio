import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando o componente <App />', () => {
  it('Verificando se os inputs estão na tela/botão e testando o evento de click.', () => {
    render(<App />);
    const inputName = screen.getByTestId('name-input');
    const inputEmail = screen.getByTestId('email-input');
    const inputPhone = screen.getByTestId('phone-input');
    const inputCpf = screen.getByTestId('cpf-input');
    const selectCountry = screen.getByTestId('country-input');
    const selectCity = screen.getByTestId('city-input');
    const button = screen.getByTestId('send-btn');

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPhone).toBeInTheDocument();
    expect(inputCpf).toBeInTheDocument();
    expect(selectCountry).toBeInTheDocument();
    expect(selectCity).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.type(inputName, 'Thayane');
    userEvent.type(inputEmail, 'thayaniquintanilha2@gmail.com');
    userEvent.type(inputPhone, '21993876216');
    userEvent.type(inputCpf, '00000000000');
    userEvent.type(selectCountry);
    userEvent.type(selectCity, 'Amparo, State of São Paulo, Brazil');
  });
});
