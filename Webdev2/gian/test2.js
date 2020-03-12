const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({"headless": false});
  const page = await browser.newPage();
  await page.goto('http://executeautomation.com/demosite/Login.html');
  
   // get the name of input
   await page.focus.type("input[name=UserName]");
   //use keyboard to type values
   await page.keyboard.type('Gian');

    
    await page.focus.type("input[name=Password]");
    await page.keyboard.type('Gian');


    await page.click("input[name=Login]");  
    await page.waitForNavigation();
    await page.waitFor(3000);



  
  await browser.close();
})();