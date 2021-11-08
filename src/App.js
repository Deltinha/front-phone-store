import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import UserContext from './contexts/UserContext';

import GlobalStyle from './styles/GlobalStyle';
import Routes from './Routes';

export default function App() {
  const [userInfo, setUserInfo] = useState('');
  const infoFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    if (infoFromLocalStorage) setUserInfo(infoFromLocalStorage);
  }, [userInfo.token]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </UserContext.Provider>

  );
}