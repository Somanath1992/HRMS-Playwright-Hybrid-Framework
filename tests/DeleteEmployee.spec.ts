import {test,expect} from '@playwright/test'
import { general } from '../lib/General'
test('TC_004 Delete Employee',async({page})=>{
    const gen = new general(page);
    await gen.openApplication();
    await gen.login();
    await gen.addNewEmployee();
    await gen.clickOnBackButton();
    await gen.deleteEmployee();
    const actualConfirmationMsg=await gen.getDeleteConfirmationMsg();
    await expect(actualConfirmationMsg).toBe('Successfully Deleted');
    await page.waitForTimeout(3000);
})