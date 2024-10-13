import React from 'react';
import { connect } from 'react-redux';
import { profileAuthorisation, setAuthUserData } from '../../../state/AuthReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.profileAuthorisation();
  }

  render() {
    return <Header {...this.props} />;
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
};
export default connect(mapStateToProps, dispatches)(HeaderContainer);
