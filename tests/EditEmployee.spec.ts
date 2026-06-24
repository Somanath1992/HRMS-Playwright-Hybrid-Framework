import {test} from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { Logout } from '../pages/LogoutPage';
import { AddEmployee } from '../pages/AddEmployee';
import { EditEmployee } from '../pages/EditEmployee';

test('TC_003 Edit Employee',async({page})=>{
    BasePage.page = page;
    await BasePage.openApplication("https://ctcorphyd.com/SureshIT/login.php");
    await LoginPage.login("sureshit","sureshit");
    await AddEmployee.addNewEmployee("tom","som");
    await EditEmployee.clickOnEditButton();
    await EditEmployee.enterMiddleName("dom");
    await EditEmployee.enterNickName("nick");
    await EditEmployee.clickOnSaveButton();
    await Logout.logout();
})