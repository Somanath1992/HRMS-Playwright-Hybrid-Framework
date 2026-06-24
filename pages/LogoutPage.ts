import { BasePage } from "./BasePage";
export class Logout extends BasePage{
    private static button_logout = "//a[text()='Logout']";
    static async logout(){
        await this.page.locator(this.button_logout).click();
        console.log("logout completed");
    }
}