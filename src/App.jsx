import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
import UserContext from './contexts/userContext';
import CartContext from './contexts/cartContext';
import useLocalStorage from './hooks/useLocalStorage';

import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import Routes from './Routes';
import { getProducts } from './services/phone-store-api';

export default function App() {
  const [user, setUser] = useLocalStorage('@phone-store-user', {});
  const [cart, setCart] = useLocalStorage('@phone-store-cart', []);

  const [products, setProducts] = useState([]);
  const [areProductsLoading, setAreProductsLoading] = useState(true);

  function addToCart(product) {
    const data = cart;
    data.push(product);
    setCart(data);
  }

  function loadProducts() {
    getProducts()
      .then((res) => {
        setProducts(res.data);
        setAreProductsLoading(false);
      })
      .catch(() => setAreProductsLoading(false));
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        products,
        setProducts,
        areProductsLoading,
        setAreProductsLoading,
        loadProducts,
      }}
    >
      <CartContext.Provider value={{
        cart,
        setCart,
        addToCart,
      }}
      >
        <Router>
          <GlobalStyle />
          <Theme />
          <Routes />
        </Router>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}
