/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsCartPlusFill, BsSearch } from 'react-icons/bs';
import getColorName from '../../services/color-name-api';
import * as S from './style';

export default function ProductCard({ product }) {
  const {
    model, capacity, color, brand, url, id,
  } = product;
  const value = product.value / 100;
  const [colorName, setColorName] = useState('');
  const [blackOverlayVisible, setBlackOverlayVisible] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getColorName(color)
      .then((res) => {
        setColorName(res.data?.colors[0].name);
      })
      .catch(() => setColorName(''));
  }, []);

  return (
    <S.ProductCard
      onMouseEnter={() => setBlackOverlayVisible(true)}
      onMouseLeave={() => setBlackOverlayVisible(false)}
    >
      <img src={url} alt="" />
      <div>
        <S.ProductBrand>{brand}</S.ProductBrand>
        <S.ProductTitle>
          {`${model} ${capacity} ${colorName}`}
        </S.ProductTitle>
        <S.PriceTitle>A partir de</S.PriceTitle>
        <S.Price>
          <S.CurrencySign>R$</S.CurrencySign>
          <S.PriceValue>
            {value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </S.PriceValue>
        </S.Price>
        <S.BlackOverlay visibility={blackOverlayVisible}>
          <S.OverlayIconWrapper onClick={() => history.push(`/product/${id}`)}>
            <BsSearch />
          </S.OverlayIconWrapper>
          <S.OverlayIconWrapper onClick={() => history.push('/')}>
            <BsCartPlusFill />
          </S.OverlayIconWrapper>
        </S.BlackOverlay>
      </div>
    </S.ProductCard>
  );
}
