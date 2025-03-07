const {Builder, Browser, By, util, until} = require('selenium-webdriver');
const { BasePage } = require("./basepage");
const { ElementUtils } = require('../utils/elementUtil');
const base = new BasePage();

class LoginPage extends BasePage{
    
    driver;
    constructor(driver){
        this.driver = driver;
        ele = new ElementUtils(driver);
    }

    #username = By.id("user-name");
    #password = By.id("password");
    #btnLogin = By.id("login-button");

    async enterUsername(user_name) {
        ele.doSendKeysWithWait(this.#username, user_name, 5000);
    }
    async enterPassword(pass) {
        await ele.getElement(this.#password).sendKeys(pass);
    }
    async clickLoginBtn() {
        ele.doClick(this.#btnLogin);
    }

}

exports.LoginPage = LoginPage;