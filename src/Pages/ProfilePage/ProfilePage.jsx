import styles from './ProfilePage.module.css';
import ProfileInfo from '../../features/ProfileInfo/ProfileInfo';
import MyPostsContainer from '../../features/MyPosts/MyPostsContainer';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

const ProfilePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.profile} ${styles[theme]}`}>
      <div className={styles['page-head-img']}>
        <img
          className={styles['content-page-image']}
          src="https://i.pinimg.com/originals/eb/f0/02/ebf002d6348c3ae432649da4418fce40.jpg"
          alt="img"
        ></img>
      </div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default ProfilePage;
