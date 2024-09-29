import React, { useContext } from 'react';
import styles from './ProfileInfo.module.css';
import { ThemeContext } from '../../context/ThemeProvider';

const ProfileInfo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles['profile-info']} ${styles[theme]}`}>
      <img
        className={styles['profile-image']}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYYFhUjvNhBJ9SwQTv8X3PyQVtd-EejwOMQ&s"
        alt="profile-photo"
      ></img>
      <div className={styles.description}>Lorem</div>
    </div>
  );
};

export default ProfileInfo;
