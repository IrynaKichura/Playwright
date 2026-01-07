import BaseElement from '../Elements/BaseElement.js';
import { BasePage } from './BasePage.js';

const url = '/';
export class GetPage extends BasePage {
  #baseElement = new BaseElement(this.page);

  constructor(page) {
    super(page, url);
    this.page = page;
  }

  get submitButton() {
    return this.#baseElement.getElement('#query-btn');
  }

  get inputEmail() {
    return this.#baseElement.getElement('#inputEmail');
  }

  get inputPassword() {
    return this.#baseElement.getElement('#inputPassword');
  }
  get inputName() {
    return this.#baseElement.getElement('#inputName');
  }

  //custom cypress command overwrite password- added by iki
  //   login(emal, password) {
  //     this.inputEmail.type(emal);
  //     this.inputPassword.type(password, { sensitive: true });
  //     this.submitButton.click();
  //   }
  async login(emal, password) {
    await this.inputEmail.type(emal);
    await this.inputPassword.type(password);
    await this.submitButton.click();
  }
}
