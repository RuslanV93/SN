import ChatListWindow from '../../features/ChatListComponent/ChatListComponent';
import DialogComponent from '../../features/DialogComponent/DialogComponent';
import styles from './Messages.module.css';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
const Messages = () => {
  const location = useLocation();
  const isDialogOpen =
    location.pathname.includes('/messages/') && location.pathname.split('/messages/')[1];
  return (
    <div className={styles.messages}>
      <h1>Dialogs</h1>
      {isDialogOpen ? (
        <Link to={'/messages'}>
          <span className={styles['close-btn']}></span>
        </Link>
      ) : (
        ''
      )}
      <div className={`${isDialogOpen ? styles.chatListShrinked : ''}`}>
        <div className={styles.friendsList}>
          <ChatListWindow isDialogOpen={isDialogOpen} />
        </div>
        <div className={styles['dialog-container']}>
          <Routes>
            <Route path=":userID" element={<DialogComponent />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Messages;
