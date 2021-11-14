/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import getColorName from '../../services/color-name-api';
import AddToCardButton from '../AddToCardButton';

export default function ProductBox({ product }) {
  const [colorName, setColorName] = useState('');

  const {
    model, capacity, description, color, brand, productImages,
  } = product;

  const value = product.value / 100;
  const firstImage = productImages.find((img) => img.perspective === 'front');

  useEffect(() => {
    getColorName(color)
      .then((res) => {
        setColorName(res.data?.colors[0].name);
      });
  }, []);

  return (
    <S.ProductDetail>
      <S.ProductImage src={firstImage.url} />
      <div>
        {(value) && <h3>{`R$ ${value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}</h3>}
        <S.ProductInfo>
          {(brand) && <h4>{brand}</h4>}
          {(model) && <S.Title>{`${model} ${capacity || ''} ${colorName || ''}`}</S.Title> }
          <h4>{description}</h4>
        </S.ProductInfo>
        <AddToCardButton />
      </div>
    </S.ProductDetail>
  );
}
