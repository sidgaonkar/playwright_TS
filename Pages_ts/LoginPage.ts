import {test,expect,Locator,Page} from '@playwright/test'

export default class LoginPage{
    page:Page;
    username:Locator;
    password:Locator;
    LogInBtn:Locator
    
    constructor(page:Page){
        this.page = page;
        this.username = this.page.locator('#userEmail');
        this.password = this.page.locator('#userPassword');
        this.LogInBtn = this.page.locator("[value='Login']");
    }
    async goto(URL:string){
        await this.page.goto(URL);
        await this.page.waitForLoadState("domcontentloaded");
    }

    async login(username:string, password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.LogInBtn.click();
        
    }
}