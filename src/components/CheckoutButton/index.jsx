import React from 'react';
import { RiTruckFill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useAuthConfig from '../../hooks/useAuth';
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

function checkout({ body, headers }) {
  postCheckout({ body, headers })
    .then(() => outcomeAlert(true))
    .catch(() => outcomeAlert(false));
}

export default function CheckoutButton({ products }) {
  const body = [];

  products.forEach((product) => {
    body.push({
      productId: product.id,
      qty: product.quantity,
    });
  });

  const headers = useAuthConfig();

  return (
    <S.CheckoutButton onClick={() => checkout({ body, headers })}>
      <S.CheckoutIconWrapper>
        <RiTruckFill />
      </S.CheckoutIconWrapper>
      <span>Finalizar compra</span>
    </S.CheckoutButton>
  );
}
