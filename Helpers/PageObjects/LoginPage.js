import BaseElement from '../Elements/BaseElement.js';
//import { BasePage } from './BasePage.js';
//const url = '/';

export class LoginPage {
  //#baseElement = new BaseElement(this.page);

  constructor(page) {
    // super(page, url);
    this.page = page;
    this.baseElement = new BaseElement(page);
  }

  get loginEmail() {
    return this.baseElement.getElement('#signinEmail');
  }

  get loginPassword() {
    return this.baseElement.getElement('#signinPassword');
  }

  get loginButton() {
    return this.baseElement.getElement(
      '.modal-footer.d-flex.justify-content-between .btn.btn-primary',
    );
  }
  async login(emal, password) {
    await this.loginEmail.type(emal);
    await this.loginPassword.type(password);
    await this.loginButton.click();
  }
}
