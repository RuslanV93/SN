import React, { forwardRef } from 'react';
import TextAreaView from './TextAreaView';

const TextArea = forwardRef((props, ref) => {
  let { textPlaceholder } = props;

  return (
    <div className={props.textAreaStyles['textarea-container']}>
      <TextAreaView
        name={props.name}
        textAreaStyles={props.textAreaStyles}
        textPlaceholder={textPlaceholder}
        onSubmit={props.onSubmit}
        validate={props.validate}
        inputValue={props.value}
        ref={ref}
        onTextAreaChange={props.onTextAreaChange}
        buttonText={props.buttonText}
      />
    </div>
  );
});

export default TextArea;
