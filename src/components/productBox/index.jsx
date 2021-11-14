/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import getColorName from '../../services/color-name-api';
import AddToCartButton from '../AddToCartButton';

export default function ProductBox({ product }) {
  const [colorName, setColorName] = useState('');
  // eslint-disable-next-line no-unused-vars

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
      <S.ProductImage
        src={firstImage.url}
      />
      <div>
        {(value) && <h3>{`R$ ${(value / 100).toFixed(2)}`}</h3>}
        <S.ProductInfo>
          {(brand) && <h4>{brand}</h4>}
          {(model) ? <S.Title>{`${model} ${capacity || ''} ${colorName || ''}`}</S.Title> : ''}
          <h4>{description}</h4>
        </S.ProductInfo>
        <AddToCartButton product={product} />
      </div>
    </S.ProductDetail>
  );
}
