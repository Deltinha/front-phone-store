import React, { useContext } from 'react';
import { RiTruckFill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import CartContext from '../../contexts/cartContext';
import useAuthConfig from '../../hooks/useAuth';
import { postCheckout } from '../../services/phone-store-api';
import { Alert } from '../../utils/alertConfig';
import * as S from './style';

export default function CheckoutButton({ products }) {
  const { setCart } = useContext(CartContext);
  const history = useHistory();
  const body = [];

  products.forEach((product) => {
    body.push({
      productId: product.id,
      qty: product.quantity,
    });
  });

  const headers = useAuthConfig();

  function successAlert() {
    Alert.fire(
      'Tudo certo!',
      'Compra finalizada! Os detalhes do pedido foram enviados por e-mail :)',
      'success',
    ).then(() => {
      setCart([]);
      history.push('/');
    });
  }

  async function processError(status) {
    if (status === 401) {
      return Alert.fire({
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
      .catch((error) => processError(error.response?.status));
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
