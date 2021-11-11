/* eslint-disable react/prop-types */
import React from 'react';
import * as S from './style';
import img from '../../assets/phone.jpg';

export default function ProductBox({ product }) {
  const {
    model, capacity, color, value, description, brand,
  } = product;
  return (
    <>
      <S.ProductDetail>
        <S.ProductImage src={img} />
        <div>
          <S.Title>{`${model} ${capacity} ${color}`}</S.Title>
          <h3>{`R$ ${(value / 100).toFixed(2)}`}</h3>
          <p>{`Em até 10x de R$ ${(value / 1000).toFixed(2)} sem juros`}</p>
          <p>{description}</p>
          <p>{`Marca: ${brand}`}</p>
          <p>Tipo de produto: Smartphone</p>
          <p>{` Capacidade de armazenamento da memória: ${capacity}`}</p>
          <p>{`Cor: ${color}`}</p>

        </div>
      </S.ProductDetail>
    </>
  );
}