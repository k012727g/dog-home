/* 小狗的家｜點擊流程測試（smoke test）
 *
 * 用法（在 repo 最上層執行）：
 *   node tests/smoke_test.js beta/index_beta_V2.html            → 跑一次，結果寫到 tests/results/<檔名>.json
 *   node tests/smoke_test.js --compare A.json B.json            → 比對兩次結果，每一步都要一樣
 *
 * 做法：
 *   ・用 Playwright 開頁面，網址假裝是 https://k012727g.github.io/dog-home/...，檔案從本機讀（不連網路）。
 *   ・GitHub 的 photos 清單用本機 photos/ 資料夾假造（裡面的 1.h 不是圖片，應被濾掉）。
 *   ・測試版存檔會加 @beta、不連 Firebase，所以不會動到正式進度。
 *   ・家長設定如果有分頁，會先點對應的分頁再操作（沒有分頁的舊版不受影響），
 *     所以同一份步驟可以拿來比對改版前後。
 *   ・只在新版才有的檢查（例如分頁）放在 extra，比對時不算進「要一樣」的範圍。
 */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
// SITE 可以用環境變數換掉，用來模擬「不是 github.io 的預覽網址」（請求一樣全部在本機處理）
const SITE = process.env.SITE || 'https://k012727g.github.io/dog-home/';
const API = 'https://api.github.com/repos/k012727g/dog-home/contents/photos';
const PIN = '0127';

const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp', '.mp3': 'audio/mpeg' };

function photoListing() {
  return fs.readdirSync(path.join(ROOT, 'photos')).map(name => ({ name, type: 'file' }));
}
const IMG_RE = /\.(jpe?g|png|gif|webp)$/i;

async function runSuite(target) {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 820, height: 1180 }, reducedMotion: 'reduce', acceptDownloads: true });
  const page = await ctx.newPage();
  const pageErrors = [], dialogs = [], hosts = new Set();
  page.on('pageerror', e => pageErrors.push(String(e.message || e)));
  page.on('dialog', async d => {
    dialogs.push(d.type() + ':' + d.message().slice(0, 40));
    if (d.type() === 'prompt') await d.dismiss(); else await d.accept();
  });
  await page.route('**/*', async route => {
    const url = route.request().url();
    hosts.add(new URL(url).host);
    if (url.startsWith(API)) return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(photoListing()) });
    if (url.startsWith(SITE)) {
      const rel = decodeURIComponent(url.slice(SITE.length).split(/[?#]/)[0]);
      const f = path.join(ROOT, rel);
      if (f.startsWith(ROOT) && fs.existsSync(f) && fs.statSync(f).isFile())
        return route.fulfill({ status: 200, contentType: MIME[path.extname(f).toLowerCase()] || 'application/octet-stream', body: fs.readFileSync(f) });
      return route.fulfill({ status: 404, body: 'not found' });
    }
    return route.abort(); // 字型、Firebase 等外部連線一律擋掉
  });

  const steps = [], extra = [];
  const ev = (fn, arg) => page.evaluate(fn, arg);
  const isVisible = sel => ev(s => { const el = document.querySelector(s); if (!el) return false;
    for (let e = el; e; e = e.parentElement) if (e.hidden) return false; const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0 }, sel);
  // 家長設定若有分頁：元素所在的分頁沒打開時，先點分頁
  const reveal = sel => ev(s => { const el = document.querySelector(s); if (!el) return;
    const pane = el.closest('[data-pane]'); if (pane && pane.hidden) { const t = document.querySelector(`[data-ptab="${pane.dataset.pane}"]`); if (t) t.click(); } }, sel);
  const click = async sel => { await reveal(sel); await page.click(sel, { timeout: 4000 }); await page.waitForTimeout(120); };
  const fill = async (sel, v) => { await reveal(sel); await page.fill(sel, String(v), { timeout: 4000 });
    await ev(s => document.querySelector(s).dispatchEvent(new Event('change', { bubbles: true })), sel); await page.waitForTimeout(80); };
  const count = sel => ev(s => document.querySelectorAll(s).length, sel);
  const text = sel => ev(s => { const el = document.querySelector(s); return el ? el.textContent.trim() : null }, sel);
  const errMark = () => pageErrors.length;

  async function step(list, id, name, fn) {
    const e0 = errMark();
    let ok = false, detail = '';
    try { const r = await fn(); ok = r.ok !== false; detail = r.detail || ''; }
    catch (e) { ok = false; detail = 'EXCEPTION ' + String(e.message || e).split('\n')[0].slice(0, 140); }
    const newErr = pageErrors.slice(e0);
    if (newErr.length) { ok = false; detail += ' | JS錯誤: ' + newErr.join(' / ').slice(0, 160); }
    list.push({ id, name, ok, detail });
  }
  const S = (id, name, fn) => step(steps, id, name, fn);
  const X = (id, name, fn) => step(extra, id, name, fn);
  async function ensureParent() {
    if (await isVisible('#tab-parent')) return;
    await click('#parentFab');
    if (await isVisible('#pinModal')) { await page.fill('#pinInput', PIN); await click('#pinOk'); }
  }
  async function ensureMap() { if (!(await isVisible('#mapScene'))) await click('#dMap'); }

  // ===== L 開啟 =====
  await S('L01', '開啟頁面、美術與內容檔載入', async () => {
    await page.goto(SITE + target, { waitUntil: 'load' });
    await page.waitForFunction(() => typeof renderAll === 'function', null, { timeout: 15000 });
    await page.waitForTimeout(300);
    const r = await ev(() => ({ art: !!window.DOGART, content: !!window.DOGCONTENT, beta: !!(window.DOG_BUILD && DOG_BUILD.beta) }));
    return { ok: r.art && r.content, detail: `art=${r.art} content=${r.content} beta=${r.beta}` };
  });
  await S('L02', '測試版標籤顯示', async () => ({ ok: await isVisible('#betaBadge'), detail: '' }));

  // ===== H 主畫面 =====
  await S('H01', '摸摸小狗', async () => { await click('#pup'); return { detail: '' }; });
  await S('H02', '餵食（打開食物盤）', async () => { await click('#dFeed'); const v = await isVisible('#tray'); if (v) await click('#dFeed'); return { ok: v, detail: 'tray=' + v }; });
  await S('H03', '玩球', async () => { await click('#dBall'); await page.waitForTimeout(300); return { detail: '' }; });
  await S('H04', '洗澡：進入與回家', async () => { await click('#dBath'); const a = await isVisible('#bathScene'); await click('#bathHome'); const b = await isVisible('#bathScene');
    return { ok: a && !b, detail: `open=${a} closed=${!b}` }; });
  await S('H05', '扭蛋機：進入與回家', async () => { await click('#dGacha'); const a = await isVisible('#gachaScene'); await click('#gachaHome'); const b = await isVisible('#gachaScene');
    return { ok: a && !b, detail: `open=${a} closed=${!b}` }; });
  await S('H06', '背包：進入與回家', async () => { await click('#qBag'); const a = await isVisible('#bagScene'); await click('#bagHome'); const b = await isVisible('#bagScene');
    return { ok: a && !b, detail: `open=${a} closed=${!b}` }; });
  await S('H07', '課表：進入與回家', async () => { await click('#qPlan'); const a = await isVisible('#planScene'); await click('#planHome'); const b = await isVisible('#planScene');
    return { ok: a && !b, detail: `open=${a} closed=${!b}` }; });
  await S('H08', '登記考卷：輸入 95 分、放進這一疊、送給爸媽', async () => {
    await click('#qExam'); const a = await isVisible('#examScene');
    await click('#numpad [data-k="9"]'); await click('#numpad [data-k="5"]'); const sc = await text('#scoreDisp');
    await click('#exAdd'); const cart = await isVisible('#exCart');
    await click('#exSend'); const pend = await isVisible('#pendingWrap');
    await click('#examHome');
    return { ok: a && sc === '95' && cart && pend, detail: `open=${a} score=${sc} cart=${cart} pending=${pend}` };
  });
  await S('H09', '關燈睡覺、再開燈', async () => { await click('#lightSw'); const a = await isVisible('#roomDark'); await click('#lightSw'); const b = await isVisible('#roomDark');
    return { ok: a && !b, detail: `dark=${a} light=${!b}` }; });

  // ===== M 小鎮地圖 =====
  await S('M01', '打開地圖', async () => { await click('#dMap'); const a = await isVisible('#mapScene'); return { ok: a, detail: 'map=' + a }; });
  const LESSONS = [['park', '#parkScene', '#parkHome', '公園散步'], ['english', '#engScene', '#engHome', '英文教室'], ['art', '#artScene', '#artHome', '畫室'],
    ['dance', '#danceScene', '#danceHome', '舞蹈教室'], ['hall', '#hallScene', '#hallHome', '活動中心']];
  let mi = 2;
  for (const [loc, scene, home, label] of LESSONS) {
    await S('M0' + mi++, `${label}：選第 1 關、進入、回家`, async () => {
      await ensureMap(); await click(`#mapSvg [data-loc="${loc}"]`);
      const pick = await isVisible('#lvPick'); if (!pick) return { ok: false, detail: 'lvPick 沒出現' };
      await click('#lvNodes .lv-node'); await page.waitForTimeout(400);
      const a = await isVisible(scene); await click(home); await page.waitForTimeout(200);
      if (await isVisible(scene) && await isVisible('.pk-end:not([hidden]) .round-btn')) await click(`${scene} .pk-end:not([hidden]) .round-btn`);
      const b = await isVisible(scene);
      return { ok: a && !b, detail: `lvPick=${pick} open=${a} closed=${!b}` };
    });
  }
  await S('M07', '圖書館：進入與回家', async () => { await ensureMap(); await click('#mapSvg [data-loc="library"]'); await page.waitForTimeout(400);
    const a = await isVisible('#libScene'); const books = await count('#bookShelf > *'); await click('#libHome'); const b = await isVisible('#libScene');
    return { ok: a && !b && books > 0, detail: `open=${a} books>0=${books > 0} closed=${!b}` }; });
  await S('M08', '美容院：進入與回家', async () => { await ensureMap(); await click('#mapSvg [data-loc="salon"]'); await page.waitForTimeout(400);
    const a = await isVisible('#salonScene'); await click('#salonHome'); const b = await isVisible('#salonScene');
    return { ok: a && !b, detail: `open=${a} closed=${!b}` }; });
  await S('M09', '地圖：回家', async () => { await ensureMap(); await click('#mapHome'); const b = await isVisible('#mapScene'); return { ok: !b, detail: 'closed=' + !b }; });

  // ===== P 家長設定 =====
  await S('P01', '家長按鈕 → 密碼視窗', async () => { await click('#parentFab'); const a = await isVisible('#pinModal'); return { ok: a, detail: 'pin=' + a }; });
  await S('P02', '輸入錯誤密碼', async () => { await page.fill('#pinInput', '1111'); await click('#pinOk'); const m = await text('#pinMsg');
    return { ok: m === '密碼不對喔', detail: m }; });
  await S('P03', '輸入正確密碼 → 家長設定', async () => { await page.fill('#pinInput', PIN); await click('#pinOk'); const a = await isVisible('#tab-parent');
    return { ok: a, detail: 'parent=' + a }; });
  await S('P04', '待確認考卷：已簽名，入帳', async () => {
    const a = await isVisible('#reviewBox'); const n0 = await ev(() => S.exams.length);
    await click('#reviewList [data-ok]'); const b = await isVisible('#reviewBox'); const n1 = await ev(() => S.exams.length);
    return { ok: a && !b && n1 === n0 + 1, detail: `box=${a} after=${!b} exams+1=${n1 === n0 + 1}` };
  });
  await S('P05', '小狗名字', async () => { await fill('#setName', '小橘'); await ev(() => renderAll()); const v = await page.inputValue('#setName'); return { ok: v === '小橘', detail: v }; });
  await S('P06', '集點規則', async () => { await fill('#setThreshold', 50); await fill('#setPer', 1); await fill('#setCost', 1); await ev(() => renderAll());
    const v = [await page.inputValue('#setThreshold'), await page.inputValue('#setPer'), await page.inputValue('#setCost')].join('/');
    return { ok: v === '50/1/1', detail: v }; });
  await S('P07', '遊戲難度報告：自動調難度、報告表', async () => { await reveal('#setAuto'); const c0 = await page.isChecked('#setAuto'); await click('#setAuto'); const c1 = await page.isChecked('#setAuto');
    await click('#setAuto'); const rows = await count('#lvReport tr'); return { ok: c0 !== c1 && rows > 0, detail: `toggle=${c0 !== c1} rows>0=${rows > 0}` }; });
  await S('P08', '測試關卡：直接玩、回家', async () => {
    await click('#tGo'); await page.waitForTimeout(400); const badge = await isVisible('#testBadge');
    const sc = await ev(() => [...document.querySelectorAll('.scene')].filter(s => !s.hidden).map(s => s.id).join(','));
    const home = await ev(() => { const s = [...document.querySelectorAll('.scene')].find(s => !s.hidden && s.id !== 'mapScene'); return s ? '#' + s.querySelector('.hud .round-btn').id : null });
    if (home) await click(home); await page.waitForTimeout(200);
    const left = await ev(() => [...document.querySelectorAll('.scene')].filter(s => !s.hidden).length);
    await ensureParent();
    return { ok: badge && !!home && left === 0, detail: `badge=${badge} scene=${sc} back=${left === 0}` };
  });
  await S('P09', '科目：新增', async () => { const n0 = await count('#subjList li'); await fill('#subjName', '美勞'); await click('#subjAdd'); const n1 = await count('#subjList li');
    return { ok: n1 === n0 + 1, detail: `+${n1 - n0}` }; });
  await S('P10', '作息：小睡、就寢、遊玩上限、多給 10 分鐘', async () => {
    await reveal('#setNap'); await page.selectOption('#setNap', '1'); await click('#bedOn'); await click('#quotaOn'); await click('#quotaMore');
    const q = await text('#quotaLine'); await click('#bedOn'); await click('#quotaOn');
    return { ok: !!q, detail: 'quotaLine=' + (q ? '有' : '空') }; });
  await S('P11', '音效：開關、發音選單、試聽', async () => { await click('#setSound'); await click('#setSound'); await click('#setKidVoice'); await click('#setKidVoice');
    await click('#voiceTest'); return { detail: '' }; });
  await S('P12', '備份：下載備份檔', async () => { await reveal('#bkSave'); const [d] = await Promise.all([page.waitForEvent('download', { timeout: 4000 }), page.click('#bkSave')]);
    let j = null; try { j = JSON.parse(fs.readFileSync(await d.path(), 'utf8')); } catch (e) {}
    const ok = !!(j && j.app === 'dog-home' && j.state && Array.isArray(j.state.prizes)); return { ok, detail: '備份內容正確=' + ok }; });
  await S('P13', '遊戲開發清單：打開、關閉', async () => { await click('#devOpen'); const a = await isVisible('#devModal'); const n = await count('#devList li, #devList .dev-item');
    await click('#devClose'); const b = await isVisible('#devModal'); return { ok: a && !b && n > 0, detail: `open=${a} items>0=${n > 0} closed=${!b}` }; });
  await S('P14', '家長密碼：更改', async () => { await fill('#pinNew', PIN); await click('#pinSave'); const v = await ev(() => String(S.settings.pin));
    return { ok: v === PIN, detail: 'pin 已存' }; });
  const nImg = photoListing().filter(f => IMG_RE.test(f.name)).length;
  await S('P15', '實體照片：重新整理清單（1.h 要被濾掉）', async () => {
    await click('#photoRescan'); await page.waitForFunction(() => photoState !== 'loading', null, { timeout: 5000 });
    const st = await ev(() => photoState), n = await count('#photoGrid figure');
    return { ok: st === 'ok' && n === nImg, detail: `state=${st} 照片=${n}/${nImg}` }; });
  await S('P16', '用照片批次新增：全選 → 取名字 → 新增', async () => {
    const p0 = await count('#prizeList > li');
    await click('#bpOpen'); await page.waitForFunction(() => photoState !== 'loading', null, { timeout: 5000 }); await page.waitForTimeout(150);
    const a = await isVisible('#bpModal'), g = await count('#bpGrid .bp-ph');
    await click('#bpAllNew'); const nextOn = await ev(() => !document.getElementById('bpNext').disabled);
    await click('#bpNext'); const s2 = await isVisible('#bpStep2'), rows = await count('#bpList li');
    await click('#bpAdd'); const closed = !(await isVisible('#bpModal')); const p1 = await count('#prizeList > li');
    const withPhoto = await ev(() => S.prizes.filter(p => p.photo).length);
    return { ok: a && g === nImg && nextOn && s2 && rows === nImg && closed && p1 - p0 === nImg && withPhoto === nImg,
      detail: `modal=${a} 格子=${g} 下一步=${nextOn} 名單=${rows} 新增=${p1 - p0} 有照片=${withPhoto}` }; });
  await S('P17', '手動新增獎品＋幫它選照片', async () => {
    await fill('#pzName', '測試獎品'); await fill('#pzQty', 2); await click('#pzAdd');
    const id = await ev(() => { const p = S.prizes.find(x => x.name === '測試獎品'); return p && p.id });
    if (!id) return { ok: false, detail: '沒有新增' };
    await click(`#prizeList .pz-pick[data-pz-pick="${id}"]`); const a = await isVisible('#picker'); const n = await count('#pickGrid .pick');
    await click('#pickGrid .pick'); const ph = await ev(i => S.prizes.find(x => x.id === i).photo, id);
    return { ok: a && n === nImg && !!ph, detail: `picker=${a} 照片=${n} 已設定=${!!ph}` }; });
  await S('P18', '獎品數量 ＋／−、批次刪除開關', async () => {
    const id = await ev(() => S.prizes.find(x => x.name === '測試獎品').id);
    await click(`#prizeList [data-pz-inc="${id}"]`); const l = await ev(i => S.prizes.find(x => x.id === i).left, id);
    await click('#bdToggle'); const bar = await isVisible('#bdBar'); await click('#bdCancel'); const bar2 = await isVisible('#bdBar');
    return { ok: l === 3 && bar && !bar2, detail: `數量=${l} 批次刪除=${bar}/${!bar2}` }; });
  await S('P19', '扭蛋實體大獎：保底與機率', async () => { await fill('#setPity', 10); await fill('#setRate', 20); const t = await text('#pityLine');
    return { ok: !!t, detail: 'pityLine=' + (t ? '有' : '空') }; });
  await S('P20', '升級獎勵：新增', async () => { const n0 = await count('#rewardList li'); await fill('#rwLv', 3); await fill('#rwName', '吊飾'); await click('#rwAdd');
    const n1 = await count('#rewardList li'); return { ok: n1 === n0 + 1, detail: `+${n1 - n0}` }; });
  await S('P21', '家庭代碼區塊（測試版不連 Firebase）', async () => { await reveal('#famCode'); const t = await text('#famCode');
    const shown = t && t !== '尚未連結' ? t.slice(0, 2) + '****' : t; return { ok: await isVisible('#famCode'), detail: shown }; });
  await S('P22', '活動紀錄有內容', async () => { await reveal('#logList'); const n = await count('#logList li'); return { ok: n > 0, detail: 'log>0=' + (n > 0) }; });
  await S('P23', '這台裝置名字', async () => { await fill('#setDevice', '測試平板'); await ev(() => renderAll()); const v = await page.inputValue('#setDevice'); return { ok: v === '測試平板', detail: v }; });
  await S('P24', '重新開始（確認後清空考卷）', async () => { await click('#resetAll'); await page.waitForTimeout(200); await ensureParent(); await reveal('#examList');
    const n = await ev(() => S.exams.length); return { ok: n === 0, detail: 'exams=' + n }; });
  await S('P25', '關閉家長設定', async () => { await ensureParent(); await click('#parentClose'); const b = await isVisible('#tab-parent'); return { ok: !b, detail: 'closed=' + !b }; });

  // ===== 全域 =====
  await S('Z01', '沒有連到 Firebase／Firestore', async () => { const fb = [...hosts].filter(h => /firestore|firebase|gstatic/.test(h));
    return { ok: fb.length === 0, detail: fb.length ? fb.join(',') : '無' }; });

  // ===== extra：只有新版才有的檢查（分頁） =====
  const tabs = await count('[data-ptab]');
  if (tabs) {
    await X('T01', '家長設定分頁：每個分頁都能切換、一次只顯示一頁', async () => {
      await ensureParent(); const ids = await ev(() => [...document.querySelectorAll('[data-ptab]')].map(b => b.dataset.ptab)); const bad = [];
      for (const t of ids) { await click(`[data-ptab="${t}"]`);
        const r = await ev(t => ({ shown: [...document.querySelectorAll('[data-pane]')].filter(p => !p.hidden).map(p => p.dataset.pane),
          sel: document.querySelector(`[data-ptab="${t}"]`).getAttribute('aria-selected') }), t);
        if (r.shown.length !== 1 || r.shown[0] !== t || r.sel !== 'true') bad.push(t); }
      return { ok: bad.length === 0, detail: `分頁=${ids.join(',')}${bad.length ? ' 有問題:' + bad : ''}` }; });
    await X('T02', '每個設定區塊都屬於某個分頁（沒有遺漏）', async () => {
      const orphan = await ev(() => [...document.querySelectorAll('#tab-parent h3')].filter(h => !h.closest('[data-pane]') && !h.closest('#reviewBox')).map(h => h.textContent.trim()));
      return { ok: orphan.length === 0, detail: orphan.length ? '沒歸類:' + orphan.join('、') : '全部歸類' }; });
    await X('T03', '重新打開家長設定會回到上次的分頁', async () => {
      const ids = await ev(() => [...document.querySelectorAll('[data-ptab]')].map(b => b.dataset.ptab)); const last = ids[ids.length - 1];
      await click(`[data-ptab="${last}"]`); await click('#parentClose'); await ensureParent();
      const cur = await ev(() => { const b = document.querySelector('[data-ptab][aria-selected="true"]'); return b && b.dataset.ptab });
      await click('#parentClose'); return { ok: cur === last, detail: `上次=${last} 打開=${cur}` }; });
    await X('T04', '待確認考卷固定在分頁上方（不用切分頁就看得到）', async () => {
      const r = await ev(() => { const box = document.getElementById('reviewBox'); return { inPane: !!box.closest('[data-pane]') } });
      return { ok: !r.inPane, detail: 'inPane=' + r.inPane }; });
  }
  await X('X01', '照片清單讀取失敗時，批次新增視窗顯示原因（不是只寫 0 張）', async () => {
    await page.unroute('**/*'); await page.route('**/*', r => r.request().url().startsWith(API) ? r.abort() : r.continue());
    await ensureParent(); await click('#bpOpen'); await click('#bpReload'); await page.waitForFunction(() => photoState !== 'loading', null, { timeout: 5000 }); await page.waitForTimeout(150);
    const info = await text('#bpInfo'); await click('#bpClose');
    return { ok: !!info && /連不上|失敗|GitHub/.test(info), detail: info }; });

  await X('X02', '圖書館：看過的書排到下面，沒看過的在上面', async () => {
    if (await isVisible('#tab-parent')) await click('#parentClose');
    const ids = await ev(() => STORIES.map(b => b.id));
    await ev(ids => { S.books = {}; S.books[ids[0]] = 2; S.books[ids[1]] = 1; save(); }, ids);
    await ev(() => startLibrary()); await page.waitForTimeout(200);
    const order = await ev(() => [...document.querySelectorAll('#bookShelf .book')].map(b => b.dataset.b));
    const want = ids.slice(2).concat(ids.slice(0, 2));
    await click('#libHome');
    const ok = JSON.stringify(order) === JSON.stringify(want);
    return { ok, detail: `最上面=${order[0]} 最下面=${order.slice(-2).join(',')}（看過的是 ${ids[0]},${ids[1]}）` };
  });

  // 美術總覽：同版號的 gallery；沒有的話用最新的 gallery，並帶上同樣的 art／content 版本
  const [tFile, tQuery = ''] = target.split('?');
  let gallery = tFile.replace(/index(_beta_V[\w.-]+)?\.html$/, (m, s) => 'gallery' + (s || '') + '.html');
  if (!fs.existsSync(path.join(ROOT, gallery))) {
    const dir = path.dirname(tFile), n = (tFile.match(/_beta_V(\d+)/) || [])[1];
    const g = fs.readdirSync(path.join(ROOT, dir)).map(f => +(f.match(/^gallery_beta_V(\d+)\.html$/) || [])[1]).filter(Boolean).sort((a, b) => a - b).pop();
    const q = new URLSearchParams(tQuery); if (n) { if (!q.has('art')) q.set('art', 'V' + n); if (!q.has('content')) q.set('content', 'V' + n); }
    gallery = path.join(dir, `gallery_beta_V${g}.html`) + '?' + q.toString();
  } else if (tQuery) gallery += '?' + tQuery;
  await browser.close();
  // ===== G 美術總覽頁（另開瀏覽器）=====
  const g = await runGallery(gallery);
  steps.push(g);
  return { target, at: new Date().toISOString(), steps, extra, pageErrors, dialogs };
}

async function runGallery(file) {
  const browser = await chromium.launch(); const page = await browser.newPage(); const errs = [];
  page.on('pageerror', e => errs.push(String(e.message || e)));
  await page.route('**/*', r => { const u = r.request().url(); if (!u.startsWith(SITE)) return r.abort();
    const f = path.join(ROOT, decodeURIComponent(u.slice(SITE.length).split(/[?#]/)[0]));
    return fs.existsSync(f) ? r.fulfill({ status: 200, contentType: MIME[path.extname(f).toLowerCase()] || 'text/plain', body: fs.readFileSync(f) }) : r.fulfill({ status: 404, body: '' }); });
  let ok = false, detail = '';
  try { await page.goto(SITE + file, { waitUntil: 'load' }); await page.waitForTimeout(500);
    const r = await page.evaluate(() => ({ ver: (document.getElementById('ver') || {}).textContent || '', err: !!document.querySelector('.err-box'), n: document.getElementById('root').children.length }));
    ok = !r.err && r.n > 0 && errs.length === 0; detail = `內容區塊>0=${r.n > 0} 錯誤框=${r.err}${errs.length ? ' JS錯誤:' + errs.join('/').slice(0, 120) : ''}`;
  } catch (e) { detail = 'EXCEPTION ' + e.message.split('\n')[0]; }
  await browser.close();
  return { id: 'G01', name: '美術總覽頁開啟（' + file.split('/').pop().split('?')[0] + '）', ok, detail };
}

function table(r) {
  const line = s => `${s.ok ? 'PASS' : 'FAIL'}  ${s.id}  ${s.name}${s.detail ? '　— ' + s.detail : ''}`;
  return [`== ${r.target}`, ...r.steps.map(line), ...(r.extra.length ? ['-- 新版才有的檢查', ...r.extra.map(line)] : []),
    `合計：${r.steps.filter(s => s.ok).length}/${r.steps.length} 通過` + (r.extra.length ? `；新增檢查 ${r.extra.filter(s => s.ok).length}/${r.extra.length}` : '')].join('\n');
}

function compare(a, b) {
  const A = JSON.parse(fs.readFileSync(a, 'utf8')), B = JSON.parse(fs.readFileSync(b, 'utf8'));
  const norm = s => s.detail.replace(/（[^）]*\.html）/g, '');
  const ids = [...new Set([...A.steps, ...B.steps].map(s => s.id))]; const diff = [];
  for (const id of ids) {
    const x = A.steps.find(s => s.id === id), y = B.steps.find(s => s.id === id);
    if (!x || !y || x.ok !== y.ok || norm(x) !== norm(y)) diff.push(`${id}: ${x ? (x.ok ? 'PASS' : 'FAIL') + ' ' + x.detail : '（沒有）'}  →  ${y ? (y.ok ? 'PASS' : 'FAIL') + ' ' + y.detail : '（沒有）'}`);
  }
  console.log(`比對 ${path.basename(a)} → ${path.basename(b)}：共 ${ids.length} 步，` + (diff.length ? `${diff.length} 步不一樣：\n` + diff.join('\n') : '每一步結果都一樣'));
  return diff.length;
}

(async () => {
  const args = process.argv.slice(2);
  if (args[0] === '--compare') process.exit(compare(args[1], args[2]) ? 1 : 0);
  const target = args[0] || 'beta/index_beta_V2.html';
  const r = await runSuite(target);
  const out = path.join(__dirname, 'results'); fs.mkdirSync(out, { recursive: true });
  const f = path.join(out, path.basename(target.split('?')[0]).replace(/\.html$/, '') + (process.env.SITE ? '@preview' : '') + '.json');
  fs.writeFileSync(f, JSON.stringify(r, null, 1));
  console.log(table(r)); console.log('結果檔：' + path.relative(ROOT, f));
  process.exit(r.steps.every(s => s.ok) ? 0 : 1);
})().catch(e => { console.error('測試程式本身出錯：', e); process.exit(2); });
