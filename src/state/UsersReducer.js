const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';

const initialState = {
  USERS_DATA: [],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        USERS_DATA: state.USERS_DATA.map((user) => {
          return user.id === action.userID ? { ...user, isFollowed: true } : user;
        }),
      };

    case UNFOLLOW_USER:
      return {
        ...state,
        USERS_DATA: state.USERS_DATA.map((user) => {
          return user.id === action.userID ? { ...user, isFollowed: false } : user;
        }),
      };
    case SET_USERS:
      if (state.USERS_DATA.length === 0) {
        return {
          ...state,
          USERS_DATA: [...state.USERS_DATA, ...action.USERS_DATA],
        };
      }
      return state;
    default:
      return state;
  }
};

export const followUserAC = (userID) => {
  return { type: FOLLOW_USER, userID };
};
export const unFollowUserAC = (userID) => {
  return { type: UNFOLLOW_USER, userID };
};
export const setUsersAC = (USERS_DATA) => {
  return { type: SET_USERS, USERS_DATA };
};

export default UsersReducer;
