import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': apiKey },
});

export const loginAPI = {
  authLogin(login, password, rememberMe) {
    return instance.post('/auth/login', {
      email: login,
      password,
      rememberMe,
    });
  },
};
