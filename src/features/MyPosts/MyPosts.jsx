import styles from './Myposts.module.css';
import Post from '../../components/Helpers/Post/Post';

const MyPosts = (props) => {
  return (
    <div className={styles['my-posts']}>
      <textarea></textarea>
      <button>Add Post</button>
      {[...props.state.profilePage.POSTS_DATA].reverse().map((post) => (
        <Post
          key={post.postID}
          POST_DATA={post}
          USERS_LIST={props.state.messagesPage.USERS_DATA}
          likes={post.likes}
        />
      ))}
    </div>
  );
};

export default MyPosts;
