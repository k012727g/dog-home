# 金髮女孩與三隻熊 Goldilocks and the Three Bears｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `goldi`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
三隻熊的湯太燙，先出去散步。金髮女孩走進他們家：喝湯（太燙、太涼、剛剛好）、坐椅子（太硬、太軟、坐壞了）、睡床（太硬、太軟、剛剛好）。熊回家發現：「有人喝了我的湯！」「有人坐壞了我的椅子！」「有人睡在我的床上……就是她！」她醒來道歉，還和小熊一起把椅子修好。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 三次法則（全書） | 湯、椅子、床各三次：熊爸爸 → 熊媽媽 → 小熊 |
| 重複句 | Too hot / too cold / just right!；Someone...! |
| 翻頁驚喜 | P10「就是她！」 |
| 溫和 | 結尾道歉＋一起修椅子（負責任） |

## 和 V4 的差別
- 每樣東西都完整做三次。
- 結尾改成道歉並一起修椅子（V4 是跑回家）。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `goldi`（現有 `G.goldi`） | 金色捲髮、粉紅裙子 | 裙 #FF9EC4 | 好奇、滿足、睏、驚嚇、抱歉 | 喝湯、坐、睡、道歉 | 現有 |
| `papa`/`mama`/`baby`（現有 `SK.animal` bear，大小 1.3／1.1／0.7） | 三隻熊；熊爸爸藍領巾、熊媽媽粉圍裙、小熊黃上衣 | #4A90E2、#FF8FB8、#FFD23F | 驚訝、難過（小熊）、原諒 | 散步、指著、修椅子 | 現有；要加領巾、圍裙、上衣 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `bearhome` | 熊的家（廚房） | 白天 | 桌子 | `HOME`＋`FLOOR`＋`SK.table` |
| `bedroom` | 樓上臥室 | 白天 | 三張床 | `HOME`＋`SK.bed` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `bowl` | 三個碗：大、中、小 | P02、P04、P05、P08 | 湯（問答） | 現有 `SK.bowl` |
| `chair` | 三張椅子：大、中、小（小的會壞） | P06、P09、P12 | — | 現有 `SK.chair` |
| `bed` | 三張床：大、中、小 | P07、P10 | 問答 | 現有 `SK.bed` |

---

## 每一頁

### P01
EN: Three bears lived in a house in the woods.
ZH: 三隻熊住在森林裡的房子。
劇情推進：認識主角。
畫面：森林小屋外／中景
角色：`papa`、`mama`、`baby` 一排 — 開心
道具：`SK.house`
動畫：an-bob
翻頁：無
聲音：沿用

### P02
EN: Their soup was too hot, so they went for a walk.
ZH: 湯太燙了，他們先出去散步。
劇情推進：空屋。
畫面：`bearhome`／中景
角色：三隻熊＠右 — 走出門
道具：`bowl` 三個（冒煙）
動畫：an-walk
翻頁：無
聲音：要重錄

### P03
EN: A girl named Goldilocks came in.
ZH: 一個叫金髮女孩的女孩走了進來。
劇情推進：闖入者。
畫面：`bearhome`／中景
角色：`goldi`＠左 — 探頭 — 好奇
道具：`bowl` 三個
動畫：—
翻頁：無
聲音：沿用

### P04
EN: Papa's soup was too hot. Mama's soup was too cold.
ZH: 爸爸的湯太燙，媽媽的湯太涼。
劇情推進：湯 1、2。
畫面：`bearhome` 桌邊／中景
角色：`goldi`＠中 — 吐舌頭（燙）、發抖（涼）
道具：`bowl` 大、中
動畫：—
翻頁：無
聲音：要重錄

### P05
EN: Baby's soup was just right! She ate it all up.
ZH: 小熊的湯剛剛好！她全部喝光了。
劇情推進：湯 3。
畫面：`bearhome` 桌邊／中景
角色：`goldi`＠中 — 滿足
道具：`bowl` 小（空的）
動畫：an-bob
翻頁：無
聲音：要重錄

### P06
EN: Papa's chair, too hard. Mama's chair, too soft. Baby's chair... crack!
ZH: 爸爸的椅子太硬，媽媽的太軟，小熊的……喀啦！
劇情推進：椅子 1、2、3。
畫面：`bearhome`／中景
角色：`goldi`＠右 — 跌坐地上 — 驚嚇
道具：`chair` 大、中、小（壞了）
動畫：an-shake
翻頁：無
聲音：要重錄

### P07
EN: Upstairs: too hard, too soft... just right! Zzz...
ZH: 樓上的床：太硬、太軟……剛剛好！呼嚕嚕……
劇情推進：床 1、2、3。
畫面：`bedroom`／中景
角色：`goldi` 在小床上 — 睡著
道具：`bed` 三張、`SK.zz`
動畫：—
翻頁：無
聲音：要重錄

### P08
EN: The bears came home. "Someone ate my soup!" said Baby Bear.
ZH: 熊回家了。小熊說：「有人喝了我的湯！」
劇情推進：發現 1。
畫面：`bearhome`／中景
角色：`baby`＠中 — 指著空碗 — 難過；`papa`、`mama`＠右 — 驚訝
道具：`bowl` 小（空）
動畫：baby an-shake
翻頁：無
聲音：要重錄

### P09
EN: "Someone broke my chair!" said Baby Bear.
ZH: 小熊說：「有人坐壞了我的椅子！」
劇情推進：發現 2。
畫面：`bearhome`／中景
角色：`baby`＠中 — 哭 — 難過；`papa`＠右
道具：`chair` 小（壞）
動畫：baby an-shake
翻頁：無
聲音：要重錄

### P10
EN: "Someone is sleeping in my bed... and here she is!"
ZH: 「有人睡在我的床上……就是她！」
劇情推進：發現 3（最高點）。
畫面：`bedroom`／中景
角色：`baby`＠右 — 指著 — 驚訝；`goldi` 在小床上 — 睡著
道具：`bed` 小
動畫：—
翻頁：有：翻頁看到她醒來
聲音：要重錄

### P11
EN: Goldilocks woke up. "Oh! Three bears!"
ZH: 金髮女孩醒來了。「哇！三隻熊！」
劇情推進：面對。
畫面：`bedroom`／中景
角色：`goldi`＠左 — 坐起來 — 驚嚇；三隻熊＠右 — 看著她
道具：`bed`
動畫：goldi an-pop
翻頁：無
聲音：要重錄

### P12
EN: "I am sorry," she said. She fixed the chair with Baby Bear.
ZH: 她說：「對不起。」還和小熊一起把椅子修好。
劇情推進：溫和結局：道歉、負責。
畫面：`bearhome`／中景
角色：`goldi`＠左、`baby`＠右 — 一起修 — 開心
道具：`chair` 小（修好）
動畫：an-bob
翻頁：無
聲音：要重錄

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 有幾隻熊？ | How many bears? | three | three / seven / five |
| 她喝了什麼？ | What did she eat? | soup | soup / cake / apple |
| 她在哪裡睡著了？ | Where did she fall asleep? | bed | bed / tree / box |

## 給美術的待辦（這本）
1. 三隻熊加領巾、圍裙、上衣，好分辨。
2. `chair` 加「壞掉」和「修好」兩個樣子。

## 錄音
要重錄 10 頁：P02、P04、P05、P06、P07、P08、P09、P10、P11、P12。沿用 2 頁：P01、P03（改名的見各頁）。
