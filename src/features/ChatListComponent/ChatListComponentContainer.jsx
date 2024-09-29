import React from 'react';
import ChatListWindowComponent from './ChatListComponent';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    friendsList: state.friendsList.USERS_DATA,
  };
};

const ChatListComponentContainer = connect(mapStateToProps)(ChatListWindowComponent);
export default ChatListComponentContainer;
