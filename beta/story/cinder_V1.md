# 灰姑娘 Cinderella｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `cinder`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
灰姑娘每天打掃，姊姊們對她不好。國王辦舞會，仙女把南瓜變馬車、舊衣服變禮服，叮嚀十二點以前要回家。她和王子跳舞，滴答滴答，噹！十二點，她跑走掉了一隻玻璃鞋。姊姊們試穿都太小，灰姑娘一穿剛剛好。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 前面埋、後面收 | P08 仙女說十二點以前回家 → P10 噹！十二點 |
| 狀聲詞＋重複句 | Sweep, sweep（P01）；Tick, tock（P09）；Too small!（P11） |
| 三次法則 | 姊姊一、姊姊二太小 → 灰姑娘剛好 |
| 翻頁驚喜 | P09 滴答滴答……翻到 P10 噹！ |

## 和 V4 的差別
- 新增仙女的叮嚀（十二點），讓逃跑有原因。
- 造型避開電影版：禮服不用淺藍色，改薄荷綠；不要小老鼠朋友。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `cin`（現有 `G.cin`） | 金色頭髮；平常穿灰褐色舊衣服＋頭巾，舞會穿薄荷綠禮服 | 舊衣 #B9A99C、禮服 #8FDCC0 | 努力、難過、驚喜、開心 | 掃地、跳舞、跑、試鞋 | 現有 |
| `sis`（現有 `G.sis`） | 兩個姊姊：一個紫、一個橘，髮髻 | #C9B3F5、#FFB86B | 得意、生氣 | 指使人、試鞋（腳太大） | 現有 |
| `fairy`（現有 `G.fairy`） | 白髮仙女、翅膀、魔杖 | #FFD86B | 溫柔 | 揮魔杖、舉手指叮嚀 | 現有 |
| `prince`（現有 `SK.prince`） | 短髮、披風 | #4A90E2 | 開心、著急 | 跳舞、拿鞋子 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `home` | 灰姑娘家（廚房） | 白天 | 掃把、壁爐 | `HOME`＋`FLOOR`＋`SK.broom` |
| `castle` | 城堡舞會 | 晚上 | 大廳、大時鐘 | `NIGHT`＋`SK.castle`／`CASTLE`＋`SK.clock` |
| `night` | 家門外 | 晚上 | 星星、南瓜 | `NIGHT`＋`NGROUND`＋`SK.stars` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `pumpkin` | 橘色大南瓜 | P06 | 變馬車（問答） | 現有 |
| `coach` | 南瓜馬車 | P06 | — | 現有 `SK.coach` |
| `slipper` | 玻璃鞋（亮亮的） | P07、P10–P12 | 問答 | 現有 `SK.slipper` |
| `clock` | 城堡大鐘，指針指 12 | P09、P10 | 問答 | 現有 `SK.clock` |
| `broom` | 掃把 | P01、P02 | — | 現有 `SK.broom` |

---

## 每一頁

### P01
EN: Cinderella worked hard all day. Sweep, sweep!
ZH: 灰姑娘每天都努力工作。掃、掃、掃！
劇情推進：認識主角。
畫面：`home`／中景
角色：`cin`＠中 — 掃地 — 努力
道具：`broom`
動畫：an-bob
翻頁：無
聲音：要重錄

### P02
EN: Her stepsisters were not kind. "Clean! Cook! Sweep!"
ZH: 姊姊們對她不好：「打掃！煮飯！掃地！」
劇情推進：困境。
畫面：`home`／中景
角色：`sis` 兩個＠左 — 指著她 — 得意；`cin`＠右 — 難過
道具：`broom`
動畫：sis an-shake
翻頁：無
聲音：要重錄

### P03
EN: The king had a big party at the castle.
ZH: 國王在城堡舉辦了一場大舞會。
劇情推進：事件。
畫面：`castle` 外／遠景
角色：—
道具：`SK.castle`、`SK.flag`
動畫：—
翻頁：無
聲音：沿用

### P04
EN: The sisters went to the ball. Cinderella had to stay home.
ZH: 姊姊們去參加舞會，灰姑娘只能留在家裡。
劇情推進：她不能去。
畫面：`night`／中景
角色：`sis` 兩個＠右 — 走向城堡；`cin`＠左 — 難過
道具：—
動畫：sis an-walk
翻頁：無
聲音：沿用

### P05
EN: A fairy came. "You can go to the party!"
ZH: 仙女來了：「你可以去舞會！」
劇情推進：幫手出現。
畫面：`night`／中景
角色：`fairy`＠右 — 揮魔杖 — 溫柔；`cin`＠左 — 驚喜
道具：—
動畫：fairy an-bob
翻頁：無
聲音：沿用

### P06
EN: The fairy made a pumpkin into a coach.
ZH: 仙女把南瓜變成了馬車。
劇情推進：魔法 1。
畫面：`night`／中景
角色：`fairy`＠左
道具：`pumpkin` → `coach`＠右、`SK.magic`
動畫：an-pop
翻頁：無
聲音：沿用

### P07
EN: Her old clothes became a beautiful dress and glass slippers!
ZH: 她的舊衣服變成漂亮的禮服，還有一雙玻璃鞋！
劇情推進：魔法 2。
畫面：`night`／中景
角色：`cin`＠中 — 轉圈 — 開心（薄荷綠禮服）
道具：`slipper`、`SK.magic`
動畫：an-bob
翻頁：無
聲音：沿用

### P08
EN: "Come home before twelve o'clock!" said the fairy.
ZH: 仙女說：「十二點以前要回家喔！」
劇情推進：埋下規則。
畫面：`night`／中景
角色：`fairy`＠右 — 舉一根手指 — 叮嚀；`cin`＠左 — 點頭
道具：`coach`
動畫：—
翻頁：無
聲音：要重錄

### P09
EN: Cinderella danced with the prince. Tick, tock, tick, tock...
ZH: 灰姑娘和王子跳舞。滴答、滴答……
劇情推進：快樂，但時間在走。
畫面：`castle` 大廳／中景
角色：`cin`＠中左、`prince`＠中右 — 跳舞 — 開心
道具：`clock`＠右上（指針快到 12）
動畫：an-bob
翻頁：有：時鐘快到 12
聲音：要重錄

### P10
EN: Dong! Twelve o'clock! She ran away and lost a shoe.
ZH: 噹！十二點了！她跑走時掉了一隻鞋子。
劇情推進：最高點；收回 P08。
畫面：`castle` 樓梯／中景
角色：`cin`＠右 — 跑 — 著急
道具：`slipper`＠左下（掉在樓梯上）、`clock`
動畫：an-walk
翻頁：無
聲音：要重錄

### P11
EN: The sisters tried the shoe. Too small! Too small!
ZH: 姊姊們試穿鞋子。太小了！太小了！
劇情推進：三次法則 1、2。
畫面：`home`／中景
角色：`sis` 兩個 — 用力穿 — 生氣；`prince`＠右 — 拿著鞋
道具：`slipper`
動畫：sis an-shake
翻頁：無
聲音：要重錄

### P12
EN: Then Cinderella tried it. It fit! Everyone was happy.
ZH: 換灰姑娘試穿，剛剛好！大家都好開心。
劇情推進：三次法則 3＋平安結局。
畫面：`home`／中景
角色：`cin`＠左 — 穿上鞋 — 開心；`prince`＠右 — 開心
道具：`slipper`（發光）
動畫：an-glow
翻頁：無
聲音：要重錄

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 什麼變成了馬車？ | What became a coach? | pumpkin | pumpkin / apple / cake |
| 灰姑娘掉了什麼？ | What did Cinderella lose? | shoe | shoe / hat / bag |
| 她幾點要回家？ | When did she have to go home? | clock | clock / sun / star |

## 給美術的待辦（這本）
1. 禮服顏色用薄荷綠（避開電影版的淺藍）。

## 錄音
要重錄 7 頁：P01、P02、P08、P09、P10、P11、P12。沿用 5 頁：P03、P04、P05、P06、P07（改名的見各頁）。

## 已寫進
`beta/content_beta_V6.js`（2026-11-22）。新的角色道具還沒畫好前，先用現有的圖代替（見「給美術的待辦」）。
