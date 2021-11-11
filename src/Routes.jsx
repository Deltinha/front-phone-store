import {
  Route, Switch,
} from 'react-router-dom';
import React from 'react';
import Product from './pages/Product';
import Header from './components/header';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" />
      <Route exact path="/sign-up" />
      <>
        <Header />
        <Route exact path="/" />
        <Route exact path="/product/:productId">
          <Product />
        </Route>
        <Route exact path="/checkout" />
      </>
    </Switch>

  );
}
