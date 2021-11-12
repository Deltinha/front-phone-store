import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:4000'
  : 'https://phone-store-driven.herokuapp.com';

function getProducts() {
  const promise = axios.get(`${BASE_URL}/products`);
  return promise;
}

function getProductById(id) {
  return axios.get(`${BASE_URL}/products/${id}`);
}

function createNewUser(body) {
  return axios.post(`${BASE_URL}/user`, body);
}

export { getProducts, getProductById, createNewUser };
