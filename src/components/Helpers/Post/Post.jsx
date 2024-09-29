import React, { useContext } from 'react';
import styles from './Post.module.css';
import Button from '../Button/Button';
import UserAvatar from '../UserAvatar/UserAvatar';
import { ThemeContext } from '../../../context/ThemeProvider';

const Post = (props) => {
  const user = props.USERS_LIST.find((user) => user.id === props.POST_DATA.userID);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.post} ${styles[theme]}`}>
      <UserAvatar user={user} styleProps={{ ...styles }} />
      <div className={styles['post-textarea']}>{props.POST_DATA.message}</div>
      <div className={styles['post-interactive-section']}>
        <span>{props.likes}</span>
        <Button
          aria-label="лайки"
          btnStyles={{ ...styles }}
          click={() => console.log('like')}
        >
          Лайки
        </Button>
      </div>
    </div>
  );
};

export default Post;
