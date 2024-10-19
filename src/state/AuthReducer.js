import { setAuth } from '../API/userAPI';

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => {
  return { type: SET_USER_DATA, data: { id, email, login } };
};

export const profileAuthorisation = () => {
  return (dispatch) => {
    setAuth().then((data) => {
      if (data.resultCode === 0) {
        let { login, id, email } = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};
