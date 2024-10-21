import React from 'react';
import { connect } from 'react-redux';
import {
  profileAuthorisation,
  setAuthUserData,
  signOut,
} from '../../../state/AuthReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.profileAuthorisation();
  }

  logOut = () => {
    this.props.signOut();
  };

  render() {
    return <Header {...this.props} logOut={this.logOut} />;
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
  };
};
const dispatches = {
  setAuthUserData,
  profileAuthorisation,
  signOut,
};
export default connect(mapStateToProps, dispatches)(HeaderContainer);
