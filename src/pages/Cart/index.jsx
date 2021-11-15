import React, { useContext } from 'react';
import * as S from './style';

import CartContext from '../../contexts/cartContext';
import CartProduct from '../../components/CartProduct/index.js';
import CheckoutButton from '../../components/CheckoutButton';

export default function Cart() {
  const { cart } = useContext(CartContext);

  const organizedProductList = {};

  cart.forEach((item) => {
    if (organizedProductList[item.id]) {
      organizedProductList[item.id].quantity += 1;
    } else {
      organizedProductList[item.id] = { ...item, quantity: 1 };
    }
  });

  return (
    <S.Page>
      <S.Cart>
        <S.CartTitle>Carrinho de compras</S.CartTitle>
        {Object.values(organizedProductList).map((product) => <CartProduct product={product} />)}
        <CheckoutButton products={Object.values(organizedProductList)} />
        <S.CleanCart>Limpar Carrinho</S.CleanCart>
      </S.Cart>
    </S.Page>
  );
}
