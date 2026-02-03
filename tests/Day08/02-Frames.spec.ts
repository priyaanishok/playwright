// Frames from serviceNow ,com

import { expect, test } from "@playwright/test";
test('Handle Frames in ServiceNow', async ({page})=>{
    await page.goto('https://service-now.com/');
    const allFrames = await page.frames();
    // number of frames 
    const numberOfFrames = allFrames.length;
    console.log('Number of frames in the page: ' + numberOfFrames);

    await page.goto('https://leafground.com/frame.xhtml');
    //Simple Frame 

    const framesInPage = await page.frames();
    console.log('Number of frames in the page: ' + framesInPage.length);

    const innerFrameSF = await page.frameLocator('iframe[src="default.xhtml"]');

    const btnClickMe = innerFrameSF.getByRole('button', {name : 'Click Me'});
    await btnClickMe.click();
    //const btnClickMe1 = await btnClickMe.getAttribute('value');
    await expect(innerFrameSF.getByRole('button', {name : 'Hurray! You Clicked Me.'})).toBeVisible();

    await page.waitForTimeout(2000);

    //Nested Frame 
   // await page.goto('https://leafground.com/frame.xhtml');

    const outerFrameNF = await page.frameLocator('iframe[src="page.xhtml"]');
    const innerFrameNF = outerFrameNF.frameLocator('iframe[src="framebutton.xhtml"]');

    const btnClickMe2 = innerFrameNF.getByRole('button', {name : 'Click Me'});
    await btnClickMe2.click();
    await expect(innerFrameNF.getByRole('button', {name : 'Hurray! You Clicked Me.'})).toBeVisible();

});
