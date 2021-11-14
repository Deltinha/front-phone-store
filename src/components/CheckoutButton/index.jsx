import React from 'react';
import { RiTruckFill } from 'react-icons/ri';
import * as S from './style';

export default function CheckoutButton() {
  return (
    <S.CheckoutButton>
      <S.CheckoutIconWrapper>
        <RiTruckFill />
      </S.CheckoutIconWrapper>
      <span>Finalizar compra</span>
    </S.CheckoutButton>
  );
}
