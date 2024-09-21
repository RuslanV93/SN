import { useParams } from 'react-router-dom';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
import styles from './DialogComponent.module.css';
import UserAvatar from '../../components/Helpers/UserAvatar/UserAvatar';

const DialogComponent = (props) => {
  const { userID } = useParams();
  
  const userMessage = props.state.messagesPage.USERS_MESSAGES.find(
    (user) => user.id === userID
  );
  if (!userMessage) {
    return <NotFoundPage link={'/messages'} errorMessage={'Go back to messages'} />;
  }
  const user = props.state.messagesPage.USERS_DATA;

  return (
    <div className={styles['dialog-container']}>
      {[...userMessage.messages].map((message) => (
        <div
          className={`${
            message.senderId === user[6].id
              ? styles['sent-message']
              : styles['incoming-message']
          } ${styles['chat-element-container']}`}
        >
          <div key={message.id + message.senderId} className={styles.message}>
            {message.text}
          </div>
          <UserAvatar
            styleProps={{ ...styles }}
            user={user.find((userData) => userData.id === message.senderId)}
          />
        </div>
      ))}
    </div>
  );
};

export default DialogComponent;
