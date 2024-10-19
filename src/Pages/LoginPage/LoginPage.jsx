import React from 'react';
import styles from './LoginPage.module.css';
import LoginFormContainer from '../../features/LoginForm/LoginFormContainer';

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>
      <div>
        <LoginFormContainer />
      </div>
    </div>
  );
};

export default LoginPage;
