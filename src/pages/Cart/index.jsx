/* eslint-disable react/jsx-no-bind */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import * as S from './style';

import CartContext from '../../contexts/cartContext';
import CartProduct from '../../components/CartProduct/index';
import CheckoutButton from '../../components/CheckoutButton';

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [productList, setProductList] = useState({});

  const organizedProductList = {};

  function updateList() {
    cart.forEach((item) => {
      if (organizedProductList[item.id]) {
        organizedProductList[item.id].quantity += 1;
      } else {
        organizedProductList[item.id] = { ...item, quantity: 1 };
      }
    });
    setProductList({ ...organizedProductList });
  }

  useEffect(() => {
    updateList();
  }, [cart]);

  return (
    <S.Page>
      <S.Cart>
        <S.CartTitle>Carrinho de compras</S.CartTitle>
        {Object.values(productList).map((product) => (
          <CartProduct product={product} />
        ))}
        <CheckoutButton products={Object.values(productList)} />
        <S.CleanCart onClick={() => setCart([])}>Limpar Carrinho</S.CleanCart>
      </S.Cart>
    </S.Page>
  );
}
