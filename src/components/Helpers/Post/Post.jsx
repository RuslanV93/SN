import React from 'react';
import styles from './Post.module.css';
import Button from '../Button/Button';
import UserAvatar from '../UserAvatar/UserAvatar';

const Post = (props) => {
  const user = props.USERS_LIST.find((user) => user.id === props.POST_DATA.userID);

  return (
    <div className={styles.post}>
      <UserAvatar user={user} styleProps={{ ...styles }} />
      <div className={styles['post-textarea']}>{props.POST_DATA.message}</div>
      <div className={styles['post-interactive-section']}>
        <span>{props.likes}</span>
        <Button props={'Like'} />
      </div>
    </div>
  );
};

export default Post;
