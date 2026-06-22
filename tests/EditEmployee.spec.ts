import {test} from '@playwright/test';
import { general } from '../lib/General';
test('TC_003 Edit Employee',async({page})=>{
    const gen = new general(page);
    await gen.openApplication();
    await gen.login();
    await gen.addNewEmployee();
    await gen.editEmployee();
    await gen.logout();
})