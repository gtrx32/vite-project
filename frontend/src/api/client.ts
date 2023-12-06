import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config) => {
	config.headers.Authorization =	`Bearer ${localStorage.getItem('token')}`
	
	return config
})