import styles from './DialogComponent.module.css';
import UserAvatar from '../../components/Helpers/UserAvatar/UserAvatar';
import React, { useEffect, useRef } from 'react';
import TextArea from '../../components/Helpers/TextArea/TextArea';
import Button from '../../components/Helpers/Button/Button';
import sendImg from '../../images/sendMessage.png';
import { useParams } from 'react-router-dom';
import { addNewMessage, messageTextAreaChange } from '../../state/MessagesPageReducer';

const DialogComponent = (props) => {
  const messagesPage = props.messagesPage;
  const userMessages = props.messagesPage.USERS_MESSAGES;
  const textAreaRef = useRef();
  const endOfMessagesRef = useRef();
  const { userID } = useParams();
  useEffect(() => {
    endOfMessagesRef.current.scrollIntoView();
  }, [props.messagesPage]);

  const onSendMessageClick = () => {
    props.addNewMessage();
  };

  const onTextAreaChange = (e) => {
    const message = e.target.value;
    props.messageTextAreaChange(message);
  };

  return (
    <div className={`${styles['dialog-container']}`}>
      <div className={styles['messages-container']}>
        {userMessages.map((message) => (
          <div
            key={message.id}
            className={`${styles['sent-message']} ${styles['chat-element-container']}`}
          >
            <div className={styles.message}>{message.message}</div>
            <UserAvatar
              styleProps={{ ...styles }}
              user={props.friendsList.FRIENDS_DATA.find((user) => user.id === userID)}
            />
          </div>
        ))}
        <div ref={endOfMessagesRef}></div>
      </div>

      <div className={styles['end-of-messages']}>
        <TextArea
          ref={textAreaRef}
          onTextAdd={onTextAreaChange}
          value={messagesPage.newMessageText}
          textareaStyles={{ ...styles }}
          textPlaceholder={'Напишите сообщение...'}
        ></TextArea>

        <Button click={onSendMessageClick} btnStyles={{ ...styles }}>
          <img src={sendImg} alt={'Send message'} />
        </Button>
      </div>
    </div>
  );
};

export default DialogComponent;
