# 大野狼與七隻小羊 The Wolf and the Seven Little Goats｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `goats`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
山羊媽媽出門前叮嚀不要幫大野狼開門。大野狼來了三次：第一次聲音太粗、第二次腳是黑的、第三次把腳沾白麵粉，小羊開了門。大野狼把六隻小羊裝進袋子睡著了；最小的小羊躲在時鐘裡，告訴媽媽。媽媽剪開袋子，六隻小羊都跳出來，大野狼再也不敢來。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 重複句 | Open the door, my children. I am your mother.（P03、P06） |
| 三次法則 | 聲音 → 腳 → 白腳（第三次騙成功） |
| 翻頁驚喜 | P08 停在「叩叩叩」，翻到 P09 才看到開門是大野狼 |
| 數字 | 七隻 → 六隻被抓＋一隻躲起來 → 七隻都平安 |
| 溫和 | 原版是吞下去，這裡改成裝進袋子 |

## 和 V4 的差別
- 大野狼來三次（V4 兩次），第二次改聲音的方法用蜂蜜（小孩比較懂）。
- 明確寫出六隻被抓、一隻躲起來，數字對得起來。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `mamagoat`（現有 `SK.goat` 放大 1.3） | 白色大山羊，戴圍裙、提籃子 | 圍裙 #FF8FB8 | 叮嚀、驚訝、開心 | 出門、拿剪刀、抱孩子 | 現有；要加圍裙 |
| `kids`（現有 `SK.goat` 縮小 0.6） | 七隻小羊，**最小的那隻脖子有黃色鈴鐺**（讀者認得出她） | 鈴鐺 #FFD23F | 開心、害怕 | 排排站、躲 | 現有；要加鈴鐺 |
| `wolf`（現有 `SK.wolf`） | 灰色大野狼 | 灰；**P07 黑腳、P08 白腳** | 假笑、生氣、睡著、逃跑 | 敲門、伸腳、睡覺、跑 | 現有（`SK.wolf` 第 4 個參數可換腳的顏色） |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `goathome` | 小羊的家（室內） | 白天 | 門、窗、大時鐘 | `HOME`＋`FLOOR`＋`SK.door`＋`SK.clock` |
| `goatout` | 小羊家門外 | 白天 | 門、草地 | `GRASS`＋`SK.door` |
| `tree` | 樹下 | 白天 | 大樹 | `FOREST`＋`SK.tree` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `clock` | 落地大時鐘，門可以打開 | P10、P11 | 最小的小羊躲的地方（問答） | 現有 `SK.clock` |
| `sack` | 大布袋，會動 | P10、P12 | 裝小羊 | 現有 `SK.sack` |
| `honey` | 蜂蜜罐 | P05 | 讓聲音變細 | 新做 |
| `flour` | 白麵粉袋 | P08 | 把腳變白 | 新做 |
| `scissors` | 媽媽的剪刀（圓頭） | P12 | 剪開袋子 | 新做 |

---

## 每一頁

### P01
EN: Mother Goat had seven little goats.
ZH: 山羊媽媽有七隻小羊。
劇情推進：認識主角；數字 seven。
畫面：`goathome`／中景
角色：`mamagoat`＠左；`kids` 七隻一排（算 1 組）— 開心
道具：—
動畫：kids an-bob
翻頁：無
聲音：沿用

### P02
EN: "I must go out. Do not open the door for the wolf!"
ZH: 「媽媽要出門。不要幫大野狼開門喔！」
劇情推進：埋下規則。
畫面：`goathome` 門口／中景
角色：`mamagoat`＠右 — 舉一根手指 — 叮嚀；`kids` 3 隻＠左 — 點頭
道具：`door`
動畫：mamagoat an-shake
翻頁：無
聲音：要重錄

### P03
EN: Knock, knock! "Open the door, my children. I am your mother."
ZH: 叩叩叩！「孩子們開門，我是媽媽。」
劇情推進：大野狼第 1 次；重複句。
畫面：`goatout`／中景
角色：`wolf`＠右 — 敲門 — 假笑
道具：`door`＠左
動畫：wolf an-knock
翻頁：無
聲音：要重錄

### P04
EN: "No! Your voice is rough. You are the wolf!"
ZH: 「不要！你的聲音好粗。你是大野狼！」
劇情推進：小羊識破第 1 次。
畫面：`goathome` 門內／中景
角色：`kids` 3 隻＠左 — 搖頭 — 勇敢
道具：`door`＠右（關著）
動畫：kids an-shake
翻頁：無
聲音：要重錄

### P05
EN: The wolf ate honey to make his voice soft.
ZH: 大野狼吃了蜂蜜，讓聲音變得細細的。
劇情推進：大野狼想辦法。
畫面：`goatout`／中景
角色：`wolf`＠中 — 舔蜂蜜 — 得意
道具：`honey`
動畫：an-bob
翻頁：無
聲音：要重錄

### P06
EN: Knock, knock! "Open the door, my children. I am your mother."
ZH: 叩叩叩！「孩子們開門，我是媽媽。」
劇情推進：大野狼第 2 次；重複句。
畫面：`goatout`／中景
角色：`wolf`＠右 — 敲門 — 假笑
道具：`door`＠左
動畫：wolf an-knock
翻頁：無
聲音：要重錄（和 P03 同一句，可以共用錄音）

### P07
EN: "Show us your foot!" The foot was black. "You are the wolf!"
ZH: 「讓我們看看你的腳！」腳是黑色的。「你是大野狼！」
劇情推進：小羊識破第 2 次。
畫面：`goathome` 門口／中景
角色：`wolf`＠右 — 從門縫伸出黑腳；`kids` 2 隻＠左 — 指著腳
道具：`door`
動畫：kids an-shake
翻頁：無
聲音：沿用（V4 的 `goats-6` 錄音，改名成 `goats-7`）

### P08
EN: The wolf put white flour on his foot. Knock, knock!
ZH: 大野狼把腳沾上白麵粉。叩叩叩！
劇情推進：大野狼第 3 次（這次騙成功）。
畫面：`goatout`／中景
角色：`wolf`＠中 — 伸出白腳 — 得意
道具：`flour`、`door`
動畫：wolf an-knock
翻頁：有：孩子會猜「會不會開門？」
聲音：要重錄

### P09
EN: The goats opened the door. Oh no! The wolf! Hide!
ZH: 小羊開了門。糟糕！是大野狼！快躲起來！
劇情推進：最高點。
畫面：`goathome`／全景
角色：`wolf`＠中 — 衝進來；`kids` 3 隻 — 往四邊跑 — 害怕
道具：`clock`＠右
動畫：kids an-shake
翻頁：無
聲音：要重錄

### P10
EN: The wolf put six goats in his sack and fell asleep.
ZH: 大野狼把六隻小羊裝進袋子，在樹下睡著了。
劇情推進：最低點；只有六隻（少一隻！）。
畫面：`tree`／中景
角色：`wolf`＠左 — 睡著
道具：`sack`＠右（會動）
動畫：`SK.zz`；sack an-shake
翻頁：無
聲音：要重錄

### P11
EN: The smallest goat came out of the clock. "Mother, help!"
ZH: 最小的小羊從時鐘裡出來：「媽媽，救命！」
劇情推進：轉機：P01 數的七隻，這裡揭曉第七隻。
畫面：`goathome`／中景
角色：`kids` 最小那隻（黃鈴鐺）＠中 — 跑向媽媽；`mamagoat`＠右門口 — 驚訝
道具：`clock`＠左（門開著）
動畫：an-walk
翻頁：無
聲音：要重錄

### P12
EN: Snip! Out jumped six little goats. The wolf never came back!
ZH: 喀嚓！六隻小羊跳了出來。大野狼再也不敢來了！
劇情推進：解決＋平安結局：七隻都在。
畫面：`tree`／全景
角色：`mamagoat`＠左 — 拿剪刀 — 開心；`kids` 七隻一組 — 跳 — 開心；`wolf` 遠處逃跑（很小）
道具：`scissors`、`sack`
動畫：kids an-bob
翻頁：無
聲音：要重錄

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 有幾隻小羊？ | How many little goats? | seven | seven / three / ten |
| 誰來敲門？ | Who knocked on the door? | wolf | wolf / dog / cat |
| 最小的小羊躲在哪裡？ | Where did the smallest goat hide? | clock | clock / bed / box |

## 給美術的待辦（這本）
1. 新做 `honey`、`flour`、`scissors` 三個小道具。
2. 最小的小羊加黃色鈴鐺，每頁都要認得出來。
3. `mamagoat` 加圍裙。

## 錄音
要重錄 10 頁：P02、P03、P04、P05、P06、P08、P09、P10、P11、P12。沿用 2 頁：P01、P07（改名的見各頁）。

## 已寫進
`beta/content_beta_V6.js`（2026-11-22）。新的角色道具還沒畫好前，先用現有的圖代替（見「給美術的待辦」）。
