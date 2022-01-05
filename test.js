const puppeteer = require("puppeteer");
(async () => {
  // Запускаю браузер
  const browser = await puppeteer.launch({
    headless: false,
  });
// Створюю нову вкладку
  const page = await browser.newPage();
  //Переходжу за посиланням яке зазначене
  await page.goto('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
  //Знаходжу поле по іменні
  const searchInputUserName = await page.$('input[name=username]');
  //Фокусую поле
  await searchInputUserName.focus();
  //Вводжу в поле текст admin
  await page.keyboard.type('admin');
  //Знаходжу поле по іменні
  const searchInputPass = await page.$('input[name=password]');
  //Фокусую поле
  await searchInputPass.focus();
  //Вводжу в поле текст admin
  await page.keyboard.type('admin');
  //нажимаю кнопку Login
  await page.click('#all > div > form > div:nth-child(3) > input');
  
})();