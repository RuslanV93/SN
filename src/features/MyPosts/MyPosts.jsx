import styles from './Myposts.module.css';
import Post from '../../components/Helpers/Post/Post';
import React, { useRef } from 'react';
import TextArea from '../../components/Helpers/TextArea/TextArea';
import { maxLength, requiredField } from '../../utils/validators';

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
    props.addPost(values.newPostInput);
    form.reset();
  };
  const validate = (value) => {
    const errors = {
      ...requiredField(value),
      ...maxLength(150)(value),
    };
    return Object.keys(errors).length > 0 ? errors : undefined;
  };
  return (
    <div className={`${styles['my-posts']}`}>
      <TextArea
        textAreaStyles={{ ...styles }}
        onSubmit={onSubmit}
        name={'newPostInput'}
        validate={validate}
        ref={newPostElement}
        value={props.newPostText}
        textPlaceholder={"What's new?"}
        buttonText={'Add Post'}
      ></TextArea>

      {postsElement}
    </div>
  );
};

export default MyPosts;
