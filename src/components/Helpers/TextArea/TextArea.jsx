import React, { forwardRef } from 'react';

const TextArea = forwardRef((props, ref) => {
  const { textPlaceholder } = props;

  return (
    <div className={props.textareaStyles['textarea-container']}>
      <textarea
        value={typeof props.value === 'string' ? props.value : props.value.text || ''}
        onChange={props.onTextAdd}
        ref={ref}
        className={props.textareaStyles['textarea']}
        placeholder={textPlaceholder}
      ></textarea>
    </div>
  );
});

export default TextArea;
