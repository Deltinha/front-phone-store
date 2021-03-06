/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { login } from '../../services/user.api';
import * as S from './style';
import UserContext from '../../contexts/userContext';
import imgLogo from '../../assets/logo.svg';
import { Alert } from '../../utils/alertConfig';

export default function Login() {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailIsValid, setEmailIsValid] = useState(false);

  const history = useHistory();

  if (user && user.token) {
    history.push('/');
  }

  useEffect(() => {
    setEmailIsValid(
      !!email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ),
    );
  }, [email]);

  const submitForm = (e) => {
    e.preventDefault();
    const body = {
      email, password,
    };
    if (emailIsValid) {
      login(body).then((res) => {
        setUser(res.data);
        history.push('/');
      }).catch(() => {
        Alert.fire('Algo deu errado, por favor recarregue');
      });
    } else {
      Alert.fire('E-mail inválido.');
    }
  };
  return (
    <S.Center>
      <S.Content>
        <S.Logo src={imgLogo} alt="store logo" />
        <S.PageTitle>
          <h3>Login</h3>
        </S.PageTitle>
        <S.Form>
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
              placeholder="Senha"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              required
            />
            <button type="submit" onClick={submitForm}>Entrar</button>
          </S.DivRegister>
        </S.Form>
        <S.LinkTo>
          <Link to="/register">
            Ainda não tem uma conta? Cadastre-se!
          </Link>
        </S.LinkTo>
      </S.Content>
    </S.Center>
  );
}
