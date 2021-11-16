import { FaTrash } from 'react-icons/fa';

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import * as S from './style';
import getColorName from '../../services/color-name-api';

export default function CartProduct({ product }) {
  const [colorName, setColorName] = useState('');

  const {
    model, capacity, value, description, color, brand, productImages, quantity,
  } = product;

  useEffect(() => {
    getColorName(color)
      .then((res) => {
        setColorName(res.data?.colors[0].name);
      });
  }, []);

  const firstImage = productImages.find((img) => img.perspective === 'front');

  return (
    <S.ProductBox>
      <S.ProductImage>
        <img src={firstImage.url} alt="imagem do produto" />
      </S.ProductImage>
      <S.ProductDescription>
        <h3>
          {`${model} ${capacity} ${colorName}`}
        </h3>
        <p>
          {`${brand} - ${description}`}
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
          <p>{quantity}</p>
        </div>
        <div>
          <AiOutlineMinusCircle />
        </div>
        <S.DeleteButton>
          <FaTrash />
        </S.DeleteButton>
      </S.Quantity>
    </S.ProductBox>
  );
}
