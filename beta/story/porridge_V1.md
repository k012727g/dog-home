# 甜粥 Sweet Porridge｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `porridge`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
窮女孩從老婆婆那裡得到一個魔法小鍋子：說「小鍋子，煮吧！」它就煮甜粥；說「小鍋子，停！」它就停。有一天女孩出門，媽媽讓鍋子煮粥，卻忘了怎麼叫它停。粥滿出廚房、房子、流到街上！女孩回來說「小鍋子，停！」，鍋子停了。想回家的人，都得一路吃回去。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 重複句 | Cook, little pot, cook! / Stop, little pot, stop! |
| 前面埋、後面收 | P04 教停的咒語 → P08 媽媽忘了 → P11 女孩說出來 |
| 累加 | 粥滿到廚房 → 房子 → 街上 |
| 翻頁驚喜 | P08「媽媽忘了」→ P09 粥滿出來 |
| 好笑的結尾 | 原版：大家要一路吃回家 |

## 和 V4 的差別
- 新書。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `girl`（現有 `SK.girl` 或 `P`） | 小女孩，圍裙、頭巾 | #FFB86B | 開心、驚訝、得意 | 提鍋子、喊咒語 | 現有 |
| `mom`（現有 `G.mom`） | 媽媽 | #B9A99C | 餓、慌張、不好意思 | 攪粥、抓頭 | 現有 |
| `oldw`（現有 `SK.oldw`） | 森林裡的老婆婆（**好人**，表情溫和，不要黑斗篷） | — | 和藹 | 遞鍋子 | 現有；要溫和版 |
| `town`（現有 `G.man`、`G.kid`） | 鎮上的人 2 個 | — | 驚訝、開心 | 跑、吃粥 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `forest` | 森林 | 白天 | — | `FOREST` |
| `kitchen` | 小廚房 | 白天 | 爐子 | `HOME`＋`SK.oven` |
| `street` | 小鎮街道 | 白天 | 房子 | `SK.house`＋`GRASS` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `pot` | 小小的魔法鍋，會冒熱氣 | 全書 | 主角道具 | 新做（或用 `SK.cauldron` 縮小） |
| `porridge` | 奶油色的粥（像流動的雲） | P05、P07–P12 | — | 新做 |
| `spoon` | 湯匙 | P05、P12 | — | 新做 |

---

## 每一頁

### P01
EN: A little girl and her mother had no food.
ZH: 小女孩和媽媽沒有東西吃。
劇情推進：困境。
畫面：`kitchen`／中景
角色：`girl`＠右、`mom`＠左 — 肚子餓
道具：空碗 `SK.bowl`
動畫：—
翻頁：無
聲音：新錄

### P02
EN: In the forest, an old woman gave her a little pot.
ZH: 森林裡，一位老婆婆給她一個小鍋子。
劇情推進：魔法道具。
畫面：`forest`／中景
角色：`oldw`＠右 — 遞 — 和藹；`girl`＠左 — 驚訝
道具：`pot`
動畫：pot an-glow
翻頁：無
聲音：新錄

### P03
EN: "Say, Cook, little pot, cook! And it will cook."
ZH: 「說『小鍋子，煮吧！』它就會煮粥。」
劇情推進：規則 1。
畫面：`forest`／特寫鍋子
角色：`oldw` — 舉一根手指
道具：`pot`
動畫：—
翻頁：無
聲音：新錄

### P04
EN: "Say, Stop, little pot, stop! And it will stop."
ZH: 「說『小鍋子，停！』它就會停。」
劇情推進：規則 2（埋伏筆）。
畫面：`forest`／特寫鍋子
角色：`oldw` — 舉兩根手指；`girl` — 點頭
道具：`pot`
動畫：—
翻頁：無
聲音：新錄

### P05
EN: "Cook, little pot, cook!" Sweet porridge! They ate and ate.
ZH: 「小鍋子，煮吧！」甜甜的粥！她們吃呀吃。
劇情推進：魔法有用。
畫面：`kitchen`／中景
角色：`girl`、`mom` — 吃 — 開心
道具：`pot`、`porridge`、`spoon`
動畫：an-bob
翻頁：無
聲音：新錄

### P06
EN: One day, the girl went out. Mother was hungry.
ZH: 有一天女孩出門了，媽媽肚子餓。
劇情推進：只剩媽媽。
畫面：`kitchen`／中景
角色：`mom`＠中 — 摸肚子；`girl`＠門口 — 揮手
道具：`pot`
動畫：—
翻頁：無
聲音：新錄

### P07
EN: "Cook, little pot, cook!" The pot cooked and cooked.
ZH: 「小鍋子，煮吧！」鍋子煮呀煮。
劇情推進：開始失控。
畫面：`kitchen`／中景
角色：`mom`＠左 — 開心
道具：`pot`、`porridge`（滿出來）
動畫：pot an-shake
翻頁：無
聲音：新錄

### P08
EN: "Um... stop? Please?" Mother forgot the words!
ZH: 「呃……停？拜託？」媽媽忘了那句話！
劇情推進：問題。
畫面：`kitchen`／中景
角色：`mom` — 抓頭 — 慌張
道具：`pot`、`porridge`
動畫：mom an-shake
翻頁：有：會怎麼樣？
聲音：新錄

### P09
EN: Porridge in the kitchen! Porridge in the house!
ZH: 粥滿出廚房！粥滿出房子！
劇情推進：越來越多 1。
畫面：`street` 一間房子／中景
角色：`mom` 站在椅子上 — 慌張
道具：`porridge` 從窗戶流出來
動畫：an-bob
翻頁：無
聲音：新錄

### P10
EN: Porridge in the street! Everyone ran. "Help!"
ZH: 粥流到街上！大家都在跑。「救命！」
劇情推進：越來越多 2（好笑，不可怕）。
畫面：`street`／全景
角色：`town` 2 個 — 跑 — 驚訝
道具：`porridge` 像河一樣
動畫：an-walk
翻頁：無
聲音：新錄

### P11
EN: The girl came home. "Stop, little pot, stop!" It stopped.
ZH: 女孩回來了：「小鍋子，停！」它就停了。
劇情推進：解決；收回伏筆。
畫面：`street`／中景
角色：`girl`＠中 — 雙手叉腰 — 得意
道具：`pot`
動畫：an-pop
翻頁：無
聲音：新錄

### P12
EN: To get home, everyone had to eat their way back. Yum!
ZH: 想回家的人，都得一路吃回去。好吃！
劇情推進：好笑的結局。
畫面：`street`／全景
角色：`town`、`mom` — 拿湯匙吃 — 開心
道具：`porridge`、`spoon`
動畫：an-bob
翻頁：無
聲音：新錄

---

## 問答
| 題 | EN | 答案 | 選項 | 圖 |
|---|---|---|---|---|
| 老婆婆給了她什麼？ | What did the old woman give her? | pot | pot / ball / book | 要加 QPIC：pot |
| 誰忘了那句話？ | Who forgot the words? | mother | mother / girl / dog | 要加 QPIC：mother、girl |
| 鍋子煮了什麼？ | What did the pot cook? | porridge | porridge / cake / fish | 要加 QPIC：porridge |

## 給美術的待辦（這本）
1. 新做 `pot`（小魔法鍋）、`porridge`（流動的粥）、`spoon`。
2. `oldw` 溫和版（好人）。

## 錄音
新書，12 頁都要錄（`porridge-1` 到 `porridge-12`，英文＋中文）。
