import MyPosts from './MyPosts/MyPosts';
import styles from './ProfilePage.module.css';

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles['page-head-img']}>
        <img
          className={styles['content-page-image']}
          src="https://i.pinimg.com/originals/eb/f0/02/ebf002d6348c3ae432649da4418fce40.jpg"
          alt="img"
        ></img>
      </div>
      <div className={styles['profile-info']}>
        <img
          className={styles['profile-image']}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYYFhUjvNhBJ9SwQTv8X3PyQVtd-EejwOMQ&s"
          alt="profile-photo"
        ></img>
        <div className={styles.description}>Lorem</div>
      </div>
      <MyPosts />
    </div>
  );
};
export default Content;
