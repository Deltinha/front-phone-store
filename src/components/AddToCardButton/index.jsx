import React from 'react';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import * as S from './style';

export default function AddToCardButton() {
  return (
    <S.AddToCartButton>
      <S.CartIconWrapper>
        <RiShoppingCart2Fill />
      </S.CartIconWrapper>
      <span>Adicionar ao carrinho</span>
    </S.AddToCartButton>
  );
}
