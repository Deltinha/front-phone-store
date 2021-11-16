/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import {
  RiUserAddFill, RiLoginBoxFill, RiHomeFill, RiLogoutBoxFill,
} from 'react-icons/ri';
import { BsCartFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import ProductsContext from '../../contexts/productsContext';
import UserContext from '../../contexts/userContext';
import * as S from './style';
import CartContext from '../../contexts/cartContext';

export default function Header() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { loadProducts } = useContext(ProductsContext);
  const { cart } = useContext(CartContext);

  function returnToHome() {
    history.push('/');
    loadProducts();
  }
  return (
    <S.TopBar>
      <S.LeftButtonsWrapper onClick={() => returnToHome()}>
        <span>
          PhoneStore
        </span>
      </S.LeftButtonsWrapper>
      <S.RightButtonsWrapper>
        {(user && user.token)
          ? (
            <S.LogButtonWrapper onClick={() => setUser('')}>
              <RiLogoutBoxFill />
            </S.LogButtonWrapper>
          )
          : (
            <>
              <S.RegisterButtonWrapper onClick={() => history.push('/register')}>
                <RiUserAddFill />
              </S.RegisterButtonWrapper>
              <S.LogButtonWrapper onClick={() => history.push('/login')}>
                <RiLoginBoxFill />
              </S.LogButtonWrapper>
            </>
          )}
        <S.CartButtonWrapper onClick={() => history.push('/cart')}>
          <BsCartFill />
          {cart.length > 0
            && (
              <S.CartItemCount>
                <span>{cart.length}</span>
              </S.CartItemCount>
            )}
        </S.CartButtonWrapper>
      </S.RightButtonsWrapper>
    </S.TopBar>
  );
}
