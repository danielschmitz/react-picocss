/**
 * Validates a string field
 *
 * @param {string} value - The value to be validated
 * @param {number} minLength - The minimum length required for the string
 * @param {number} maxLength - The maximum length allowed for the string
 * @returns {string} - An error message if the validation fails, an empty string otherwise
 */
export function validateString(field, minLength, maxLength) {

    if (!field) {
      return 'This field is required.'
    }
    if (field.length < minLength) {
      return `This field should have at least ${minLength} characters.`
    }
    if (field.length > maxLength) {
      return `This field should have no more than ${maxLength} characters.`
    }
    return ''
  }

/**
 * Validates an email field
 *
 * @param {string} value - The value to be validated
 * @returns {string} - An error message if the validation fails, an empty string otherwise
 */
export function validateEmail(value) {
    if (!value) {
        return 'This field is required';
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(value)) {
        return 'Invalid email address';
    }

    return '';
}

/**
 * Validates a term
 *
 * @param {string} value - The value to be validated
 * @returns {string} - An error message if the validation fails, an empty string otherwise
 */
export function validateTerms(value) {
    if (!value) {
        return 'You must agree to the terms';
    }
    return '';
}
