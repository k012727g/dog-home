# 睡美人 Sleeping Beauty｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `sleep`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
小公主出生，壞仙女說她會碰到紡錘睡著。國王收走全國的紡錘，只漏了一個。公主長大，在小塔裡看到老婆婆紡紗，一碰就睡著了，城堡裡的大家（連小狗）也睡著，荊棘長滿城堡。一百年後王子來了，荊棘變玫瑰，公主醒來，整座城堡都醒了。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 狀聲詞重複 | Zzz...（P07、P11） |
| 前面埋、後面收 | P04「只漏了一個」→ P06 小塔裡的紡錘 |
| 翻頁驚喜 | P06「那是什麼？」翻到 P07 碰到就睡 |
| 圖說 | P08 小狗睡著、P12 小狗第一個醒（小狗的家的孩子會注意小狗） |

## 和 V4 的差別
- 拿掉「好仙女說只會睡著」那一頁，改成「只漏了一個紡錘」的伏筆。
- 新增小塔和紡紗的老婆婆。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `princess`（現有 `SK.girl` 或 `P` 加 crown） | 小公主：嬰兒（在搖籃）→ 長大後粉紅裙子、小皇冠 | 裙 #FF9EC4 | 好奇、睡著、開心 | 伸手、躺著、坐起來 | 現有 |
| `badfairy`（現有 `G.fairy` 換深紫） | 壞仙女：深紫衣服、尖帽；表情生氣但不恐怖 | #6A4C93 | 生氣 | 指著搖籃 | 現有（換色） |
| `goodfairy`（現有 `G.fairy`） | 三位好仙女，黃、粉、藍 | #FFD86B 等 | 溫柔 | 送禮物 | 現有 |
| `king`（現有 `G.king`） | 國王，鬍子、皇冠 | #9B6BD6 | 擔心 | 收紡錘 | 現有 |
| `spinner`（現有 `SK.oldw`） | 塔裡紡紗的老婆婆（不是壞人，只是不知道） | — | 和藹 | 紡紗 | 現有 |
| `prince`（現有 `SK.prince`） | 短髮、披風 | #4A90E2 | 勇敢、溫柔 | 走進城堡 | 現有 |
| `castledog`（現有 `SK.animal` dog） | 城堡的小狗 | — | 睡著、醒來 | 趴著、跳起來 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `castle` | 城堡室內 | 白天 | — | `CASTLE` |
| `tower` | 小塔房間 | 白天 | 窄窄的圓房間、小窗 | 新做（或 `CASTLE`＋小窗） |
| `thorn` | 被荊棘包圍的城堡 | — | 荊棘、城堡 | `SK.castle`＋`SK.thorns` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `cradle` | 搖籃 | P01–P03 | — | 現有 `SK.cradle` |
| `spindle` | 紡錘（尖尖的木棒） | P03、P06、P07 | 問答 | 現有 `SK.spindle` |
| `gift` | 禮物盒 | P02 | — | 現有 `SK.gift` |
| `thorns`→`rose` | 荊棘變玫瑰 | P09、P10 | 問答 | 現有 `SK.thorns`、`SK.rose` |

---

## 每一頁

### P01
EN: A baby princess was born. Everyone was happy.
ZH: 一位小公主出生了，大家都很開心。
劇情推進：認識主角。
畫面：`castle`／中景
角色：`king`＠左 — 開心
道具：`cradle`＠中
動畫：an-bob
翻頁：無
聲音：沿用

### P02
EN: Good fairies gave her gifts: a smile, a song...
ZH: 好仙女們送她禮物：笑容、歌聲……
劇情推進：祝福。
畫面：`castle`／中景
角色：`goodfairy` 兩位 — 揮魔杖 — 溫柔
道具：`cradle`、`gift`
動畫：an-glow
翻頁：無
聲音：要重錄

### P03
EN: A bad fairy said, "She will touch a spindle and sleep!"
ZH: 壞仙女說：「她會碰到紡錘然後睡著！」
劇情推進：麻煩出現（只是睡著，不嚇人）。
畫面：`castle`／中景
角色：`badfairy`＠右 — 指著搖籃 — 生氣
道具：`cradle`＠左、`spindle`（魔法畫出來）
動畫：an-shake
翻頁：無
聲音：沿用

### P04
EN: The king took away all the spindles. All but one...
ZH: 國王把紡錘都收起來了。只漏了一個……
劇情推進：埋下伏筆。
畫面：`castle` 庭院／中景
角色：`king`＠左 — 抱著一堆紡錘 — 擔心
道具：`spindle` 一個滾到角落（讀者看得到）
動畫：—
翻頁：無
聲音：要重錄

### P05
EN: The princess grew up. One day, she found a little tower.
ZH: 公主長大了。有一天，她找到一座小塔。
劇情推進：時間過去；新地點。
畫面：城堡外／遠景
角色：`princess`＠左 — 好奇
道具：小塔
動畫：an-walk
翻頁：無
聲音：要重錄

### P06
EN: In the tower, an old woman was spinning. "What is that?"
ZH: 塔裡有個老婆婆在紡紗。「那是什麼？」
劇情推進：收回 P04 的伏筆。
畫面：`tower`／中景
角色：`spinner`＠右 — 紡紗 — 和藹；`princess`＠左 — 伸手 — 好奇
道具：`spindle`
動畫：—
翻頁：有：停在「那是什麼？」
聲音：要重錄

### P07
EN: She touched the spindle. Zzz... She fell asleep.
ZH: 她碰到紡錘。呼嚕嚕……她睡著了。
劇情推進：魔法成真。
畫面：`tower`／中景
角色：`princess`＠中 — 睡著
道具：`spindle`、`SK.zz`
動畫：—
翻頁：無
聲音：要重錄

### P08
EN: Everyone in the castle fell asleep — even the dog!
ZH: 城堡裡的大家都睡著了，連小狗也睡著了！
劇情推進：整座城堡睡著。
畫面：`castle`／全景
角色：`king`＠左 — 睡著；`castledog`＠右 — 趴著睡
道具：`SK.zz` 兩個
動畫：—
翻頁：無
聲音：沿用

### P09
EN: Big thorns grew around the castle.
ZH: 城堡四周長滿了大荊棘。
劇情推進：時間過了很久。
畫面：`thorn`／遠景
角色：—
道具：`thorns`
動畫：an-sway
翻頁：無
聲音：沿用

### P10
EN: A hundred years later, a prince came. The thorns became roses!
ZH: 一百年後，王子來了。荊棘變成了玫瑰！
劇情推進：轉機。
畫面：`thorn`／中景
角色：`prince`＠左 — 走 — 勇敢
道具：`thorns` → `rose`
動畫：an-pop
翻頁：無
聲音：要重錄

### P11
EN: The prince found the princess, fast asleep. Zzz...
ZH: 王子找到了睡得好熟的公主。呼嚕嚕……
劇情推進：找到她。
畫面：`tower`／中景
角色：`prince`＠右 — 輕聲 — 溫柔；`princess`＠左 — 睡著
道具：`SK.zz`
動畫：—
翻頁：無
聲音：要重錄

### P12
EN: The princess woke up. The whole castle woke up too!
ZH: 公主醒來了，整座城堡也都醒來了！
劇情推進：平安結局。
畫面：`castle`／全景
角色：`princess`＠中 — 伸懶腰 — 開心；`prince`＠右；`castledog`＠左 — 跳起來「汪！」
道具：—
動畫：an-bob
翻頁：無
聲音：沿用

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 她碰到了什麼？ | What did she touch? | spindle | spindle / apple / ball |
| 荊棘變成了什麼？ | What did the thorns turn into? | rose | rose / tree / star |
| 誰來到了城堡？ | Who came to the castle? | prince | prince / wolf / queen |

## 給美術的待辦（這本）
1. `tower`：小塔（外觀＋圓房間內部）。
2. `badfairy`：`G.fairy` 換深紫色＋尖帽。

## 錄音
要重錄 7 頁：P02、P04、P05、P06、P07、P10、P11。沿用 5 頁：P01、P03、P08、P09、P12（改名的見各頁）。

## 已寫進
`beta/content_beta_V6.js`（2026-11-22）。新的角色道具還沒畫好前，先用現有的圖代替（見「給美術的待辦」）。
