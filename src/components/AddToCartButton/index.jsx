import React, { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/cartContext';
import * as S from './style';

export default function AddToCartButton({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <S.AddToCartButton onClick={() => addToCart(product)}>
        <S.CartIconWrapper>
          <FaCartPlus />
        </S.CartIconWrapper>
        <span>Adicionar ao carrinho</span>
      </S.AddToCartButton>
    </Link>
  );
}
