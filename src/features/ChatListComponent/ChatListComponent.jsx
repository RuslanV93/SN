import React from 'react';
import styles from './ChatListComponent.module.css';
import { NavLink } from 'react-router-dom';

const ChatListWindow = ({ isDialogOpen }) => {
  const users = [
    { id: 1, userName: 'Ruslan', lastMessage: 'Ты где?' },
    { id: 2, userName: 'Leha', lastMessage: 'Привет' },
    { id: 3, userName: 'Darya', lastMessage: 'аааа' },
  ];
  return (
    <ul className={styles.chatsList}>
      {users.map((user) => (
        <NavLink
          to={`/messages/${user.id}`}
          className={({ isActive }) => {
            return isActive ? `${styles['chat-link']} ${styles['active']}` : styles['chat-link'];
          }}
        >
          <li key={user.id}>
            <div className={styles['dialog-name']}>{user.userName}</div>
            <div className={styles.dialogText}>{user.lastMessage}</div>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default ChatListWindow;
