import { connect } from 'react-redux';
import FriendsList from './FriendsList';
import { set3RandomFriends } from '../../state/FriendsListReducer';

const mapStateToProps = (state) => {
  return {
    FRIENDS_DATA: state.friendsList.FRIENDS_DATA,
    randomFriends: state.friendsList.randomFriends,
  };
};

const FriendsListContainer = connect(mapStateToProps, { set3RandomFriends })(FriendsList);

export default FriendsListContainer;
