import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.click} className={props.btnStyles['button-container']}>
      <span className={props.btnStyles['button']}>{props.children}</span>
    </button>
  );
};

export default Button;
