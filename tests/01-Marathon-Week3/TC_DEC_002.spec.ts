/*Test Steps & Expected Results
1. Launch browser and navigate to Decathlon website https://www.decathlon.in/
2. Verify URL using Playwright assertions
3. Verify the Decathlon homepage is displayed
4. Verify if search box is enabled
5. Click on the search Box
6. Enter the product name “Shoes”
7. Press Enter or select a suggestion from the dropdown
8. Verify the product listing page is displayed or Verify search results page title
9. Click on the Sport filter dropdown
10. Select Running from the Sport dropdown
11. Click on the Gender filter dropdown
12. Select Men
13. Click on the Size filter dropdown
14. Select size UK 10
15. Click on the Price filter dropdown
16. Select a price range (e.g., ₹1000 – ₹3000)
17. From the filtered results, click on the first available product
18. On the product details page, select Size – UK 10
19. Click on Add to cart button*/

import { test, expect } from "@playwright/test";
test('Decathlon - Search and Filter Shoes', async ({page})=>{
//1. Launch browser and navigate to Decathlon website https://www.decathlon.in/
    await page.goto('https://www.decathlon.in/');
//Verify URL using Playwright assertions
//3. Verify the Decathlon homepage is displayed
    await expect(page).toHaveURL(/decathlon.in/);
    await expect(page).toHaveTitle("Buy Sporting Goods, Sportswear and Equipments | Download App");

    const searcTextbox = page.locator('//div[@class="flex items-center justify-between"]/div[2]/div/div/div/div/div/span[2]');
    await searcTextbox.click();

// Verify if search box is enabled
    const searchForBox = page.locator('//input[contains(@placeholder, "Search For")]');
    //await expect(searchForBox).toBeVisible();
    //await expect(searchForBox).toBeEnabled();
    //await searchForBox

//5. Click on the search Box
//6. Enter the product name “Shoes”

//await searchForBox.click();
await searchForBox.fill("Shoes");
//await searchForBox.press('Enter');

const dropOptionSelect = page.locator('//p[text()="Running "]/strong[text()="Shoes"]');
await dropOptionSelect.click();

const textSearchShoesPage = page.locator('//h1[text()="Shoes"]');
//await expect(textSearchShoesPage).toBeVisible();


const checkboxMens = page.locator('//span[contains(text(), "Men")]/preceding-sibling::input');
//await checkboxMens.scrollIntoViewIfNeeded();
//await expect(checkboxMens).toBeVisible();
await checkboxMens.check({ force: true });

const textSearchPage = page.locator('//div[contains(text(), "Showing")]');
//await expect(textSearchPage).toBeVisible();


//Select the size 

const sizelocator = page.locator('//span[contains(text(), "Uk 10.5 - eu 45")]');
//await sizelocator.scrollIntoViewIfNeeded();
await page.waitForTimeout(5000);
await sizelocator.click();

// click on the drop down 
const priceDropdown = page.locator('//p/span[text()="Most Relevant"]');
await priceDropdown.click()
// option to be selected 

const selectPriceOption = page.locator('//a[text()="Price: High to Low"]');
await selectPriceOption.click();

//Clcicking the first item
const firstItem = page.locator('ul.ais-InfiniteHits-list li:nth-child(1) div.algolia-clicks.relative.overflow-hidden div > a');
await firstItem.click();


//Click on the size of the shoe 

const itemShoeSize = page.locator('//div[text()="UK 10.5 - EU 45"]');
await itemShoeSize.click();

//Add to cart 
const buttonAddToCart = page.locator('//div[@class="flex flex-row"]/span[text()="ADD TO CART"]');
await buttonAddToCart.click();

const toastMsg = page.locator('h3.LeexKo ');
await expect(toastMsg).toContainText("Product added to cart");

});

 


