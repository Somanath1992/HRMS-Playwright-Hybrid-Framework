import{test} from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { Logout } from '../pages/LogoutPage';
import { AddEmployee } from '../pages/AddEmployee';

test('TC_002 Add Employee',async({page})=>{
    BasePage.page = page;
    await BasePage.openApplication("https://ctcorphyd.com/SureshIT/login.php");
    await LoginPage.login("sureshit","sureshit");
    await AddEmployee.addNewEmployee("tom","som");
    await Logout.logout();
})