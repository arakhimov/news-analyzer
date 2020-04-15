export default class FormValidator {
  constructor(template, regexp) {
    this.template = template;
    this.regexp = regexp;
  }

  checkInputValidity(input) {
    // проверка - обязательное поле
    if (input.value.length < 1) {
      input.nextElementSibling.classList.add('search__explanation-text_active');
      input.nextElementSibling.innerHTML = this.template.nesessaryField;
      return false;
    }

    // проверка - должно быть от 2 до 30 символов
    if (input.value.length < 2 || input.length > 30) {
      input.nextElementSibling.classList.add('search__explanation-text_active');
      input.nextElementSibling.innerHTML = this.template.validationLength;
      return false;
    }

    // проверка - должно содержать текст
    if (!this.regexp.test(input.value)) {
      input.nextElementSibling.classList.add('search__explanation-text_active');
      input.nextElementSibling.innerHTML = this.template.text;
      return false;
    }

    input.nextElementSibling.classList.remove('search__explanation-text_active');
    input.nextElementSibling.innerHTML = '';
    return true;
  }

  submitButtonState(input, submitButton) {
    if (this.checkInputValidity(input)) {
      submitButton.classList.add('search__button_active');
    } else {
      submitButton.classList.remove('search__button_active');
    }
  }
}