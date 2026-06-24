import {test} from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { VerifyPage } from '../pages/VerifyPage';
import { Logout } from '../pages/LogoutPage';
test('TC_001_Login_Logout',async({page})=>{
    BasePage.page = page;
    await BasePage.openApplication("https://ctcorphyd.com/SureshIT/login.php");
    await LoginPage.login("sureshit","sureshit");
    await VerifyPage.verifyTitle("SureshIT");
    await Logout.logout();
})