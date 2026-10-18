import { chromium } from 'playwright';

const pages = [
  { url: 'http://localhost:5173/', name: 'home' },
  { url: 'http://localhost:5173/products', name: 'products' },
  { url: 'http://localhost:5173/products/water-tanks', name: 'water-tanks' },
  { url: 'http://localhost:5173/products/topuf-sheets', name: 'toe-puff' },
  { url: 'http://localhost:5173/about', name: 'about' },
  { url: 'http://localhost:5173/inquire', name: 'inquire' },
];

const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
for (const p of pages) {
  await page.goto(p.url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `/tmp/kp-screens/${p.name}.png`, fullPage: true });
  console.log('shot', p.name);
}
await browser.close();
