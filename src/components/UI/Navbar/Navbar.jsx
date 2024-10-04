import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

import FriendsListContainer from '../../../features/FriendsList/FriendsListContainer';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} `}>
      <div>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? `${styles.active} ` : `${styles.inActive} `
          }
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            isActive ? `${styles.active} ` : `${styles.inActive} `
          }
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/newsfeed"
          className={({ isActive }) =>
            isActive ? `${styles.active} ` : `${styles.inActive} `
          }
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            isActive ? `${styles.active} ` : `${styles.inActive} `
          }
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${styles.active} ` : `${styles.inActive} `
          }
        >
          Settings
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? `${styles.active} ` : `${styles.inActive}`
          }
        >
          Users
        </NavLink>
      </div>
      <FriendsListContainer />
    </nav>
  );
};
export default Navbar;
