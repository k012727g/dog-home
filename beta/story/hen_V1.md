# 小紅母雞 The Little Red Hen｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `hen`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
小紅母雞找到麥子，問誰要幫忙種、割、做麵包，貓、狗、鴨都說「我不要！」，她每次都說「那我自己來」。麵包好香，問誰要幫忙吃，大家都說「我要！」她說要和小雞一起吃。下一次，朋友們都說「我們會幫忙！」

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 重複句 | Who will help me...? Not I! / Then I will do it myself. |
| 三次法則 | 種 → 割 → 做麵包，第四次「吃」大家都要（反轉） |
| 翻頁驚喜 | P09 好香 → P10 大家都要吃 |
| 道理收尾 | 幫忙的人才一起分享 |

## 和 V4 的差別
- 「那我自己來」變成每次都出現的重複句。
- 新增「麵包好香」那一頁，讓反轉更明顯。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `hen`（現有 `SK.animal` hen） | 紅色母雞，戴小頭巾 | #E85A5A | 努力、生氣一點點、開心 | 種、割、揉麵、端麵包 | 現有 |
| `cat`、`dog`、`duck`（現有 `SK.animal`） | 三個懶惰的朋友 | — | 懶洋洋、想吃、不好意思 | 躺著、跑過來 | 現有 |
| `chick`（現有 `SK.animal` chick） | 黃色小雞 3 隻（算 1 組） | 黃 | 開心 | 吃麵包 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `farm` | 農場 | 白天 | — | `GRASS` |
| `kitchen` | 母雞的廚房 | 白天 | 烤箱 | `HOME`＋`SK.oven` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `wheat` | 麥子 | P01–P06 | 問答 | 現有 `SK.wheat` |
| `mill` | 磨坊 | P06 | — | 現有 `SK.mill` |
| `oven` | 烤箱 | P08 | — | 現有 `SK.oven` |
| `bread` | 麵包（冒熱氣） | P09–P11 | 問答 | 現有 `SK.bread` |

---

## 每一頁

### P01
EN: Little Red Hen found some wheat.
ZH: 小紅母雞找到一些麥子。
劇情推進：開始。
畫面：`farm`／中景
角色：`hen`＠中 — 撿起麥子 — 開心
道具：`wheat`
動畫：an-bob
翻頁：無
聲音：沿用

### P02
EN: "Who will help me plant it?" "Not I," said the others.
ZH: 「誰要幫我種？」其他動物說：「我不要。」
劇情推進：問 1。
畫面：`farm`／中景
角色：`hen`＠左；`cat`、`dog`、`duck`＠右 — 躺著 — 懶洋洋
道具：—
動畫：—
翻頁：無
聲音：沿用

### P03
EN: "Then I will do it myself." And she did.
ZH: 「那我自己來。」她說到做到。
劇情推進：重複句。
畫面：`farm`／中景
角色：`hen`＠中 — 種 — 努力
道具：`wheat`
動畫：an-bob
翻頁：無
聲音：要重錄

### P04
EN: The rain came, the sun came, and the wheat grew tall.
ZH: 下雨了，出太陽了，麥子長得好高。
劇情推進：時間。
畫面：`farm`／中景
角色：—
道具：`wheat`（長高）、`SK.cloud`
動畫：an-sway
翻頁：無
聲音：沿用

### P05
EN: "Who will help me cut it?" "Not I!"
ZH: 「誰要幫我割麥子？」「我不要！」
劇情推進：問 2。
畫面：`farm`／中景
角色：`hen`＠左；`cat`、`dog`、`duck`＠右 — 在玩
道具：`wheat`
動畫：—
翻頁：無
聲音：沿用

### P06
EN: "Then I will do it myself." Off to the mill she went.
ZH: 「那我自己來。」她把麥子送去磨坊。
劇情推進：重複句。
畫面：`farm`／中景
角色：`hen`＠左 — 扛麥子 — 努力
道具：`mill`＠右
動畫：an-walk
翻頁：無
聲音：要重錄

### P07
EN: "Who will help me make bread?" "Not I!"
ZH: 「誰要幫我做麵包？」「我不要！」
劇情推進：問 3。
畫面：`kitchen` 門口／中景
角色：`hen`＠左；`cat`、`dog`、`duck`＠右 — 睡覺
道具：—
動畫：—
翻頁：無
聲音：沿用

### P08
EN: "Then I will do it myself." Into the oven it went!
ZH: 「那我自己來。」麵包送進了烤箱！
劇情推進：重複句。
畫面：`kitchen`／中景
角色：`hen`＠左 — 揉麵 — 努力
道具：`oven`＠右
動畫：an-bob
翻頁：無
聲音：要重錄

### P09
EN: Mmm! The bread smelled so good.
ZH: 嗯——！麵包好香好香。
劇情推進：香味飄出去（埋反轉）。
畫面：`kitchen` 窗外／中景
角色：`hen`＠中 — 端麵包
道具：`bread`（香味線飄出窗外）
動畫：an-float
翻頁：有：誰聞到了？
聲音：要重錄

### P10
EN: "Who will help me eat it?" "I will!" said everyone.
ZH: 「誰要幫我吃？」大家都說：「我要！」
劇情推進：反轉。
畫面：`kitchen`／中景
角色：`cat`、`dog`、`duck` 衝過來 — 想吃
道具：`bread`
動畫：an-bob
翻頁：無
聲音：沿用

### P11
EN: "No, I will eat it with my chicks!"
ZH: 「不行，我要和我的小雞一起吃！」
劇情推進：結果。
畫面：`kitchen`／中景
角色：`hen`＠左 — 舉翅膀 — 堅定；`chick` 一組＠右 — 開心
道具：`bread`
動畫：—
翻頁：無
聲音：沿用

### P12
EN: Next time, her friends said, "We will help you!"
ZH: 下一次，朋友們都說：「我們會幫忙！」
劇情推進：溫和結局：學到了。
畫面：`farm`／全景
角色：`hen`、`cat`、`dog`、`duck` 一起種 — 開心
道具：`wheat`
動畫：an-bob
翻頁：無
聲音：沿用

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 小紅母雞找到什麼？ | What did Little Red Hen find? | wheat | wheat / apple / ball |
| 她做了什麼？ | What did she make? | bread | bread / cake / rice |
| 她和誰一起吃麵包？ | Who did she eat the bread with? | chick | chick / cat / dog |

## 給美術的待辦（這本）
1. P12 四個角色一起出現，畫面要清楚（剛好 4 個）。

## 錄音
要重錄 4 頁：P03、P06、P08、P09。沿用 8 頁：P01、P02、P04、P05、P07、P10、P11、P12（改名的見各頁）。
