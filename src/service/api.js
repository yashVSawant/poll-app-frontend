import axios from 'axios';
import { useAuth } from '../components/Auth/AuthContext';

const useApi = () => {
  const { token } = useAuth(); 

  const api = axios.create({
    baseURL: 'https://polling-app-backend.vercel.app',
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
