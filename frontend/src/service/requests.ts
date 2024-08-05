import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
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

export default api;
