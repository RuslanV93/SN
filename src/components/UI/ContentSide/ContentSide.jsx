import React, { useContext } from 'react';
import style from './ContentSide.module.css';

const ContentSide = (props) => {
  return <div className={`${style.content}`}>{props.children}</div>;
};

export default ContentSide;
