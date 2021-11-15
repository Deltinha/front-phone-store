import React from 'react';
import { RiTruckFill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { postCheckout } from '../../services/phone-store-api';
import * as S from './style';

function outcomeAlert(success) {
  if (success) {
    Swal.fire(
      'Tudo certo!',
      'Compra finalizada!',
      'success',
    );
  } else {
    Swal.fire(
      'Oops...',
      'Algo deu errado!',
      'error',
    );
  }
}

function checkout({ body, token }) {
  postCheckout({ body, token })
    .then(() => outcomeAlert(true))
    .catch(() => outcomeAlert(false));
}

export default function CheckoutButton() {
  const body = [
    {
      productId: 3,
      qty: 99,
    },
    {
      productId: 2,
      qty: 99,
    },
  ];
  const token = 'd1a4d46c-4c18-4fce-a121-cef250e40481';

  return (
    <S.CheckoutButton onClick={() => checkout({ body, token })}>
      <S.CheckoutIconWrapper>
        <RiTruckFill />
      </S.CheckoutIconWrapper>
      <span>Finalizar compra</span>
    </S.CheckoutButton>
  );
}
