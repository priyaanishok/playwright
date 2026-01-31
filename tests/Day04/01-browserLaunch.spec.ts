//Launch Browser using Playwright

/* 1. Launch a browser instance - Chromium */
/* 2. Need a context for the browser  - isolated env */
/* 3. Create a new page in the context - tabs that gets opened inside the context */

import { test,chromium,firefox,webkit } from "@playwright/test"

//test = > title and the arrow function
test('Launch Chromium browser', async () => {
  const browser = await chromium.launch({channel:'msedge',headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.amazon.in/');
  setTimeout(() => {
     page.screenshot({ path: 'amazon.png' });
  }, 5000);
  //await page.waitForTimeout(5000);
  await page.screenshot({ path: 'amazon.png' });
  await browser.close();

});
