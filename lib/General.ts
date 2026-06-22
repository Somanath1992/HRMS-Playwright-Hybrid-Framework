//All common reusable methods / functions
import {global} from './Global';
export class general extends global{
    
public async openApplication(){
    await this.page.goto(this.url);
    console.log("application open");
}
public async login(){
    await this.page.locator(this.textbox_login).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
    console.log("login completed");
}
public async logout(){
    await this.page.locator(this.button_logout).click();
    console.log("logout completed");
}
public async addNewEmployee(){
    const frame =  this.page.frameLocator(this.add_employee_frame);
    await frame.locator(this.add_employee_button).click();
    await frame.locator(this.textbox_employeelastname).fill(this.emplastname);
    await frame.locator(this.textbox_employeefirstname).fill(this.empfirstname);
    this.employeeCode =
    await frame.locator(this.code_value).inputValue();
    await frame.locator(this.button_save).click();
    console.log("new emplpoyee added");
    
}
public async editEmployee(){
    const frame =  this.page.frameLocator(this.add_employee_frame);
    await frame.locator(this.button_edit).click();
    await frame.locator(this.textbox_employeemiddlename).fill(this.middlename);
    await frame.locator(this.textbox_employeenickname).fill(this.nickname);
    await frame.locator(this.button_editpage_save).click();
}

public async deleteEmployee(){
    const frame =  this.page.frameLocator(this.add_employee_frame);
    await frame.locator(this.search_by_dropdown).selectOption('Emp. ID');
    await frame.locator(this.search_for).fill(this.employeeCode);
    await frame.locator(this.button_search).click();
    await this.page.waitForTimeout(3000);
    await frame.locator(this.checkbox).check();
    await frame.locator(this.button_delete).click();
    console.log("Employee Deleted Successfully")
}
public async clickOnBackButton(){
    const frame =  this.page.frameLocator(this.add_employee_frame);
    await frame.locator(this.button_back).click();
}
public async getDeleteConfirmationMsg(){
    const frame =  this.page.frameLocator(this.add_employee_frame);
    return await frame.locator(this.delete_msg).textContent();
}

}