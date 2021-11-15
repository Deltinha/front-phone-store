/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import {
  RiUserAddFill, RiLoginBoxFill, RiHomeFill, RiLogoutBoxFill,
} from 'react-icons/ri';
import { BsCartFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import ProductsContext from '../../contexts/productsContext';
import UserContext from '../../contexts/userContext';
import * as S from './style';

export default function Header() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { loadProducts } = useContext(ProductsContext);

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
        </S.CartButtonWrapper>
      </S.RightButtonsWrapper>
    </S.TopBar>
  );
}
