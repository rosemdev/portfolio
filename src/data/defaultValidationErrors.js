export let defaultValidationErrors = {
    valueMissing: () => 'This field is required, please fill it!',
    typeMismatch: field => `Please, input data in correct format for required type ${field.getAttribute('type')} `,
    tooShort: field => `Please enter minimum ${field.getAttribute('minLength')} symbols`,
    tooLong: field => `Please enter maximum ${field.getAttribute('maxLength')} symbols`,
    stepMismatch: field => `Please follow step ${field.getAttribute('step')}`,
    rangeOverflow: field => `Please use number that no more than ${field.getAttribute('max')}`,
    rangeUnderflow: field => `Please use number that no less than ${field.getAttribute('min')}`,
    patternMismatch: field => `Please follow requested format: ${field.getAttribute('title')}`,
    badInput: () => 'Please enter a number.',
    //advanced messages
    passwordSecurity: () => 'Minimum eight characters, at least one letter and one number',
    passwordCoincidence: () => 'The password don*t match! Please enter the same',
    invalidEmail: () => 'Please use standard email format e.g. jon.doe@mail.com',
    invalidNumberField: () => 'Please, input only numbers',
    noTitle: () => 'Please, use correct format',
    general: () => 'The value you entered for this field is invalid.'
};