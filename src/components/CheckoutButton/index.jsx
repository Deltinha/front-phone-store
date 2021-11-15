import React from 'react';
import { RiTruckFill } from 'react-icons/ri';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import useAuthConfig from '../../hooks/useAuth';
import { postCheckout } from '../../services/phone-store-api';
import * as S from './style';

function successAlert() {
  Swal.fire(
    'Tudo certo!',
    'Compra finalizada!',
    'success',
  );
}

export default function CheckoutButton({ products }) {
  const history = useHistory();
  const body = [];

  products.forEach((product) => {
    body.push({
      productId: product.id,
      qty: product.quantity,
    });
  });

  const headers = useAuthConfig();

  async function processError(status) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'alert-btn alert-btn-success',
      },
      buttonsStyling: false,
    });

    if (status === 401) {
      return swalWithBootstrapButtons.fire({
        title: 'Oops...',
        text: 'Você não está logado!',
        icon: 'error',
        confirmButtonText: 'Conectar-me!',
      }).then(() => history.push('/login'));
    }

    return Swal.fire(
      'Oops...',
      'Algo deu errado!',
      'error',
    );
  }

  function checkout() {
    postCheckout({ body, headers })
      .then(() => successAlert())
      .catch((error) => processError(error.response.status));
  }

  return (
    <S.CheckoutButton onClick={() => checkout({ body, headers })}>
      <S.CheckoutIconWrapper>
        <RiTruckFill />
      </S.CheckoutIconWrapper>
      <span>Finalizar compra</span>
    </S.CheckoutButton>
  );
}
