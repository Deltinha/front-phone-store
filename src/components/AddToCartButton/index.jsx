/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import CartContext from '../../contexts/cartContext';
import * as S from './style';

export default function AddToCartButton({ product }) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <S.AddToCartButton onClick={() => {
      alert('clicou');
      const data = cart;
      data.push(product);
      setCart(data);
    }}
    >
      <S.CartIconWrapper>
        <FaCartPlus />
      </S.CartIconWrapper>
      <span>Adicionar ao carrinho</span>
    </S.AddToCartButton>
  );
}
