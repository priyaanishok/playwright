// ...existing code...
import { test, chromium, webkit } from "@playwright/test"

// ...existing code...
test('Launch RedBus in Edge and Flipkart in WebKit', async () => {
  // Launch Edge (Chromium channel) for RedBus
  const edge = await chromium.launch({ channel: 'msedge', headless: false });
  const edgeContext = await edge.newContext();
  const redbus = await edgeContext.newPage();
  await redbus.goto('https://www.redbus.in');
  await redbus.waitForLoadState('load');
  const redbusTitle = await redbus.title(); // await the promise
  const redbusUrl = redbus.url();           // url() is synchronous
  console.log('RedBus title: ' + redbusTitle);
  console.log('RedBus URL: ' + redbusUrl);
  await redbus.screenshot({ path: 'redbus.png' });
  await edge.close();

  // Launch WebKit for Flipkart
  const wk = await webkit.launch({ headless: false });
  const wkContext = await wk.newContext();
  const flip = await wkContext.newPage();
  await flip.goto('https://www.flipkart.com');
  await flip.waitForLoadState('load');
  const flipTitle = await flip.title();
  const flipUrl = flip.url();
  console.log('Flipkart title: ' + flipTitle);
  console.log('Flipkart URL: ' + flipUrl);
  await flip.screenshot({ path: 'flipkart.png' });
  await flip.waitForTimeout(10000); // keep the browser visible for 10s so you can see WebKit
  await wk.close();
});