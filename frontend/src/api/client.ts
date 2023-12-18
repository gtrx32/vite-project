/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { useCookies } from 'react-cookie';

const getCookieValue = (name: string) => {
  const regex = new RegExp(`(^| )${name}=([^;]+)`);
  const match = document.cookie.match(regex);
  if (match) {
    return match[2];
  }
};
const delete_cookie = (name: string) => {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${getCookieValue('ACCESS_TOKEN')?.replace('%7C', '|') ?? ''}`;

  console.log(config.headers.Authorization)
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      delete_cookie('ACCESS_TOKEN');
    }
    return Promise.reject(error);
  }
);
