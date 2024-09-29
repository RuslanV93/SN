import { combineReducers, createStore } from 'redux';
import profilePageReducer from './ProfilePageReducer';
import messagesPageReducer from './MessagesPageReducer';
import sideBarReducer from './SideBarReducer';
import friendsListReducer from './FriendsListReducer';

const reducers = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  sidebar: sideBarReducer,
  friendsList: friendsListReducer,
});

const store = createStore(reducers);

export default store;
