import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import LoginFormView from './LoginFormView';
import { loginAPI } from '../../API/loginAPI';

const LoginFormContainer = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values) => {
    const { login, password, rememberMe } = values;
    loginAPI.authLogin(login, password, rememberMe);
  };
  const togglePasswordVisibility = () => {
    console.log('hello');
    setShowPassword(!showPassword);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.login) {
      errors.login = 'Login is required.';
    }
    if (!values.password) {
      errors.password = 'Password is required.';
    }
    console.log(errors);
    return errors;
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

export default LoginFormContainer;
