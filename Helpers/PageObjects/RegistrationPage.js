import BaseElement from '../Elements/BaseElement.js';
import { BasePage } from './BasePage.js';

const url = '/';

export class RegistrationPage extends BasePage {
  #baseElement = new BaseElement(this.page);

  constructor(page) {
    super(page, url);
    this.page = page;
  }

  get inputName() {
    return this.#baseElement.getElement('#signupName');
  }
  get inputLastName() {
    return this.#baseElement.getElement('#signupLastName');
  }
  get inputEmail() {
    return this.#baseElement.getElement('#signupEmail');
  }
  get inputPassword() {
    return this.#baseElement.getElement('#signupPassword');
  }
  get inputRepeatPassword() {
    return this.#baseElement.getElement('#signupRepeatPassword');
  }
  get footer() {
    return this.#baseElement.getElement('.modal-footer');
  }
  get registerButton() {
    return this.#baseElement.getElement('.modal-footer .btn.btn-primary');
  }

message(text) {
  return this.#baseElement.getByText(text,  { exact: true });
}
}
