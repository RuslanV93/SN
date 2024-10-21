import { loginAPI } from '../API/loginAPI';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_PREVIOUS_LOCATION = 'SET-PREVIOUS-LOCATION';
const initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  prevLocation: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_PREVIOUS_LOCATION: {
      return {
        ...state,
        prevLocation: action.location,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => {
  return { type: SET_USER_DATA, payload: { id, email, login, isAuth } };
};

export const setPrevLocation = (location) => {
  return { type: SET_PREVIOUS_LOCATION, location };
};

export const profileAuthorisation = () => {
  return (dispatch) => {
    loginAPI.setAuth().then((data) => {
      if (data.resultCode === 0) {
        let { login, id, email } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const signIn = (email, password, rememberMe) => (dispatch) => {
  loginAPI.authLogin(email, password, rememberMe).then((response) => {
    console.log(response);
    if (response.data.resultCode === 0) {
      dispatch(profileAuthorisation());
    }
  });
};
export const signOut = () => (dispatch) => {
  loginAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};
