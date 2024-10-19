import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': apiKey },
});

export const profileAPI = {
  getProfile(userID) {
    return instance.get(`profile/${userID}`).then((response) => response.data);
  },
  getStatus(userID) {
    return instance.get(`profile/status/${userID}`).then((response) => response.data);
  },
  updateStatus(status) {
    return instance.put('profile/status', {
      status,
    });
  },
};
