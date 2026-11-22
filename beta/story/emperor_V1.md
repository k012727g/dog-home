# 國王的新衣 The Emperor's New Clothes｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `emperor`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
很愛新衣服的國王，遇到兩個騙子說會做「只有聰明人才看得見」的魔法衣服。他們假裝剪剪縫縫。大臣、國王、大家其實都看不見，卻都說「好漂亮！」。遊行時一個小孩大聲說「國王沒有穿衣服！」，大家笑了，騙子帶著金子逃走。國王也笑了：「謝謝你說實話！」

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 重複句＋三次法則 | "How beautiful!"：大臣（P05）→ 國王（P06）→ 大家（P08）；第四個聲音（小孩）不一樣 |
| 翻頁驚喜 | P08 大家都說漂亮 → P09 小孩說真話 |
| 圖說 | 國王一直穿著內衣褲（文字說「魔法衣服」，圖說真相，孩子會笑） |
| 溫和結局 | 國王自己也笑、謝謝小孩 |

## 和 V4 的差別
- 「好漂亮」做三次。
- 結尾國王謝謝說實話的小孩（V4 是一句道理）。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `emp`（現有 `G.emp`） | 國王：皇冠、紫色衣服；「新衣服」那幾頁穿**白色內衣＋條紋短褲**（不裸體） | 紫 #9B6BD6 | 愛漂亮、假裝、臉紅、大笑 | 照鏡子、遊行、笑 | 現有（`G.emp` 加 `{body:'undies'}` 就是內衣版） |
| `trick`（現有 `G.man` 兩個） | 兩個騙子，細長鬍子、黑帽子；滑稽不可怕 | #3A3A3A、#7A5A6A | 狡猾地笑 | 拿空氣剪刀、抱金子跑 | 現有 |
| `minister`（現有 `G.man`） | 大臣，戴眼鏡 | #4A90E2 | 冒汗、假裝 | 瞇眼看 | 現有 |
| `kid`（現有 `G.kid`） | 小孩，騎在爸爸肩膀上 | #FFB86B | 誠實、指著 | 指 | 現有 |
| `crowd`（現有 `G.man`） | 路人 2 個 | — | 拍手、笑 | — | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `palace` | 皇宮 | 白天 | — | `CASTLE` |
| `street` | 遊行的街道 | 白天 | 旗子 | `GRASS`＋`SK.flag` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `scissors` | 剪刀 | P04 | 假裝做衣服 | 新做（和 goats 共用） |
| `mirror` | 大鏡子 | P06 | — | 現有 `SK.mirror` |
| `gold` | 一袋金子 | P02、P11 | — | 新做（或 `SK.sack`＋金色） |
| `loom` | 織布機 | P04 | — | 現有 `SK.loom` |

---

## 每一頁

### P01
EN: There was an emperor who loved new clothes.
ZH: 有一位很愛新衣服的國王。
劇情推進：認識主角。
畫面：`palace`／中景
角色：`emp`＠中 — 轉圈 — 愛漂亮
道具：衣架上很多衣服
動畫：an-bob
翻頁：無
聲音：沿用

### P02
EN: Two men said, "We can make magic clothes."
ZH: 兩個人說：「我們會做魔法衣服。」
劇情推進：騙子出場。
畫面：`palace`／中景
角色：`trick` 兩個＠右 — 狡猾地笑；`emp`＠左 — 好奇
道具：`gold`
動畫：—
翻頁：無
聲音：沿用

### P03
EN: "Only clever people can see them!" they said.
ZH: 他們說：「只有聰明的人才看得見！」
劇情推進：騙術的規則。
畫面：`palace`／中景
角色：`trick` 兩個 — 舉一根手指
道具：—
動畫：—
翻頁：無
聲音：沿用

### P04
EN: Snip, snip! Swish, swish! They pretended to sew.
ZH: 剪剪剪！咻咻咻！他們假裝在做衣服。
劇情推進：假裝。
畫面：`palace` 工作室／中景
角色：`trick` 兩個 — 拿空氣
道具：`scissors`、`loom`（空的）
動畫：an-bob
翻頁：無
聲音：要重錄

### P05
EN: The king's helper looked. Nothing! But he said, "How beautiful!"
ZH: 大臣一看，什麼都沒有！可是他說：「好漂亮！」
劇情推進：「好漂亮」第 1 次。
畫面：`palace`／中景
角色：`minister`＠中 — 冒汗 — 假裝
道具：`loom`（空的）
動畫：minister an-shake
翻頁：無
聲音：要重錄

### P06
EN: The emperor looked in the mirror. Nothing! "How beautiful!"
ZH: 國王照鏡子，什麼都沒有！「好漂亮！」
劇情推進：「好漂亮」第 2 次。
畫面：`palace`／中景
角色：`emp`＠左（內衣褲）— 假裝
道具：`mirror`＠右
動畫：—
翻頁：無
聲音：要重錄

### P07
EN: The emperor walked in a big parade.
ZH: 國王走在大遊行裡。
劇情推進：公開。
畫面：`street`／全景
角色：`emp`＠中（內衣褲）— 抬頭挺胸
道具：`SK.flag`
動畫：an-walk
翻頁：無
聲音：沿用

### P08
EN: All the people said, "Wow! How beautiful!"
ZH: 大家都說：「哇！好漂亮！」
劇情推進：「好漂亮」第 3 次。
畫面：`street`／全景
角色：`crowd` 2 個 — 拍手
道具：—
動畫：an-bob
翻頁：有：真的漂亮嗎？
聲音：沿用

### P09
EN: A little child said, "He has no clothes!"
ZH: 一個小孩說：「國王沒有穿衣服！」
劇情推進：真相。
畫面：`street`／中景
角色：`kid`＠右 — 指著 — 誠實；`emp`＠左 — 嚇一跳
道具：—
動畫：kid an-bob
翻頁：無
聲音：沿用

### P10
EN: Everyone laughed. The emperor's face turned red.
ZH: 大家都笑了，國王的臉紅了。
劇情推進：反應。
畫面：`street`／中景
角色：`emp`＠中 — 臉紅 — 不好意思；`crowd` — 笑
道具：—
動畫：emp an-shake
翻頁：無
聲音：沿用

### P11
EN: The two tricksters ran away with the gold.
ZH: 兩個騙子帶著金子逃走了。
劇情推進：騙子離開。
畫面：`street` 遠方／遠景
角色：`trick` 兩個 — 跑
道具：`gold`
動畫：an-walk
翻頁：無
聲音：沿用

### P12
EN: The emperor laughed too. "Thank you for the truth!"
ZH: 國王也笑了：「謝謝你說實話！」
劇情推進：溫和結局：說實話是好事。
畫面：`street`／中景
角色：`emp`＠左（披上斗篷）— 大笑；`kid`＠右 — 開心
道具：—
動畫：an-bob
翻頁：無
聲音：要重錄

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 誰說了實話？ | Who told the truth? | child | child / emperor / dog |
| 國王最愛什麼？ | What did the emperor love? | clothes | clothes / cake / ball |
| 國王的臉變成什麼顏色？ | What color did his face turn? | red | red / blue / green |

## 給美術的待辦（這本）
1. 新做 `gold` 金子袋。

## 錄音
要重錄 4 頁：P04、P05、P06、P12。沿用 8 頁：P01、P02、P03、P07、P08、P09、P10、P11（改名的見各頁）。

## 已寫進
`beta/content_beta_V6.js`（2026-11-22）。新的角色道具還沒畫好前，先用現有的圖代替（見「給美術的待辦」）。
