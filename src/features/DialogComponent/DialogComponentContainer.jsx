import React, { useEffect, useRef } from 'react';

import {
  addNewMessageActionCreator,
  messageTextAreaChangeActionCreator,
} from '../../state/MessagesPageReducer';
import DialogComponent from './DialogComponent';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    friendsList: state.friendsList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTextAreaChange: (message) => {
      dispatch(messageTextAreaChangeActionCreator(message));
    },
    onSendMessage: () => {
      dispatch(addNewMessageActionCreator());
    },
  };
};

const DialogComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogComponent);
export default DialogComponentContainer;
