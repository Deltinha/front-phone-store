/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import * as S from './style';
import getColorName from '../../services/color-name-api';

export default function ProductBox({ product }) {
  const {
    model, capacity, color, value, description, brand, url,
  } = product;
  const [colorName, setColorName] = useState('');

  useEffect(() => {
    getColorName(color)
      .then((res) => {
        setColorName(res.data?.colors[0].name);
      })
      .catch(() => setColorName(''));
  }, []);

  return (
    <>
      <S.ProductDetail>
        <S.ProductImage src={url} />
        <div>
          <S.Title>{`${model} ${capacity} ${colorName}`}</S.Title>
          <h3>{`R$ ${(value / 100).toFixed(2)}`}</h3>
          <p>{`Em até 10x de R$ ${(value / 1000).toFixed(2)} sem juros`}</p>
          <p>{description}</p>
          <p>{`Marca: ${brand}`}</p>
          <p>Tipo de produto: Smartphone</p>
          <p>{` Capacidade de armazenamento da memória: ${capacity}`}</p>
          <p>{`Cor: ${colorName}`}</p>

        </div>
      </S.ProductDetail>
    </>
  );
}
