# 皮諾丘 Pinocchio｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `pino`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
老爺爺做了木偶皮諾丘，賣掉外套幫他買課本。皮諾丘沒去上學，還說謊說有去，鼻子變長；跑去玩具國長出驢耳朵。他跑回家，老爺爺不見了——被大魚吞進肚子。皮諾丘跳進海裡，在大魚肚子裡找到老爺爺，兩人一起游出來。他說了實話和對不起，這次鼻子沒有變長，最後變成真正的男孩。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 前面埋、後面收 | P05 說謊鼻子變長 → P11 說實話鼻子沒變長 |
| 翻頁驚喜 | P07「他在哪裡？」翻到 P08 大魚 |
| 圖說 | P03 老爺爺沒穿外套、發抖（文字只說賣了外套） |

## 和 V4 的差別
- 把說謊和鼻子變長放在同一頁（有因有果）。
- 新增「跑回家找不到老爺爺」那一頁。
- 結尾說實話時鼻子沒變長，收回伏筆。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `pino`（現有 `G.pino`） | 木頭小男孩，綠色背心、紅帽子，鼻子可以變長 | 背心 #5CC46E | 調皮、說謊（眼睛飄走）、害怕、勇敢、開心 | 走、跑、游泳 | 現有（第 4 個參數可改鼻子長度） |
| `gep`（現有 `G.gep`） | 老爺爺，白鬍子、眼鏡，咖啡色衣服 | #9A6A4F | 慈祥、冷（沒外套）、開心 | 做木偶、拿蠟燭、游泳 | 現有 |
| `bigfish`（現有 `SK.bigfish`） | 好大的藍色魚（不要鯊魚牙） | — | 張大嘴 | 游 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `shop` | 老爺爺的木工房 | 白天 | 木頭、工具 | `HOME`＋`FLOOR` |
| `school` | 學校門口 | 白天 | — | 新做（或 `SK.house`） |
| `toyland` | 玩具國 | 白天 | 旋轉木馬、氣球 | 新做 |
| `sea` | 大海 | 白天 | 浪 | `SEA`＋`SK.wave` |
| `fishin` | 大魚肚子裡 | 暗 | 蠟燭光 | `DEEP`＋`SK.candle` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `book` | 課本 | P03、P04 | 老爺爺的愛 | 現有 `SK.book` |
| `candle` | 小蠟燭 | P10 | 魚肚子裡的光 | 現有 `SK.candle` |
| `donkeyears` | 驢子耳朵（加在皮諾丘頭上） | P06 | — | 現有（V4 已有） |

---

## 每一頁

### P01
EN: An old man made a wooden puppet named Pinocchio.
ZH: 老爺爺做了一個木偶，叫做皮諾丘。
劇情推進：認識主角。
畫面：`shop`／中景
角色：`gep`＠左 — 刻木頭 — 慈祥；`pino`＠右 — 坐著
道具：—
動畫：—
翻頁：無
聲音：沿用

### P02
EN: Pinocchio could walk and talk!
ZH: 皮諾丘會走路，也會說話！
劇情推進：魔法。
畫面：`shop`／中景
角色：`pino`＠中 — 跳起來 — 開心；`gep`＠左 — 驚訝
道具：—
動畫：an-bob
翻頁：無
聲音：沿用

### P03
EN: Geppetto sold his coat to buy Pinocchio a school book.
ZH: 老爺爺賣了外套，買了一本課本給皮諾丘。
劇情推進：老爺爺的愛（圖：老爺爺沒外套在發抖）。
畫面：`shop`／中景
角色：`gep`＠左 — 發抖 — 慈祥；`pino`＠右 — 拿書
道具：`book`
動畫：gep an-shake
翻頁：無
聲音：沿用

### P04
EN: "Go to school!" But Pinocchio went to play.
ZH: 「去上學喔！」可是皮諾丘跑去玩了。
劇情推進：第一個錯。
畫面：路口／中景
角色：`pino`＠中 — 往反方向跑 — 調皮
道具：`book` 丟在地上
動畫：an-walk
翻頁：無
聲音：要重錄

### P05
EN: "Did you go to school?" "Yes!" His nose grew long.
ZH: 「你有去上學嗎？」「有！」他的鼻子變長了。
劇情推進：說謊 → 鼻子變長（埋伏筆）。
畫面：`shop`／中景
角色：`gep`＠左 — 問；`pino`＠右 — 眼睛飄走、鼻子變長
道具：—
動畫：an-pop
翻頁：無
聲音：要重錄

### P06
EN: He went to Toy Land. Oh no! He grew donkey ears!
ZH: 他跑去玩具國，糟糕！他長出了驢子耳朵！
劇情推進：第二個錯的後果。
畫面：`toyland`／中景
角色：`pino`＠中 — 摸頭 — 害怕
道具：`donkeyears`
動畫：an-shake
翻頁：無
聲音：沿用

### P07
EN: He ran home. But Geppetto was gone. "Where is he?"
ZH: 他跑回家，可是老爺爺不見了。「他在哪裡？」
劇情推進：後悔；找人。
畫面：`shop`（空的）／中景
角色：`pino`＠中 — 東張西望 — 著急
道具：空椅子
動畫：—
翻頁：有：老爺爺去哪了？
聲音：要重錄

### P08
EN: A big fish swallowed the old man.
ZH: 一條大魚把老爺爺吞進肚子裡。
劇情推進：揭曉。
畫面：`sea`／中景
角色：`bigfish`＠中 — 張大嘴；`gep` 小小的在嘴邊
道具：—
動畫：an-bob
翻頁：無
聲音：沿用（V4 的 `pino-7` 錄音，改名成 `pino-8`）

### P09
EN: Pinocchio jumped into the sea to find Geppetto.
ZH: 皮諾丘跳進大海去找老爺爺。
劇情推進：他變勇敢。
畫面：`sea`／中景
角色：`pino`＠中 — 跳水 — 勇敢
道具：—
動畫：an-pop
翻頁：無
聲音：沿用（V4 的 `pino-8` 錄音，改名成 `pino-9`）

### P10
EN: Inside the fish, he found Geppetto with a little candle.
ZH: 在大魚肚子裡，他找到拿著小蠟燭的老爺爺。
劇情推進：找到了。
畫面：`fishin`／中景
角色：`gep`＠右 — 驚喜；`pino`＠左 — 開心
道具：`candle`
動畫：an-glow
翻頁：無
聲音：沿用（V4 的 `pino-9` 錄音，改名成 `pino-10`）

### P11
EN: They swam out. "I am sorry, Father." His nose stayed small.
ZH: 他們一起游出來。「爸爸，對不起。」這次鼻子沒有變長。
劇情推進：說實話；收回 P05。
畫面：`sea` 岸邊／中景
角色：`pino`＠左 — 抱老爺爺 — 難過又開心（鼻子短短的）；`gep`＠右
道具：—
動畫：an-bob
翻頁：無
聲音：要重錄

### P12
EN: Pinocchio became a real boy!
ZH: 皮諾丘變成了真正的男孩！
劇情推進：平安結局。
畫面：`shop`／中景
角色：`pino`（真正男孩，皮膚是人的顏色）＠中 — 開心；`gep`＠右 — 開心
道具：`SK.magic`
動畫：an-glow
翻頁：無
聲音：沿用

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 他說謊的時候什麼變長了？ | What grew long when he lied? | nose | nose / ear / foot |
| 什麼吞下了老爺爺？ | What swallowed the old man? | fish | fish / bird / cat |
| 皮諾丘是用什麼做的？ | What was Pinocchio made of? | wood | wood / water / cake |

## 給美術的待辦（這本）
1. `toyland` 背景（旋轉木馬、氣球）。
2. P12 真正男孩的 `pino`（皮膚改人的顏色）。

## 錄音
要重錄 4 頁：P04、P05、P07、P11。沿用 8 頁：P01、P02、P03、P06、P08、P09、P10、P12（改名的見各頁）。
