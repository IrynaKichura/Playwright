import { expect } from '@playwright/test';
import { BasePage } from '../Helpers/PageObjects/BasePage.js';
import { GaragePage } from '../Helpers/PageObjects/GaragePage.js';
import { test } from '../Helpers/Fixtures/userGaragePage.js';

test.describe('Garage Page', () => {
  test('Lesson28', async ({ page, garagePage }) => {
    const storeditem = await page.evaluate(() => {
      localStorage.setItem('key', 'myTest');
      return localStorage.getItem('key');
    });
    console.log(storeditem);

    await expect(page.locator('#userNavDropdown')).toBeVisible();
    await expect(garagePage.addButton).toBeVisible();
    await garagePage.addButton.click();
    await garagePage.carBrand.selectOption({ label: 'BMW' });
    await garagePage.carModel.selectOption({ label: 'X5' });
    await garagePage.carMileage.fill('1000');
    await garagePage.carAddbutton.click();

    await expect(page.locator('.car_name.h2')).toBeVisible();
  });
});
