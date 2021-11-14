/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import * as S from './style';
import CartContext from '../../contexts/cartContext';

export default function AddToCartButton({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <S.AddToCartButton onClick={addToCart(product)}>
      <S.CartIconWrapper>
        <RiShoppingCart2Fill />
      </S.CartIconWrapper>
      <span>Adicionar ao carrinho</span>
    </S.AddToCartButton>
  );
}
