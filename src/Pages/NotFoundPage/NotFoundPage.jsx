import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = (props) => {
  const redirectTo = props.link;
  const errorMessage = props.errorMessage;
  return (
    <div className={styles['not-found-page-container']}>
      Page Not Found
      <Link to={redirectTo}>{errorMessage}</Link>
    </div>
  );
};

export default NotFoundPage;
