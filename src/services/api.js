import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Reemplaza con la URL de tu servidor backend
});

export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error al crear usuario');
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw new Error('Error al iniciar sesión');
  }
};

export const generateShortUrl = async (urlData) => {
  try {
    const response = await api.post('/short/generator', urlData);
    return response.data;
  } catch (error) {
    throw new Error('Error al generar la URL acortada');
  }
};

export const getShortUrls = async () => {
  try {
    const response = await api.get('/short/urls');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener las URLs acortadas');
  }
};
