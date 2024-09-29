import { connect } from 'react-redux';
import FriendsList from './FriendsList';
import { set3RandomFriendsActionCreator } from '../../state/FriendsListReducer';

const mapStateToProps = (state) => {
  return {
    USERS_DATA: state.friendsList.USERS_DATA,
    randomFriends: state.friendsList.randomFriends,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    set3RandomFriend: () => {
      dispatch(set3RandomFriendsActionCreator());
    },
  };
};

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendsListContainer;
