import { BasePage } from "./BasePage";
export class AddEmployee extends BasePage{
    public static employeeCode: string = '';
    private static add_employee_frame = "//iframe[@id='rightMenu']";
    private static add_employee_button = "//input[@value='Add']";
    private static textbox_employeelastname= "//input[@id='txtEmpLastName']";
    private static textbox_employeefirstname="//input[@id='txtEmpFirstName']";
    private static button_save = "//input[@id='btnEdit']";
    private static code_value = "//input[@id='txtEmployeeId']";
    private static button_back = "//input[@class='backbutton']";
    static async addNewEmployee(emplastname:string,empfirstname:string){
    const frame =  this.page.frameLocator(this.add_employee_frame);
    await frame.locator(this.add_employee_button).click();
    await frame.locator(this.textbox_employeelastname).fill(emplastname);
    await frame.locator(this.textbox_employeefirstname).fill(empfirstname);  
    this.employeeCode = await frame.locator(this.code_value).inputValue();
    await frame.locator(this.button_save).click();
    console.log("new emplpoyee added");  
}
    static async clickOnBackButton(){
        const frame =  this.page.frameLocator(this.add_employee_frame);
        await frame.locator(this.button_back).click();
    }

}