import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/');
  await page.getByRole('link', { name: 'Chef Login' }).click();
  await page.getByLabel('Username:').click();
  await page.getByRole('link', { name: 'Create Account' }).click();
  await page.getByLabel('First Name:').click();
  await page.getByLabel('First Name:').fill('test7');
  await page.getByLabel('First Name:').press('Tab');
  await page.getByLabel('Last Name:').fill('test7');
  await page.getByLabel('Last Name:').press('Tab');
  await page.getByLabel('Username:').fill('test7');
  await page.getByLabel('Username:').press('Tab');
  await page.getByLabel('Email:').fill('test7@test.com');
  await page.getByLabel('Email:').press('Tab');
  await page.getByLabel('Password:').fill('test7');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'My Recipies' }).click();
  await page.getByRole('button', { name: 'Add a Recipe' }).click();
  await page.getByLabel('Name:').click();
  await page.getByLabel('Name:').fill('steak');
  await page.getByLabel('Description:').click();
  await page.getByLabel('Description:').fill('steak');
  await page.locator('input[name="ingredient_name"]').click();
  await page.locator('input[name="ingredient_name"]').fill('beef');
  await page.locator('input[name="ingredient_price"]').click();
  await page.locator('input[name="ingredient_price"]').fill('10');
  await page.getByRole('button', { name: 'Add Ingredient' }).click();
  await page.locator('input[name="ingredient_name"]').nth(1).click();
  await page.locator('input[name="ingredient_name"]').nth(1).fill('pepper');
  await page.locator('input[name="ingredient_price"]').nth(1).click();
  await page.locator('input[name="ingredient_price"]').nth(1).fill('2');
  await page.getByRole('button', { name: 'Add Ingredient' }).click();
  await page.getByRole('button', { name: 'Add Recipe', exact: true }).click();
  await page.getByRole('link', { name: 'My Recipies' }).click();
  await page.getByRole('button', { name: 'Add a Recipe' }).click();
  await page.getByLabel('Name:').click();
  await page.getByLabel('Name:').fill('mojito');
  await page.getByLabel('Description:').click();
  await page.getByLabel('Description:').fill('alcohol');
  await page.getByText('Choose File').click();
  await page.locator('input[name="ingredient_name"]').click();
  await page.locator('input[name="ingredient_name"]').fill('alcohol');
  await page.locator('input[name="ingredient_price"]').click();
  await page.locator('input[name="ingredient_price"]').fill('2.5');
  await page.getByRole('button', { name: 'Add Ingredient' }).click();
  await page.getByRole('button', { name: 'Add Recipe', exact: true }).click();
  await page.getByRole('link', { name: 'Bookings' }).click();
  await page.getByRole('link', { name: 'My Recipies' }).click();
  await page.getByRole('link', { name: 'Bookings' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Bookings' }).click();
});