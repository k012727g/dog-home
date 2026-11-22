# 豌豆公主 The Princess and the Pea｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `pea`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
王子想娶真正的公主，找了很久都不是。暴風雨的晚上，一個濕答答的女孩敲門說她是公主。皇后在床上放一顆豌豆，再疊二十層床墊。早上問她睡得好嗎？「睡不好！床裡有硬硬的東西！」只有真正的公主才感覺得到。王子和公主好開心，那顆豌豆被放進了博物館。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 三次法則 | 王子找了三位公主都不是（P02） |
| 數字 | one, two, three... twenty（P07） |
| 翻頁驚喜 | P09「睡得好嗎？」→ P10 睡不好！ |
| 好笑的結尾 | 原著：豌豆被放進博物館 |

## 和 V4 的差別
- 新書。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `prince`（現有 `SK.prince`） | 短髮、披風 | #4A90E2 | 失望、驚喜 | 到處找、開心 | 現有 |
| `queen`（現有 `SK.queen`） | 皇后（王子的媽媽），**表情慈祥** | #9B6BD6 | 聰明、偷笑 | 放豌豆、問 | 現有 |
| `princess`（現有 `P`） | 濕答答的女孩：頭髮滴水、裙子髒髒；早上頂著黑眼圈 | #FF9EC4 | 冷、睏、抱怨、開心 | 敲門、爬梯子、打哈欠 | 現有；要加「滴水」「黑眼圈」 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `castle` | 城堡室內 | 晚上／早上 | — | `CASTLE` |
| `stormnight` | 城門外暴風雨 | 晚上 | 雨、閃電 | `NIGHT`＋`SK.storm`＋`SK.door` |
| `bedroom` | 高高的床 | 晚上 | 超高的床、梯子 | 新做 |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `pea` | 一顆綠色小豌豆（要畫得很明顯，有亮點） | P06、P11、P12 | 問答 | 新做 |
| `mattress` | 二十層彩色床墊疊成一座塔 | P07、P08 | — | 新做（或 `SK.bed` 疊高） |
| `ladder` | 梯子 | P08 | — | 新做 |
| `museum` | 玻璃罩＋小牌子 | P12 | — | 新做 |

---

## 每一頁

### P01
EN: A prince wanted to marry a real princess.
ZH: 王子想娶一位真正的公主。
劇情推進：目標。
畫面：`castle`／中景
角色：`prince`＠中 — 想 — 認真
道具：—
動畫：an-bob
翻頁：無
聲音：新錄

### P02
EN: He met three princesses. Not real, not real, not real!
ZH: 他遇到三位公主，都不是真正的公主！
劇情推進：三次法則（一頁快速帶過）。
畫面：三格小圖／中景
角色：`prince` — 搖頭 — 失望
道具：—
動畫：—
翻頁：無
聲音：新錄

### P03
EN: One stormy night, knock, knock!
ZH: 一個暴風雨的晚上——叩叩叩！
劇情推進：有人來了。
畫面：`stormnight`／中景
角色：—
道具：`SK.door`、`SK.storm`
動畫：an-knock
翻頁：無
聲音：新錄

### P04
EN: A wet girl stood at the door. "I am a princess."
ZH: 門口站著一個濕答答的女孩：「我是公主。」
劇情推進：新角色。
畫面：`stormnight`／中景
角色：`princess`＠中 — 滴水 — 冷
道具：—
動畫：an-shake
翻頁：無
聲音：新錄

### P05
EN: "Hmm," said the Queen. "We will see."
ZH: 皇后說：「嗯……我們看看吧。」
劇情推進：考驗。
畫面：`castle`／中景
角色：`queen`＠右 — 摸下巴 — 聰明；`princess`＠左
道具：—
動畫：—
翻頁：無
聲音：新錄

### P06
EN: She put one little pea on the bed.
ZH: 她在床上放了一顆小小的豌豆。
劇情推進：考驗的祕密。
畫面：`bedroom`／特寫
角色：`queen` 的手
道具：`pea`（亮亮的）
動畫：pea an-glow
翻頁：無
聲音：新錄

### P07
EN: Then one, two, three... twenty mattresses on top!
ZH: 然後放上一、二、三……二十層床墊！
劇情推進：數數。
畫面：`bedroom`／全景（直的構圖）
角色：—
道具：`mattress`（越疊越高）
動畫：an-bob
翻頁：無
聲音：新錄

### P08
EN: The princess climbed up, up, up to bed.
ZH: 公主往上爬、往上爬，爬到床上。
劇情推進：睡覺。
畫面：`bedroom`／全景
角色：`princess` — 爬梯子
道具：`ladder`、`mattress`
動畫：an-walk
翻頁：無
聲音：新錄

### P09
EN: In the morning, the Queen asked, "How did you sleep?"
ZH: 早上，皇后問：「你睡得好嗎？」
劇情推進：答案揭曉前。
畫面：`castle` 早上／中景
角色：`queen`＠右 — 偷笑
道具：—
動畫：—
翻頁：有：她睡得好嗎？
聲音：新錄

### P10
EN: "Not well! Something hard was in my bed!"
ZH: 「睡不好！床裡有硬硬的東西！」
劇情推進：答案。
畫面：`castle`／中景
角色：`princess`＠左 — 黑眼圈、打哈欠 — 抱怨
道具：—
動畫：princess an-shake
翻頁：無
聲音：新錄

### P11
EN: "Only a real princess could feel that pea!"
ZH: 「只有真正的公主才感覺得到那顆豌豆！」
劇情推進：揭曉。
畫面：`castle`／中景
角色：`queen`、`prince` — 驚喜
道具：`pea`
動畫：an-pop
翻頁：無
聲音：新錄

### P12
EN: The prince and princess were happy. The pea went to a museum!
ZH: 王子和公主好開心。那顆豌豆被放進了博物館！
劇情推進：好笑的結局。
畫面：`castle` 大廳／中景
角色：`prince`＠左、`princess`＠右 — 開心
道具：`pea` 在 `museum` 玻璃罩裡
動畫：an-bob
翻頁：無
聲音：新錄

---

## 問答
| 題 | EN | 答案 | 選項 | 圖 |
|---|---|---|---|---|
| 床上放了什麼？ | What was under the beds? | pea | pea / apple / ball | 要加 QPIC：pea |
| 誰在床上放豌豆？ | Who put the pea on the bed? | queen | queen / prince / dog | 都有 |
| 她在哪裡睡不好？ | Where did she sleep badly? | bed | bed / tree / box | 都有 |

## 給美術的待辦（這本）
1. 新做 `pea`、`mattress` 疊高、`ladder`、`museum` 玻璃罩。
2. `princess` 加「滴水」和「黑眼圈」兩個樣子。

## 錄音
新書，12 頁都要錄（`pea-1` 到 `pea-12`，英文＋中文）。
