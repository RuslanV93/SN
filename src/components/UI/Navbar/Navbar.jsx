import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? styles.active : '')}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/messages" className={({ isActive }) => (isActive ? styles.active : '')}>
          Messages
        </NavLink>
      </div>
      <div className={styles.aaa}>
        <NavLink to="/newsfeed" className={({ isActive }) => (isActive ? styles.active : '')}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" className={({ isActive }) => (isActive ? styles.active : '')}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? styles.active : '')}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
