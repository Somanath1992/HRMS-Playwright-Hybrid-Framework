import{test} from '@playwright/test';
import { general } from '../lib/General';   

test('TC_002 Add Employee',async({page})=>{
    const gen = new general(page);
    await gen.openApplication();
    await gen.login();
    await gen.addNewEmployee();
    await gen.logout();
})