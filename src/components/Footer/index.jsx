import React from 'react';
import * as S from './style';

export default function Footer() {
  return (
    <S.BottomBar>
      <S.SiteDetails>
        © 2021 por
        {' '}
        <a href="https://github.com/rabbithay"> @rabbithay </a>
        e
        {' '}
        <a href="https://github.com/Deltinha"> @Deltinha</a>
        . Hospedado no repositório
        {' '}
        <a href="https://github.com/Deltinha/front-phone-store">https://github.com/Deltinha/front-phone-store</a>
      </S.SiteDetails>
    </S.BottomBar>
  );
}
