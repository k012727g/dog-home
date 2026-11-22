# 放羊的孩子 The Boy Who Cried Wolf｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `wolfboy`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
顧羊的男孩覺得無聊，大喊「大野狼！」騙大家跑上山，哈哈笑。第二天又騙一次，大家好生氣。有一天大野狼真的來了，他喊救命卻沒有人來，羊兒都嚇跑了。男孩哭著對大家說對不起，大家一起幫忙找回羊，從此他都說實話。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 三次法則 | 喊「大野狼！」三次：騙、騙、真的 |
| 重複句 | "Wolf! Wolf!" |
| 翻頁驚喜 | P06 大家生氣 → P07 真的大野狼來了 |
| 溫和 | 原版羊被吃掉；這裡羊只是跑散，大家一起找回來（和皮諾丘一樣強調說實話） |

## 和 V4 的差別
- 新書。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `boy`（現有 `G.kid`） | 牧羊男孩，草帽、拿木杖 | #FFB86B | 無聊、調皮大笑、害怕、哭、抱歉 | 坐、大喊、跑 | 現有 |
| `town`（現有 `G.man`、`G.farmer`） | 村民 2 個，拿掃把、拿鋤頭（只是農具） | — | 著急、生氣、原諒 | 跑上山、叉腰 | 現有 |
| `sheep` | 白色綿羊，毛像雲 | 白 | — | 吃草、嚇跑 | 新做 |
| `wolf`（現有 `SK.wolf`） | 灰色大野狼 | 灰 | — | 從樹後出來 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `hill` | 山坡草地 | 白天 | 大樹、遠處有村莊 | `GRASS`＋`SK.tree` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `staff` | 牧羊杖 | 全書 | — | 新做（小） |

---

## 每一頁

### P01
EN: A boy watched the sheep on the hill.
ZH: 一個男孩在山坡上顧羊。
劇情推進：認識主角。
畫面：`hill`／中景
角色：`boy`＠左；`sheep` 3 隻（算 1 組）
道具：—
動畫：an-bob
翻頁：無
聲音：新錄

### P02
EN: It was so boring. Yawn!
ZH: 好無聊喔。呵——欠！
劇情推進：動機。
畫面：`hill`／中景
角色：`boy`＠中 — 打哈欠 — 無聊
道具：—
動畫：—
翻頁：無
聲音：新錄

### P03
EN: "Wolf! Wolf!" he shouted. Everyone ran up the hill.
ZH: 他大喊：「大野狼！大野狼！」大家都跑上山。
劇情推進：第 1 次喊。
畫面：`hill`／中景
角色：`boy`＠右 — 大喊；`town` 2 個＠左 — 跑 — 著急
道具：—
動畫：town an-walk
翻頁：無
聲音：新錄

### P04
EN: No wolf! The boy laughed. "Ha, ha! A trick!"
ZH: 沒有大野狼！男孩哈哈笑：「騙你們的！」
劇情推進：說謊。
畫面：`hill`／中景
角色：`boy` — 大笑；`town` — 喘氣
道具：—
動畫：boy an-shake
翻頁：無
聲音：新錄

### P05
EN: The next day, "Wolf! Wolf!" Everyone ran up again.
ZH: 第二天：「大野狼！大野狼！」大家又跑上山。
劇情推進：第 2 次喊。
畫面：`hill`／中景
角色：`boy`＠右；`town` 2 個＠左
道具：—
動畫：town an-walk
翻頁：無
聲音：新錄

### P06
EN: No wolf again. The people were angry.
ZH: 又沒有大野狼。大家好生氣。
劇情推進：後果。
畫面：`hill`／中景
角色：`town` — 叉腰 — 生氣；`boy` — 偷笑
道具：—
動畫：—
翻頁：無
聲音：新錄

### P07
EN: Then one day, a real wolf came!
ZH: 有一天，真的大野狼來了！
劇情推進：第 3 次（真的）。
畫面：`hill`／中景
角色：`wolf`＠右（從樹後）；`boy`＠左 — 害怕
道具：`sheep` 一組
動畫：wolf an-walk
翻頁：有：大家會來嗎？
聲音：新錄

### P08
EN: "Wolf! Wolf! Please help!" But nobody came.
ZH: 「大野狼！大野狼！救命！」可是沒有人來。
劇情推進：沒人相信。
畫面：`hill`／遠景，村莊在遠處
角色：`boy`＠中 — 大喊 — 害怕；遠處村民在搖頭
道具：—
動畫：boy an-shake
翻頁：無
聲音：新錄

### P09
EN: The sheep ran away into the hills.
ZH: 羊兒們都嚇得跑進山裡了。
劇情推進：損失（不可怕）。
畫面：`hill`／遠景
角色：`sheep` 往四邊跑；`wolf` 追（遠遠的）
道具：—
動畫：an-walk
翻頁：無
聲音：新錄

### P10
EN: The boy cried. "Nobody believes me now."
ZH: 男孩哭了：「現在沒有人相信我了。」
劇情推進：最低點。
畫面：`hill`／中景
角色：`boy`＠中 — 坐著哭
道具：—
動畫：—
翻頁：無
聲音：新錄

### P11
EN: "I am sorry I told lies," he said to everyone.
ZH: 他對大家說：「對不起，我說了謊。」
劇情推進：改變。
畫面：村莊／中景
角色：`boy`＠左 — 低頭 — 抱歉；`town` 2 個＠右 — 原諒
道具：—
動畫：—
翻頁：無
聲音：新錄

### P12
EN: Everyone helped find the sheep. From then on, he told the truth.
ZH: 大家一起幫忙找回羊。從此以後，他都說實話。
劇情推進：溫和結局＋道理。
畫面：`hill`／全景
角色：`boy`、`town` — 開心；`sheep` 一組
道具：—
動畫：an-bob
翻頁：無
聲音：新錄

---

## 問答
| 題 | EN | 答案 | 選項 | 圖 |
|---|---|---|---|---|
| 他大喊什麼？ | What did he shout? | wolf | wolf / cat / dog | 都有 |
| 男孩在顧什麼？ | What did the boy watch? | sheep | sheep / pig / duck | 要加 QPIC：sheep |
| 他騙了大家幾次？ | How many times did he trick them? | two | two / four / seven | 都有 |

## 給美術的待辦（這本）
1. 新做 `sheep` 綿羊。
2. 村民手上拿農具就好，不要武器。

## 錄音
新書，12 頁都要錄（`wolfboy-1` 到 `wolfboy-12`，英文＋中文）。
