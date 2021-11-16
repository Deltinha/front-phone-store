/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsCartPlusFill, BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import getColorName from '../../services/color-name-api';
import * as S from './style';
import CartContext from '../../contexts/cartContext';
import { getProductById } from '../../services/phone-store-api';

export default function ProductCard({ product }) {
  const {
    model, capacity, color, brand, url, id,
  } = product;
  const value = product.value / 100;
  const [colorName, setColorName] = useState('');
  const [blackOverlayVisible, setBlackOverlayVisible] = useState(false);
  const history = useHistory();
  const { addToCart } = useContext(CartContext);

  function cartAlert(input) {
    if (input === 'success') {
      return toast.success('Adicionado ao carrinho!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    return toast.error('Houve um problema!', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function addProductToCart() {
    getProductById(product.id)
      .then((res) => {
        addToCart(res.data);
        cartAlert('success');
      })
      .catch(() => cartAlert('error'));
  }

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
          <S.OverlayIconWrapper onClick={() => addProductToCart()}>
            <BsCartPlusFill />
          </S.OverlayIconWrapper>
        </S.BlackOverlay>
      </div>
    </S.ProductCard>
  );
}
