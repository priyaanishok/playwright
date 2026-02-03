// Playwright locators 
import { expect, test } from "@playwright/test";
test('playwright locators', async ({page})=>{
//Login to the application 
    await page.goto('https://login.salesforce.com'); 

//get by ALT  alt="Salesforce"
    await page.getByAltText('Salesforce').isVisible();
//get by role

    await page.getByRole('textbox', { name: 'Username' }).fill("dilipkumar.rajendran@testleaf.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("TestLeaf@2025");
    await page.getByRole('button', { name: 'Log In' }).click();

//get By Text  App Launcher
    await page.getByText('App Launcher', { exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByText('Sales', { exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByText('Leads', { exact: true }).click();

// get By Title
    await page.getByTitle('New', { exact: true}).click();
    await page.waitForTimeout(3000);

//get By Placeholder
    await page.getByPlaceholder('Last Name', { exact: true }).fill('Maha');

//getByLabel
    await page.getByLabel('Company', { exact: true }).fill('testleaf.com');
//get By ROle 
  // await page.getByRole('StaticText', { name: 'Save' }).click();
    //await page.click('button[name="SaveEdit"]');

}
);
