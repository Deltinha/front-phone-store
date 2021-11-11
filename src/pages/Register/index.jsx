/* eslint-disable no-nested-ternary */
import axios from 'axios';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import * as S from './style';

export default function Register() {
  const [isStep1, setIsStep1] = useState(true);
  const [isStep2, setIsStep2] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cpf, setCpf] = useState('');

  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const goToStep2 = () => {
    setIsStep1(false);
    setIsStep2(true);
  };
  const goToStep3 = () => {
    setIsStep2(false);
  };
  const submitForm = () => {
    const body = {
      firstName,
      lastName,
      email,
      password,
      cep,
      state,
      city,
      neighborhood,
      street,
      addressNumber,
      complement,
      cpf,
      phoneNumber,
    };
    axios.post('http://localhost:4000/user', body);
  };
  return (
    <S.Center>
      <S.Content>
        {/* <S.Logo src={imgLogo} alt="store logo"/> */}

        <S.Register>
          <h3>Criar conta</h3>
        </S.Register>
        <S.Form>
          {isStep1 ? (
            <S.DivRegister>
              <input
                label="E-mail"
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
                autoComplete="off"
              />
              <input
                label="Password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
              <input
                label="Repeat Password"
                type="password"
                placeholder="Insira a senha novamente"
                value={repeatPassword}
                onChange={(event) => setRepeatPassword(event.currentTarget.value)}
              />
              <button type="button" onClick={goToStep2}>Avançar</button>
            </S.DivRegister>
          ) : (isStep2
            ? (
              <S.DivRegister>
                <input
                  label="First Name"
                  type="text"
                  placeholder="Seu nome"
                  value={firstName}
                  onChange={(event) => setFirstName(event.currentTarget.value)}
                />
                <input
                  label="Last Name"
                  type="text"
                  placeholder="Sobrenome"
                  value={lastName}
                  onChange={(event) => setLastName(event.currentTarget.value)}
                />
                <input
                  label="Phone Number"
                  type="text"
                  placeholder="Telefone"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.currentTarget.value)}
                />
                <input
                  label="CPF"
                  type="text"
                  placeholder="CPF"
                  value={cpf}
                  onChange={(event) => setCpf(event.currentTarget.value)}
                />
                <button type="button" onClick={goToStep3}>Confirmar informações</button>

              </S.DivRegister>
            )
            : (
              <S.DivRegister>

                <input
                  label="CEP"
                  type="text"
                  placeholder="CEP"
                  value={cep}
                  onChange={(event) => setCep(event.currentTarget.value)}
                />
                <input
                  label="Street"
                  type="text"
                  placeholder="Endereço"
                  value={street}
                  onChange={(event) => setStreet(event.currentTarget.value)}
                />
                <input
                  label="Address Number"
                  type="text"
                  placeholder="Número da Residência"
                  value={addressNumber}
                  onChange={(event) => setAddressNumber(event.currentTarget.value)}
                />
                <input
                  label="Complement"
                  type="text"
                  placeholder="Complemento (opcional)"
                  value={complement}
                  onChange={(event) => setComplement(event.currentTarget.value)}
                />
                <input
                  label="Neighborhood"
                  type="text"
                  placeholder="Bairro"
                  value={neighborhood}
                  onChange={(event) => setNeighborhood(event.currentTarget.value)}
                />
                <input
                  label="City"
                  type="text"
                  placeholder="Cidade"
                  value={city}
                  onChange={(event) => setCity(event.currentTarget.value)}
                />
                <input
                  label="State"
                  type="text"
                  placeholder="Estado"
                  value={state}
                  onChange={(event) => setState(event.currentTarget.value)}
                />
                <button type="submit" onClick={submitForm}>Criar conta</button>
              </S.DivRegister>
            )

          )}
        </S.Form>
        {/* <S.Register>
          <Link to="/login">Já tem conta? Faça login!</Link>
        </S.Register> */}
      </S.Content>
    </S.Center>

  );
}
