import axios from 'axios';
export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });
export const registerUser = (data) => api.post('/auth/register', data);