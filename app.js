const puppeteer = require('puppeteer');

async function doPuppeteer() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await gotoGunosy(page);
  await createScreenshot(page);

  await gotoGoogle(page);
  await createScreenshot(page);

  await browser.close();
}

async function gotoGunosy(page) {
  await page.goto('https://gunosy.com/');
}

async function gotoGoogle(page) {
  await page.goto('https://www.google.co.jp/');
}

async function createScreenshot(page) {
  const date = new Date();
  const filename = `screenshots/screenshot_${date.getHours()}${date.getMinutes()}${date.getSeconds()}.png`;

  await page.screenshot({
    path: filename,
    fullPage: true
  });
}

// デバッグ用
function dragonball() {
  const date = new Date();
  console.log(`${date.getHours()}${date.getMinutes()}${date.getSeconds()}`);
}

dragonball();
doPuppeteer();
