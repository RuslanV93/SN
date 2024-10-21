import React from 'react';
import { Field, Form } from 'react-final-form';
import Button from '../Button/Button';

const TextAreaView = React.forwardRef(
  (
    { onSubmit, textPlaceholder, inputValue, validate, buttonText, name, textAreaStyles },
    ref
  ) => {
    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form className={textAreaStyles['form-container']} onSubmit={handleSubmit}>
            <Field name={name} validate={validate}>
              {({ input, meta }) => {
                return (
                  <div className={textAreaStyles['textarea-wrapper']}>
                    {(meta.error && meta.active) || (meta.error && meta.submitFailed) ? (
                      <span className={textAreaStyles['input-error-message']}>
                        {meta.error.required || meta.error.maximumLength}
                      </span>
                    ) : null}
                    <textarea
                      {...input}
                      ref={ref}
                      className={textAreaStyles['textarea']}
                      placeholder={
                        meta.error && meta.submitFailed
                          ? 'Write something.'
                          : textPlaceholder
                      }
                    ></textarea>
                  </div>
                );
              }}
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
