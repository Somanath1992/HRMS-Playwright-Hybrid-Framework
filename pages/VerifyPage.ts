import { BasePage } from "./BasePage";
import {expect} from "@playwright/test";
export class VerifyPage extends BasePage{
    static async verifyTitle(expectedTitile:string){
        await expect(this.page).toHaveTitle(expectedTitile);
        console.log("Title Verification Completed");
    }
}