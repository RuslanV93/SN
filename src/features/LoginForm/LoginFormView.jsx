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
      render={({ handleSubmit }) => (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <Field name={'login'} validate={validate}>
            {({ input, meta }) => {
              return (
                <div className={styles['input-wrapper']}>
                  <input
                    {...input}
                    placeholder={
                      meta.touched && meta.error && !meta.active
                        ? 'Login is required'
                        : 'Login'
                    }
                    className={`${styles['input']} ${styles['login-input']} ${
                      meta.touched && meta.error && !meta.active
                        ? styles['input-error']
                        : null
                    }`}
                    type="login"
                    autoComplete={'username'}
                  />
                  {meta.error ? (
                    <span className={styles['error-message']}>
                      {meta.error.spaces || meta.error.maximumLength}
                    </span>
                  ) : null}
                </div>
              );
            }}
          </Field>
          <Field name={'password'} validate={validate}>
            {({ input, meta }) => (
              <div className={styles['input-wrapper']}>
                <input
                  {...input}
                  placeholder={
                    meta.touched && meta.error && !meta.active
                      ? 'Password is required.'
                      : 'Password'
                  }
                  className={`${styles['input']} ${styles['password-input']} ${
                    meta.touched && meta.error && !meta.active
                      ? styles['input-error']
                      : null
                  }`}
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={'current-password'}
                />
                {meta.error ? (
                  <span className={styles['error-message']}>
                    {meta.error.spaces || meta.error.maximumLength}
                  </span>
                ) : null}
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={styles['show-password-button']}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <span role="img" aria-label="Hide password">
                      <img src={opened} alt={'Password visibility'}></img>
                    </span>
                  ) : (
                    <span role="img" aria-label="Show password">
                      <img src={closed} alt={'Password visibility'}></img>
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
