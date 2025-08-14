import {test as baseTest} from '@playwright/test'

interface testDataFixture{
    username: string;
    password: string;
    url: string;
    productName: string;
};
export const customtest = baseTest.extend<{testDataFixture:testDataFixture}>(
    {
        testDataFixture:{
            username:"playwright23@gmail.com",
            password:"Iamking@000",
            url:"https://rahulshettyacademy.com/client",
            productName:"ADIDAS ORIGINAL"
        }
    }
)
