export default class {
  constructor(page) {
    this.page = page;
  }

  // Method to get an element by selector -selectors are not awaited, functions are awaited
  getElement(selector) {
    return this.page.locator(selector);
  }
  getByText(text, exact = true) {
    return this.page.getByText(text, { exact: exact });
  }
}
