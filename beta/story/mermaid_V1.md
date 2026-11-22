# 人魚公主 The Little Mermaid｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `mermaid`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
小美人魚最愛唱歌。她在暴風雨中救了王子，在沙灘上送他一個貝殼，自己留著另一個。為了上岸，她用聲音向海巫婆換了一雙腳。王子在沙灘上遇到不會說話的她，她拿出一模一樣的貝殼，王子認出「是你救了我！」魔法解開，她的聲音回來了，兩人成了好朋友。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 重複句 | La, la, la!（P02、P12）：開頭會唱、結尾又能唱 |
| 前面埋、後面收 | P05 兩個貝殼分開 → P10 對在一起 |
| 翻頁驚喜 | P10 拿出貝殼，翻到 P11 王子認出她 |
| 溫和 | 原著是悲傷結局；這裡改成聲音回來、成為好朋友 |

## 和 V4 的差別
- 新增成對的貝殼（讓王子認出她的理由）。
- 結尾聲音回來，再唱一次 La, la, la。
- 造型避開電影版（紅頭髮、紫色貝殼上衣、章魚海巫婆、螃蟹朋友都不要）。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `mer`（現有 `G.mer`） | 棕色長髮、藍色尾巴、珍珠髮夾 | 尾巴 #4A90E2 | 開心唱歌、勇敢、難過（不能說話）、驚喜 | 游、唱歌、抱王子、在岸上坐著 | 現有 |
| `merLegs`（現有 `G.merLegs`） | 同一個女孩，有腳，淺藍裙子 | #8CC8F0 | 害羞、開心 | 站、跳舞 | 現有 |
| `prince`（現有 `SK.prince`） | 短髮、披風 | #4A90E2 | 昏倒、驚訝、開心 | 在船上、躺在沙灘 | 現有 |
| `witch`（現有 `G.witch`） | 海巫婆：綠色兜帽、灰髮，**不要章魚腳**，表情神秘但不可怕 | #5CC46E | 神秘的笑 | 拿藥水 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `sea` | 海底 | 白天 | 海草、小魚、光線 | `SEA`＋`SK.seaweed`＋`SK.fish` |
| `storm` | 海面暴風雨 | 晚上 | 大浪、船 | `SK.storm`＋`SK.wave`＋`SK.ship` |
| `beach` | 沙灘 | 白天 | 海浪、沙 | `SAND`＋`SK.wave` |
| `cave` | 海巫婆的洞穴 | 暗 | 岩石、藥水 | `DEEP`＋`SK.potion` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `shells` | 一對粉紅扇貝殼，拼起來是愛心形 | P05、P10、P11 | 王子認出她的關鍵 | 新做 |
| `potion` | 發光的藥水瓶 | P08 | 換腳 | 現有 `SK.potion` |
| `ship` | 王子的船 | P03、P04 | — | 現有 `SK.ship` |

---

## 每一頁

### P01
EN: Under the sea lived a little mermaid.
ZH: 海底住著一位小美人魚。
劇情推進：認識主角。
畫面：`sea`／中景
角色：`mer`＠中 — 游 — 開心
道具：小魚 2 隻
動畫：an-bob
翻頁：無
聲音：沿用

### P02
EN: She loved to sing. La, la, la!
ZH: 她最喜歡唱歌。啦、啦、啦！
劇情推進：主角的特點（後面會失去）。
畫面：`sea`／中景
角色：`mer`＠中 — 唱歌 — 開心
道具：`SK.notes`
動畫：an-bob
翻頁：無
聲音：要重錄

### P03
EN: One day, she saw a ship and a prince.
ZH: 有一天，她看見一艘船和一位王子。
劇情推進：新角色出場。
畫面：海面／遠景
角色：`mer`＠左（頭露出水面）— 好奇；`prince`＠船上
道具：`ship`＠右
動畫：ship an-bob
翻頁：無
聲音：沿用（V4 的 `mermaid-4` 錄音，改名成 `mermaid-3`）

### P04
EN: A big storm came! She saved the prince.
ZH: 暴風雨來了！她救了王子。
劇情推進：她很勇敢。
畫面：`storm`／中景
角色：`mer`＠中 — 抱著王子 — 勇敢；`prince` — 昏倒
道具：`ship`＠右（傾斜）
動畫：ship an-shake
翻頁：無
聲音：沿用（V4 的 `mermaid-5` 錄音，改名成 `mermaid-4`）

### P05
EN: On the beach, she gave him a shell. She kept the other.
ZH: 在沙灘上，她給他一個貝殼，自己留著另一個。
劇情推進：埋下伏筆。
畫面：`beach`／中景
角色：`prince`＠左 — 躺著睡；`mer`＠右（在水裡）— 揮手
道具：`shells` 一個在王子手上、一個在她手上
動畫：mer an-bob
翻頁：無
聲音：要重錄

### P06
EN: "I want to walk on land," she said.
ZH: 她說：「我想在陸地上走路。」
劇情推進：她的願望。
畫面：`sea` 往上看／中景
角色：`mer`＠中 — 看著海面上的城堡 — 想念
道具：—
動畫：an-bob
翻頁：無
聲音：要重錄

### P07
EN: She swam to the sea witch's dark cave.
ZH: 她游到海巫婆黑黑的洞穴。
劇情推進：去找辦法。
畫面：`cave`／中景
角色：`mer`＠左 — 游 — 緊張；`witch`＠右 — 神秘的笑
道具：`potion`
動畫：—
翻頁：無
聲音：沿用（V4 的 `mermaid-8` 錄音，改名成 `mermaid-7`）

### P08
EN: The sea witch took her voice and gave her legs.
ZH: 海巫婆拿走她的聲音，給了她一雙腳。
劇情推進：付出代價。
畫面：`cave`／中景
角色：`witch`＠右 — 舉起發光的音符；`mer` → `merLegs`＠左
道具：`potion`、`SK.notes`（被吸走）
動畫：an-glow
翻頁：無
聲音：沿用（V4 的 `mermaid-9` 錄音，改名成 `mermaid-8`）

### P09
EN: The prince found her on the beach. "Who are you?"
ZH: 王子在沙灘上發現了她：「你是誰？」
劇情推進：重逢，但她不能說話。
畫面：`beach`／中景
角色：`merLegs`＠左 — 坐著 — 害羞；`prince`＠右 — 彎腰 — 好奇
道具：—
動畫：an-bob
翻頁：無
聲音：沿用（V4 的 `mermaid-10` 錄音，改名成 `mermaid-9`）

### P10
EN: She could not talk, so she showed him her shell.
ZH: 她不能說話，就拿出她的貝殼給他看。
劇情推進：用貝殼代替說話。
畫面：`beach`／特寫兩人的手
角色：`merLegs`、`prince` 的手
道具：`shells` 兩個靠近
動畫：an-glow
翻頁：有：兩個貝殼快要拼在一起
聲音：要重錄

### P11
EN: "You saved me!" Pop! Her voice came back.
ZH: 「是你救了我！」啵！她的聲音回來了！
劇情推進：解決：認出來、魔法解開。
畫面：`beach`／中景
角色：`prince`＠右 — 驚喜；`merLegs`＠左 — 驚喜
道具：`shells` 拼成愛心、`SK.notes` 飛回來
動畫：an-pop
翻頁：無
聲音：要重錄

### P12
EN: La, la, la! She sang, and they became good friends.
ZH: 啦啦啦！她唱著歌，他們成了好朋友。
劇情推進：平安結局；收回 P02。
畫面：`beach` 夕陽／全景
角色：`merLegs`＠左 — 唱歌；`prince`＠右 — 拍手 — 開心
道具：`SK.notes`
動畫：an-bob
翻頁：無
聲音：要重錄

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 小美人魚住在哪裡？ | Where did the mermaid live? | sea | sea / tree / house |
| 她救了誰？ | Who did she save? | prince | prince / wolf / queen |
| 海巫婆拿走了什麼？ | What did the sea witch take? | voice | voice / apple / shoe |

## 給美術的待辦（這本）
1. 新做 `shells`：一對粉紅扇貝，拼起來是愛心。
2. `witch` 確認沒有章魚腳、不可怕。

## 錄音
要重錄 6 頁：P02、P05、P06、P10、P11、P12。沿用 6 頁：P01、P03、P04、P07、P08、P09（改名的見各頁）。
