const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_FETCHING_STATUS = 'SET-FETCHING-STATUS';

const initialState = {
  USERS_DATA: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
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
      return {
        ...state,
        USERS_DATA: [...action.USERS_DATA],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
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
export const setFetchingStatus = (isFetching) => {
  return { type: SET_FETCHING_STATUS, isFetching };
};

export const setTotalUsersCount = (totalCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalCount };
};
export const setCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, page };
};

export const followUser = (userID) => {
  return { type: FOLLOW_USER, userID };
};
export const unFollowUser = (userID) => {
  return { type: UNFOLLOW_USER, userID };
};
export const setUsers = (USERS_DATA) => {
  return { type: SET_USERS, USERS_DATA };
};

export default UsersReducer;
