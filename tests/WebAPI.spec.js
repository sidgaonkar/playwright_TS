import {test,expect,request} from '@playwright/test'
import ApiUtils from '../utils/ApiUtils.js';




let token;
let OrderId;
const LoginPayload ={
    userEmail: "playwright23@gmail.com",
    userPassword: "Iamking@000"
}

const OrderPayload = {
    "orders": [
        {
            country: "India",
            productOrderedId: "67a8df56c0d3e6622a297ccd"
        }
    ]


}
// test.beforeEach(()=>{    // this function will run before each test cases

// })

test.beforeAll( "",async()=>{    // this function will run before all the test cases are executed

    let response;
    //login API
    const apiContext = await request.newContext();
    //creating object
    var apiUtils = new ApiUtils(apiContext,LoginPayload)
    response = apiUtils.createOrder(OrderPayload)
    
   
})



test("Login using token and creating Order",async({page})=>{
    page.addInitScript(value =>{
        window.localStorage.setItem('token',value)
    },response.token);

    const URL = "https://rahulshettyacademy.com/client";
    const OrderIdRow = page.locator("tbody th");
    

    await page.goto(URL);
    await page.waitForLoadState('networkidle');

    await page.locator("button[routerlink*='myorders']").click()
    const countOrderID = await OrderIdRow.count()

   for(let i=0;i<countOrderID;++i){
    const rowOrderId = await OrderIdRow.nth(i).textContent();
    console.log(rowOrderId)
    if(rowOrderId === response.OrderId){
        console.log("Id Verified Order Placed Successfully!")
        break;
    }      
   }

    // after the above steps are performed the login screen will be bypassed beacause 
    //we are login using api and using the token to get into the session
})









