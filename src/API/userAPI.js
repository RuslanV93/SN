import axios from 'axios';
import { profileAPI } from './profileAPI';

const apiKey = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',

  withCredentials: true,
  headers: { 'API-KEY': apiKey },
});

export const usersAPI = {
  getUsers(currentPage, pageSize = 5) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`, {})
      .then((response) => response.data);
  },

  getProfilePage(userID) {
    console.warn('Obsolete method. Please use profileAPI object.');
    return profileAPI.getProfile(userID);
  },
  postFollowUser(id) {
    return instance.post(`/follow/${id}`).then((response) => response.data);
  },
  deleteFollowUser(id) {
    return instance.delete(`/follow/${id}`).then((response) => response.data);
  },
};
