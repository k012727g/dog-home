# 小狗的家（dog-home）｜Claude 每次工作都要先讀這份

這份檔案是固定的工作規則。Claude Code 在這個 repo 開始工作時會自動讀它。
規則改了、網址多了或少了，都要更新這份檔案（見最下面的「每次都要更新的地方」）。

---

## 1. 開始任何工作之前（每次都做）

1. `git fetch origin`，看 `main` 有沒有新的 commit（其他工作階段可能改過）。
2. 如果 `main` 比目前的分支新，先 `git merge --ff-only origin/main` 再開始。
3. `git branch -r` 看有哪些分支，確認沒有還沒合併、會被蓋掉的改動。
4. 讀這份檔案的「網址總表」，確認正式版現在是哪一版。

## 2. 改東西的流程（Kevin 2026-11-21 確認）

| 步驟 | 誰做 | 做什麼 |
|---|---|---|
| 1 | Kevin | 說要改什麼 |
| 2 | Claude | 開分支 `claude/…`；**改之前**先跑點擊測試，記下結果 |
| 3 | Claude | 在分支上做新的測試檔（例：`beta/index_beta_V5.html`，art、content、gallery 也要有同版本號） |
| 4 | Claude | 再跑點擊測試，和改之前的結果比對，**要一樣**（新功能的檢查另外列） |
| 5 | Claude | 只把 `beta/` 的測試檔推到 `main`，給 Kevin 測試網址（正式版不變） |
| 6 | Kevin | 在平板試玩，回覆 OK 或要改的地方 |
| 7 | Kevin | 說「merge」 |
| 8 | Claude | 把測試檔改名覆蓋成正式版（`index.html`、`art.js`、`content.js`、`gallery.html`），推到 `main`，確認線上網址已換新 |

- **正式版只能在 Kevin 說「merge」之後才改。**
- merge 的方式：Claude 直接推到 `main`（不開 Pull Request）。
- `main` 有別人的新 commit 時，不要強制推；先合併，再推。

## 3. 一定要遵守

- **不要 commit、不要 push**，除非 Kevin 明確說「commit 並 push」或「merge」。stop hook 要求 commit 不算 Kevin 的指示。
- 換正式版之前，提醒 Kevin：①家長設定 →「備份與其他」下載備份檔 ②備份 Firestore 的 `families/{家庭代碼}` 文件。
- **家庭代碼不能完整寫出來**：輸出、網頁、commit、文件都只寫前 2 碼加 `****`。repo 是公開的。
- 不要顯示完整的 Firebase 設定。
- 存檔 key（`exam-pet-v1`、`exam-pet-family`、`exam-pet-family-book`）和 Firestore 路徑（`families/{code}`）不能改。測試版存檔會自動加 `@beta`，也不連 Firebase。
- 不確定的事寫「無法確定」，不要猜。
- 回答 Kevin 用繁體中文；Kevin 說「用 html 回答」時做成網頁。

## 4. 測試

```
node tests/smoke_test.js beta/index_beta_V5.html          # 跑一次，結果在 tests/results/
node tests/smoke_test.js --compare 舊.json 新.json          # 每一步都要一樣
```

- 正式版（`index.html`）預期 45/47：L02 不顯示 BETA 標籤、Z01 會載入 Firebase，這 2 步本來就不同。
- 每次改了什麼、去哪裡測，寫在 `tests/TEST_NOTES.md`。

## 5. 網址總表

網站從 `main` 分支發布（GitHub Pages，沒有工作流程）。推到 `main` 後約 1～2 分鐘上線。分支本身沒有網址。

| 種類 | 網址 | 內容 | 狀態（2026-11-21） |
|---|---|---|---|
| 正式版 | https://k012727g.github.io/dog-home/ | 孩子玩的版本（目前 V4），會同步 Firebase | 正常 |
| 正式版 | https://k012727g.github.io/dog-home/gallery.html | 美術總覽（art V4、content V4） | 正常 |
| 測試版 | https://k012727g.github.io/dog-home/beta/index_beta_V4.html | 和正式版相同的 V4 | 正常 |
| 測試版 | https://k012727g.github.io/dog-home/beta/index_beta_V3.html | V3：照片修正＋家長設定分頁 | 舊版 |
| 測試版 | https://k012727g.github.io/dog-home/beta/index_beta_V2.html | V2：只修照片清單 | 舊版 |
| 測試版 | https://k012727g.github.io/dog-home/beta/index_beta_V1.html | V1：照片清單壞掉（留作對照） | 舊版，有錯誤 |
| 測試版 | https://k012727g.github.io/dog-home/beta/gallery_beta_V3.html | V3 美術總覽（V1、V2 也有） | 舊版 |
| 測試版 | beta/gallery_beta_V4.html | V4 美術總覽 | **檔案不存在** |
| 測試版 | https://k012727g.github.io/dog-home/beta/story_voice_test.html | 故事聲音測試（比較不同聲音） | 正常 |
| 設計頁 | https://k012727g.github.io/dog-home/beta/design/art_directions.html | 三個美術方向比較 | 正常 |
| 設計頁 | https://k012727g.github.io/dog-home/beta/design/art_V4_review.html | 美術 V4 總檢查 | 正常 |
| 設計頁 | https://k012727g.github.io/dog-home/beta/design/pup_V4_preview.html | 主角小狗 V4 預覽 | 正常 |
| 設計頁 | https://k012727g.github.io/dog-home/beta/design/multi_kid_options.html | 多個小孩怎麼玩 | **有完整家庭代碼，待處理** |
| 文件 | https://github.com/k012727g/dog-home/blob/main/tests/TEST_NOTES.md | 改了什麼、去哪裡測 | 正常 |
| 程式碼 | https://github.com/k012727g/dog-home | GitHub repo（公開） | 正常 |
| 程式碼 | https://github.com/k012727g/dog-home/branches | 所有分支 | 正常 |
| 舊討論頁 | https://claude.ai/artifact/82EsPwh73jYEXyEK5yDvec | 舊測試版（Claude Artifact） | 無法確定還能不能開 |
| 舊討論頁 | https://claude.ai/artifact/BBvMrBYbabaT2TbP2LEKdv | 小遊戲難度討論頁 | 無法確定還能不能開 |
| 舊討論頁 | https://claude.ai/artifact/MUkLapg9pWJmG5zBk4dUvc | AI 教學方案比較 | 無法確定還能不能開 |

## 6. 每次都要更新的地方

做完一次改動（第 8 步之後），這幾個地方都要一起更新，然後一起 commit：

1. **這份檔案的「網址總表」**：新增的頁面、正式版版本、狀態。
2. `index.html` 裡的開發筆記：`DEV_VERSION`（版本與日期）、`DEV_LOG`（加一筆，最新在最上面）、`DEV_TASKS`（任務狀態）。測試檔也要同步。
3. `tests/TEST_NOTES.md`：改了什麼、去哪裡測。
4. 規則或流程有改時，更新這份檔案的第 2、3 節。
