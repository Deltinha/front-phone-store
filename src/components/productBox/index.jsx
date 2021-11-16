import React, { useEffect, useState } from 'react';
import * as S from './style';
import getColorName from '../../services/color-name-api';
import AddToCartButton from '../AddToCartButton';

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
      <S.InfoBox>
        {(value) && <h3>{`R$ ${value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}</h3>}
        <S.ProductInfo>
          {(brand) && <p>{brand}</p>}
          {(model) && <S.Title>{`${model} ${capacity || ''} ${colorName || ''}`}</S.Title> }
          <h4>{description}</h4>
        </S.ProductInfo>
        <AddToCartButton product={product} />
      </S.InfoBox>
    </S.ProductDetail>
  );
}
