import React, { forwardRef } from 'react';
import styles from './TextArea.module.css';

const TextArea = forwardRef((props, ref) => {
  console.log(props.value);
  const { textPlaceholder } = props;

  return (
    <div
      className={`${styles['textarea-container-parent']} ${styles['textarea-container']}`}
    >
      <textarea
        value={props.value.text || ''}
        onChange={props.onTextAdd}
        ref={ref}
        className={styles['textarea']}
        placeholder={textPlaceholder}
      ></textarea>
    </div>
  );
});

export default TextArea;
