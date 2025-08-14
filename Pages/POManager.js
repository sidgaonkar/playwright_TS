import LoginPage from '../Pages/LoginPage.js';
import DashBoard from '../Pages/DashboardPage.js';

export default class POManager{
    constructor(page,expect){
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