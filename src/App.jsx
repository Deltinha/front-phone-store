import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import UserContext from './contexts/userContext';

import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
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
        <Theme />
        <Routes />
      </Router>
    </UserContext.Provider>
  );
}