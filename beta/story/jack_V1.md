# 傑克與魔豆 Jack and the Beanstalk｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `jack`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
傑克和媽媽很窮，媽媽叫他賣掉乳牛，他卻換回魔法豆子。媽媽氣得把豆子丟出窗外，第二天長出好高的豆莖。傑克爬到雲上，看見城堡和巨人，巨人大喊「Fee-fi-fo-fum!」，傑克躲起來。巨人有會生金蛋的鵝；巨人睡著時，傑克抱著鵝溜走。巨人醒來追下來，傑克喊媽媽幫忙砍豆莖，巨人嚇得爬回去。從此他們不再窮。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 重複句 | Fee-fi-fo-fum!（P07、P10） |
| 狀聲詞 | Up, up, up（P05）；Tiptoe（P09）；Chop, chop（P11） |
| 翻頁驚喜 | P03 豆子丟出窗外 → P04 第二天早上…… |

## 和 V4 的差別
- 拿掉豎琴，故事更短更清楚。
- 巨人沒有摔下來，是嚇得爬回去（溫和）。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `jack`（現有 `G.jack`） | 咖啡色短髮、藍衣服 | #4A90E2 | 開心、害怕、勇敢 | 爬、躲、抱鵝、跑 | 現有 |
| `mom`（現有 `G.mom`） | 傑克的媽媽 | #B9A99C | 生氣、擔心、開心 | 丟豆子、拿斧頭砍豆莖 | 現有 |
| `giant` | 好大的巨人，只露出腳和半個身體也可以；圓圓的、不恐怖 | — | 大喊、睡著、驚嚇 | 走、睡、爬 | 現有畫法：V4 用 `SK.person` 放大 1.8 倍＋鬍子；要不要畫專屬巨人，給美術決定 |
| `goose`（現有 `SK.animal` goose） | 白色鵝 | 白 | — | 生金蛋 | 現有 |
| `cow`（現有 `SK.animal` cow） | 乳牛 | — | — | — | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `hut` | 傑克家（小破屋） | 白天 | 窗戶 | `SK.hut` |
| `sky` | 雲上面 | 白天 | 雲、城堡 | `SK.cloud`＋`SK.castle` |
| `giantroom` | 巨人的大桌子 | 白天 | 巨大的桌腳 | 新做（或 `CASTLE`） |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `beans` | 五顆發光的豆子 | P02、P03 | — | 現有 `SK.beans` |
| `beanstalk` | 好高的豆莖 | P04、P05、P11 | — | 現有 `SK.beanstalk` |
| `goldegg` | 金蛋 | P08、P12 | — | 現有 `SK.goldegg` |
| `axe` | 小斧頭（只砍豆莖） | P11 | — | 新做 |

---

## 每一頁

### P01
EN: Jack and his mother were very poor.
ZH: 傑克和媽媽很窮。
劇情推進：認識主角。
畫面：`hut`／中景
角色：`jack`＠左、`mom`＠右 — 難過
道具：`cow`
動畫：—
翻頁：無
聲音：沿用

### P02
EN: "Sell our cow," said Mother. Jack got magic beans instead.
ZH: 媽媽說：「把乳牛賣掉。」傑克卻換來了魔法豆子。
劇情推進：起因。
畫面：路上／中景
角色：`jack`＠左 — 拿豆子 — 開心；`cow`＠右 被牽走
道具：`beans`
動畫：an-bob
翻頁：無
聲音：要重錄

### P03
EN: Mother was angry and threw the beans out the window.
ZH: 媽媽很生氣，把豆子丟出窗外。
劇情推進：好像失敗了。
畫面：`hut`／中景
角色：`mom`＠中 — 丟 — 生氣；`jack`＠左 — 難過
道具：`beans` 飛出窗
動畫：mom an-shake
翻頁：有：第二天會怎樣？
聲音：沿用

### P04
EN: The next morning, there was a giant beanstalk!
ZH: 第二天早上，竟然長出一棵好高好高的豆莖！
劇情推進：魔法。
畫面：`hut` 外／全景（直的構圖）
角色：`jack`＠左 — 抬頭 — 驚訝
道具：`beanstalk`
動畫：an-sway
翻頁：無
聲音：要重錄

### P05
EN: Jack climbed up, up, up to the clouds.
ZH: 傑克往上爬、往上爬，爬到了雲上面。
劇情推進：冒險開始。
畫面：`sky`／中景
角色：`jack`＠中 — 爬
道具：`beanstalk`、`SK.cloud`
動畫：an-bob
翻頁：無
聲音：要重錄

### P06
EN: He saw a castle and a giant.
ZH: 他看見一座城堡和一個巨人。
劇情推進：新世界。
畫面：`sky`／全景
角色：`jack`＠左（小小的）；`giant`＠右（只露出腳）
道具：`SK.castle`
動畫：—
翻頁：無
聲音：沿用

### P07
EN: "Fee-fi-fo-fum!" shouted the giant. Jack hid.
ZH: 巨人大聲說：「我聞到小孩的味道！」傑克趕快躲起來。
劇情推進：危險；重複句第 1 次。
畫面：`giantroom`／中景
角色：`giant`＠右 — 大喊（嘴巴大大）；`jack`＠左 — 躲在杯子後 — 害怕
道具：—
動畫：giant an-shake
翻頁：無
聲音：沿用

### P08
EN: The giant had a goose that laid golden eggs.
ZH: 巨人有一隻會生金蛋的鵝。
劇情推進：寶物。
畫面：`giantroom`／中景
角色：`goose`＠中
道具：`goldegg`
動畫：an-glow
翻頁：無
聲音：沿用

### P09
EN: The giant fell asleep. Jack took the goose. Tiptoe, tiptoe.
ZH: 巨人睡著了，傑克抱起鵝，躡手躡腳……
劇情推進：行動。
畫面：`giantroom`／中景
角色：`giant`＠右 — 睡著；`jack`＠左 — 抱著 `goose` — 小心
道具：`SK.zz`
動畫：—
翻頁：無
聲音：要重錄

### P10
EN: "Fee-fi-fo-fum!" The giant woke up and climbed down too!
ZH: 「我聞到小孩的味道！」巨人醒了，也爬下來了！
劇情推進：最高點；重複句第 2 次。
畫面：`beanstalk` 上半／中景
角色：`jack`＠下 — 快爬；`giant` 的腳＠上
道具：`beanstalk`
動畫：beanstalk an-shake
翻頁：無
聲音：要重錄

### P11
EN: Chop, chop! The giant climbed back up. Down came the beanstalk!
ZH: 砍、砍！巨人嚇得爬回去，豆莖倒下來了！
劇情推進：解決（巨人沒受傷）。
畫面：`hut` 外／中景
角色：`mom`＠右 — 砍豆莖 — 勇敢；`jack`＠左 — 抱著鵝
道具：`axe`、`beanstalk`（倒下）
動畫：an-shake
翻頁：無
聲音：要重錄

### P12
EN: Jack and his mother were never poor again.
ZH: 傑克和媽媽再也不窮了。
劇情推進：平安結局。
畫面：`hut`／中景
角色：`jack`、`mom` — 開心；`goose`＠中
道具：`goldegg` 一籃
動畫：an-bob
翻頁：無
聲音：沿用

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 傑克用什麼換了豆子？ | What did Jack trade for the beans? | cow | cow / pig / dog |
| 什麼會生金蛋？ | What laid golden eggs? | goose | goose / hen / duck |
| 傑克爬到了哪裡？ | Where did Jack climb to? | cloud | cloud / tree / house |

## 給美術的待辦（這本）
1. art.js 沒有巨人（V4 用放大的 `SK.person`）；要不要新做專屬的 `giant`（圓圓的、不恐怖）請美術決定。
2. 新做 `axe` 小斧頭。

## 錄音
要重錄 6 頁：P02、P04、P05、P09、P10、P11。沿用 6 頁：P01、P03、P06、P07、P08、P12（改名的見各頁）。

## 已寫進
`beta/content_beta_V6.js`（2026-11-22）。新的角色道具還沒畫好前，先用現有的圖代替（見「給美術的待辦」）。
