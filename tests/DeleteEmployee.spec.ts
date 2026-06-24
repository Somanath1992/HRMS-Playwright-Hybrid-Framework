import {test,expect} from '@playwright/test'
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { Logout } from '../pages/LogoutPage';
import { EmployeeList } from '../pages/EmployeeListPage';
import { AddEmployee } from '../pages/AddEmployee';
test('TC_004 Delete Employee',async({page})=>{
    BasePage.page = page;
    await BasePage.openApplication("https://ctcorphyd.com/SureshIT/login.php");
    await LoginPage.login("sureshit","sureshit");
    await AddEmployee.addNewEmployee("tom","som");
    await AddEmployee.clickOnBackButton();
    await EmployeeList.selectValueFromSearchByDropdown('Emp. ID');
    await EmployeeList.enterTextInSearchForField(AddEmployee.employeeCode);
    await EmployeeList.clickOnSearchButton();
    await EmployeeList.checkFirstRowCheckbox();
    await EmployeeList.clickOnDeleteButton();
    const actualConfirmationMsg = await EmployeeList.getDeleteConfirmationMsg();
    await expect(actualConfirmationMsg).toBe('Successfully Deleted');
    await page.waitForTimeout(3000);
    Logout.logout();
})