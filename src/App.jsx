import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import UserContext from './contexts/userContext';
import CartContext from './contexts/cartContext';

import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import Routes from './Routes';

export default function App() {
  const [userInfo, setUserInfo] = useState('');
  const [cartContent, updateCartContent] = useState('');

  const userInfoFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'));
  const cartInfoFromLocalStorage = JSON.parse(localStorage.getItem('cartInfo'));

  // function updateCartContent() {

  // }

  useEffect(() => {
    if (userInfoFromLocalStorage) setUserInfo(userInfoFromLocalStorage);
    if (cartInfoFromLocalStorage) updateCartContent(cartInfoFromLocalStorage);
    if (userInfo.token) updateCartContent();
  }, [userInfo.token]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <CartContext.Provider value={{ cartContent, updateCartContent }}>
        <Router>
          <GlobalStyle />
          <Theme />
          <Routes />
        </Router>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}
