import {test,expect} from '@playwright/test'

import { count } from 'console';
import { text } from 'stream/consumers';
import POManager from '../Pages/POManager';
//import testData from '../utils/TestData.json';
import customtest from '../utils/test-base.js';


// For Node.js v20+ with "type": "module" in package.json, you can use:

// const username = testData.username;
// const password = testData.password;
// const url = testData.url;

test('e2e Test',async({page})=>{
    const PlaceOrderBtn = page.locator(".actions a");
    const OrderIdRow = page.locator("tbody th");
    

    //creating Object 
    const poManager =new POManager(page,expect);
    const loginPage = poManager.getLoginPage();
    
    await loginPage.goto(url);
    await loginPage.login(username, password);
    await page.waitForLoadState('networkidle');

    const dashboardPage = poManager.getDashboardPage()  
   await dashboardPage.AddToCart(testData.productName);
    await page.pause()
   await page.locator("(//input[@type='text'])[2]").pressSequentially("294",{delay:150})
   await page.locator(" (//input[@type='text'])[3]").pressSequentially("roshni gerg",{delay:50})
   await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:150})
   
   //handling Suggestive dropdown
   
   const dropdown =page.locator(".ta-results");
   await dropdown.waitFor();
   const count = await dropdown.locator("button").count();
   for(let i=0;i<count;++i){
     const text = await dropdown.locator("button").nth(i).textContent()
     console.log(text);
    if(text===" India"){
        await dropdown.locator("button").nth(i).click();
        break
    }

   }

   //checking the email
   await expect(page.locator(".user__name [type='text']").first()).toHaveText("anshika@gmail.com");
   //placing thr order
   await PlaceOrderBtn.click();
   //checking the thankyou message
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   //grabing the order id
   let orderid = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   orderid = orderid.split(" ")[2]
   console.log(orderid)
   
    //await page.pause();
   //checking the order details
   await page.locator("button[routerlink*='myorders']").click()
   const countOrderID = await OrderIdRow.count()

   for(let i=0;i<countOrderID;++i){
    const rowOrderId = await OrderIdRow.nth(i).textContent();
    console.log(rowOrderId)
    if(rowOrderId===orderid){
        console.log("Id Verified Order Placed Successfully!")
        break;
    }      
   }
   

   /**
    * getbylabel("label text").click()
    * getbylabel("label text").selectOptions() //for Dropdowns 
    * npx playwright tests --ui // this is UI test runner
    * 
    * getbyPlaceholder("Placeholder name")
    * getByRole("button",{name:"Sign in"}).click()
    * 
    * getByText("text content").isVisible()
    * 
    * filter method example
    * page.locator("app-card").filter({hasText:'Nokia Edge'}) //it will go to perticular point
    * 
    * 
    * 
    * 
    * 
    */
   
})

customtest.only("Fixture implementation",async({page,testDataFixture})=>{
    const PlaceOrderBtn = page.locator(".actions a");
    //const OrderIdRow = page.locator("tbody th");
    

    //creating Object 
    const poManager =new POManager(page,expect);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();

    await loginPage.goto(testDataFixture.url);
    await loginPage.login(testDataFixture.username, testDataFixture.password);
    await page.waitForLoadState('networkidle');
    await dashboardPage.AddToCart(testDataFixture.productName);
    await page.pause()


   await page.locator("(//input[@type='text'])[2]").pressSequentially("294",{delay:150})
   await page.locator(" (//input[@type='text'])[3]").pressSequentially("roshni gerg",{delay:50})
   await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:150})
   
   //handling Suggestive dropdown
   
   const dropdown =page.locator(".ta-results");
   await dropdown.waitFor();
   const count = await dropdown.locator("button").count();
   for(let i=0;i<count;++i){
     const text = await dropdown.locator("button").nth(i).textContent()
     console.log(text);
    if(text===" India"){
        await dropdown.locator("button").nth(i).click();
        break
    }

   }

   //checking the email
   await expect(page.locator(".user__name [type='text']").first()).toHaveText("anshika@gmail.com");
   //placing thr order
   await PlaceOrderBtn.click();
   //checking the thankyou message
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

})

// test('Calender selection',async({page})=>{
//     const Month ="6"
//     const Day = "15"
//     const year = "2027"
//     const ExpectedList=[Month,Day,year];
//     await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
//     await page.waitForLoadState("domcontentloaded");
//     await page.locator(".react-date-picker__inputGroup").click()
//     await page.locator(".react-calendar__navigation__label").click()
//     await page.locator(".react-calendar__navigation__label").click()
//     await page.getByText(year).click()
//     await page.locator(".react-calendar__year-view__months__month").nth(Number(Month)-1).click();
//     await page.locator(`//abbr[text()="${Day}"]`).click();

//     const inputs = await page.locator(".react-date-picker__inputGroup input");
//     for(let i=0;i<inputs.count;i++){
//         const value = await inputs[i].getAttribute("value")
//         expect(value).toEqual(ExpectedList[i]);  
//     }
// })

// test("Hidden Elements",async({page})=>{

//     await page.goto("https://rahulshettyacademy.com/AutomationPractice")
//     await expect(page.locator("#displayed-text")).toBeVisible()
//     await page.locator("#hide-textbox").click()
//     await expect(page.locator("#displayed-text")).toBeHidden()

//     // await page.goto("https://www.google.com")
//     // await page.goBack();
//     // await page.goForward();

// })

// test("Handle Pop Up and hover",async({page})=>{
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice");
//     await page.pause();
//     page.on('dialog',dialog=>dialog.accept());
//     await page.locator("#confirmbtn").click();
//     //hover
//     await page.locator("#mousehover").hover()
// })

// test("handle frames",async({page})=>{
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice");
//     const framesPage = page.frameLocator("#courses-iframe")
//     await framesPage.locator("li a[href*='lifetime-access']:visible").click() //:visible will select the locator which is visible

// })




