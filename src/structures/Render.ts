import puppeteer, { Page } from 'puppeteer';

export default class Render {
  private url: string;

  private _page: Page | undefined;

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

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],
    });

    this._page = await browser.newPage();

    return this._page;
  }
}
