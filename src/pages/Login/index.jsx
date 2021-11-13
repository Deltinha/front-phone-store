/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { login } from '../../services/user.api';
import * as S from './style';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailIsValid, setEmailIsValid] = useState(false);

  const history = useHistory();

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
      login(body).then(() => {
        // history.push('/cart');
        history.push('/'); // provisorio
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
        {/* <S.Register>
          <Link to="/register">Ainda não tem uma conta? Registre-se!</Link>
        </S.Register> */}
      </S.Content>
    </S.Center>
  );
}
