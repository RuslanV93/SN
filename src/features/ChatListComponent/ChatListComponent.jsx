import React, { useContext } from 'react';
import styles from './ChatListComponent.module.css';
import { NavLink } from 'react-router-dom';
import UserAvatar from '../../components/Helpers/UserAvatar/UserAvatar';
import { ThemeContext } from '../../context/ThemeProvider';

const ChatListWindowComponent = (props) => {
  const { theme } = useContext(ThemeContext);
  const messagesPage = props.messagesPage;
  const chatsParticipants = props.friendsList;
  const lastMessage =
    messagesPage.USERS_MESSAGES[messagesPage.USERS_MESSAGES.length - 1].message;

  return (
    <ul className={styles.chatsList}>
      {chatsParticipants.map((user, index) => (
        <NavLink
          key={user.id}
          to={`/messages/${user.id}`}
          className={({ isActive }) => {
            return isActive
              ? `${styles['chat-link']} ${styles['active']} ${styles[theme]}`
              : `${styles['chat-link']} ${styles[theme]}`;
          }}
        >
          <UserAvatar
            styleProps={{ ...styles }}
            user={chatsParticipants.find((userData) => userData.id === user.id)}
          />
          <li>
            <div className={styles['chat-container']}>
              <div className={styles['dialog-name']}>{user.userName}</div>
              <div className={styles.dialogText}>
                {lastMessage.slice(0, 30)}
                {lastMessage.length > 30 ? '...' : ''}
              </div>
            </div>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default ChatListWindowComponent;
