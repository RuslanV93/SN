import styles from './Myposts.module.css';
import Post from '../../components/Helpers/Post/Post';
import Button from '../../components/Helpers/Button/Button';
import React, { useContext, useRef } from 'react';
import TextArea from '../../components/Helpers/TextArea/TextArea';
import { ThemeContext } from '../../context/ThemeProvider';

const MyPosts = (props) => {
  const { theme } = useContext(ThemeContext);
  
  const postsElement = [...props.posts]
    .reverse()
    .map((post) => (
      <Post
        key={post.postID}
        POST_DATA={post}
        USERS_LIST={props.userList}
        likes={post.likes}
      />
    ));

  const newPostElement = useRef(null);

  function onAddPostButtonClick() {
    props.addPost();
  }

  const onTextAreaChange = (e) => {
    const text = e.target.value;

    props.updateNewPostText(text);
  };

  return (
    <div className={`${styles['my-posts']} ${styles[theme]}`}>
      <TextArea
        ref={newPostElement}
        onTextAdd={onTextAreaChange}
        value={props.newPostText}
        textareaStyles={{ ...styles }}
        textPlaceholder={'Что нового?'}
      ></TextArea>

      <Button click={onAddPostButtonClick} btnStyles={{ ...styles }}>
        Add Post
      </Button>
      {postsElement}
    </div>
  );
};

export default MyPosts;
