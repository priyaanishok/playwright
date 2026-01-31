/* Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the Company Name
9. Click Save and Verify Leads name created */

import { expect, test } from "@playwright/test";
test('Create Lead', async ({page})=>{
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
await page.click('//p[text()="Sales"]');

//Click on Leads tab and click on the New button 
await page.click('a[title="Leads"]'); 
await page.click('div[title="New"]');

/*6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the Company Name
9. Click Save and Verify Leads name created */

await page.click('button[data-value="--None--"][name="salutation"]');
await page.click('lightning-base-combobox-item[data-value="Mrs."]');

const lastName = "Mahadevan";
//Enter the last name 
await page.fill('lightning-input[data-field="lastName"] .slds-input[name="lastName"]', lastName);
await page.waitForTimeout(2000);
//Enter the Company name
await page.fill('//input[@name="Company"]', "KM DEV");

//Click Save and Verify Leads name created
await page.click('button[name="SaveEdit"]');


//playwright assertion
const verifyLead = page.locator(`lightning-formatted-name[slot='primaryField']`)
await expect(verifyLead).toContainText(lastName);

});
