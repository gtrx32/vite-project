import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`;

  return config;
});

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response } = error;
    if (response.status === 401) {
      localStorage.removeItem('ACCESS_TOKEN');
    }

    throw error;
  }
);
