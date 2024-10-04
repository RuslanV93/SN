import { combineReducers, createStore } from 'redux';
import profilePageReducer from './ProfilePageReducer';
import messagesPageReducer from './MessagesPageReducer';
import sideBarReducer from './SideBarReducer';
import friendsListReducer from './FriendsListReducer';
import UsersReducer from './UsersReducer';

const reducers = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  sidebar: sideBarReducer,
  friendsList: friendsListReducer,
  UsersPage: UsersReducer,
});

const store = createStore(reducers);

export default store;
