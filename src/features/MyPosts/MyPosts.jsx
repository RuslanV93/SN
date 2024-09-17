import styles from './Myposts.module.css';
import Post from '../../components/Helpers/Post/Post';

const MyPosts = () => {
  return (
    <div className={styles['my-posts']}>
      <textarea></textarea>
      <button>Add Post</button>
      <Post message="Hello. It's me!" likesCount="30"/>
      <Post message="Wanna hang out?" likesCount="0"/>
    </div>
  );
};

export default MyPosts;
