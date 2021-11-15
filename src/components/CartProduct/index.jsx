/* eslint-disable no-unused-vars */
import { FaTrash } from 'react-icons/fa';

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import React, { useContext } from 'react';
import * as S from './style';
import CartContext from '../../contexts/cartContext';

export default function CartProduct({ product }) {
  const {
    model, capacity, value, description, color, brand, productImages,
  } = product;
  const firstImage = productImages.find((img) => img.perspective === 'front');
  const { cart, setCart } = useContext(CartContext);

  function removeItem() {
    setCart(
      cart.filter((item) => (
        item.id !== product.id
      )),
    );
  }

  return (
    <S.ProductBox>
      <S.ProductImage>
        <img src={firstImage.url} alt="imagem do produto" />
      </S.ProductImage>
      <S.ProductDescription>
        <h3>
          {model}
          {' '}
          {capacity}
          {' '}
          {color}
        </h3>
        <p>
          {brand}
          {' '}
          -
          {' '}
          {description}
        </p>
      </S.ProductDescription>
      <S.PoductPrice>
        <p>
          R$
          {' '}
          {(value / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
        </p>
      </S.PoductPrice>
      <S.Quantity>
        <div>
          <AiOutlinePlusCircle />
        </div>
        <div>
          <p>{product.quantity}</p>
        </div>
        <div>
          <AiOutlineMinusCircle />
        </div>
        <S.DeleteButton onClick={() => removeItem()}>
          <FaTrash />
        </S.DeleteButton>
      </S.Quantity>
    </S.ProductBox>
  );
}
