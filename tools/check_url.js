#!/usr/bin/env node
/* 給 Kevin 網址之前一定要跑：node tools/check_url.js '<網址>' ['<網址>' …]
   會真的打開線上的網頁（GitHub Pages），檢查：
   1. 網頁本身和它載入的每個檔案（art、content、mp3 以外）都不是 404
   2. 網址上的 ?art=、?content= 版本，和實際載入的 DOGART.version、DOGCONTENT.version 一樣
   3. 網頁沒有 JavaScript 錯誤
   4. 遊戲首頁有畫出寵物；美術總覽沒有紅色（畫不出來）的圖
   全部 ✓ 才可以把網址給 Kevin。有 ✗ 就不能給，先修好（通常是檔案還沒推到 main，或推了還沒上線，等 1～2 分鐘再跑）。 */
const { chromium } = require('playwright');
const urls = process.argv.slice(2);
if (!urls.length) { console.log("用法：node tools/check_url.js 'https://k012727g.github.io/dog-home/beta/index_beta_V7.html?art=V6&content=V5'"); process.exit(2); }

(async () => {
  const browser = await chromium.launch();
  let allOk = true;
  for (const url of urls) {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    const errs = [], missing = [];
    page.on('pageerror', e => errs.push(e.message));
    page.on('response', r => { if (r.status() >= 400 && /github\.io/.test(r.url()) && !/\.mp3(\?|$)/.test(r.url())) missing.push(`${r.status()} ${r.url().replace(/\?.*$/, '')}`); });
    const fails = [], line = (ok, msg) => { if (!ok) fails.push(msg); console.log(`   ${ok ? '✓' : '✗'} ${msg}`); };
    console.log(`\n== ${url}`);
    let res = null;
    try { res = await page.goto(url, { waitUntil: 'load', timeout: 30000 }); } catch (e) { errs.push('打不開：' + e.message); }
    await page.waitForTimeout(3500);
    if (await page.isVisible('#gateSkip').catch(() => false)) await page.click('#gateSkip').catch(() => {});
    line(res && res.status() < 400, `網頁本身：${res ? res.status() : '打不開'}`);
    line(!missing.length, missing.length ? `有檔案讀不到：${missing.join('、')}` : '載入的檔案都讀得到');
    const info = await page.evaluate(() => ({
      build: window.DOG_BUILD || null,
      art: window.DOGART && DOGART.version, content: window.DOGCONTENT && DOGCONTENT.version,
      pup: !!document.querySelector('#pup svg, #pupSvg svg'), gallery: window.GALLERY_RESULT || null
    })).catch(() => ({}));
    const q = new URL(url).searchParams;
    const want = (k, fileRe) => q.get(k) || ((info.build && info.build[k] || '').match(fileRe) || [])[1] || null;
    const wantArt = want('art', /art_beta_(\w+)\.js/), wantContent = want('content', /content_beta_(\w+)\.js/);
    if (wantArt) line(info.art && (info.art === wantArt || info.art.startsWith(wantArt)), `美術版本：網址要 ${wantArt}，實際 ${info.art || '沒有載入'}`);
    else line(!!info.art, `美術版本：${info.art || '沒有載入'}`);
    if (wantContent) line(info.content === wantContent, `繪本版本：網址要 ${wantContent}，實際 ${info.content || '沒有載入'}`);
    else line(!!info.content, `繪本版本：${info.content || '沒有載入'}`);
    line(!errs.length, errs.length ? `網頁錯誤：${errs.slice(0, 3).join(' ／ ')}` : '沒有網頁錯誤');
    if (/gallery/.test(url)) line(info.gallery && info.gallery.err === 0, `美術總覽：${info.gallery ? `${info.gallery.ok} 張正常、${info.gallery.err} 張畫不出來` : '沒有跑完'}`);
    else if (/index/.test(url) || /\/dog-home\/?(\?|$)/.test(url)) line(info.pup, info.pup ? '首頁有畫出寵物' : '首頁沒有畫出寵物');
    console.log(fails.length ? `   → ✗ 不能給 Kevin（${fails.length} 項沒過）` : '   → ✓ 可以給 Kevin');
    if (fails.length) allOk = false;
    await page.close();
  }
  await browser.close();
  process.exit(allOk ? 0 : 1);
})();
