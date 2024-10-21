const SEND_MESSAGE = 'SEND-MESSAGE';

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
        message: action.newMessage,
      };
      return {
        ...state,
        USERS_MESSAGES: [...state.USERS_MESSAGES, newMessage],
      };
    }
    default:
      return state;
  }
};
export default messagesPageReducer;

export const addNewMessage = (newMessage) => {
  return { type: SEND_MESSAGE, newMessage };
};
