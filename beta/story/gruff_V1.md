# 三隻山羊嘎啦嘎啦 The Three Billy Goats Gruff｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `gruff`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
三隻山羊想去河對岸吃草，可是橋下住著愛生氣的山怪。小山羊踢踏過橋：「等我哥哥，他比較大！」中山羊也這樣說。大山羊踢踏踢踏好大聲地來了：「才不會呢！」碰！把山怪頂進河裡，山怪游走再也沒回來。三隻山羊吃了一整天的綠草。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 三次法則 | 小、中、大三隻山羊過橋 |
| 重複句 | Trip, trap!（越來越大聲）；"I will eat you!" |
| 翻頁驚喜 | P08 好大聲的腳步 → P09 大山羊的回答 |
| 數字／顏色 | three、green（問答） |

## 和 V4 的差別
- 新書。
- 山怪只是被頂進河裡游走（原版更兇），造型滑稽不嚇人。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `goat_s`/`goat_m`/`goat_b`（現有 `SK.goat`，大小 0.7／1／1.4） | 三隻公山羊，大的有大彎角和鬍子 | 白、灰 | 開心、緊張、勇敢 | 過橋、頂 | 現有；大山羊要加大彎角 |
| `troll` | 山怪：綠色、圓鼻子、亂頭髮、穿補丁衣服；**愛生氣但滑稽，不要尖牙** | #7FB069 | 生氣、驚訝、落水 | 從橋下探頭、掉進河、游走 | 新做 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `bridge` | 木橋＋河 | 白天 | 左岸光禿禿、右岸綠草地 | `SK.river`＋新做 `bridge` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `bridge` | 木板橋，橋下有黑黑的空間 | P02–P10 | 主要場景 | 新做 |
| `grass` | 右岸很綠的草 | P01、P12 | 目標 | `GRASS` |

---

## 每一頁

### P01
EN: Three goats saw green grass across the river.
ZH: 三隻山羊看到河對岸有綠綠的草。
劇情推進：目標。
畫面：`bridge`／遠景
角色：三隻山羊＠左岸 — 看對岸 — 想吃
道具：`bridge`、`grass`
動畫：an-bob
翻頁：無
聲音：新錄

### P02
EN: But under the bridge lived a grumpy troll.
ZH: 可是橋下住著一個愛生氣的山怪。
劇情推進：障礙。
畫面：`bridge` 橋下／中景
角色：`troll` — 從橋下探頭 — 生氣
道具：`bridge`
動畫：troll an-shake
翻頁：無
聲音：新錄

### P03
EN: Trip, trap! The little goat went first.
ZH: 踢踏、踢踏！最小的山羊先過橋。
劇情推進：第 1 隻。
畫面：`bridge`／中景
角色：`goat_s`＠橋上 — 走 — 緊張
道具：`bridge`
動畫：an-walk
翻頁：無
聲音：新錄

### P04
EN: "Who is that on my bridge? I will eat you!"
ZH: 「誰在我的橋上？我要吃掉你！」
劇情推進：山怪攔路；重複句。
畫面：`bridge`／中景
角色：`troll`＠右 — 跳上橋 — 生氣；`goat_s`＠左 — 嚇一跳
道具：`bridge`
動畫：troll an-shake
翻頁：無
聲音：新錄

### P05
EN: "Wait for my big brother. He is bigger!"
ZH: 「等我哥哥來吧，他比較大！」
劇情推進：小山羊的聰明辦法。
畫面：`bridge`／中景
角色：`goat_s`＠中 — 指後面 — 聰明；`troll`＠右 — 想一想
道具：`bridge`
動畫：—
翻頁：無
聲音：新錄

### P06
EN: Trip, trap! Trip, trap! The middle goat came.
ZH: 踢踏！踢踏！中山羊來了。
劇情推進：第 2 隻（腳步聲比較大）。
畫面：`bridge`／中景
角色：`goat_m`＠橋上 — 走
道具：`bridge`
動畫：an-walk
翻頁：無
聲音：新錄

### P07
EN: "I will eat you!" "Wait for my big brother!"
ZH: 「我要吃掉你！」「等我大哥來吧！」
劇情推進：重複。
畫面：`bridge`／中景
角色：`troll`＠右 — 生氣；`goat_m`＠左 — 指後面
道具：`bridge`
動畫：—
翻頁：無
聲音：新錄

### P08
EN: TRIP, TRAP! TRIP, TRAP! The big goat came.
ZH: 踢踏！踢踏！好大聲——大山羊來了。
劇情推進：第 3 隻（橋都在搖）。
畫面：`bridge`／中景
角色：`goat_b`＠橋上 — 走 — 勇敢
道具：`bridge`（在搖）
動畫：bridge an-shake
翻頁：有：大山羊會怎麼回答？
聲音：新錄

### P09
EN: "I will eat you!" "Oh no, you will not!"
ZH: 「我要吃掉你！」「才不會呢！」
劇情推進：第三次不一樣。
畫面：`bridge`／中景
角色：`troll`＠右；`goat_b`＠左 — 低頭準備頂 — 勇敢
道具：`bridge`
動畫：—
翻頁：無
聲音：新錄

### P10
EN: BUMP! The big goat pushed the troll into the river. Splash!
ZH: 碰！大山羊把山怪頂進河裡。噗通！
劇情推進：解決。
畫面：`bridge`／中景
角色：`goat_b`＠左；`troll`＠右 — 飛向河裡 — 驚訝
道具：`SK.river` 水花
動畫：an-pop
翻頁：無
聲音：新錄

### P11
EN: The troll swam far away and never came back.
ZH: 山怪游得遠遠的，再也沒回來。
劇情推進：溫和收尾（山怪沒受傷）。
畫面：`bridge` 下游／遠景
角色：`troll` — 游走（小小的）
道具：`SK.river`
動畫：an-walk
翻頁：無
聲音：新錄

### P12
EN: The three goats ate green grass all day. Yum!
ZH: 三隻山羊吃了一整天的綠草。好吃！
劇情推進：平安結局。
畫面：右岸草地／中景
角色：三隻山羊 — 吃草 — 開心
道具：`grass`、`SK.flower`
動畫：an-bob
翻頁：無
聲音：新錄

---

## 問答
| 題 | EN | 答案 | 選項 | 圖 |
|---|---|---|---|---|
| 有幾隻山羊？ | How many goats? | three | three / seven / five | 都有 |
| 草是什麼顏色？ | What color was the grass? | green | green / red / blue | 都有 |
| 山怪掉進了哪裡？ | Where did the troll fall? | river | river / tree / house | 都有 |

## 給美術的待辦（這本）
1. 新做 `troll`（滑稽不嚇人）和 `bridge`。
2. 大山羊加大彎角、鬍子。

## 錄音
新書，12 頁都要錄（`gruff-1` 到 `gruff-12`，英文＋中文）。

## 已寫進
`beta/content_beta_V6.js`（2026-11-22）。新的角色道具還沒畫好前，先用現有的圖代替（見「給美術的待辦」）。
