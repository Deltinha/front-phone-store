/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:4000'
  : 'https://phone-store-driven.herokuapp.com';

export function createNewUser(body) {
  return axios.post(`${BASE_URL}/register`, body);
}
export function login(body) {
  return axios.post(`${BASE_URL}/login`, body);
}
