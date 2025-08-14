import LoginPage from '../Pages_ts/LoginPage';
import DashBoard from '../Pages_ts/DashboardPage';
import {Page,Expect} from '@playwright/test'


 export class POManager{

    loginPage : LoginPage;
    dashboardPage : DashBoard
    page: Page;
    expect:Expect
     

    constructor(page:any, expect:any){
    this.page = page;
    this.expect = expect;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashBoard(this.page,this.expect);

    }

    getLoginPage(){
        return this.loginPage;
    }
    getDashboardPage(){
        return this.dashboardPage;
    }
   
}