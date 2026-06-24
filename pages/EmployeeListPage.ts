import { BasePage } from "./BasePage";
export class EmployeeList extends BasePage{
    private static search_by_dropdown = "//select[@id='loc_code']";
    private static search_for = "//input[@id='loc_name']";
    private static button_search = "//input[@value='Search']";
    private static checkbox="//tr[@class='odd']//td//input";
    private static button_delete = "//input[@value='Delete']";
    private static delete_msg = "//span[@class='failure']";
    private static employee_list_frame = "//iframe[@id='rightMenu']";

    static async selectValueFromSearchByDropdown(drpValue:string){
        const frame = await this.page.frameLocator(this.employee_list_frame);
        await frame.locator(this.search_by_dropdown).selectOption(drpValue);
    }
    static async enterTextInSearchForField(searchForValue:string){
        const frame = await this.page.frameLocator(this.employee_list_frame);
        await frame.locator(this.search_for).fill(searchForValue);
    }
    static async clickOnSearchButton(){
        const frame = await this.page.frameLocator(this.employee_list_frame);
        await frame.locator(this.button_search).click();
        await this.page.waitForTimeout(3000);
    }
    static async checkFirstRowCheckbox(){
        const frame = await this.page.frameLocator(this.employee_list_frame);
        await frame.locator(this.checkbox).check();
    }
    static async clickOnDeleteButton(){
         const frame = await this.page.frameLocator(this.employee_list_frame);
         await frame.locator(this.button_delete).click();
    }
    public static async getDeleteConfirmationMsg(){
        const frame = await this.page.frameLocator(this.employee_list_frame);
        return await frame.locator(this.delete_msg).textContent();
    }
}