import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import LoginFormView from './LoginFormView';
import { maxLength, requiredField, spaceValidation } from '../../utils/validators';
import { signIn } from '../../state/AuthReducer';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginFormContainer = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  if (props.isAuth) {
    navigate(props.prevLocation);
  }
  const onSubmit = (values) => {
    const { login, password, rememberMe } = values;

    props.signIn(login, password, rememberMe);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validate = (value) => {
    const errors = {
      ...requiredField(value),
      ...spaceValidation(value),
      ...maxLength(30)(value),
    };
    return Object.keys(errors).length > 0 ? errors : undefined;
  };

  return (
    <div className={styles['login-form-container']}>
      <h4>Log in to your profile to continue</h4>
      <LoginFormView
        onSubmit={onSubmit}
        validate={validate}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  prevLocation: state.auth.prevLocation,
});

export default connect(mapStateToProps, { signIn })(LoginFormContainer);
