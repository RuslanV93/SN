import React, { useEffect, useState } from 'react';
import styles from './ChatListComponent.module.css';
import { NavLink } from 'react-router-dom';
import UserAvatar from '../../components/Helpers/UserAvatar/UserAvatar';

const ChatListWindow = (props) => {
  const [chats, setChats] = useState(props.state.messagesPage.USERS_MESSAGES);
  useEffect(() => {
    setChats(props.state.messagesPage.USERS_MESSAGES);
  }, [props.state.messagesPage.USERS_MESSAGES]);

  return (
    <ul className={styles.chatsList}>
      {chats.map((user, index) => (
        <NavLink
          key={user.id}
          to={`/messages/${user.id}`}
          className={({ isActive }) => {
            return isActive
              ? `${styles['chat-link']} ${styles['active']}`
              : styles['chat-link'];
          }}
        >
          <UserAvatar
            styleProps={{ ...styles }}
            user={props.state.messagesPage.USERS_DATA.find(
              (userData) => userData.id === user.id
            )}
          />
          <li>
            <div className={styles['chat-container']}>
              <div className={styles['dialog-name']}>{user.participantsNames[1]}</div>
              <div className={styles.dialogText}>
                {props.state.messagesPage.USERS_MESSAGES[index].lastMessageMethod
                  .call(user)
                  .slice(0, 30)}
                {props.state.messagesPage.USERS_MESSAGES[index].lastMessageMethod.call(
                  user
                ).length > 30
                  ? '...'
                  : ''}
              </div>
            </div>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default ChatListWindow;
