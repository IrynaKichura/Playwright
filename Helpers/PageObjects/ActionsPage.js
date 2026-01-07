import { BasePage } from './BasePage.js';
import BaseElement from '../Elements/BaseElement.js';

const url = '/commands/actions';
export default class extends BasePage {
  #baseElement = new BaseElement(this.page);
  constructor(page) {
    super(page, url);
    this.page = page;
  }
  // #couponCode1 is id of the element (selector)
  get couponCode() {
    return this.#baseElement.getElement('#couponCode1');
  }
  // [type="submit" is selector of button
  get submitButton() {
    return this.#baseElement.getElement('[type="submit"]');
  }
  // '.action-form' is selector of class
  // 'p' is not unique so we need to find it within the parent` but '.action-form'  is not its parent so we neew to find parent of '.action-form'
  get actionsForm() {
    return this.#baseElement.getElement('.action-form');
  }

  get checkbox1() {
    return this.#baseElement.getElement(
      '.action-checkboxes [value="checkbox1"]'
    );
  }

  message() {
    return this.#baseElement.getByText(text);
  }
}

//use in browser console to find selectors
// $0  - to select the element
// $0.id  - to get id of the element
// $0.className - to get class of the element
// $0.parentElement - to get parent of the element
// document.querySelector('selector') - to find element by selector
