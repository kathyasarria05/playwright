import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';

test('Login with valid credentials', async ({ page }) => { 

  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');

});

// //test with no page object
// test('Login with invalid credentials', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/v1/');
//   await page.locator('#user-name').fill('standarduser');
//   await page.locator('#password').fill('secretsauce');
//   await page.locator('#login-button').click();
//   await expect(page.locator('h3[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');

// });

