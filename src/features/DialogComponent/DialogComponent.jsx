import { useParams } from 'react-router-dom';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
import styles from './DialogComponent.module.css';
import UserAvatar from '../../components/Helpers/UserAvatar/UserAvatar';
import React, { useEffect, useRef } from 'react';
import TextArea from '../../components/Helpers/TextArea/TextArea';
import Button from '../../components/Helpers/Button/Button';
import sendImg from '../../images/sendMessage.png';
import { addMessageTextActionCreator, sendMessageActionCreator } from '../../state/state';

const DialogComponent = (props) => {
  const { userID } = useParams();
  const newMessageText = useRef();
  const endOfMessagesRef = useRef(null);
  const userMessage = props.state.messagesPage.USERS_MESSAGES.find(
    (user) => user.id === userID
  );

  const onSendMessageHandler = () => {
    props.dispatch(sendMessageActionCreator(userID));
  };
  const onMessageTextChange = () => {
    const newText = newMessageText.current.value;
    const newMessageTextFromInput = {
      id: 'msg5',
      senderId: 'id0',
      text: newText,
      timestamp: new Date().getTime(),
    };

    props.dispatch(addMessageTextActionCreator(newMessageTextFromInput));
  };
  useEffect(() => {
    if (userMessage && userMessage.messages.length > 0) {
      endOfMessagesRef.current?.scrollIntoView();
    }
  }, [userMessage]);

  if (!userMessage) {
    return <NotFoundPage link={'/messages'} errorMessage={'Go back to messages'} />;
  }
  const user = props.state.messagesPage.USERS_DATA;

  return (
    <div className={styles['dialog-container']}>
      <div className={styles['messages-container']}>
        {[...userMessage.messages].map((message) => (
          <div
            key={message.id + message.senderId}
            className={`${
              message.senderId === user[6].id
                ? styles['sent-message']
                : styles['incoming-message']
            } ${styles['chat-element-container']}`}
          >
            <div className={styles.message}>{message.text}</div>
            <UserAvatar
              styleProps={{ ...styles }}
              user={user.find((userData) => userData.id === message.senderId)}
            />
          </div>
        ))}
        <div ref={endOfMessagesRef}></div>
      </div>
      <div className={styles['end-of-messages']}>
        <TextArea
          ref={newMessageText}
          onTextAdd={onMessageTextChange}
          value={props.state.messagesPage.newMessageText}
          styles={{ ...styles }}
          textPlaceholder={'Напишите сообщение...'}
        ></TextArea>

        <Button click={onSendMessageHandler} btnStyles={{ ...styles }}>
          <img src={sendImg} alt={'Send message'} />
        </Button>
      </div>
    </div>
  );
};

export default DialogComponent;
