import Messages from './Messages';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps)
  // WithAuthRedirect
)(Messages);
