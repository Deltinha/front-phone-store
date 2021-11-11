import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

function getProducts() {
  const promise = axios.get(`${BASE_URL}/products`);
  return promise;
}

function getProductById(id) {
  return axios.get(`${BASE_URL}/product/${id}`);
}

function createNewUser(body) {
  return axios.post(`${BASE_URL}/user`, body);
}

export { getProducts, getProductById, createNewUser };
