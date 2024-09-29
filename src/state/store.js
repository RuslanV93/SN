import Leha from '../images/Leha.jpg';
import Pasha from '../images/Pasha.jfif';
import Alla from '../images/Alla.jfif';
import Valera from '../images/Valera.jfif';
import Sveta from '../images/Sveta.jfif';
import Katya from '../images/Katya.jfif';
import Ruslan from '../images/Ruslan.jpg';
import profilePageReducer from './ProfilePageReducer';
import messagesPageReducer from './MessagesPageReducer';
import sideBarReducer from './SideBarReducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const store = {
  _state: {
    profilePage: {
      POSTS_DATA: [
        { userID: 'id1', postID: 1, message: 'Hi, this is my first post', likes: 40 },
        { userID: 'id2', postID: 2, message: 'Hello', likes: 30 },
        { userID: 'id5', postID: 3, message: 'How r u?', likes: 1 },
        { userID: 'id3', postID: 4, message: 'hoho u found me', likes: 2 },
        { userID: 'id4', postID: 5, message: 'ETO YA', likes: 223 },
      ],
      newPostText: '',
    },
    messagesPage: {
      USERS_DATA: [
        { id: 'id1', userName: 'Alla', lastMessage: 'Ты где?', profilePicture: Alla },
        { id: 'id2', userName: 'Leha', lastMessage: 'Привет', profilePicture: Leha },
        { id: 'id3', userName: 'Valera', lastMessage: 'Hi!', profilePicture: Valera },
        {
          id: 'id4',
          userName: 'Sveta',
          lastMessage: 'Как дела?',
          profilePicture: Sveta,
        },
        { id: 'id5', userName: 'Katya', lastMessage: 'хаха', profilePicture: Katya },
        { id: 'id6', userName: 'Pasha', lastMessage: 'нет', profilePicture: Pasha },
        { id: 'id0', userName: 'Ruslan', lastMessage: 'asss', profilePicture: Ruslan },
      ],
      USERS_MESSAGES: [
        { id: 'id1', message: 'Hi' },
        { id: 'id2', message: 'privert' },
        { id: 'id3', message: 'kak dela' },
        { id: 'id4', message: 'ssssss' },
        { id: 'id5', message: 'ypypypyp' },
        { id: 'id6', message: 'alalalal' },
      ],
      newMessageText: '',
    },
    sidebar: {
      randomFriends: '',
    },
  },
  _callSubscriber() {
    console.log('state is changed');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);
    this._state.sidebar = sideBarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};
