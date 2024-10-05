import styles from './Myposts.module.css';
import Post from '../../components/Helpers/Post/Post';
import Button from '../../components/Helpers/Button/Button';
import React, { useRef } from 'react';
import TextArea from '../../components/Helpers/TextArea/TextArea';

const MyPosts = (props) => {
  const postsElement = [...props.posts]
    .reverse()
    .map((post) => (
      <Post
        key={post.postID}
        POST_DATA={post}
        friendsList={props.friendsList}
        likes={post.likes}
      />
    ));

  const newPostElement = useRef(null);

  function onAddPostButtonClick() {
    props.addPost();
  }

  const onTextAreaChange = (e) => {
    const text = e.target.value;

    props.textAreaChange(text);
  };

  return (
    <div className={`${styles['my-posts']}`}>
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
