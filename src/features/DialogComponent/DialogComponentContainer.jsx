import { addNewMessage } from '../../state/MessagesPageReducer';
import DialogComponent from './DialogComponent';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    friendsList: state.friendsList,
  };
};

const DialogComponentContainer = connect(mapStateToProps, {
  addNewMessage,
})(DialogComponent);
export default DialogComponentContainer;
