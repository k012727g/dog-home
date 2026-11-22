# 布萊梅樂隊 The Bremen Town Musicians｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `bremen`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
老驢子想去布萊梅當音樂家。路上遇到狗、貓、公雞，大家都說「跟我們一起來！」。天黑了，他們看見一間亮燈的房子，裡面有強盜在吃晚餐。四個朋友疊高高，一起大聲唱：咿啊！汪汪！喵！喔喔喔！強盜嚇跑了，一個偷偷回來又被嚇走。四個好朋友快樂地住在房子裡。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 累加 | 驢子 → ＋狗 → ＋貓＋公雞（P01–P03），每頁多一個 |
| 狀聲詞 | Hee-haw! Woof! Meow! Cock-a-doodle-doo!（P09）孩子會跟著叫 |
| 翻頁驚喜 | P08 疊高高 → P09 一起大叫 |
| 數字 | four（問答） |

## 和 V4 的差別
- 朋友一個一個加入（累加）。
- 疊高高和大叫分成兩頁，P09 全是叫聲。
- 拆開 V4 第 3 頁（13 個字）。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `donkey`（現有 `SK.animal` donkey） | 灰色老驢子 | 灰 | 想念、勇敢 | 走、站在最下面 | 現有 |
| `dog`、`cat`、`rooster`（現有 `SK.animal`） | 狗、貓、紅冠公雞 | — | 開心、大叫 | 疊高高 | 現有 |
| `robber`（現有 `G.robber`） | 強盜，黑衣面罩；滑稽不可怕 | #3A3A3A | 嚇一跳 | 吃飯、逃跑 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `road` | 鄉間路 | 白天 | — | `GRASS` |
| `nightroad` | 晚上的森林 | 晚上 | 月亮、星星 | `NIGHT`＋`SK.moonTop` |
| `robberhouse` | 亮燈的小屋 | 晚上 | 窗戶透出黃光 | `SK.house` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `notes` | 音符 | P01、P04、P09 | — | 現有 `SK.notes` |
| `table` | 強盜的餐桌（雞腿、麵包） | P07 | — | 現有 `SK.table` |

---

## 每一頁

### P01
EN: An old donkey wanted to be a musician.
ZH: 一隻老驢子想當音樂家。
劇情推進：認識主角。
畫面：`road`／中景
角色：`donkey`＠中 — 唱歌 — 想念
道具：`notes`
動畫：an-bob
翻頁：無
聲音：沿用

### P02
EN: On the road, he met a dog. "Come with me!"
ZH: 路上，他遇到一隻狗。「跟我一起來！」
劇情推進：＋狗。
畫面：`road`／中景
角色：`donkey`＠左；`dog`＠右 — 開心
道具：—
動畫：an-bob
翻頁：無
聲音：要重錄

### P03
EN: Then a cat. Then a rooster. "Come with us!"
ZH: 接著遇到貓，又遇到公雞。「跟我們一起來！」
劇情推進：＋貓＋公雞（四個到齊）。
畫面：`road`／全景
角色：`donkey`、`dog`、`cat`、`rooster` 一排
道具：—
動畫：an-bob
翻頁：無
聲音：要重錄

### P04
EN: "Let's go to Bremen and make music!"
ZH: 「我們去布萊梅玩音樂吧！」
劇情推進：目標。
畫面：`road`／中景
角色：四個朋友 — 走 — 開心
道具：`notes`
動畫：an-walk
翻頁：無
聲音：要重錄

### P05
EN: It was a long way. Night came, and they were hungry.
ZH: 路好遠，天黑了，他們好餓。
劇情推進：困難。
畫面：`nightroad`／中景
角色：四個朋友 — 累
道具：`SK.moonTop`
動畫：—
翻頁：無
聲音：沿用

### P06
EN: At night, they saw a house with a light.
ZH: 晚上，他們看見一間亮著燈的房子。
劇情推進：希望。
畫面：`nightroad`／遠景
角色：四個朋友＠左（小小的）
道具：`robberhouse`＠右
動畫：an-glow
翻頁：無
聲音：沿用

### P07
EN: Some robbers were eating dinner inside.
ZH: 裡面有一群強盜正在吃晚餐。
劇情推進：新的問題。
畫面：`robberhouse` 窗戶裡／中景
角色：`robber` 2 個 — 吃東西
道具：`table`
動畫：—
翻頁：無
聲音：沿用

### P08
EN: Up, up, up! Donkey, dog, cat, and rooster on top!
ZH: 疊高高！驢子、狗、貓，公雞在最上面！
劇情推進：計畫。
畫面：`robberhouse` 窗外／中景
角色：四個疊成一座塔
道具：—
動畫：an-bob
翻頁：有：要做什麼？
聲音：要重錄

### P09
EN: Hee-haw! Woof! Meow! Cock-a-doodle-doo!
ZH: 咿啊！汪汪！喵！喔喔喔！
劇情推進：最高點（孩子跟著叫）。
畫面：`robberhouse` 窗外／特寫
角色：四個疊高高 — 大叫
道具：`notes` 很多
動畫：an-shake
翻頁：無
聲音：要重錄

### P10
EN: The robbers were scared and ran away.
ZH: 強盜們嚇壞了，全都逃走了。
劇情推進：解決 1。
畫面：`nightroad`／中景
角色：`robber` 2 個 — 逃跑 — 嚇一跳
道具：—
動畫：an-walk
翻頁：無
聲音：沿用

### P11
EN: One robber came back. Meow! Woof! He ran away for good!
ZH: 一個強盜偷偷回來，喵！汪！他嚇得再也不敢回來了！
劇情推進：解決 2。
畫面：`robberhouse` 室內／中景
角色：`robber`＠右 — 逃跑；`cat`、`dog`＠左 — 叫
道具：—
動畫：an-shake
翻頁：無
聲音：沿用

### P12
EN: The four friends lived happily in the house.
ZH: 四個好朋友快樂地住在房子裡。
劇情推進：平安結局。
畫面：`robberhouse` 室內／中景
角色：四個朋友 — 唱歌 — 開心
道具：`notes`
動畫：an-bob
翻頁：無
聲音：沿用

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 有幾個好朋友？ | How many friends? | four | four / two / seven |
| 他們想做什麼？ | What did they want to make? | music | music / cake / bread |
| 誰在最上面？ | Who was on the top? | rooster | rooster / donkey / dog |

## 給美術的待辦（這本）
1. 四個疊高高的樣子（P08、P09）要清楚。

## 錄音
要重錄 5 頁：P02、P03、P04、P08、P09。沿用 7 頁：P01、P05、P06、P07、P10、P11、P12（改名的見各頁）。
