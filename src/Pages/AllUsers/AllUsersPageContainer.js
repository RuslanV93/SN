import { connect } from 'react-redux';
import { followUserAC, setUsersAC, unFollowUserAC } from '../../state/UsersReducer';

import AllUsersComponent from './AllUsersComponent';

const mapStateToProps = (state) => {
  return {
    USERS_DATA: state.UsersPage.USERS_DATA,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userID) => {
      dispatch(followUserAC(userID));
    },
    unFollowUser: (userID) => {
      dispatch(unFollowUserAC(userID));
    },
    setUsers: (USERS_DATA) => {
      dispatch(setUsersAC(USERS_DATA));
    },
  };
};

const AllUsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllUsersComponent);

export default AllUsersPageContainer;
