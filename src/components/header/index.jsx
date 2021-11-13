/* eslint-disable no-unused-vars */
import React from 'react';
import {
  RiShoppingCart2Fill, RiUserAddFill, RiLoginBoxFill, RiHomeFill, RiLogoutBoxFill,
} from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import * as S from './style';

export default function Header() {
  const history = useHistory();
  return (
    <S.TopBar>
      <S.LeftButtonsWrapper onClick={() => history.push('/')}>
        <S.HomeButtonWrapper>
          <RiHomeFill />
        </S.HomeButtonWrapper>
        <span>
          PhoneStore
        </span>
      </S.LeftButtonsWrapper>
      <S.RightButtonsWrapper>
        <S.RegisterButtonWrapper onClick={() => history.push('/register')}>
          <RiUserAddFill />
        </S.RegisterButtonWrapper>
        <S.LogButtonWrapper onClick={() => history.push('/login')}>
          <RiLoginBoxFill />
        </S.LogButtonWrapper>
        <S.CartButtonWrapper>
          <RiShoppingCart2Fill />
        </S.CartButtonWrapper>
      </S.RightButtonsWrapper>
    </S.TopBar>
  );
}
