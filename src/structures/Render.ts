import puppeteer, { Page, Browser } from 'puppeteer';

export default class Render {
  private url: string;

  private _page: Page | undefined;

  private _browser: Browser | undefined;

  constructor(url: string) {
    this.url = url;
  }

  async render() {
    const page = await this.getPage();

    await page.setViewport({ width: 1200, height: 630 });
    await page.goto(this.url, { waitUntil: 'load', timeout: 0 });

    const screenshot = await page.screenshot({ type: 'jpeg' });

    return screenshot;
  }

  private async getPage(): Promise<Page> {
    if (this._page) {
      return this._page;
    }

    const browser = await this.getBrowser();

    this._page = await browser.newPage();

    return this._page;
  }

  private async getBrowser() {
    if (this._browser) {
      return this._browser;
    }

    this._browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    return this._browser;
  }
}
