import { usersAPI } from '../API/API';

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_FETCHING_STATUS = 'SET-FETCHING-STATUS';
const SET_FOLLOWING_PROGRESS = 'SET-FOLLOWING-PROGRESS';

const initialState = {
  USERS_DATA: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  followingInProgress: [],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        USERS_DATA: state.USERS_DATA.map((user) => {
          return user.id === action.userID ? { ...user, followed: true } : user;
        }),
      };

    case UNFOLLOW_USER:
      return {
        ...state,
        USERS_DATA: state.USERS_DATA.map((user) => {
          return user.id === action.userID ? { ...user, followed: false } : user;
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
    case SET_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};

export const setFollowingProgress = (isFetching, id) => {
  return { type: SET_FOLLOWING_PROGRESS, isFetching, id };
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

export const acceptFollowUser = (userID) => {
  return { type: FOLLOW_USER, userID };
};
export const acceptUnfollowUser = (userID) => {
  return { type: UNFOLLOW_USER, userID };
};
export const setUsers = (USERS_DATA) => {
  return { type: SET_USERS, USERS_DATA };
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setFetchingStatus(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setFetchingStatus(false));
    });
  };
};

export const followUserClick = (id, actionType) => {
  return (dispatch) => {
    dispatch(setFollowingProgress(true, id));
    const apiMethod =
      actionType === 'follow' ? usersAPI.postFollowUser : usersAPI.deleteFollowUser;
    apiMethod(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(actionType === 'follow' ? acceptFollowUser(id) : acceptUnfollowUser(id));
      }
      dispatch(setFollowingProgress(false, id));
    });
  };
};

export default UsersReducer;
