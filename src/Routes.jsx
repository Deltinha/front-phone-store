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
      <>
        <Header />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/product/:productId">
          <Product />
        </Route>
        <Route exact path="/checkout" />
      </>
    </Switch>

  );
}
