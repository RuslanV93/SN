import styles from './Myposts.module.css';
import Post from '../../components/Helpers/Post/Post';
import Button from '../../components/Helpers/Button/Button';
import { useRef } from 'react';
import { addPostActionCreator, textAreaChangeActionCreator } from '../../state/state';

const MyPosts = (props) => {
  const postsElement = [...props.state.profilePage.POSTS_DATA]
    .reverse()
    .map((post) => (
      <Post
        key={post.postID}
        POST_DATA={post}
        USERS_LIST={props.state.messagesPage.USERS_DATA}
        likes={post.likes}
      />
    ));

  const newPostElement = useRef(null);

  function onAddPostButtonClick() {
    props.dispatch(addPostActionCreator());
  }

  function onTextAreaChange() {
    const text = newPostElement.current.value;
    const action = textAreaChangeActionCreator(text);
    console.log(props.state.profilePage.newPostText);
    props.dispatch(action);
  }

  return (
    <div className={styles['my-posts']}>
      <textarea
        onChange={onTextAreaChange}
        placeholder={'Что у вас нового?'}
        ref={newPostElement}
        value={props.state.profilePage.newPostText}
      />
      <Button click={onAddPostButtonClick} btnStyles={{ ...styles }}>
        Add Post
      </Button>
      {postsElement}
    </div>
  );
};

export default MyPosts;
