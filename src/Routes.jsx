/* eslint-disable no-unused-vars */
import {
  Route, Switch,
} from 'react-router-dom';
import React from 'react';
import Product from './pages/Product';
import Header from './components/header';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Header />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/product/:productId" component={Product} />
      <Route exact path="/checkout" />
    </Switch>
  );
}
