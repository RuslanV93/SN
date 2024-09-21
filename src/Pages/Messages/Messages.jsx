import ChatListWindow from '../../features/ChatListComponent/ChatListComponent';
import DialogComponent from '../../features/DialogComponent/DialogComponent';
import styles from './Messages.module.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

const Messages = (props) => {
  const location = useLocation();
  console.log(props);
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
          <ChatListWindow isDialogOpen={isDialogOpen} state={props.state} />
        </div>

        <Routes>
          <Route path=":userID" element={<DialogComponent state={props.state} />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Messages;
