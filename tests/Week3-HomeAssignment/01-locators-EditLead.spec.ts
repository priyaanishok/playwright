/* Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button
12.Click Edit
13.Change the company name
14.Click Update */

import { expect, test } from "@playwright/test";
test('Create Lead', async ({page})=>{
//Login to the application 
await page.goto('http://leaftaps.com/opentaps/control/main'); 
await page.fill('input[id="username"]', "Democsr2");
await page.fill('input[id="password"]', "crmsfa");
await page.click('input[value="Login"]');
//Click CRM/SFA Link 
await page.click('div#button');
//Click on the Leads Link 
await page.click('//a[text()="Leads"]');
//Click on the Create Lead
const lnkCreateLead = page.locator('//a[text()="Create Lead"]');
await lnkCreateLead.click();
//Enter Company Name 
const inputCompanyName = page.locator('input[id="createLeadForm_companyName"]');
await inputCompanyName.fill("Testleaf");
//Enter First Name 
const inputFirstName = page.locator('input[id="createLeadForm_firstName"]');
await inputFirstName.fill("Padhma");

//Enter Last Name
const inputLastName = page.locator('input[id="createLeadForm_lastName"]');
await inputLastName.fill("Mahadevan Dr");

//Click on Create Lead Button
const btnCreateLead = page.locator('input.smallSubmit');
await btnCreateLead.click();
//---------------------------------------------------------------------//
await page.waitForLoadState('networkidle');
await expect(page).toHaveTitle("View Lead | opentaps CRM");

//Click on the Edit Lead

const lnkEditLead = page.locator('//a[text()="Edit"]');
await lnkEditLead.click();

//Edit Lead page validation 

const h1EditLead = page.locator('div.x-panel-header.sectionHeaderTitle');
await expect(h1EditLead).toHaveText("Edit Lead");

const inputCompanyNameEdit = page.locator('input[id="updateLeadForm_companyName"]');
const txtUpdatedCompanyName = "Devans";
await inputCompanyNameEdit.fill(txtUpdatedCompanyName);

const btnUpdateLead = page.locator('//input[@value="Update"]');
await btnUpdateLead.click();

//expect(page).toHaveTitle("View Lead | opentaps CRM");

const elementCompanyName = page.locator('span#viewLead_companyName_sp');
await expect(elementCompanyName).toContainText(txtUpdatedCompanyName);
});
