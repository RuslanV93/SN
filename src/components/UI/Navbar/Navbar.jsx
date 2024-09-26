import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsList from '../../../features/FriendsList/FriendsList';

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/messages"
          className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
        >
          Messages
        </NavLink>
      </div>
      <div className={styles.aaa}>
        <NavLink
          to="/newsfeed"
          className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
        >
          Settings
        </NavLink>
      </div>
      <FriendsList state={props.state} />
    </nav>
  );
};
export default Navbar;
