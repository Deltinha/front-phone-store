import React, { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import CartContext from '../../contexts/cartContext';
import * as S from './style';

export default function AddToCartButton({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <S.AddToCartButton onClick={addToCart(product)}>
      <S.CartIconWrapper>
        <FaCartPlus />
      </S.CartIconWrapper>
      <span>Adicionar ao carrinho</span>
    </S.AddToCartButton>
  );
}
