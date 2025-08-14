import base from '@playwright/test'

const customtest = base.test.extend(
    {
        testDataFixture:{
            username:"playwright23@gmail.com",
            password:"Iamking@000",
            url:"https://rahulshettyacademy.com/client",
            productName:"ADIDAS ORIGINAL"
        }
    }
)
export default customtest;