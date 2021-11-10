/* eslint-disable */
import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'dev'
    ? 'http://localhost:4000'
    : 'https://phone-store-driven.herokuapp.com';

function getProducts() {
  const promise = axios.get(`${BASE_URL}/products`);
  return promise;
}

export { getProducts };
