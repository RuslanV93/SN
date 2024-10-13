import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',

  withCredentials: true,
  headers: { 'API-KEY': '9739538f-47be-4b74-a01f-5efc4e8d7582' },
});

export const usersAPI = {
  getUsers(currentPage, pageSize = 5) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`, {})
      .then((response) => response.data);
  },

  getProfilePage(userID) {
    return instance.get(`/profile/${userID}`).then((response) => response.data);
  },
  postFollowUser(id) {
    return instance.post(`/follow/${id}`).then((response) => response.data);
  },
  deleteFollowUser(id) {
    return instance.delete(`/follow/${id}`).then((response) => response.data);
  },
};
export const setAuth = () => {
  return instance.get('/auth/me').then((response) => response.data);
};
