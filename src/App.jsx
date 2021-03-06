import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import UserContext from './contexts/userContext';
import CartContext from './contexts/cartContext';
import useLocalStorage from './hooks/useLocalStorage';
import ProductsContext from './contexts/productsContext';
import { Alert } from './utils/alertConfig';

import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import Routes from './Routes';
import { getProducts } from './services/phone-store-api';
import { ToastStyle } from './styles/ReactToastify';

export default function App() {
  const [user, setUser] = useLocalStorage('@phone-store-user', {});
  const [cart, setCart] = useLocalStorage('@phone-store-cart', []);

  const [products, setProducts] = useState([]);
  const [areProductsLoading, setAreProductsLoading] = useState(true);

  function addToCart(product) {
    const data = [...cart];
    data.push(product);
    setCart(data);
  }

  function loadProducts() {
    getProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => {
        Alert.fire('Algo deu errado :( Por favor, recarregue a página.');
      })
      .finally(() => {
        setAreProductsLoading(false);
      });
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,

      }}
    >
      <ProductsContext.Provider value={{
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
            <ToastStyle />
            <ToastContainer />
            <Routes />
          </Router>
        </CartContext.Provider>
      </ProductsContext.Provider>
    </UserContext.Provider>
  );
}
