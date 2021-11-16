/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { createNewUser } from '../../services/user.api';
import * as S from './style';
import UserContext from '../../contexts/userContext';
import imgLogo from '../../assets/logo.svg';
import ToastError from '../../utils/toastError';
import { Alert } from '../../utils/alertConfig';

export default function Register() {
  const history = useHistory();

  const { user } = useContext(UserContext);

  if (user && user.token) {
    history.push('/');
  }

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

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const [firstNameIsValid, setFirstNameIsValid] = useState(false);
  const [lastNameIsValid, setLastNameIsValid] = useState(false);
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false);
  const [cpfIsValid, setCpfIsValid] = useState(false);

  const [cepIsValid, setCepIsValid] = useState(false);
  const [adressNumberIsValid, setAdressNumberIsValid] = useState(false);
  const [addressIsValid, setAdressIsValid] = useState(false);

  useEffect(() => {
    setEmailIsValid(
      !!email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ),
    );
    setPasswordIsValid(
      !!(password.length >= 6 && password.length <= 15),
    );
    setPasswordsMatch(
      !!(password === repeatPassword),
    );
    setFirstNameIsValid(!!firstName);
    setLastNameIsValid(!!lastName);
    setPhoneNumberIsValid(!!phoneNumber.match(/^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/));
    setCpfIsValid(!!cpf.match(/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/));

    setCepIsValid(!!cep.match(/^[0-9]{8}$/));
    setAdressNumberIsValid(!!addressNumber.match(/^[0-9]*$/));
    setAdressIsValid(
      !!(
        cep
        && state
        && city
        && neighborhood
        && street
        && addressNumber
      ),
    );
  }, [firstName,
    lastName,
    email,
    password,
    repeatPassword,
    cep,
    state,
    city,
    neighborhood,
    street,
    addressNumber,
    cpf,
    phoneNumber,
  ]);

  const goToStep2 = () => {
    if (!emailIsValid) return ToastError('Por favor, insira um e-mail válido.');
    if (!passwordIsValid) return ToastError('Senha inválida.');
    if (!passwordsMatch) return ToastError('As senhas não combinam');
    if (
      emailIsValid
      && passwordIsValid
      && passwordsMatch
    ) {
      setIsStep1(false);
      setIsStep2(true);
    }
  };
  const goToStep3 = () => {
    if (!firstNameIsValid) return ToastError('Seu nome é um campo obrigatório :)');
    if (!lastNameIsValid) return ToastError('Seu sobrenome também é um campo obrigatório :)');
    if (!phoneNumber) return ToastError('Seu número de telefone é importante caso precisemos entrar em contato :)');
    if (!phoneNumberIsValid) return ToastError('O número de telefone que você inseriu não é válido :(');
    if (!cpf) return ToastError('Precisamos do seu CPF por questões de segurança :)');
    if (!cpfIsValid) return ToastError('O CPF que você inseriu não é válido :(');
    if (firstNameIsValid && lastNameIsValid && phoneNumberIsValid && cpfIsValid) setIsStep2(false);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (!addressIsValid) return ToastError('É preciso preencher todos os campos obrigatórios :(');
    if (!cepIsValid) return ToastError('CEP inválido :(');
    if (!adressNumberIsValid) return ToastError('O campo de número da residencia aceita apenas caracteres numéricos :)');

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
      ...(complement && { complement }),
      cpf,
      phoneNumber,
    };
    if (addressIsValid) {
      createNewUser(body).then(() => {
        history.push('/login');
      }).catch(() => {
        Alert.fire('Algo deu errado, por favor recarregue');
      });
    } else {
      Alert.fire('Informações inválidas');
    }
  };
  return (
    <S.Center>
      <S.Content>
        <S.Logo src={imgLogo} alt="store logo" />
        <S.PageTitle>
          <h3>Criar conta</h3>
        </S.PageTitle>
        <S.Form>
          {isStep1 ? (
            <S.DivRegister>
              <input
                key="E-mail"
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
                autoComplete="off"
                required
              />
              <input
                key="Password"
                type="password"
                placeholder="Senha entre 6 e 15 caracteres"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
                required
              />
              <input
                key="Repeat Password"
                type="password"
                placeholder="Insira a senha novamente"
                value={repeatPassword}
                onChange={(event) => setRepeatPassword(event.currentTarget.value)}
                required
              />
              <button type="button" onClick={goToStep2}>Avançar</button>
            </S.DivRegister>
          ) : (isStep2
            ? (
              <S.DivRegister>
                <input
                  key="First Name"
                  type="text"
                  placeholder="Seu nome"
                  value={firstName}
                  onChange={(event) => setFirstName(event.currentTarget.value)}
                  required
                />
                <input
                  key="Last Name"
                  type="text"
                  placeholder="Sobrenome"
                  value={lastName}
                  onChange={(event) => setLastName(event.currentTarget.value)}
                  required
                />
                <input
                  key="Phone Number"
                  type="text"
                  placeholder="Telefone"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.currentTarget.value)}
                  required
                />
                <input
                  key="CPF"
                  type="text"
                  placeholder="CPF"
                  value={cpf}
                  onChange={(event) => setCpf(event.currentTarget.value)}
                  required
                />
                <button type="button" onClick={goToStep3}>Confirmar informações</button>
              </S.DivRegister>
            )
            : (
              <S.DivRegister>
                <input
                  key="CEP"
                  type="text"
                  placeholder="CEP"
                  value={cep}
                  onChange={(event) => setCep(event.currentTarget.value)}
                  required
                />
                <input
                  key="Street"
                  type="text"
                  placeholder="Endereço"
                  value={street}
                  onChange={(event) => setStreet(event.currentTarget.value)}
                  required
                />
                <input
                  key="Address Number"
                  type="text"
                  placeholder="Número da Residência"
                  value={addressNumber}
                  onChange={(event) => setAddressNumber(event.currentTarget.value)}
                  required
                />
                <input
                  key="Complement"
                  type="text"
                  placeholder="Complemento (opcional)"
                  value={complement}
                  onChange={(event) => setComplement(event.currentTarget.value)}
                />
                <input
                  key="Neighborhood"
                  type="text"
                  placeholder="Bairro"
                  value={neighborhood}
                  onChange={(event) => setNeighborhood(event.currentTarget.value)}
                  required
                />
                <input
                  key="City"
                  type="text"
                  placeholder="Cidade"
                  value={city}
                  onChange={(event) => setCity(event.currentTarget.value)}
                  required
                />
                <input
                  key="State"
                  type="text"
                  placeholder="Estado"
                  value={state}
                  onChange={(event) => setState(event.currentTarget.value)}
                  required
                />
                <button type="submit" onClick={submitForm}>Criar conta</button>
              </S.DivRegister>
            )
          )}
        </S.Form>
        <S.LinkTo>
          <Link to="/login">Já está cadastrado? Faça login!</Link>
        </S.LinkTo>
      </S.Content>
    </S.Center>

  );
}
