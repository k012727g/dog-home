# 小狗的家（dog-home）｜Claude 每次工作都要先讀這份

這份檔案是固定的工作規則。Claude Code 在這個 repo 開始工作時會自動讀它。
規則改了、網址多了或少了，都要更新這份檔案（見最下面的「每次都要更新的地方」）。

---

## 1. 開始任何工作之前（每次都做）

1. `git fetch origin`，看 `main` 有沒有新的 commit（其他工作階段可能改過）。
2. 如果 `main` 比目前的分支新，先 `git merge --ff-only origin/main` 再開始。
3. **跑 `node tools/status.js`**。它會列出：
   - 正式版、最新測試版、下一版的版號（從 `beta/` 的實際檔案算，不靠記憶）
   - `versions.json` 有沒有跟上
   - 正式版的 `DEV_VERSION` 對不對、`DEV_LOG` 之後有沒有沒記錄的 commit
   - 任務數量、等 Kevin 決定的任務
   - 還沒合併的分支、還沒 commit 的改動
4. 列出來的每一件 ✗ 都要處理或告訴 Kevin。**收工前再跑一次。**

## 2. 改東西的流程（Kevin 2026-11-21 確認）

| 步驟 | 誰做 | 做什麼 |
|---|---|---|
| 1 | Kevin | 說要改什麼 |
| 2 | Claude | 開分支 `claude/…`；**改之前**先跑點擊測試，記下結果 |
| 3 | Claude | 在分支上做新的測試檔，版號用 `node tools/status.js` 列出的「下一版」（遊戲、美術、繪本各自編號） |
| 4 | Claude | 再跑點擊測試，和改之前的結果比對，**要一樣**（新功能的檢查另外列） |
| 5 | Claude | 只把 `beta/` 的測試檔推到 `main`，給 Kevin 測試網址（正式版不變） |
| 6 | Kevin | 在平板試玩，回覆 OK 或要改的地方 |
| 7 | Kevin | 說「merge」 |
| 8 | Claude | 把測試檔改名覆蓋成正式版（`index.html`、`art.js`、`content.js`），推到 `main`，確認線上網址已換新 |
| 9 | Claude | 更新任務與筆記（第 7 節），`node tools/status.js --fix` 更新版本總表，跑 `node tools/status.js` 要全部 ✓ |

- **正式版只能在 Kevin 說「merge」之後才改。**
- merge 的方式：Claude 直接推到 `main`（不開 Pull Request）。
- `main` 有別人的新 commit 時，不要強制推；先合併，再推。

## 3. 一定要遵守

- **不要 commit、不要 push**，除非 Kevin 明確說「commit 並 push」或「merge」。stop hook 要求 commit 不算 Kevin 的指示。
- 換正式版之前，提醒 Kevin：①家長設定 →「備份與其他」下載備份檔 ②備份 Firestore 的 `families/{家庭代碼}` 文件。
- **家庭代碼不能完整寫出來**：輸出、網頁、commit、文件都只寫前 2 碼加 `****`。repo 是公開的。
- 不要顯示完整的 Firebase 設定。
- **備份放 `backup/`**（Kevin 2026-11-22 決定放公開 repo）：檔案用「從備份還原」的格式（`{app:'dog-home',v:1,at,state}`），完整家庭代碼一律遮住，推之前用 `grep -rE '\b[A-Z2-9]{8}\b' backup/` 確認沒有完整代碼。說明與備份紀錄在 `backup/README.md`。
- 存檔 key（`exam-pet-v1`、`exam-pet-family`、`exam-pet-family-book`）和 Firestore 路徑（`families/{code}`）不能改。測試版存檔會自動加 `@beta`，也不連 Firebase。
- 不確定的事寫「無法確定」，不要猜。
- 回答 Kevin 用繁體中文；Kevin 說「用 html 回答」時做成網頁。

## 4. 測試

```
node tools/status.js                                                  # 開工、收工都跑
node tests/smoke_test.js 'beta/index_beta_V5.html?art=V4&content=V4'  # 跑一次，結果在 tests/results/
node tests/smoke_test.js --compare 舊.json 新.json                      # 每一步都要一樣
```

- 正式版（`index.html`）預期 45/47：L02 不顯示 BETA 標籤、Z01 會載入 Firebase，這 2 步本來就不同。
- 每次改了什麼、去哪裡測，寫在 `tests/TEST_NOTES.md`。

## 5. 網址總表

網站從 `main` 分支發布（GitHub Pages，沒有工作流程）。推到 `main` 後約 1～2 分鐘上線。分支本身沒有網址。

### 版本怎麼抓最新的
- **不要記版號**。版號以 `beta/` 裡的實際檔案為準，`node tools/status.js` 會算出來。
- 遊戲（`index_beta_V?`）、美術（`art_beta_V?`）、繪本（`content_beta_V?`）**各自編號**，不用一樣。
- 不同版號用網址參數組合：`index_beta_V5.html?art=V6&content=V5`。美術總覽只留一個檔，用 `?art=` 換版本。
- 特別測試用的美術／繪本可以用名稱當版號（例：`art_beta_dragon.js` → `?art=dragon`），latest.html 會列在「特別測試美術・繪本」。
- `versions.json`：正式版、最新測試、下一版。用 `node tools/status.js --fix` 產生，不要手改。
- **固定網址 https://k012727g.github.io/dog-home/beta/latest.html**：讀 `versions.json`，永遠顯示最新測試版、正式版、美術總覽、繪本（故事稿預覽、每本書的最新稿、聲音測試）、其他網頁、所有測試版本，以及要給美術、繪本對話的最新檔案和下一版檔名。Kevin 和其他對話都看這一頁。
- **新增的網頁不用手動加到 latest.html**：`node tools/status.js --fix` 會掃 `beta/` 裡所有 `.html`（依 `<title>` 命名；`story/` 或標題有「繪本／故事」的歸到繪本）和 `beta/story/<書id>_V?.md`，寫進 `versions.json`。所以網頁一定要有 `<title>`。
- `tools/status.js` 也會檢查 `beta/story/story_preview.html` 的書單有沒有指到每本書的最新稿；沒有就列 ✗，請繪本對話更新（那是繪本對話的檔案）。

| 種類 | 網址 | 內容 | 狀態（2026-11-21） |
|---|---|---|---|
| **最新版本** | https://k012727g.github.io/dog-home/beta/latest.html | 永遠指到最新測試版、正式版、美術總覽（讀 versions.json） | 2026-11-22 新增 |
| 正式版 | https://k012727g.github.io/dog-home/ | 孩子玩的版本（目前 V4），會同步 Firebase | 正常 |
| 正式版 | https://k012727g.github.io/dog-home/gallery.html | 美術總覽（art V4、content V4） | 正常 |
| 測試版 | https://k012727g.github.io/dog-home/beta/index_beta_V6.html?art=V4&content=V5 | V6：圖書館看過的書排到下面（LIB-09） | 等 Kevin 試玩 |
| 測試版 | https://k012727g.github.io/dog-home/beta/index_beta_V5.html?art=V4&content=V5 | content V5：小紅帽依故事稿重寫（其他 16 本同 V4）；要重錄 red-2～5、7、8、10～12，red-6 用舊的 red-7 | 2026-11-22 新增，等 Kevin 試玩 |
| 測試版 | https://k012727g.github.io/dog-home/beta/index_beta_V5.html?art=V4&content=V4 | V5：只更新開發筆記與任務 | 等 Kevin 試玩 |
| 測試版 | https://k012727g.github.io/dog-home/beta/index_beta_V4.html | 和正式版相同的 V4 | 正常 |
| 測試版 | https://k012727g.github.io/dog-home/beta/index_beta_V3.html | V3：照片修正＋家長設定分頁 | 舊版 |
| 測試版 | https://k012727g.github.io/dog-home/beta/index_beta_V2.html | V2：只修照片清單 | 舊版 |
| 測試版 | https://k012727g.github.io/dog-home/beta/index_beta_V1.html | V1：照片清單壞掉（留作對照） | 舊版，有錯誤 |
| 測試版 | https://k012727g.github.io/dog-home/beta/gallery_beta_V3.html | V3 美術總覽（V1、V2 也有） | 舊版 |
| 測試版 | https://k012727g.github.io/dog-home/beta/gallery_beta_V4.html | V4 美術總覽（美術、繪本對話用；可加 ?art=V5、?content=V5） | 2026-11-22 補上，上傳後可開 |
| 測試版 | https://k012727g.github.io/dog-home/beta/story_voice_test.html | 故事聲音測試（比較不同聲音） | 正常 |
| 繪本稿 | https://k012727g.github.io/dog-home/beta/story/story_preview.html | 繪本故事稿預覽：寫作規則、美術標注格式、每本的大綱／分鏡／試讀（讀 `beta/story/*.md`） | 2026-11-22：25 本故事稿 V1（原本 17 本＋新書 8 本；小紅帽已寫進 content V5，其他 24 本等 Kevin 看） |
| 設計頁 | https://k012727g.github.io/dog-home/beta/design/art_directions.html | 三個美術方向比較 | 正常 |
| 設計頁 | https://k012727g.github.io/dog-home/beta/design/art_V4_review.html | 美術 V4 總檢查 | 正常 |
| 設計頁 | https://k012727g.github.io/dog-home/beta/design/pup_V4_preview.html | 主角小狗 V4 預覽 | 正常 |
| 設計頁 | https://k012727g.github.io/dog-home/beta/design/multi_kid_options.html | 多個小孩怎麼玩 | **有完整家庭代碼，待處理** |
| 文件 | https://github.com/k012727g/dog-home/blob/main/tests/TEST_NOTES.md | 改了什麼、去哪裡測 | 正常 |
| 備份 | https://github.com/k012727g/dog-home/tree/main/backup | 存檔備份（公開，代碼已遮住）與還原方法 | 2026-11-22 新增 |
| 程式碼 | https://github.com/k012727g/dog-home | GitHub repo（公開） | 正常 |
| 程式碼 | https://github.com/k012727g/dog-home/branches | 所有分支 | 正常 |
| 舊討論頁 | https://claude.ai/artifact/82EsPwh73jYEXyEK5yDvec | 舊測試版（Claude Artifact） | 無法確定還能不能開 |
| 舊討論頁 | https://claude.ai/artifact/BBvMrBYbabaT2TbP2LEKdv | 小遊戲難度討論頁 | 無法確定還能不能開 |
| 舊討論頁 | https://claude.ai/artifact/MUkLapg9pWJmG5zBk4dUvc | AI 教學方案比較 | 無法確定還能不能開 |

## 6. 三個對話的分工（2026-11-22 起）

| 對話 | 負責的檔案 | 不能動 | 交付的檔名 |
|---|---|---|---|
| 主程式對話（這裡） | `index.html`、`content.js` 的 `WORD_BANK`／`WORDS`／`SIMILAR`／`SAY_WORDS`、`audio/`、`tests/`、測試與上線 | 美術畫法、故事文字 | `index_beta_V?.html` |
| 美術對話 | `art.js`（圖示、小狗、繪本角色、道具、動畫） | `index.html`、`content.js`、合約裡的名稱與參數 | `art_beta_V?.js` |
| 繪本對話 | `content.js` 的 `STORIES`、`QPIC` | 書的 `id`、資料欄位名稱、`index.html`、`art.js` | `content_beta_V?.js` |

- 給它們的說明在 `briefs/art_brief.md`、`briefs/story_brief.md`。合約或流程改了，要同步更新這兩份。
- 三個對話開工時共用的提示：`briefs/start_prompt.md`（Kevin 貼給新對話用）。
- **繪本先寫故事稿**：繪本對話先在 `beta/story/<書id>_V?.md` 寫大綱、分鏡和角色／背景／道具表（格式見 `beta/story/STORY_GUIDE.md`），Kevin 在 `beta/story/story_preview.html` 看過說 OK，美術對話照稿裡的表畫圖，最後繪本對話才寫進 `content_beta_V?.js`。故事稿是設計文件，可以直接推到 `main` 的 `beta/story/`。
- 它們交付後：Kevin 把檔案上傳到 `beta/`，告訴主程式對話。主程式對話照第 2 節的流程測試，給測試網址：
  - 只換美術：`beta/index_beta_V4.html?art=V5`、`beta/gallery_beta_V4.html?art=V5`
  - 只換繪本：`beta/index_beta_V4.html?content=V5`
- 美術和繪本的版本號各自往上加，下一版看 `beta/latest.html` 或 `node tools/status.js`。不用整理成同一個版本號，用網址參數組合。
- 繪本文字有改的頁面要重新錄音：`audio/<書id>-<頁>-en.mp3`、`-zh.mp3`（主程式對話負責）。
- 美術或繪本要改玩法 → 一律回到主程式對話。
- 收到的檔案要檢查：合約名稱一個都沒少、`gallery` 沒有紅色、點擊測試和上一版一樣。
- 它們回報的 ①～④（改了什麼、新增的名稱、還沒做完或要決定的事）都要寫進 `DEV_TASKS` 和 `DEV_LOG`。

## 7. 每次都要更新的地方

做完一次改動（第 8 步之後），這幾個地方都要一起更新，然後一起 commit：

1. **這份檔案的「網址總表」**：新增的頁面、正式版版本、狀態。
2. **任務與開發筆記**（在最新的 `beta/index_beta_V?.html`，換正式版時一起上去）：
   - `DEV_VERSION`：版本與日期
   - `DEV_LOG`：加一筆，最新在最上面。別的對話或工作階段做的改動也要補記（`tools/status.js` 會列出沒記錄的 commit）
   - `DEV_TASKS`：做完的改 done；新發現的問題、等 Kevin 決定的事都加成任務（note 寫「等 Kevin 決定」，`tools/status.js` 會列出來）
3. `node tools/status.js --fix` 更新 `versions.json`。
4. `tests/TEST_NOTES.md`：改了什麼、去哪裡測。
5. 規則或流程有改時，更新這份檔案的第 2、3 節和 `briefs/`。
6. 最後跑 `node tools/status.js`，除了「等 Kevin 決定」以外都要 ✓。
