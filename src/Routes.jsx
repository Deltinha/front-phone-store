import {
  Route, Switch, useLocation, useHistory,
} from 'react-router-dom';
import React, { useEffect, useContext, useState } from 'react';
import UserContext from './contexts/UserContext';
import Product from './pages/Product';

export default function Routes() {
  const { userInfo } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const [previousLocation, setPreviousLocation] = useState('');

  useEffect(() => {
    if (location.pathname !== '/' && location.pathname !== '/register' && !userInfo) {
      setPreviousLocation(location.pathname);
      history.push('/');
    }
    if (userInfo && location.pathname === '/') {
      if (previousLocation !== '/home' && previousLocation !== '') {
        history.push('/home');
        history.push(previousLocation);
      } else {
        history.push('/');
      }
    }
  }, [previousLocation, userInfo]);

  return (
    <Switch>
      <Route path="/" exact>
      </Route>
      <Route path="/product/:id" exact>
        <Product />
      </Route>
      <Route path="/home" exact>
      </Route>
    </Switch>
  );
}
