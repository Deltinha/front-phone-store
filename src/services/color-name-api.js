import axios from 'axios';

const BASE_URL = 'https://api.color.pizza/v1';

export default function getColorName(hex) {
  const param = hex.replace('#', '');
  return axios.get(`${BASE_URL}/${param}`);
}
