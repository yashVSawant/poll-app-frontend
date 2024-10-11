import axios from 'axios';
import { useAuth } from '../components/Auth/AuthContext';

const useApi = () => {
  const { token } = useAuth(); 

  const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  api.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  });

  return api;
};

export default useApi;
