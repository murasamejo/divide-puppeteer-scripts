class appWithClass {
  constructor(yourFooBar) {
    this.puppeteer = require('puppeteer');
    this.foobar = yourFooBar;
  }

  dragonball() {
    console.log(this.foobar);
  }

  deathNote() {
    (async () => {
      const browser = await this.puppeteer.launch();
      const page = await browser.newPage();

      await page.goto('https://gunosy.com/');
      await page.screenshot({
        path: 'screenshots/screenshot_appWithClass_deathNote.png',
        fullPage: true
      });

      await browser.close();
    })();
  }

  async doPuppeteer() {
    const browser = await this.puppeteer.launch();
    const page = await browser.newPage();

    await this.gotoGunosy(page);
    await this.createScreenshot(page);

    await this.gotoGoogle(page);
    await this.createScreenshot(page);

    await browser.close();
  }

  async gotoGunosy(page) {
    await page.goto('https://gunosy.com/');
  }

  async gotoGoogle(page) {
    await page.goto('https://www.google.co.jp/');
  }

  async createScreenshot(page) {
    const date = new Date();
    const filename = `screenshots/screenshot_appWithClass_${date.getHours()}${date.getMinutes()}${date.getSeconds()}.png`;

    await page.screenshot({
      path: filename,
      fullPage: true
    });
  }
}

const obj = new appWithClass('myFooBar');
obj.doPuppeteer();
