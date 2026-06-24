import { BasePage } from "./BasePage";
export class LoginPage extends BasePage{
    private static  textbox_login = "//input[@name='txtUserName']";
    private static textbox_password = "//input[@name='txtPassword']";
    private static button_login = "//input[@name='Submit']";

    static async login(username:string,password:string){
        await this.page.locator(this.textbox_login).fill(username);
        await this.page.locator(this.textbox_password).fill(password);
        await this.page.locator(this.button_login).click();
        console.log("Login Completed");
    }
}