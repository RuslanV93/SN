import styles from './Myposts.module.css';
import Post from '../../components/Helpers/Post/Post';
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
  const onSubmit = (values, form) => {
    console.log(values);
    if (
      values.newPostInput &&
      values.newPostInput.length < 300 &&
      values.newPostInput.trim() !== ''
    ) {
      props.addPost();
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.newPostInput || values.newPostInput.trim() === '') {
      errors.newPostInput = "Post can't be empty.";
    }

    if (values.newPostInput?.length > 300) {
      errors.newPostInput = 'Too many characters. The maximum value is 300.';
    }

    return errors;
  };

  const onTextAreaChange = (value) => {
    props.textAreaChange(value);
  };

  return (
    <div className={`${styles['my-posts']}`}>
      <TextArea
        textAreaStyles={{ ...styles }}
        onSubmit={onSubmit}
        name={'newPostInput'}
        validate={validate}
        ref={newPostElement}
        onTextAreaChange={onTextAreaChange}
        value={props.newPostText}
        textPlaceholder={"What's new?"}
        buttonText={'Add Post'}
      ></TextArea>

      {postsElement}
    </div>
  );
};

export default MyPosts;
