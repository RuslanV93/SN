import React from 'react';
import loader from '../../../images/spinner.svg';
import styles from './LoaderComponent.module.css';

const LoaderComponent = () => {
  return (
    <div className={styles['loader-container']}>
      <img
        src={loader}
        alt={'loader'}
        style={{
          display: 'block',
          margin: 'auto',
          width: '100px',
          marginTop: '100px',
        }}
      />
    </div>
  );
};

export default LoaderComponent;
