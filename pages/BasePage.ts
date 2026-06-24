import {Page} from '@playwright/test';
export class BasePage{
    static page:Page;
    static async openApplication(url:string){
        await this.page.goto(url);
    }
}