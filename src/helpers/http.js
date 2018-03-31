import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

export const http = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 15000,
});

export default http;
