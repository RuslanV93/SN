import { connect, useSelector } from 'react-redux';
import FriendsList from './FriendsList';
import { compose } from 'redux';
import { set3RandomFriends } from '../../state/FriendsListReducer';

const mapStateToProps = (state) => {
  return {
    FRIENDS_DATA: state.friendsList.FRIENDS_DATA,
    randomFriends: state.friendsList.randomFriends,
  };
};

const withAuthFriendsList = (Component) => {
  return (props) => {
    const auth = useSelector((state) => state.auth.isAuth);
    return auth ? <Component {...props} /> : null;
  };
};

const FriendsListContainer = compose(
  withAuthFriendsList,
  connect(mapStateToProps, { set3RandomFriends })
)(FriendsList);
export default FriendsListContainer;
