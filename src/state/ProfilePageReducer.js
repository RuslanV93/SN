import { usersAPI } from '../API/API';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_FETCHING_STATUS = 'SET-FETCHING-STATUS';

const initialState = {
  POSTS_DATA: [
    { userID: 'id1', postID: 1, message: 'Hi, this is my first post', likes: 40 },
    { userID: 'id2', postID: 2, message: 'Hello', likes: 30 },
    { userID: 'id5', postID: 3, message: 'How r u?', likes: 1 },
    { userID: 'id3', postID: 4, message: 'hoho u found me', likes: 2 },
    { userID: 'id4', postID: 5, message: 'ETO YA', likes: 223 },
  ],
  newPostText: '',
  profile: {},
  isFetching: true,
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    case ADD_POST: {
      const getAllPosts = state.POSTS_DATA;
      const newPost = {
        userID: 'id1',
        postID: getAllPosts[getAllPosts.length - 1].postID + 1,
        message: state.newPostText,
        likes: 0,
      };
      return {
        ...state,
        POSTS_DATA: [...state.POSTS_DATA, newPost],
        newPostText: '',
      };
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_FETCHING_STATUS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};
export default profilePageReducer;

export const addPost = () => {
  return { type: ADD_POST };
};
export const textAreaChange = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, text };
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setFetchingStatus = (isFetching) => {
  return { type: SET_FETCHING_STATUS, isFetching };
};

export const getProfilePage = (userID) => {
  return (dispatch) => {
    return usersAPI
      .getProfilePage(userID)
      .then((data) => {
        dispatch(setUserProfile(data));
        dispatch(setFetchingStatus(false));
      })
      .catch((error) => {
        dispatch(setFetchingStatus(false));
        return Promise.reject(error);
      });
  };
};
