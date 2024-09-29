import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsList from '../../../features/FriendsList/FriendsList';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeProvider';
import FriendsListContainer from '../../../features/FriendsList/FriendsListContainer';

const Navbar = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      <div>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles[theme]}`
              : `${styles.inActive} ${styles[theme]}`
          }
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles[theme]}`
              : `${styles.inActive} ${styles[theme]}`
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={styles[theme]}>
        <NavLink
          to="/newsfeed"
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles[theme]}`
              : `${styles.inActive} ${styles[theme]}`
          }
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles[theme]}`
              : `${styles.inActive} ${styles[theme]}`
          }
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles[theme]}`
              : `${styles.inActive} ${styles[theme]}`
          }
        >
          Settings
        </NavLink>
      </div>
      <FriendsListContainer />
    </nav>
  );
};
export default Navbar;
