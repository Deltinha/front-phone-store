/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import {
  RiUserAddFill, RiLoginBoxFill, RiHomeFill, RiLogoutBoxFill,
} from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import CheckoutButton from '../CheckoutButton';
import * as S from './style';

export default function Header() {
  const history = useHistory();
  const { loadProducts } = useContext(UserContext);

  function returnToHome() {
    history.push('/');
    loadProducts();
  }

  return (
    <S.TopBar>
      <S.LeftButtonsWrapper onClick={() => returnToHome()}>
        <S.HomeButtonWrapper>
          <RiHomeFill />
        </S.HomeButtonWrapper>
        <span>
          PhoneStore
        </span>
        <CheckoutButton />
      </S.LeftButtonsWrapper>
      <S.RightButtonsWrapper>
        <S.RegisterButtonWrapper onClick={() => history.push('/register')}>
          <RiUserAddFill />
        </S.RegisterButtonWrapper>
        <S.LogButtonWrapper onClick={() => history.push('/login')}>
          <RiLoginBoxFill />
        </S.LogButtonWrapper>
        <S.CartButtonWrapper>
          <FaShoppingCart />
        </S.CartButtonWrapper>
      </S.RightButtonsWrapper>
    </S.TopBar>
  );
}
