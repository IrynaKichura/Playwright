import test, { expect } from '@playwright/test';
import { RegistrationPage } from '../Helpers/PageObjects/RegistrationPage.js';
import { BasePage } from '../Helpers/PageObjects/BasePage.js';

test.describe('Registration Page', () => {
  test('Check fields are not disabled', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const basePage = new BasePage(page, '/');

    await basePage.navigate();
    await page.getByText('Sign up', { exact: true }).click();

    await expect(registrationPage.inputName).toBeEnabled();
    await expect(registrationPage.inputLastName).toBeEnabled();
    await expect(registrationPage.inputEmail).toBeEnabled();
    await expect(registrationPage.inputPassword).toBeEnabled();
    await expect(registrationPage.inputRepeatPassword).toBeEnabled();
    await expect(registrationPage.registerButton).toBeDisabled();
  });
  test('Check that fields are mandatory', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const basePage = new BasePage(page, '/');

    await basePage.navigate();
    await page.getByText('Sign up', { exact: true }).click();

    await registrationPage.inputName.click();
    await registrationPage.inputLastName.click();
    await registrationPage.inputEmail.click();
    await registrationPage.inputPassword.click();
    await registrationPage.inputRepeatPassword.click();
    await registrationPage.footer.click();
    await expect(registrationPage.message('Name required')).toBeVisible();
    await expect(registrationPage.message('Last name required')).toBeVisible();
    await expect(registrationPage.message('Email required')).toBeVisible();
    await expect(registrationPage.message('Password required')).toBeVisible();
    await expect(
      registrationPage.message('Re-enter password required')
    ).toBeVisible();
  });
  test('Check that border is red', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const basePage = new BasePage(page, '/');

    await basePage.navigate();
    await page.getByText('Sign up', { exact: true }).click();

    await registrationPage.inputName.click();
    await registrationPage.inputLastName.click();
    await registrationPage.inputEmail.click();
    await registrationPage.inputPassword.click();
    await registrationPage.inputRepeatPassword.click();
    await registrationPage.footer.click();
    await expect(registrationPage.inputName).toHaveCSS(
      'border-color',
      'rgb(220, 53, 69)'
    );
    await expect(registrationPage.inputLastName).toHaveCSS(
      'border-color',
      'rgb(220, 53, 69)'
    );
    await expect(registrationPage.inputEmail).toHaveCSS(
      'border-color',
      'rgb(220, 53, 69)'
    );
    await expect(registrationPage.inputPassword).toHaveCSS(
      'border-color',
      'rgb(220, 53, 69)'
    );
    await expect(registrationPage.inputRepeatPassword).toHaveCSS(
      'border-color',
      'rgb(220, 53, 69)'
    );
  });
  test('Validate all fields', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const basePage = new BasePage(page, '/');

    await basePage.navigate();
    await page.getByText('Sign up', { exact: true }).click();

    registrationPage.inputName.type('1');
    registrationPage.footer.click();
    await expect(registrationPage.message('Name is invalid')).toBeVisible();
    await expect(
      registrationPage.message('Name has to be from 2 to 20 characters long')
    ).toBeVisible();

    registrationPage.inputLastName.type('1');
    registrationPage.footer.click();
    await expect(
      registrationPage.message('Last name is invalid')
    ).toBeVisible();
    await expect(
      registrationPage.message(
        'Last name has to be from 2 to 20 characters long'
      )
    ).toBeVisible();

    registrationPage.inputEmail.type('1');
    registrationPage.footer.click();
    await expect(registrationPage.message('Email is incorrect')).toBeVisible();

    registrationPage.inputPassword.type('1');
    registrationPage.footer.click();
    await expect(
      registrationPage.message(
        'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
      )
    ).toBeVisible();
    registrationPage.inputRepeatPassword.type('1');
    registrationPage.footer.click();
    await expect(
      registrationPage.message(
        'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
      )
    ).toBeVisible();
  });
  test('Test passwords mismatch', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const basePage = new BasePage(page, '/');

    await basePage.navigate();
    await page.getByText('Sign up', { exact: true }).click();

    await registrationPage.inputPassword.type('Qwerty123');
    await registrationPage.inputRepeatPassword.type('Qwerty124');
    await registrationPage.footer.click();
    await expect(
      registrationPage.message('Passwords do not match')
    ).toBeVisible();
  });
  test('Correct user registration', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const basePage = new BasePage(page, '/');

    const email = 'lesson24_aqa@gmail.com';
    const password = 'Mypassword123';

    await basePage.navigate();
    await page.getByText('Sign up', { exact: true }).click();

    await registrationPage.inputName.type('John');
    await registrationPage.inputLastName.type('Smith');
    await registrationPage.inputEmail.type(email);
    await registrationPage.inputPassword.type(password);
    await registrationPage.inputRepeatPassword.type(password);
    await registrationPage.registerButton.click();
    await expect(page.locator('#userNavDropdown')).toBeVisible();
  });
});
