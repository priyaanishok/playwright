import { test, expect } from '@playwright/test';

test('Create a Lead - LeafTaps', async ({ page }) => {
	// 1. Navigate to the login page
	await page.goto('http://leaftaps.com/opentaps/control/main');

	// 2-4. Login
	// use several common selector variants so the script is resilient
	await page.locator('input[name="USERNAME"], input#username, input[name=username]').fill('Demosalesmanager');
	await page.locator('input[name="PASSWORD"], input#password, input[name=password]').fill('crmsfa');
	await Promise.all([
		page.waitForNavigation({ waitUntil: 'load' }),
		page.locator('input[value="Login"], button:has-text("Login")').click()
	]);

	// 5. Click CRM/SFA
	await Promise.all([
		page.waitForNavigation({ waitUntil: 'load' }),
		page.locator('text=CRM/SFA').click()
	]);

	// 6. Click Leads
	await Promise.all([
		page.waitForNavigation({ waitUntil: 'load' }),
		page.locator('text=Leads').click()
	]);

	// 7. Click Create Lead
	await Promise.all([
		page.waitForNavigation({ waitUntil: 'load' }),
		page.locator('text=Create Lead').click()
	]);

	// Fill the form (selectors based on common LeafTaps ids)
	const company = 'Acme Corp';
	await page.fill('input#createLeadForm_companyName, input[name=companyName]', company);
	await page.fill('input#createLeadForm_firstName, input[name=firstName]', 'Priya');
	await page.fill('input#createLeadForm_lastName, input[name=lastName]', 'Anishok');
	// optional fields
	await page.fill('input#createLeadForm_personalTitle, input[name=salutation]', 'Ms');
	await page.fill('input#createLeadForm_generalProfTitle, input[name=title]', 'QA Engineer');
	await page.fill('input#createLeadForm_annualRevenue, input[name=annualRevenue]', '100000');
	await page.fill('input#createLeadForm_departmentName, input[name=departmentName]', 'Quality');
	await page.fill('input#createLeadForm_primaryPhoneNumber, input[name=primaryPhoneNumber]', '9876543210');

	// 16. Click Create Lead button
	await Promise.all([
		page.waitForNavigation({ waitUntil: 'load' }),
		page.locator('input[value="Create Lead"], button:has-text("Create Lead"), input[name=submitButton]').click()
	]);

	// Verify: the details view should show the company name (common id used by LeafTaps)
	const companyLocator = page.locator('#viewLead_companyName_sp');
	await expect(companyLocator).toContainText(company);
});

// Note: selectors above use common LeafTaps ids; if the app version differs adjust selectors accordingly.

