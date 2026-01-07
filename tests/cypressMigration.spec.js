import test, {expect} from '@playwright/test';
import { HomePage } from '../Helpers/PageObjects/HomePage.js';
import { GetPage } from '../Helpers/PageObjects/GetPage.js';
import  ActionsPage  from '../Helpers/PageObjects/ActionsPage.js';

test.describe('Test', () => {
  test('Test', async ({ page }) => {
    const homePage = new HomePage(page);
    const getPage = new GetPage(page);
    const actionsPage = new ActionsPage(page);

    await homePage.navigate();
    //await page.getByText("get", {exact: true}).click();
    await homePage.listButton('get').click();
    //await getPage.login('email', 'password');

    await actionsPage.couponCode.type('MYCODE123');
    await actionsPage.submitButton.click();
  //   expect(await actionsPage.message('Your form has been submitted!').toBeVisible());
   });
});
