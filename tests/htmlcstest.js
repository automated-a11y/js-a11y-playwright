import { test, expect } from '@playwright/test';
import { HtmlCsRunner } from "../src/htmlcsrunner.js";

let htmlcsrunner;

test.beforeEach(async ({ page }, testInfo) => {
    htmlcsrunner = new HtmlCsRunner(page)
});

test('htmlcs test', async ({ page }) => {
    await page.goto(`file://${process.env.PWD}/tests/test.html`);
    let data = await htmlcsrunner.setPageTitle('Page Title').execute()
    expect(data.errors).toEqual(5)
});
