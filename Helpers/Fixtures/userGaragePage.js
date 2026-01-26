import { test as base } from '@playwright/test';
import { BasePage } from '../PageObjects/BasePage.js';
import { GaragePage } from '../PageObjects/GaragePage.js';
import { LoginPage } from '../PageObjects/LoginPage.js';

export const test = base.extend({
  garagePage: async ({ page }, use) => {
    const basePage = new BasePage(page, '/');
    const garagePage = new GaragePage(page);
    const loginPage = new LoginPage(page);
    console.log('Fixture: Test is starting');
    await basePage.navigate();
    await page.getByRole('button', { name: 'Sign In' }).click();
    await loginPage.login('Lesson21_user1@gmail.com', 'Password12345');

    await use(garagePage);
    console.log('Fixture: Test  ended');
  },
});
