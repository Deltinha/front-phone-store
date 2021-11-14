/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import Swal from 'sweetalert2';
import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { login } from '../../services/user.api';
import * as S from './style';
import UserContext from '../../contexts/userContext';

export default function Login() {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailIsValid, setEmailIsValid] = useState(false);

  const history = useHistory();

  if (user && user.token) {
    history.push('/');
    Swal.fire('Você já está conectado, para entrar com uma conta diferente, faça logout.');
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
        Swal.fire('Algo deu errado, por favor recarregue');
      });
    } else {
      Swal.fire('E-mail inválido.');
    }
  };
  return (
    <S.Center>
      <S.Content>
        {/* <S.Logo src={imgLogo} alt="store logo"/> */}
        <S.Register>
          <h3>Login</h3>
        </S.Register>
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
        <S.Register>
          <Link to="/register">Ainda não tem uma conta? Cadastre-se!</Link>
        </S.Register>
      </S.Content>
    </S.Center>
  );
}
