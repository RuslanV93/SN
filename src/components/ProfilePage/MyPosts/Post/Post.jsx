import React from 'react';
import styles from './Post.module.css';
import Button from '../../../../components/Helpers/Button/Button';
import UserAvatar from './../../../../components/Helpers/UserAvatar/UserAvatar';
const Post = (props) => {
  console.log(styles);
  return (
    <div className={styles.post}>
      <UserAvatar styleProps={{ ...styles }} />
      <div className={styles['post-textarea']}>{props.message}</div>
      <div className={styles['post-interactive-section']}>
        <span>{props.likesCount}</span>
        <Button props={'Like'} />
      </div>
    </div>
  );
};

export default Post;
