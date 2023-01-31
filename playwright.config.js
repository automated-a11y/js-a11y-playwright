const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    timeout: 30000,
    globalTimeout: 600000,
    reporter: 'list',
    testDir: './tests',
    testMatch: ["**/*.js"]
});