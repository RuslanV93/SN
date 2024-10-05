import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './FriendsList.module.css';
import UserAvatar from '../../components/Helpers/UserAvatar/UserAvatar';
import { ThemeContext } from '../../context/ThemeProvider';

const FriendsList = ({ randomFriends, set3RandomFriends }) => {
  useEffect(() => {
    set3RandomFriends();
  }, [set3RandomFriends]);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles['navbar-friends-list-container']} ${styles[theme]}`}>
      <NavLink
        to="/friends"
        className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
      >
        <h4>Friends</h4>
      </NavLink>
      <div className={styles['navbar-friends-list']}>
        {randomFriends.map((friend) => (
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
