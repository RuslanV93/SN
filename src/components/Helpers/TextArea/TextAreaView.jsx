import React from 'react';
import { Field, Form } from 'react-final-form';
import Button from '../Button/Button';

const TextAreaView = React.forwardRef(
  (
    {
      onSubmit,
      validate,
      textPlaceholder,
      inputValue,
      onTextAreaChange,
      buttonText,
      name,
      textAreaStyles,
    },
    ref
  ) => {
    return (
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{ [name]: inputValue }}
        render={({ handleSubmit }) => (
          <form className={textAreaStyles['form-container']} onSubmit={handleSubmit}>
            <Field name={name}>
              {({ input, meta }) => (
                <div className={textAreaStyles['textarea-wrapper']}>
                  {meta.error && meta.submitFailed && !meta.modifiedSinceLastSubmit ? (
                    <span className={textAreaStyles['input-error-message']}>
                      {meta.error}
                    </span>
                  ) : null}
                  <textarea
                    {...input}
                    value={inputValue}
                    onChange={(e) => {
                      input.onChange(e);
                      onTextAreaChange(e.target.value);
                    }}
                    ref={ref}
                    className={textAreaStyles['textarea']}
                    placeholder={
                      meta.error && meta.submitFailed
                        ? 'Write something.'
                        : textPlaceholder
                    }
                  ></textarea>
                </div>
              )}
            </Field>

            <Button type={'submit'} btnStyles={{ ...textAreaStyles }}>
              {buttonText}
            </Button>
          </form>
        )}
      />
    );
  }
);

export default TextAreaView;
