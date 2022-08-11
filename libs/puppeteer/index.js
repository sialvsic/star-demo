const puppeteer = require("puppeteer");
const path = require("path");

const outputPath = path.join(__dirname, "./temp.png");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1680,
    height: 800,
  });
  await page.goto("https://www.baidu.com");
  await page.screenshot({ path: outputPath });

  await browser.close();
})();
