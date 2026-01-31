

//createLead 
/* Assignment: 3 Create Individuals 
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner 
3. Click View All and click Individuals from App Launcher 
4. Click on the Dropdown icon in the Individuals tab 
5. Click on New Individual 
6. Enter the Last Name 
7. Click save and verify Individuals Name */

import { expect, test } from "@playwright/test";
test('Create Individual', async ({page})=>{
//Login to the application 
await page.goto('https://login.salesforce.com'); 
await page.fill('input[id="username"]', "dilipkumar.rajendran@testleaf.com");
await page.fill('input[name="pw"]', "TestLeaf@2025");
await page.click('input[id="Login"]');
//Click on toggle menu button from the left corner
await page.click('button[title="App Launcher"] > div');
//Click on View All Applications 
await page.click('button[aria-label="View All Applications"]');
//Click on the Sales app 
await page.click('//p[text()="Individuals"]');
await page.waitForTimeout(3000);
//Click New Individual 
const btnNewIndividual = page.locator('a[title="New"]');
await btnNewIndividual.click();
// Fill Last Name 
const inputLastNameIndividual = page.locator('input[placeholder="Last Name"]');
const lastnameIndividual = "Halifax";
await inputLastNameIndividual.fill(lastnameIndividual);

const btnSaveIndividual = page.locator('button[title="Save"].slds-button.slds-button_neutral.uiButton--brand.uiButton.forceActionButton');
await btnSaveIndividual.click();

await page.waitForTimeout(4000);

const verifyText = page.locator('h1 span.uiOutputText');
await expect(verifyText).toContainText(lastnameIndividual);


});