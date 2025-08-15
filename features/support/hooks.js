import { After,Before, BeforeStep } from "@cucumber/cucumber";  
import POManager from '../../Pages/POManager.js';

Before(async function () {
  this.browser = await playwright.chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.poManager = new POManager(this.page, expect);
});

After(async function () {
  await this.browser.close();
  this.page = null;
});

