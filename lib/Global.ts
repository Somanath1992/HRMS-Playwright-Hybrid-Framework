//Test Data and Objects/elements related to application
import {Page} from '@playwright/test';
export class global{
    constructor(public page:Page){
        this.page =page;
    }
    public url : string = "https://ctcorphyd.com/SureshIT/login.php";
    public username:string = "sureshit";
    public password: string = "sureshit";
    public empfirstname:string ="som";
    public emplastname:string="tom";
    public middlename:string = "dom";
    public nickname:string = "kom";
    public employeeCode: string = '';
    public textbox_login = "//input[@name='txtUserName']";
    public textbox_password = "//input[@name='txtPassword']";
    public button_login = "//input[@name='Submit']";
    public button_logout = "//a[text()='Logout']";
    public add_employee_frame = "//iframe[@id='rightMenu']";
    public add_employee_button = "//input[@value='Add']";
    public textbox_employeelastname= "//input[@id='txtEmpLastName']";
    public textbox_employeefirstname="//input[@id='txtEmpFirstName']";
    public button_save = "//input[@id='btnEdit']";
    public button_edit = "//input[@id='btnEditPers']";
    public textbox_employeemiddlename = "//input[@id='txtEmpMiddleName']";
    public textbox_employeenickname="//input[@id='txtEmpNickName']";
    public button_editpage_save = "//input[@id='btnEditPers']";
    public code_value = "//input[@id='txtEmployeeId']";
    public search_by_dropdown = "//select[@id='loc_code']";
    public search_for = "//input[@id='loc_name']";
    public button_search = "//input[@value='Search']";
    public checkbox="//tr[@class='odd']//td//input";
    public button_delete = "//input[@value='Delete']";
    public delete_msg = "//span[@class='failure']";
    public button_back = "//input[@class='backbutton']";

}