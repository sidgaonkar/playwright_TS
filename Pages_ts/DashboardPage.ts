import {test,expect,Locator,Page, Expect} from '@playwright/test'

export default class DashBoard{
    page:Page;
    productLocator:Locator
    CartBtn:Locator
    expect:Expect

    constructor(page:Page,expect:Expect)
    {   
        this.expect = expect
        this.page = page;
        this.productLocator = page.locator(".card-body");
        this.CartBtn = page.locator('[routerlink*=cart]');
    }

    async AddToCart(ProductName:string) {
        
        for(let i=0; i<await this.productLocator.count();i++){
            if( await this.productLocator.nth(i).locator("b").textContent()===ProductName){
                
                await this.productLocator.nth(i).locator("text=Add to Cart").click()
                break;
            }
    
        }
        // checking if item added to chart 
       await this.CartBtn.click()
       await this.page.locator("div li").first().waitFor();
       const bool = await this.page.locator(`h3:has-text("${ProductName}")`).isVisible();
       await this.expect(bool).toBeTruthy()
       await this.page.locator("button").getByText("Checkout").click()

    }

    

}