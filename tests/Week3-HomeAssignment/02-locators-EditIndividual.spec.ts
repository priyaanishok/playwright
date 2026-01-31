

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
test('Edit Individual', async ({page})=>{
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
const lastnameIndividual = "Halifax";

const btnIndividuals = page.locator('//a/span[text()="Individuals"]');
await btnIndividuals.click();
await page.waitForTimeout(3000);
//Search the created Individual 

const inputSearchIndividual = page.locator('input[name="Individual-search-input"]');
await inputSearchIndividual.fill(lastnameIndividual);
await inputSearchIndividual.press('Enter');
await page.waitForTimeout(3000);

const selectIndividual = page.locator('//slot/span[text()="Halifax"]').first();
await selectIndividual.click();

await page.waitForTimeout(4000);
//Click on Edit Individual
const btnEditIndividual = page.locator('a.forceActionLink[title="Edit"]');
await btnEditIndividual.click();

const dropdownSalutation = page.locator('a.select').first();
await dropdownSalutation.click();   
//select salutation 
const optionSalutation = page.locator('li a[title="Ms."]');
await optionSalutation.click();

//Click on Save
const btnSave = page.locator('button.slds-button.slds-button_neutral.uiButton--brand.uiButton.forceActionButton[title="Save"]');
await btnSave.click();

const verifyToast = page.locator('.slds-icon-utility-success.toastIcon.slds-m-right--small.slds-no-flex.slds-align-top.slds-icon_container');
await expect(verifyToast).toBeVisible();
});