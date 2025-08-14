export default class LoginPage{
    constructor(page){
        this.page = page;
        this.username = this.page.locator('#userEmail');
        this.password = this.page.locator('#userPassword');
        this.LogInBtn = this.page.locator("[value='Login']");
    }
    async goto(URL){
        await this.page.goto(URL);
        await this.page.waitForLoadState("domcontentloaded");
    }

    async login(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.LogInBtn.click();
        
    }
}