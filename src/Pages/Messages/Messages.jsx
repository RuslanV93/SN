import styles from './Messages.module.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import ChatListWindowContainer from '../../features/ChatListComponent/ChatListComponentContainer';
import DialogComponentContainer from '../../features/DialogComponent/DialogComponentContainer';

const Messages = (props) => {
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
        <div
          className={`${styles['chat-list']} ${
            isDialogOpen ? styles['chat-list-shr'] : styles['chat-list-non-shr']
          }`}
        >
          <ChatListWindowContainer />
        </div>

        <Routes>
          <Route path=":userID" element={<DialogComponentContainer />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Messages;
