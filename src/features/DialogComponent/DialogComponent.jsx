import styles from './DialogComponent.module.css';
import UserAvatar from '../../components/Helpers/UserAvatar/UserAvatar';
import React, { useEffect, useRef } from 'react';
import TextArea from '../../components/Helpers/TextArea/TextArea';
import sendImg from '../../images/sendMessage.png';
import { useParams } from 'react-router-dom';

const DialogComponent = (props) => {
  const messagesPage = props.messagesPage;
  const userMessages = props.messagesPage.USERS_MESSAGES;
  const textAreaRef = useRef();
  const endOfMessagesRef = useRef();
  const { userID } = useParams();
  useEffect(() => {
    endOfMessagesRef.current.scrollIntoView();
  }, [props.messagesPage]);

  const onSubmit = (values, form) => {
    if (values.message && values.message.length < 300) {
      props.addNewMessage();
    }
  };
  const onTextAreaChange = (value) => {
    props.messageTextAreaChange(value);
  };
  const validate = (value) => {
    const errors = {};
    if (!value.message) {
      errors.message = "Message can't be empty.";
    }
    return errors;
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
          textAreaStyles={{ ...styles }}
          ref={textAreaRef}
          validate={validate}
          name={'message'}
          onSubmit={onSubmit}
          onTextAreaChange={onTextAreaChange}
          value={messagesPage.newMessageText}
          textPlaceholder={'Напишите сообщение...'}
          buttonText={<img src={sendImg} alt={'Send message'} />}
        ></TextArea>
      </div>
    </div>
  );
};

export default DialogComponent;
