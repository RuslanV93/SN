import MyPosts from '../../features/MyPosts/MyPosts';
import styles from './ProfilePage.module.css';
import ProfileInfo from '../../features/ProfileInfo/ProfileInfo';

const ProfilePage = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles['page-head-img']}>
        <img
          className={styles['content-page-image']}
          src="https://i.pinimg.com/originals/eb/f0/02/ebf002d6348c3ae432649da4418fce40.jpg"
          alt="img"
        ></img>
      </div>
      <ProfileInfo />
      <MyPosts state={props.state} />
    </div>
  );
};
export default ProfilePage;
