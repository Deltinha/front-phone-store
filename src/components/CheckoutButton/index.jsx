import React from 'react';
import { RiTruckFill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import * as S from './style';

function successAlert() {
  Swal.fire(
    'Tudo certo!',
    'Compra finalizada!',
    'success',
  );
}

export default function CheckoutButton() {
  return (
    <S.CheckoutButton onClick={() => successAlert()}>
      <S.CheckoutIconWrapper>
        <RiTruckFill />
      </S.CheckoutIconWrapper>
      <span>Finalizar compra</span>
    </S.CheckoutButton>
  );
}
