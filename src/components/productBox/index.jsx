/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import getColorName from '../../services/color-name-api';

export default function ProductBox({ product }) {
  const [colorName, setColorName] = useState('');

  const {
    model, capacity, value, description, color, brand, productImages,
  } = product;

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
        {(model) ? <S.Title>{`${model} ${capacity || ''} ${colorName || ''}`}</S.Title> : ''}
        {(value) ? <h3>{`R$ ${(value / 100).toFixed(2)}`}</h3> : ''}
        <p>{`Em até 10x de R$ ${(value / 1000).toFixed(2)} sem juros`}</p>
        <p>{description}</p>
        {(brand) ? <p>{`Marca: ${brand}`}</p> : ''}
        <p>Tipo de produto: Smartphone</p>
        {(capacity) ? <p>{` Capacidade de armazenamento da memória: ${capacity}`}</p> : ''}
        {(color) ? <p>{`Cor: ${color}`}</p> : ''}
      </div>
    </S.ProductDetail>
  );
}
