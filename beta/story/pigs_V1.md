# 三隻小豬 The Three Little Pigs｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `pigs`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
三隻小豬各自蓋房子：稻草、木頭、磚頭。大野狼說「讓我進去！」小豬說「不要！」大野狼就吹呀吹，吹倒稻草屋和木頭屋。小豬們都跑到磚頭屋，大野狼怎麼吹都吹不倒；他從煙囪爬下來，掉進熱水，哎唷哎唷地逃走了。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 重複句 | Little pig, let me come in! / No! / Huff, puff!（P05–P08） |
| 三次法則 | 稻草倒、木頭倒、磚頭不倒 |
| 翻頁驚喜 | P10 吹不倒 → P11 從煙囪下來 |
| 狀聲詞 | Huff, puff! Splash! |

## 和 V4 的差別
- 大野狼的經典台詞「我要吹呀吹」獨立一頁，孩子可以跟著吹氣。
- 拆開 V4 第 11 頁（16 個字太長）。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `pig1`/`pig2`/`pig3`（現有 `SK.animal` pig） | 三隻小豬，各戴一頂不同顏色的帽子（黃、咖啡、紅），讓孩子分得出來 | 帽：#FFD23F、#9A6A4F、#E85A5A | 開心、害怕、勇敢 | 蓋房子、跑、躲 | 現有；要加帽子 |
| `wolf`（現有 `SK.wolf`） | 灰色大野狼 | 灰 | 假笑、用力吹（臉頰鼓起）、燙到 | 吹氣、爬屋頂、逃跑 | 現有；要加「鼓臉頰吹氣」 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `field` | 草地 | 白天 | — | `GRASS` |
| `brickin` | 磚頭屋裡 | 白天 | 壁爐、熱水鍋 | `HOME`＋`FLOOR` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `straw` | 稻草屋 | P02、P05–P07 | 第 1 間 | 現有（V4 有 straw） |
| `sticks` | 木頭屋 | P03、P08 | 第 2 間 | 現有 |
| `brick` | 磚頭屋（有煙囪） | P04、P09–P12 | 第 3 間 | 現有 |
| `pot` | 壁爐上的大鍋 | P11 | — | 現有 `SK.cauldron` |
| `wind` | 吹氣的線條 | P07、P08、P10 | — | 新做（或用動畫） |

---

## 每一頁

### P01
EN: Three little pigs wanted to build their own houses.
ZH: 三隻小豬要蓋自己的房子。
劇情推進：認識主角。
畫面：`field`／中景
角色：`pig1`、`pig2`、`pig3` 一排 — 開心
道具：—
動畫：an-bob
翻頁：無
聲音：沿用

### P02
EN: The first pig built a house of straw.
ZH: 第一隻小豬用稻草蓋房子。
劇情推進：三次法則 1（很快）。
畫面：`field`／中景
角色：`pig1`＠左 — 很快蓋好、在睡覺
道具：`straw`＠右
動畫：—
翻頁：無
聲音：沿用

### P03
EN: The second pig built a house of sticks.
ZH: 第二隻小豬用木頭蓋房子。
劇情推進：三次法則 2。
畫面：`field`／中景
角色：`pig2`＠左 — 在玩
道具：`sticks`＠右
動畫：—
翻頁：無
聲音：沿用

### P04
EN: The third pig built a house of bricks.
ZH: 第三隻小豬用磚頭蓋房子。
劇情推進：三次法則 3（很辛苦，流汗）。
畫面：`field`／中景
角色：`pig3`＠左 — 搬磚頭 — 努力
道具：`brick`＠右
動畫：an-bob
翻頁：無
聲音：沿用

### P05
EN: "Little pig, let me come in!" "No, no, no!"
ZH: 「小豬小豬，讓我進去！」「不要，不要，不要！」
劇情推進：大野狼出現；重複句。
畫面：`field`／中景
角色：`wolf`＠右 — 敲門 — 假笑；`pig1` 窗內 — 搖頭
道具：`straw`＠左
動畫：wolf an-knock
翻頁：無
聲音：沿用

### P06
EN: "Then I'll huff and puff and blow your house down!"
ZH: 「那我就要吹呀吹，把你的房子吹倒！」
劇情推進：威脅。
畫面：`field`／特寫大野狼
角色：`wolf`＠中 — 吸一大口氣 — 得意
道具：—
動畫：—
翻頁：無
聲音：要重錄

### P07
EN: Huff, puff! The straw house fell down! Run!
ZH: 呼——！稻草屋倒了！快跑！
劇情推進：第 1 間倒。
畫面：`field`／中景
角色：`wolf`＠右 — 鼓臉頰吹；`pig1`＠左 — 逃跑 — 害怕
道具：`straw` 飛散、`wind`
動畫：an-shake
翻頁：無
聲音：要重錄

### P08
EN: "Let me come in!" "No!" Huff, puff! The sticks fell down!
ZH: 「讓我進去！」「不要！」呼——！木頭屋也倒了！
劇情推進：第 2 間倒（重複，但更快）。
畫面：`field`／中景
角色：`wolf`＠右；`pig1`、`pig2`＠左 — 逃跑
道具：`sticks` 散開、`wind`
動畫：an-shake
翻頁：無
聲音：要重錄

### P09
EN: Two little pigs ran to the brick house.
ZH: 兩隻小豬一起跑到磚頭屋。
劇情推進：集合。
畫面：`field`／中景
角色：`pig1`、`pig2`＠左 — 跑；`pig3`＠門口 — 揮手
道具：`brick`＠右
動畫：an-walk
翻頁：無
聲音：沿用

### P10
EN: Huff, puff, huff, puff! But the brick house did not fall.
ZH: 呼——呼——！可是磚頭屋一動也不動。
劇情推進：第 3 間不倒。
畫面：`field`／中景
角色：`wolf`＠右 — 吹到臉紅 — 生氣
道具：`brick`＠左（三隻小豬在窗口笑）
動畫：wolf an-shake
翻頁：有：大野狼還會怎麼做？
聲音：要重錄

### P11
EN: The wolf climbed down the chimney. Splash! Hot water!
ZH: 大野狼從煙囪爬下來。噗通！好燙的水！
劇情推進：大野狼的最後一招失敗。
畫面：`brickin`／中景
角色：`wolf` 從煙囪掉下來 — 驚嚇；`pig3`＠左 — 勇敢
道具：`pot`
動畫：an-pop
翻頁：無
聲音：要重錄

### P12
EN: "Ow, ow, ow!" The wolf ran away. The three pigs were safe!
ZH: 「哎唷哎唷！」大野狼逃走了。三隻小豬平安了！
劇情推進：平安結局。
畫面：`field`／全景
角色：`wolf` 遠處逃跑（很小）；三隻小豬＠前面 — 跳 — 開心
道具：`brick`
動畫：an-bob
翻頁：無
聲音：要重錄

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 哪一間房子最堅固？ | Which house was the strongest? | brick | brick / straw / sticks |
| 誰把房子吹倒？ | Who blew the houses down? | wolf | wolf / bear / duck |
| 有幾隻小豬？ | How many little pigs? | three | three / seven / five |

## 給美術的待辦（這本）
1. 三隻小豬加不同顏色的帽子。
2. `wolf` 加「鼓臉頰吹氣」的表情和吹氣線條。

## 錄音
要重錄 6 頁：P06、P07、P08、P10、P11、P12。沿用 6 頁：P01、P02、P03、P04、P05、P09（改名的見各頁）。

## 已寫進
`beta/content_beta_V6.js`（2026-11-22）。新的角色道具還沒畫好前，先用現有的圖代替（見「給美術的待辦」）。
