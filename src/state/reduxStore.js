import { applyMiddleware, combineReducers, createStore } from 'redux';
import profilePageReducer from './ProfilePageReducer';
import messagesPageReducer from './MessagesPageReducer';
import sideBarReducer from './SideBarReducer';
import friendsListReducer from './FriendsListReducer';
import UsersReducer from './UsersReducer';
import { AuthReducer } from './AuthReducer';
import { thunk } from 'redux-thunk';

const reducers = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  sidebar: sideBarReducer,
  friendsList: friendsListReducer,
  UsersPage: UsersReducer,
  auth: AuthReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
