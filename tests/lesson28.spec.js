import { expect } from '@playwright/test';
import { BasePage } from '../Helpers/PageObjects/BasePage.js';
import { GaragePage } from '../Helpers/PageObjects/GaragePage.js';
import { test } from '../Helpers/Fixtures/userGaragePage.js';

test.describe('Garage Page', () => {
  test('Lesson28', async ({ garagePage }) => {
    console.log('Starting test Lesson28');
    //expect(await page.locator('#userNavDropdown')).toBeVisible();
    //await garagePage.addButton.click();

    const storeditem = await page.evaluate(() => {
      localStorage.setItem('key', 'myTest');
      return localStorage.getItem('key');
    });
    console.log(storeditem);
  });

  // await expect(garagePage.locator('#userNavDropdown')).toBeVisible();

  //   // Garage button (from your page object)
  //   //await expect(garagePage.getButton('Garage')).toBeVisible();

  //   // Add car
  //   await expect(garagePage.addButton).toBeVisible();
  //   await garagePage.addButton.click();

  //   // Modal title
  //   await expect(page.locator('.modal-title')).toHaveText('Add a car');

  //   // Form fields
  //   await garagePage.carBrand.selectOption({ label: 'BMW' });
  //   await garagePage.carModel.selectOption({ label: 'X5' });
  //   await garagePage.carMileage.fill('1000');

  //   // Submit
  //   await garagePage.carAddbutton.click();

  //   // ✅ Check car is added
  //   await expect(page.locator('.car_name.h2')).toBeVisible();
});
