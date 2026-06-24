import { BasePage } from "./BasePage";
export class EditEmployee extends BasePage{
    private static edit_employee_frame = "//iframe[@id='rightMenu']";
    private static button_edit = "//input[@id='btnEditPers']";
    private static textbox_employeemiddlename = "//input[@id='txtEmpMiddleName']";
    private static textbox_employeenickname="//input[@id='txtEmpNickName']";
    private static button_editpage_save = "//input[@id='btnEditPers']";
    static async clickOnEditButton(){
        const frame = await this.page.frameLocator(this.edit_employee_frame);
        await frame.locator(this.button_edit).click();
    }
    static async enterMiddleName(middleName:string){
        const frame = await this.page.frameLocator(this.edit_employee_frame);
        await frame.locator(this.textbox_employeemiddlename).fill(middleName);
    }
     static async enterNickName(nickName:string){
        const frame = await this.page.frameLocator(this.edit_employee_frame);
        await frame.locator(this.textbox_employeenickname).fill(nickName);
    }
    static async clickOnSaveButton(){
        const frame = await this.page.frameLocator(this.edit_employee_frame);
        await frame.locator(this.button_editpage_save).click();
    }
}