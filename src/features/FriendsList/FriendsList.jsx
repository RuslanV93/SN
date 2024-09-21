import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './FriendsList.module.css';
import UserAvatar from '../../components/Helpers/UserAvatar/UserAvatar';

const FriendsList = (props) => {
  const getRandom3Friends = (friendsList, numberOfFriends = 3) => {
    return [...friendsList].sort(() => Math.random() - 0.5).slice(0, numberOfFriends);
  };
  const RandomFriends = getRandom3Friends(props.state.USERS_DATA);

  return (
    <div className={styles['navbar-friends-list-container']}>
      <NavLink
        to="/friends"
        className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
      >
        <h4>Friends</h4>
      </NavLink>
      <div className={styles['navbar-friends-list']}>
        {RandomFriends.map((friend) => (
          <NavLink
            key={friend.id}
            to={`/friends/${friend.userName + friend.id}`}
            className={styles['friend-link']}
          >
            {<UserAvatar user={friend} styleProps={{ ...styles }} />}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
