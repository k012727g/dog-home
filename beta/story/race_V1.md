# 龜兔賽跑 The Tortoise and the Hare｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `race`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
兔子跑很快、烏龜爬很慢，兔子笑烏龜慢，烏龜說「我們來比賽！」兔子咻一下跑好遠，覺得時間很多就睡午覺。烏龜一步一步，太陽很熱也不停，爬過睡著的兔子。兔子醒來咻地追，可是來不及了。烏龜贏了：慢慢來，不放棄，就會贏！

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 重複句 | Step, step, step（P07、P08）；Zoom!（P05、P10） |
| 翻頁驚喜 | P09 噓——爬過兔子 → P10 兔子醒來 |
| 圖說 | 兔子睡覺的那幾頁，背景的太陽慢慢移動 |
| 道理收尾 | Slow and steady wins! |

## 和 V4 的差別
- 改成烏龜提議比賽（原版寓言）。
- 「一步、一步」變成重複句，孩子可以跟著唸。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `hare`（現有 `SK.animal` hare） | 白色兔子、長耳朵 | — | 得意、睏、著急 | 跑、睡、追 | 現有 |
| `tortoise`（現有 `SK.animal` tortoise） | 綠色烏龜 | #5CC46E | 堅定、累、開心 | 慢慢爬 | 現有 |
| `crowd`（現有動物） | 來看比賽的動物（貓、狗、鴨） | — | 歡呼 | 跳 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `track` | 比賽的草地小路 | 白天 | 起點、終點旗子 | `GRASS`＋`SK.flag` |
| `hill` | 大樹下 | 白天（太陽很大） | 大樹 | `SK.tree` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `flag` | 終點旗子 | P04、P11、P12 | — | 現有 `SK.flag` |
| `sun` | 大太陽（有汗水線） | P08 | — | 現有 |
| `medal` | 金牌 | P12 | — | 新做（或用 `SK.star`） |

---

## 每一頁

### P01
EN: Hare was very fast. Tortoise was very slow.
ZH: 兔子跑得很快，烏龜爬得很慢。
劇情推進：認識兩個主角。
畫面：`track`／中景
角色：`hare`＠左 — 跳 — 得意；`tortoise`＠右 — 慢慢爬
道具：—
動畫：hare an-bob
翻頁：無
聲音：沿用

### P02
EN: The hare laughed. "You are so slow!"
ZH: 兔子笑烏龜：「你好慢喔！」
劇情推進：衝突。
畫面：`track`／中景
角色：`hare`＠左 — 大笑；`tortoise`＠右 — 不服氣
道具：—
動畫：hare an-shake
翻頁：無
聲音：沿用

### P03
EN: "Let's have a race!" said Tortoise.
ZH: 烏龜說：「我們來比賽吧！」
劇情推進：挑戰。
畫面：`track`／中景
角色：`tortoise`＠右 — 抬頭 — 堅定；`hare`＠左 — 驚訝
道具：—
動畫：—
翻頁：無
聲音：要重錄

### P04
EN: All the animals came to watch. Ready, set, go!
ZH: 動物們都來看比賽。預備，開始！
劇情推進：比賽開始。
畫面：`track` 起點／全景
角色：`crowd` 2 隻＠後；`hare`、`tortoise` 起跑
道具：`flag`
動畫：an-bob
翻頁：無
聲音：沿用

### P05
EN: Zoom! Hare ran far ahead.
ZH: 咻——！兔子一下子跑得好遠。
劇情推進：兔子領先。
畫面：`track`／遠景
角色：`hare`＠右（遠）— 跑；`tortoise`＠左 — 爬
道具：—
動畫：hare an-walk
翻頁：無
聲音：要重錄

### P06
EN: "I have lots of time," said Hare. He took a nap.
ZH: 兔子說：「我時間很多。」就睡了一覺。
劇情推進：兔子犯錯。
畫面：`hill`／中景
角色：`hare`＠中 — 躺在樹下睡
道具：`SK.zz`
動畫：—
翻頁：無
聲音：沿用

### P07
EN: Step, step, step. Tortoise kept going, slow and steady.
ZH: 一步、一步、一步，烏龜慢慢地往前爬。
劇情推進：烏龜不放棄；重複句。
畫面：`track`／中景
角色：`tortoise`＠中 — 爬 — 堅定
道具：—
動畫：an-walk
翻頁：無
聲音：要重錄

### P08
EN: The sun was hot. Step, step, step. Tortoise did not stop.
ZH: 太陽好熱。一步、一步，烏龜沒有停下來。
劇情推進：更辛苦，還是不停。
畫面：`track`／中景
角色：`tortoise`＠中 — 流汗 — 累但堅定
道具：`sun`
動畫：an-walk
翻頁：無
聲音：要重錄

### P09
EN: Tortoise passed the sleeping Hare. Shh!
ZH: 烏龜爬過了睡著的兔子。噓——！
劇情推進：超前。
畫面：`hill`／中景
角色：`hare`＠左 — 睡；`tortoise`＠右 — 輕輕爬過
道具：`SK.zz`
動畫：—
翻頁：有：兔子會醒嗎？
聲音：要重錄

### P10
EN: Hare woke up. Zoom! But it was too late!
ZH: 兔子醒來。咻——！可是來不及了！
劇情推進：兔子追不上。
畫面：`track`／中景
角色：`hare`＠左 — 拚命跑 — 著急；`tortoise`＠右 — 快到終點
道具：`flag`＠右
動畫：hare an-walk
翻頁：無
聲音：要重錄

### P11
EN: All the animals cheered for the tortoise!
ZH: 動物們都為烏龜歡呼！
劇情推進：勝利。
畫面：`track` 終點／全景
角色：`crowd` 2 隻 — 歡呼；`tortoise`＠中 — 開心
道具：`flag`
動畫：an-bob
翻頁：無
聲音：沿用

### P12
EN: Tortoise won the race! Slow and steady wins!
ZH: 烏龜贏了！慢慢來，不放棄，就會贏！
劇情推進：結局＋道理。
畫面：`track`／中景
角色：`tortoise`＠中 — 戴金牌 — 開心；`hare`＠右 — 拍手（服氣）
道具：`medal`
動畫：an-glow
翻頁：無
聲音：要重錄

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 誰贏了比賽？ | Who won the race? | tortoise | tortoise / hare / dog |
| 兔子比賽時做了什麼？ | What did Hare do in the race? | sleep | sleep / eat / sing |
| 誰很慢？ | Who was slow? | tortoise | tortoise / hare / bird |

## 給美術的待辦（這本）
1. 新做 `medal` 金牌（或用星星代替）。

## 錄音
要重錄 7 頁：P03、P05、P07、P08、P09、P10、P12。沿用 5 頁：P01、P02、P04、P06、P11（改名的見各頁）。

## 已寫進
`beta/content_beta_V6.js`（2026-11-22）。新的角色道具還沒畫好前，先用現有的圖代替（見「給美術的待辦」）。
