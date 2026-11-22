# 北風與太陽 The North Wind and the Sun｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `wind`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
北風和太陽吵誰比較強，決定看誰能讓路人脫掉外套。北風先來，呼——用力吹，那個人把外套抓得更緊；再用力，抓得更緊，北風放棄了。太陽暖暖地微笑，那個人變暖、更暖、好熱，自己把外套脫了。溫柔比用力更厲害。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 對比 | 冷 vs 熱、用力 vs 溫柔（顏色：藍灰 vs 橘黃） |
| 越來越強 | Whoosh → WHOOSH；warm → warmer → hot |
| 翻頁驚喜 | P08 北風放棄 → P09 換太陽 |
| 道理收尾 | Kind and gentle wins |

## 和 V4 的差別
- 新書。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `wind` | 北風：一朵藍灰色的雲，有臉，鼓起臉頰吹氣；**不可怕** | #8FA7C4 | 自信、用力、洩氣 | 吹 | 新做 |
| `sun` | 太陽：圓圓的、有臉、溫柔地笑 | #FFD23F | 溫柔、微笑 | 照、微笑 | 新做（有臉的版本） |
| `man`（現有 `G.man`） | 路人，戴帽子、穿長長的紅外套 | 外套 #E85A5A（要很明顯） | 輕鬆、冷、熱、舒服 | 走、抓緊外套、擦汗、脫外套 | 現有；要加長外套 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `road` | 鄉間小路 | 白天 | 路、幾棵樹（被風吹彎） | `GRASS`＋`SK.tree` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `coat` | 長長的紅外套 | 全書 | 問答 | 新做（穿在 `man` 身上；P11 脫下來拿在手上） |
| `windlines` | 風的線條、飛起來的葉子 | P05–P08 | — | 新做 |

---

## 每一頁

### P01
EN: The North Wind and the Sun had a fight.
ZH: 北風和太陽吵架了。
劇情推進：認識主角。
畫面：天空／中景
角色：`wind`＠左、`sun`＠右 — 互瞪
道具：—
動畫：—
翻頁：無
聲音：新錄

### P02
EN: "I am stronger!" "No, I am stronger!"
ZH: 「我比較強！」「不，我比較強！」
劇情推進：衝突。
畫面：天空／中景
角色：`wind`、`sun` — 鼓起胸膛
道具：—
動畫：an-shake
翻頁：無
聲音：新錄

### P03
EN: A man walked by in a big coat.
ZH: 一個穿著大外套的人走過來。
劇情推進：比賽的對象。
畫面：`road`／中景
角色：`man`＠中 — 走 — 輕鬆
道具：`coat`
動畫：an-walk
翻頁：無
聲音：新錄

### P04
EN: "Who can take off his coat?" said the Sun.
ZH: 太陽說：「誰能讓他脫掉外套？」
劇情推進：比賽規則。
畫面：`road` 天空／中景
角色：`sun`＠右 — 提議；`wind`＠左 — 得意
道具：—
動畫：—
翻頁：無
聲音：新錄

### P05
EN: "Me first!" Whoosh! The Wind blew hard.
ZH: 「我先！」呼——！北風用力吹。
劇情推進：北風 1。
畫面：`road`／中景
角色：`wind`＠左上 — 吹；`man`＠右
道具：`windlines`
動畫：an-shake
翻頁：無
聲音：新錄

### P06
EN: The man held his coat tight. Brr!
ZH: 那個人把外套抓得緊緊的。好冷！
劇情推進：沒用。
畫面：`road`／中景
角色：`man` — 抓緊外套 — 冷
道具：`windlines`、`coat`
動畫：man an-shake
翻頁：無
聲音：新錄

### P07
EN: WHOOSH! The Wind blew harder.
ZH: 呼呼——！北風吹得更用力。
劇情推進：北風 2。
畫面：`road`／中景
角色：`wind` — 臉漲紅 — 用力
道具：`windlines`（更多）
動畫：an-shake
翻頁：無
聲音：新錄

### P08
EN: The man held it tighter. The Wind gave up.
ZH: 他抓得更緊了。北風放棄了。
劇情推進：北風失敗。
畫面：`road`／中景
角色：`man` — 縮成一團；`wind` — 洩氣（變小）
道具：—
動畫：—
翻頁：有：換太陽了
聲音：新錄

### P09
EN: "My turn," said the Sun. She smiled warmly.
ZH: 太陽說：「換我了。」她暖暖地微笑。
劇情推進：太陽的辦法。
畫面：`road`（畫面變暖色）／中景
角色：`sun`＠右上 — 微笑
道具：—
動畫：sun an-glow
翻頁：無
聲音：新錄

### P10
EN: The man got warm... warmer... hot!
ZH: 那個人變暖……更暖……好熱！
劇情推進：變化。
畫面：`road`／中景
角色：`man` — 擦汗 — 熱
道具：`coat`
動畫：—
翻頁：無
聲音：新錄

### P11
EN: He took off his coat! "Ahh, so nice!"
ZH: 他脫掉外套了！「啊，好舒服！」
劇情推進：太陽贏了。
畫面：`road`／中景
角色：`man` — 拿著外套 — 舒服
道具：`coat`（拿在手上）
動畫：an-pop
翻頁：無
聲音：新錄

### P12
EN: Kind and gentle is stronger than pushing hard.
ZH: 溫柔比用力更厲害。
劇情推進：道理。
畫面：天空／中景
角色：`sun` — 微笑；`wind` — 點頭（服氣）
道具：—
動畫：an-bob
翻頁：無
聲音：新錄

---

## 問答
| 題 | EN | 答案 | 選項 | 圖 |
|---|---|---|---|---|
| 誰贏了？ | Who won? | sun | sun / cloud / star | 都有 |
| 那個人穿了什麼？ | What did the man wear? | clothes | clothes / hat / shoe | 都有 |
| 誰用力吹？ | Who blew hard? | wind | wind / sun / dog | 要加 QPIC：wind |

## 給美術的待辦（這本）
1. 新做 `wind`（有臉的雲）、有臉的 `sun`、`windlines`。
2. `man` 加長長的紅外套。

## 錄音
新書，12 頁都要錄（`wind-1` 到 `wind-12`，英文＋中文）。
