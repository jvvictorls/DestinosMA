import axios from 'axios';

const PROTOCOL = import.meta.env.VITE_APP_API_PROTOCOL;
const HOST = import.meta.env.VITE_APP_API_URL;

console.log(HOST, PROTOCOL);

const api = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getSpots = async () => {
  const response = await api.get('/spots');
  return response.data;
};

export const getSpotById = async (id: string) => {
  const response = await api.get(`/spots/${id}`);
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};

export const signUp = async (email: string, password: string, name: string) => {
  const response = await api.post('/users', { email, password, name });
  return response.data;
};

export default api;
