/* eslint-disable */
import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

function getProducts() {
  const promise = axios.get(`${BASE_URL}/products`);
  return promise;
}

export { getProducts };
