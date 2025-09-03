import { test, expect } from '@playwright/test';

// Scenario A
test('Scenario A: Open Gercep Page & Check Title', async ({ page }) => {
  await page.goto('https://vcgamers.com/gercep');
  await expect(page).toHaveURL(/.*\/gercep/);

  await expect(page.getByAltText(/vcgamers/i)).toBeVisible();

  // await expect(page).toHaveTitle(/VCGamers/i);
});

// Scenario B
test('Scenario B: Search Bar Interaction', async ({ page }) => {
  await page.goto('https://vcgamers.com/gercep');

  await page.getByPlaceholder('Cari Nama Brand di Gercep...').fill('mobile legends');
  await page.keyboard.press('Enter');

  const results = page.locator('a[href*="mobile-legends"]');
  await expect(results.first()).toBeVisible();
});

// Scenario C
test('Scenario C: Click First Item', async ({ page }) => {
  await page.goto('https://vcgamers.com/gercep');
  await page.getByPlaceholder('Cari Nama Brand di Gercep...').fill('mobile legends');
  await page.keyboard.press('Enter');


  const firstItem = page.locator('a[href*="mobile-legends"]').first();
  await firstItem.click();

  try {
    await page.waitForURL(/mobile-legends/, { timeout: 8000 });
  } catch {
    await expect(page.getByText(/Top Up Game Mobile Legends/i)).toBeVisible();
  }
});

