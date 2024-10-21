import styles from './DialogComponent.module.css';
import UserAvatar from '../../components/Helpers/UserAvatar/UserAvatar';
import React, { useEffect, useRef } from 'react';
import TextArea from '../../components/Helpers/TextArea/TextArea';
import sendImg from '../../images/sendMessage.png';
import { useParams } from 'react-router-dom';
import { maxLength, requiredField } from '../../utils/validators';

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
    props.addNewMessage(values.message);
    form.reset();
  };
  const validate = (value) => {
    const errors = {
      ...requiredField(value),
      ...maxLength(300)(value),
    };
    return Object.keys(errors).length > 0 ? errors : undefined;
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
          value={messagesPage.newMessageText}
          textPlaceholder={'Напишите сообщение...'}
          buttonText={<img src={sendImg} alt={'Send message'} />}
        ></TextArea>
      </div>
    </div>
  );
};

export default DialogComponent;
