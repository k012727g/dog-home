/* 小狗的家｜開工檢查（每次開始工作、每次結束工作都要跑）
 *
 *   node tools/status.js          檢查並列出所有沒跟上的地方（有問題 exit 1）
 *   node tools/status.js --fix    依 beta/ 和正式版的實際檔案，重寫 versions.json
 *
 * 檢查項目：
 *   1. 版本：beta/ 裡每一種檔案的最新版號、正式版實際是哪一版（逐位元比對）、versions.json 有沒有跟上
 *   2. 開發筆記：正式版 index.html 的 DEV_VERSION 是不是正式版的版號；最新測試版最後一次更新之後，還有沒有沒寫進 DEV_LOG 的 commit
 *   2b. 網頁與繪本稿：beta/ 裡所有網頁、每本書最新的故事稿（寫進 versions.json，beta/latest.html 會自動列出）；
 *       繪本稿預覽頁 story_preview.html 的書單有沒有指到最新稿
 *   3. 任務：DEV_TASKS 各狀態數量、等 Kevin 決定的任務
 *   4. git：main 有沒有新 commit、還沒合併的分支、還沒 commit 的改動
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const BETA = path.join(ROOT, 'beta');
const sh = c => { try { return execSync(c, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch (e) { return ''; } };
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const KINDS = { index: /^index_beta_V(\d+)\.html$/, art: /^art_beta_V(\d+)\.js$/, content: /^content_beta_V(\d+)\.js$/, gallery: /^gallery_beta_V(\d+)\.html$/ };
const PROD = { index: 'index.html', art: 'art.js', content: 'content.js', gallery: 'gallery.html' };
const BETA_NAME = { index: n => `index_beta_V${n}.html`, art: n => `art_beta_V${n}.js`, content: n => `content_beta_V${n}.js`, gallery: n => `gallery_beta_V${n}.html` };

const issues = [], notes = [];
const bad = s => issues.push(s), ok = s => notes.push('✓ ' + s);

// ---------- 1. 版本 ----------
const files = fs.readdirSync(BETA);
const versions = {}, latest = {}, production = {};
for (const [k, re] of Object.entries(KINDS)) {
  versions[k] = files.map(f => (f.match(re) || [])[1]).filter(Boolean).map(Number).sort((a, b) => a - b);
  latest[k] = versions[k][versions[k].length - 1] || null;
  const prod = fs.readFileSync(path.join(ROOT, PROD[k]));
  const same = versions[k].filter(n => prod.equals(fs.readFileSync(path.join(BETA, BETA_NAME[k](n)))));
  production[k] = same.length ? same[same.length - 1] : null;
  if (production[k] === null) bad(`正式版 ${PROD[k]} 和 beta/ 裡任何一版都不一樣（是不是直接改了正式版、沒留測試檔？）`);
}
const next = { index: latest.index + 1, art: latest.art + 1, content: latest.content + 1 };

// ---------- 1b. 網頁與繪本稿（給 beta/latest.html 自動列出） ----------
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const pages = walk(BETA).map(f => path.relative(BETA, f).split(path.sep).join('/'))
  .filter(f => f.endsWith('.html') && !/^(index|gallery)_beta_V\d+\.html$/.test(f) && f !== 'latest.html').sort()
  .map(f => {
    const t = ((fs.readFileSync(path.join(BETA, f), 'utf8').match(/<title>([^<]*)/) || [])[1] || f).replace(/^小狗的家\s*[｜|:：]?\s*/, '').trim();
    return { path: f, title: t, group: /^story\//.test(f) || /繪本|故事/.test(t) ? 'story' : /^design\//.test(f) ? 'design' : 'tool' };
  });
const storyDir = path.join(BETA, 'story'), drafts = {};
if (fs.existsSync(storyDir)) for (const f of fs.readdirSync(storyDir)) {
  const m = f.match(/^([a-z0-9]+)_V(\d+)\.md$/); if (m && (!drafts[m[1]] || +m[2] > drafts[m[1]])) drafts[m[1]] = +m[2];
}
let books = [];
const previewFile = path.join(storyDir, 'story_preview.html');
if (fs.existsSync(previewFile)) {
  books = [...fs.readFileSync(previewFile, 'utf8').matchAll(/\{id:'([a-z0-9]+)',zh:'([^']+)'(?:,file:'([^']+)')?\}/g)].map(m => ({ id: m[1], zh: m[2], file: m[3] || '' }));
  let n = 0;
  for (const [id, v] of Object.entries(drafts)) {
    const b = books.find(x => x.id === id), want = `${id}_V${v}.md`;
    if (!b) bad(`繪本稿 ${want} 不在 story_preview.html 的書單裡（請繪本對話加上）`);
    else if (b.file !== want) bad(`story_preview.html 的書單：${id} 指到 ${b.file || '（沒有）'}，最新稿是 ${want}（請繪本對話更新）`);
    else n++;
  }
  if (n && n === Object.keys(drafts).length) ok(`繪本稿預覽的書單都指到最新稿（${n} 本）`);
}
const stories = Object.entries(drafts).sort().map(([id, v]) => ({ id, zh: (books.find(b => b.id === id) || {}).zh || id, v }));
const maxLe = (list, n) => list.filter(x => x <= n).pop() || null;
const indexes = versions.index.map(v => ({ v, art: maxLe(versions.art, v), content: maxLe(versions.content, v) }));
// 特別測試美術／繪本：檔名不是數字版號（例如 art_beta_dragon.js），用 ?art=名稱 測
const extras = files.map(f => f.match(/^(art|content)_beta_([A-Za-z][\w-]*)\.js$/)).filter(m => m && !/^V\d+$/.test(m[2])).map(m => ({ kind: m[1], name: m[2] }));
const want = { production, latest, next, indexes, pages, stories, extras };

let vj = null;
try { vj = JSON.parse(read('versions.json')); } catch (e) { bad('versions.json 不存在或格式錯誤（跑 node tools/status.js --fix）'); }
const stale = vj && Object.keys(want).some(g => JSON.stringify(vj[g]) !== JSON.stringify(want[g]));
if (process.argv.includes('--fix')) {
  const out = {
    '說明': '小狗的家的版本總表。由 node tools/status.js --fix 依實際檔案產生，不要手改。各種檔案的版號各自往上加；測試網址用 ?art=V?&content=V? 組合。最新測試版看 beta/latest.html。',
    updated: new Date().toISOString().slice(0, 10),
    ...want,
  };
  fs.writeFileSync(path.join(ROOT, 'versions.json'), JSON.stringify(out, null, 1) + '\n');
  ok('已重寫 versions.json');
} else if (stale) bad('versions.json 沒跟上實際檔案（跑 node tools/status.js --fix）');
else if (vj) ok('versions.json 和實際檔案一致');

const testURL = `beta/${BETA_NAME.index(latest.index)}` +
  ((latest.art !== latest.index || latest.content !== latest.index) ? `?art=V${latest.art}&content=V${latest.content}` : '');

// ---------- 2. 開發筆記 ----------
function devInfo(file) {
  const s = read(file);
  const ver = (s.match(/const DEV_VERSION='([^']+)'/) || [])[1] || '';
  const logStart = s.indexOf('const DEV_LOG=[');
  const logEnd = s.indexOf('\n];', logStart);
  const dates = [...s.slice(logStart, logEnd).matchAll(/\{date:'(\d{4}-\d{2}-\d{2})'/g)].map(m => m[1]).sort();
  const tStart = s.indexOf('const DEV_TASKS=[');
  const tEnd = s.indexOf('\n];', tStart);
  const tasks = [...s.slice(tStart, tEnd).matchAll(/\{id:'([^']+)',phase:'([^']+)',status:'([^']+)',title:'([^']+)'(?:,note:'([^']*)')?/g)]
    .map(m => ({ id: m[1], phase: m[2], status: m[3], title: m[4], note: m[5] || '' }));
  return { ver, lastLog: dates[dates.length - 1] || '', tasks };
}
const prodDev = devInfo('index.html');
const betaDev = devInfo('beta/' + BETA_NAME.index(latest.index));
if (production.index !== null && !new RegExp(`\\bV${production.index}\\b`).test(prodDev.ver))
  bad(`正式版的 DEV_VERSION 寫「${prodDev.ver.split('·').slice(0, 2).join('·').trim()}」，但正式版是 V${production.index}`);
else ok(`正式版 DEV_VERSION：${prodDev.ver.split('·').slice(0, 2).join('·').trim()}`);
// 最新測試版的 index 最後一次被改（也就是 DEV_LOG 最後一次能被更新）之後的 commit，都還沒寫進 DEV_LOG
const latestIdx = 'beta/' + BETA_NAME.index(latest.index);
const base = sh(`git log -1 --format=%H -- ${latestIdx}`);
const after = base ? sh(`git log ${base}..HEAD --format="%h %ad %s" --date=short`) : '';
if (after) bad(`${latestIdx} 最後一次更新（DEV_LOG 最新 ${betaDev.lastLog}）之後，這些 commit 還沒寫進 DEV_LOG：\n      ` + after.split('\n').join('\n      '));
else ok(`DEV_LOG 最新一筆 ${betaDev.lastLog}，之後沒有沒記錄的 commit`);

// ---------- 3. 任務 ----------
const by = {}; betaDev.tasks.forEach(t => { by[t.status] = (by[t.status] || 0) + 1; });
const wait = betaDev.tasks.filter(t => t.status !== 'done' && /Kevin/.test(t.title + t.note));

// ---------- 4. git ----------
const head = sh('git rev-parse --short HEAD'), main = sh('git rev-parse --short origin/main');
if (main && head !== main && !sh('git merge-base --is-ancestor origin/main HEAD && echo y')) bad(`main（${main}）有新的 commit，目前在 ${head}：先 git merge --ff-only origin/main`);
const unmerged = sh('git branch -r --no-merged origin/main').split('\n').map(s => s.trim()).filter(Boolean);
if (unmerged.length) bad('還沒合併到 main 的分支：' + unmerged.join('、'));
const dirty = sh('git status --short');

// ---------- 輸出 ----------
const pad = (s, n) => (s + '        ').slice(0, n);
console.log('== 版本（beta/ 實際檔案）');
console.log(`   ${pad('種類', 8)}${pad('正式版', 8)}${pad('最新測試', 10)}下一版`);
for (const k of Object.keys(KINDS)) console.log(`   ${pad(k, 8)}${pad(production[k] ? 'V' + production[k] : '?', 8)}${pad('V' + latest[k], 10)}${next[k] ? 'V' + next[k] : '（不用跟版本，用 ?art= 參數）'}`);
console.log(`   最新測試網址：https://k012727g.github.io/dog-home/${testURL}`);
console.log('   固定網址（永遠指到最新）：https://k012727g.github.io/dog-home/beta/latest.html');
console.log(`\n== 任務（最新測試版的 DEV_TASKS）\n   完成 ${by.done || 0}、進行中 ${by.doing || 0}、待做 ${by.todo || 0}、想法 ${by.idea || 0}`);
if (wait.length) console.log('   等 Kevin 決定：\n' + wait.map(t => `     ${t.id} ${t.title}${t.note ? '（' + t.note + '）' : ''}`).join('\n'));
console.log('\n== 檢查結果');
notes.forEach(s => console.log('   ' + s));
issues.forEach(s => console.log('   ✗ ' + s));
if (dirty) console.log('   ・還沒 commit 的改動：\n      ' + dirty.split('\n').join('\n      '));
console.log(issues.length ? `\n有 ${issues.length} 件要處理。` : '\n全部跟上了。');
process.exit(issues.length ? 1 : 0);
