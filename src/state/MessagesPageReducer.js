import Alla from '../images/Alla.jfif';
import Leha from '../images/Leha.jpg';
import Valera from '../images/Valera.jfif';
import Sveta from '../images/Sveta.jfif';
import Katya from '../images/Katya.jfif';
import Pasha from '../images/Pasha.jfif';
import Ruslan from '../images/Ruslan.jpg';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
  USERS_MESSAGES: [
    { id: 'id1', message: 'Hi' },
    { id: 'id2', message: 'privert' },
    { id: 'id3', message: 'kak dela' },
    { id: 'id4', message: 'ssssss' },
    { id: 'id5', message: 'ypypypyp' },
    { id: 'id6', message: 'alalalal' },
  ],
  newMessageText: '',
};

const messagesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.message,
      };
    }

    case SEND_MESSAGE: {
      const allMessages = state.USERS_MESSAGES;
      const currentID = allMessages[allMessages.length - 1].id.replace(
        /(\d+)/,
        (match) => {
          return parseInt(match) + 1;
        }
      );
      const newMessage = {
        id: currentID,
        message: state.newMessageText,
      };
      return {
        ...state,
        USERS_MESSAGES: [...state.USERS_MESSAGES, newMessage],
        newMessageText: '',
      };
    }
    default:
      return state;
  }
};
export default messagesPageReducer;

export const messageTextAreaChangeActionCreator = (message) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, message };
};
export const addNewMessageActionCreator = () => {
  return { type: SEND_MESSAGE };
};
