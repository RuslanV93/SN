export const requiredField = (value) => {
  const errors = {};
  if (!value) {
    errors.required = 'Field is required';
  }
  return errors;
};
export const maxLength = (maxLength) => {
  return (value) => {
    const errors = {};
    if (value && value.length > maxLength) {
      errors.maximumLength = `Too many characters. ${maxLength} max.`;
    }
    return errors;
  };
};

export const spaceValidation = (value) => {
  const errors = {};
  if (value?.includes(' ')) {
    errors.spaces = 'You can"t use whitespaces';
  }
  return errors;
};
