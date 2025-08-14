import {test,expect} from '@playwright/test'
export default class ApiUtils
{
    apiContext: any
    LoginPayload: string
    constructor(apiContext:any,loginPayload:string){
        this.apiContext = apiContext;
        this.LoginPayload = loginPayload
    }
   async getToken(){
        //login API
            const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
                {
                    data:this.LoginPayload
                })
               expect(loginResponse.ok()).toBeTruthy();
               const loginResponseJson = await loginResponse.json();
               let token = loginResponseJson.token;
               console.log("token:"+ token)
               return token
    }

    async createOrder(OrderPayload:string){
        let response={token:String,OrderId:String};
        response.token = await this.getToken();
        const OrderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
                {data:OrderPayload,
                    headers:{
                        'Authorization' : response.token,
                        'Content-Type'  : 'application/json'
        
                    },
                })
        
                expect(OrderResponse.ok()).toBeTruthy();
                const OrderResponseJson = await OrderResponse.json();
                let OrderId = OrderResponseJson.orders[0]
                console.log("Order ID:"+ OrderId)
                response.OrderId = OrderId
                return response;

    }

}