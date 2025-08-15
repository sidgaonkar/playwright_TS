import { When, Then, Given } from '@cucumber/cucumber';
import {expect} from '@playwright/test'
import playwright from 'playwright'
import POManager from '../../Pages/POManager.js';

Given('a login page with {string} and {string} and url {string}', async function (username, password ,url) {
           const browser = await playwright.chromium.launch({ headless: false });
           const context = await browser.newContext();
           const page = await context.newPage();
           this.poManager =new POManager(page,expect);
           const loginPage = this.poManager.getLoginPage();
           await loginPage.goto(url);
           await loginPage.login(username, password);
           await page.waitForLoadState('networkidle');
         });

 When('Add {string} to cart', async function (productName) {
           const dashboardPage = this.poManager.getDashboardPage()  
           await dashboardPage.AddToCart(productName);
         }); 
         
Then('Verify {string} is displayed in cart', function (string) {           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });