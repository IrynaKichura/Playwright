import { test as base } from '@playwright/test';
import { BasePage } from '../PageObjects/BasePage.js';
import { GaragePage } from '../PageObjects/GaragePage.js';
import { LoginPage } from '../PageObjects/LoginPage.js';

export const test = base.extend({
  garagePage: async ({ page }, use) => {
    const basePage = new BasePage(page, '/');
    const garagePage = new GaragePage(page);
    const loginPage = new LoginPage(page);
    console.log('Test is starting');
    await basePage.navigate();
    //await page.getByText('Sign in', { exact: true }).click();
    await page.getByRole('button', { name: 'Sign In' }).click();
    await loginPage.login('Lesson21_user1@gmail.com', 'Password12345');

    use(garagePage);
    console.log('Test  ended');
  },
});
