import {test} from '@playwright/test';
import { general } from '../lib/General';
test('TC_001_Login_Logout',async({page})=>{
    const gen = new general(page);
    await gen.openApplication();
    await gen.login();
    await gen.logout();
})