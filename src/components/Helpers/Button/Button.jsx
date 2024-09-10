import React from 'react';
import styles from './Button.module.css';
const Button = (props) => {
  return (
    <div className={styles['button-container']}>
      <span className={styles['button']}>{props.props}</span>
    </div>
  );
};

export default Button;
