import styles from './LoginForm.module.css';
import { Field, Form } from 'react-final-form';
import Button from '../../components/Helpers/Button/Button';
import React from 'react';
import opened from '../../images/loginPage/openedeye.png';
import closed from '../../images/loginPage/closedyey.png';

const LoginFormView = ({
  onSubmit,
  validate,
  showPassword,
  togglePasswordVisibility,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <Field name={'login'}>
            {({ input, meta }) => (
              <div className={styles['input-wrapper']}>
                <input
                  {...input}
                  placeholder={meta.touched && meta.error ? meta.error : 'Login'}
                  className={`${styles['input']} ${styles['login-input']} ${
                    meta.touched && meta.error ? styles['input-error'] : null
                  }`}
                  type="login"
                />
              </div>
            )}
          </Field>
          <Field name={'password'}>
            {({ input, meta }) => (
              <div className={styles['input-wrapper']}>
                <input
                  {...input}
                  placeholder={meta.touched && meta.error ? meta.error : 'Password'}
                  className={`${styles['input']} ${styles['password-input']} ${
                    meta.touched && meta.error ? styles['input-error'] : null
                  }`}
                  type={showPassword ? 'text' : 'password'}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={styles['show-password-button']}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <span role="img" aria-label="Hide password">
                      <img src={opened}></img>
                    </span>
                  ) : (
                    <span role="img" aria-label="Show password">
                      <img src={closed}></img>
                    </span>
                  )}
                </button>
              </div>
            )}
          </Field>

          <div className={styles['remember-me-container']}>
            <label>
              <Field
                className={`${styles['checkbox']} `}
                name={'rememberMe'}
                component={'input'}
                type={'checkbox'}
              />

              <span>Remember me</span>
            </label>
          </div>
          <Button btnStyles={{ ...styles }} type={'submit'}>
            Login
          </Button>
        </form>
      )}
    ></Form>
  );
};

export default LoginFormView;
