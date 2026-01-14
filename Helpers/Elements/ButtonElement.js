import BaseElement from './BaseElement';
export default class extends BaseElement {
  constructor(page, selector, text) {
    super(page, selector, text);
  }

  async click() {
    await this._element.click();
  }
}
