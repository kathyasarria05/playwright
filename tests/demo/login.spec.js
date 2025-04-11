import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  console.log('test');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');


});
//Second Commit
// test('test', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/v1/');
//   console.log('test');
//   await page.locator('#user-name').fill('standard_user');
//   await page.locator('#password').fill('secret_sauce');
//   await page.locator('#login-button').click();
//   await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');


// });


