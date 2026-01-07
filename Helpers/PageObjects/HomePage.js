import { BasePage } from './BasePage.js';
import BaseElement from '../Elements/BaseElement';

const url = '/';

export class HomePage extends BasePage {
  #baseElement = new BaseElement(this.page);
  constructor(page) {
    super(page, url);
    this.page = page;
  }

  listButton(text) {
    return this.#baseElement.getByText(text);
  }
}
