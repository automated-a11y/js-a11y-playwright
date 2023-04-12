import { test, expect } from '@playwright/test';
import { AxeRunner } from "../src/axerunner.js";

let axerunner;

test.beforeEach(async ({ page }, testInfo) => {
    axerunner = new AxeRunner(page)
});

test('axe test', async ({ page }) => {
    await page.goto(`file://${process.env.PWD}/tests/test.html`);
    let data = await axerunner.setPageTitle('Page Title').execute()
    expect(data.violations.length).toEqual(2)
});
