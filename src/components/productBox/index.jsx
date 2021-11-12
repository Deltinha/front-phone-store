/* eslint-disable react/prop-types */
import React from 'react';
import * as S from './style';

export default function ProductBox({ product }) {
  const {
    model, capacity, value, description, color, brand, productImages,
  } = product;

  const firstImage = productImages.find((img) => img.perspective === 'front');

  return (
    <S.ProductDetail>
      <S.ProductImage src={firstImage.url} />
      <div>
        {(model) ? <S.Title>{`${model} ${capacity || ''} ${color || ''}`}</S.Title> : ''}
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
