import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': apiKey },
});

export const loginAPI = {
  setAuth() {
    return instance.get('/auth/me').then((response) => response.data);
  },
  authLogin(login, password, rememberMe) {
    return instance.post('/auth/login', {
      email: login,
      password,
      rememberMe,
    });
  },
  logout() {
    return instance.delete('/auth/login');
  },
};
