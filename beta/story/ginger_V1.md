# 薑餅人 The Gingerbread Man｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `ginger`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
老婆婆烤了一個薑餅人，他跳起來跑走：「快跑快跑，你們抓不到我！」老婆婆、乳牛、馬都追不到。他跑到河邊不會游泳，狐狸說：跳到我尾巴上、背上、鼻子上……狐狸張開嘴巴——啊嗚！可是薑餅人一跳，跳到岸上，平安跑回家。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 重複句 | Run, run, fast as you can! You can't catch me!（P04、P06） |
| 三次法則 | 尾巴 → 背 → 鼻子（越來越靠近嘴巴） |
| 翻頁驚喜 | P10 狐狸張開嘴 → P11 他跳開了 |
| 溫和 | 原版被吃掉；這裡改成逃走，道理一樣：要小心不認識的人 |

## 和 V4 的差別
- 結局改成薑餅人自己跳開、平安回家（V4 是被吃掉）。
- 重複句縮短到 10 個字。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `ginger`（現有 `SK.ginger`） | 薑餅人：葡萄乾眼睛、櫻桃嘴、白色糖霜線 | 咖啡 #C98A4B | 得意、害怕、機靈 | 跑、跳、坐在狐狸身上 | 現有 |
| `oldw`（現有 `SK.oldw`） | 老婆婆（圍裙） | — | 驚訝 | 追 | 現有 |
| `cow`、`horse`（現有） | 乳牛、馬 | — | 著急 | 追 | 現有 |
| `fox`（現有 `SK.animal` fox） | 橘色狐狸，笑瞇瞇（看起來很友善，其實想吃） | #FF9A3C | 假笑 | 游泳、張嘴 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `kitchen` | 廚房 | 白天 | 烤箱 | `HOME`＋`SK.oven` |
| `road` | 鄉間小路 | 白天 | — | `GRASS` |
| `river` | 河邊 | 白天 | 河、對岸 | `SK.river` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `oven` | 烤箱 | P01、P03 | — | 現有 `SK.oven` |

---

## 每一頁

### P01
EN: An old woman baked a gingerbread man.
ZH: 老婆婆烤了一個薑餅人。
劇情推進：開始。
畫面：`kitchen`／中景
角色：`oldw`＠左 — 開心
道具：`oven`、`ginger`（在盤子上）
動畫：—
翻頁：無
聲音：沿用

### P02
EN: He had raisin eyes and a cherry smile.
ZH: 他有葡萄乾眼睛和櫻桃嘴巴。
劇情推進：認識主角（特寫）。
畫面：`kitchen`／特寫
角色：`ginger`＠中 — 微笑
道具：—
動畫：an-bob
翻頁：無
聲音：沿用

### P03
EN: He jumped up and ran away!
ZH: 他跳起來跑走了！
劇情推進：事件。
畫面：`kitchen`／中景
角色：`ginger`＠右 — 跳下盤子；`oldw`＠左 — 驚訝
道具：`oven`
動畫：an-pop
翻頁：無
聲音：沿用

### P04
EN: "Run, run, fast as you can! You can't catch me!"
ZH: 「快跑快跑，你們抓不到我！」
劇情推進：重複句第 1 次。
畫面：`road`／中景
角色：`ginger`＠中 — 跑 — 得意
道具：—
動畫：an-walk
翻頁：無
聲音：要重錄

### P05
EN: The old woman and the cow ran after him.
ZH: 老婆婆和乳牛都在後面追。
劇情推進：追 1。
畫面：`road`／中景
角色：`ginger`＠右；`oldw`、`cow`＠左 — 追
道具：—
動畫：an-walk
翻頁：無
聲音：沿用

### P06
EN: A horse ran after him too. "Run, run, fast as you can!"
ZH: 馬也追過來了。「快跑快跑，抓不到我！」
劇情推進：追 2；重複句第 2 次。
畫面：`road`／中景
角色：`ginger`＠右；`horse`＠左 — 追
道具：—
動畫：an-walk
翻頁：無
聲音：要重錄

### P07
EN: Nobody could catch him. Then he came to a river.
ZH: 沒有人抓得到他。然後，他跑到一條河邊。
劇情推進：新的問題。
畫面：`river`／中景
角色：`ginger`＠左 — 停下來 — 擔心
道具：`SK.river`
動畫：—
翻頁：無
聲音：要重錄

### P08
EN: He could not swim. "Jump on my tail," said the fox.
ZH: 他不會游泳。狐狸說：「跳到我的尾巴上。」
劇情推進：狐狸出現；三次法則 1。
畫面：`river`／中景
角色：`fox`＠右 — 假笑；`ginger`＠左 — 猶豫
道具：`SK.river`
動畫：fox an-bob
翻頁：無
聲音：要重錄

### P09
EN: "Jump on my back," said the fox. "It is drier."
ZH: 狐狸說：「跳到我的背上，比較不會濕。」
劇情推進：三次法則 2。
畫面：`river`／中景
角色：`fox`＠中 — 游；`ginger` 在背上
道具：`SK.river`
動畫：an-bob
翻頁：無
聲音：沿用（V4 的 `ginger-10` 錄音，改名成 `ginger-9`）

### P10
EN: "Now jump on my nose!" The fox opened his mouth...
ZH: 「現在跳到我的鼻子上！」狐狸張開了嘴巴……
劇情推進：三次法則 3（危險）。
畫面：`river`／特寫
角色：`fox` — 張嘴（不露尖牙）；`ginger` 在鼻子上 — 害怕
道具：—
動畫：—
翻頁：有：會被吃掉嗎？
聲音：要重錄

### P11
EN: Snap! But the Gingerbread Man jumped to the riverbank!
ZH: 啊嗚！可是薑餅人一跳，跳到了岸上！
劇情推進：解決。
畫面：`river` 對岸／中景
角色：`ginger`＠右 — 跳到岸上 — 機靈；`fox`＠左 — 咬空 — 驚訝
道具：—
動畫：an-pop
翻頁：無
聲音：要重錄

### P12
EN: He ran home, safe. Be careful who you trust!
ZH: 他平安跑回家了。要小心不認識的人喔！
劇情推進：溫和結局＋道理。
畫面：`kitchen` 門口／中景
角色：`ginger`＠右 — 抱住老婆婆；`oldw`＠左 — 開心
道具：—
動畫：an-bob
翻頁：無
聲音：要重錄

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 誰想吃掉薑餅人？ | Who wanted to eat him? | fox | fox / cow / cat |
| 他跑到了哪裡？ | Where did he come to? | river | river / tree / house |
| 薑餅人是什麼做的？ | What was he made of? | cookie | cookie / apple / fish |

## 給美術的待辦（這本）
1. `fox` 張嘴的樣子不要露尖牙。
2. `horse` 在 art.js 已有（V4 補畫）。

## 錄音
要重錄 7 頁：P04、P06、P07、P08、P10、P11、P12。沿用 5 頁：P01、P02、P03、P05、P09（改名的見各頁）。

## 已寫進
`beta/content_beta_V6.js`（2026-11-22）。新的角色道具還沒畫好前，先用現有的圖代替（見「給美術的待辦」）。
