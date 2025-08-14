import { test, expect } from '@playwright/test';


/*
Locators:
for ID : tagname#id or #id
for Class: tagname.class or class
for Attribute:[attribute='value']
*/

/**
 Notes:
 await expect(page).toHaveTitle('Google');

 if suppose there are multiple web element present with same name 
 page.locator(".card-body a").first().click() //this is to explicitly select 1st element
 page.locator(".card-body a").nth("pass the index").click()

 to get all the text contents of cards having similar locator
 const cardTitle= page.locator(".card-body a")
 const allTitles = await cardTitle.allTextContents()

 --to wait until the DOM/Network is idle
    await page.waitForLoadState('networkidle')
    (or)
    await page.locator(".card-body b").first().waitFor() --: this will wait for the 1st element to be loaded

-- .pause()
    this can be used to debug the sequence, when code come to this line it stops execution and we get
    playwright inspector where we can execute next statement 
    

 */

test('First TEST',async({browser,page})=>{
    const username = page.locator('#username')
    const password = page.locator("[type='password']")
    const signInBtn = page.locator("#signInBtn")
    await page.goto("https://www.rahulshettyacademy.com/loginpagePractise");
    await username.fill("rahulshettyacademy")
    await page.waitForTimeout(2000);
    await password.fill("learning")

    await page.waitForTimeout(2000);


    await signInBtn.click()

    //handling the Dropdown
    const Dropdown = page.locator('select.form-control');
    Dropdown.selectOption("consult")

    //selecting Radio button
    await page.locator(".radiotextsty").last().click();//this will click the 2nd radiobutton as there are nly 2 radio btn
    //to check if radiobtn is checked
    await page.locator(".radiotextsty").last().isChecked()//this will return the boolean value
    await expect(page.locator(".radiotextsty").last()).toBeChecked()

    //checkbox
    await page.locator("checkbox locator").click()
    //or
    await expect(page.locator("checkbox locator")).toBeChecked()
    //-- unchecking
    await page.locator("checkbox locator").uncheck()
    //we do not have method like toBeChecked() for unchecking 
     expect(await page.locator("checkbox locator").isChecked()).toBeFalsy()

     // to check the blinking text , text will blink only if its class name is blinkingText
     const documentLink = page.locator("[href*='documents-request']");//* is regular expression which will get the given text from the link

     //now to check the attribute present or not 
     await expect(documentLink).toHaveAttribute("class","blinkingText");

     //Switching Browser Context/child window handling

     test('Chind Window handling',async({browser})=>{
        const context = browser.newContext()
        const page = context.newContext() 
        await page.goto("https://www.rahulshettyacademy.com/loginpagePractise");
        const documentLink = page.locator("[href*='documents-request']");

        // we have to handle window opening in promise because we need both the statement to execute parallally
     const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            documentLink.click()
        ])

     const text = await newPage.locator("locator").textContent()
     const textArr = text.split("@")
     const email = textArr[1].split(" ")[0]
     console.log(email)
     //switching back to main page directly use main page variable which is 'page'

     // npx playwright test --debug for running test in debug mode

     /**
      * Codegen
        npx playwright codegen URL
      */
     

    
     });
    







    
   
    
}); 

// when we use .only then only this test will be run from all the test basically used to test single test
// test.only('First TEST',async({browser,page})=>{
//     // const context = await browser.newContext();
//     // const page = await context.newPage();
//     await page.goto("https://www.google.com");

// }); 

//handling the Events like download
// test('Download handling', async ({ page }) => {
//     const downloadPromise = page.waitForEvent('download');
//     await page.goto("https://www.rahulshettyacademy.com/AutomationPractice/");
//     await page.locator("#downloadButton").click();
//     const download = await downloadPromise;
//     console.log(await download.path()); // Path where the file is downloaded
//     await download.saveAs("D:\\Test Automation\\Playwright_JS\\ExcelJsUtil\\DownloadedFile.pdf");
// });