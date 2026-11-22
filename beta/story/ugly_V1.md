# 醜小鴨 The Ugly Duckling｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `ugly`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
鴨媽媽孵出一窩黃色小鴨，還有一隻又大又灰的。鴨子們、野鴨、貓都對他說「走開！」，他只好一個人生活。冬天又冷又長，好心的農夫讓他取暖。春天，他看見美麗的白色大鳥，拍拍翅膀竟然會飛；他看看水裡，原來自己是天鵝。天鵝們說「跟我們一起來！」

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 重複句＋三次法則 | "Go away!"（P03、P05、P06） |
| 前面埋、後面收 | 三次「走開」→ 結尾「跟我們一起來！」 |
| 翻頁驚喜 | P10 他會飛了 → P11 看水裡 |
| 圖說 | 每頁背景的季節顏色在變（夏 → 秋 → 冬 → 春） |

## 和 V4 的差別
- 「走開」做三次，結尾用相反的「一起來」收。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `ugly`（現有 `SK.animal` ugly） | 大大的灰色小鴨，脖子比較長（暗示天鵝） | 灰 #9A9AA8 | 難過、孤單、驚喜、開心 | 走、躲、拍翅膀、飛 | 現有 |
| `swan`（現有 `SK.animal` swan） | 白色天鵝 | 白 | 溫柔、開心 | 游、飛 | 現有 |
| `mamaduck`/`duckling`（現有 duck、chick） | 鴨媽媽、黃色小鴨 | 黃 | 開心、嫌棄 | 排隊游 | 現有 |
| `farmer`（現有 `G.farmer`） | 好心的農夫 | #8CC8F0 | 溫柔 | 抱著小鴨 | 現有 |
| `cat`（現有 `SK.animal` cat） | 貓 | — | 嫌棄 | 拱背 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `pond` | 池塘 | 夏天 | 蘆葦 | `SK.reeds`＋`SK.river` |
| `winter` | 雪地 | 冬天 | 雪 | `SK.snow` |
| `farmhouse` | 農夫家 | 冬天晚上 | 暖暖的燈 | `HOME` |
| `spring` | 春天的湖 | 春天 | 花 | `SK.flower` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `egg` | 大蛋（灰色那顆比較大） | P01 | — | 現有 `SK.egg` |
| `reeds` | 蘆葦 | P05、P06 | — | 現有 `SK.reeds` |

---

## 每一頁

### P01
EN: Mother Duck sat on her eggs. Crack, crack!
ZH: 鴨媽媽坐在蛋上。喀啦、喀啦！
劇情推進：開始。
畫面：`pond`／中景
角色：`mamaduck`＠中 — 孵蛋
道具：`egg`（有一顆特別大）
動畫：egg an-shake
翻頁：無
聲音：沿用

### P02
EN: Out came yellow ducklings, and one big grey one.
ZH: 跑出好幾隻黃色小鴨，還有一隻又大又灰的。
劇情推進：主角出場，和大家不一樣。
畫面：`pond`／中景
角色：`duckling` 3 隻（算 1 組）、`ugly`＠右 — 好奇
道具：—
動畫：an-bob
翻頁：無
聲音：要重錄

### P03
EN: "You are not like us," said the ducks. "Go away!"
ZH: 鴨子們說：「你跟我們不一樣，走開！」
劇情推進：「走開」第 1 次。
畫面：`pond`／中景
角色：`duckling` 一組＠左 — 嫌棄；`ugly`＠右 — 難過
道具：—
動畫：duckling an-shake
翻頁：無
聲音：要重錄

### P04
EN: He went away and lived all alone.
ZH: 他離開了，一個人生活。
劇情推進：孤單。
畫面：`pond`（秋天顏色）／遠景
角色：`ugly`＠中（小小的）— 走 — 孤單
道具：`reeds`
動畫：an-walk
翻頁：無
聲音：沿用（V4 的 `ugly-5` 錄音，改名成 `ugly-4`）

### P05
EN: He met some wild ducks. "Go away!"
ZH: 他遇到一些野鴨。「走開！」
劇情推進：「走開」第 2 次。
畫面：`pond`／中景
角色：野鴨（`SK.animal` duck 換深色）＠右；`ugly`＠左 — 難過
道具：`reeds`
動畫：—
翻頁：無
聲音：要重錄

### P06
EN: He met a cat. "Go away!" He was very sad.
ZH: 他遇到一隻貓。「走開！」他好難過。
劇情推進：「走開」第 3 次（最低點）。
畫面：秋天的屋外／中景
角色：`cat`＠右 — 拱背；`ugly`＠左 — 哭
道具：—
動畫：cat an-shake
翻頁：無
聲音：要重錄

### P07
EN: Winter was cold and long.
ZH: 冬天又冷又長。
劇情推進：時間過去。
畫面：`winter`／遠景
角色：`ugly`＠中 — 縮成一團 — 冷
道具：`SK.snow`
動畫：—
翻頁：無
聲音：沿用

### P08
EN: A kind farmer took him home and kept him warm.
ZH: 一位好心的農夫把他帶回家，讓他暖暖的。
劇情推進：第一個對他好的人。
畫面：`farmhouse`／中景
角色：`farmer`＠中 — 抱著 `ugly` — 溫柔
道具：壁爐
動畫：an-bob
翻頁：無
聲音：沿用

### P09
EN: In spring, he saw beautiful white birds.
ZH: 春天到了，他看見美麗的白色大鳥。
劇情推進：新的希望。
畫面：`spring`／中景
角色：`swan` 2 隻＠右 — 游；`ugly`＠左 — 羨慕（脖子已經變長）
道具：—
動畫：an-bob
翻頁：無
聲音：沿用

### P10
EN: He flapped his wings. He could fly!
ZH: 他拍拍翅膀，咦，他會飛了！
劇情推進：變化。
畫面：`spring` 天空／中景
角色：`ugly`（變白一半）＠中 — 飛 — 驚喜
道具：—
動畫：an-float
翻頁：有：他變成什麼了？
聲音：沿用

### P11
EN: He looked in the water. He was a swan!
ZH: 他看看水裡的自己，原來他是一隻天鵝！
劇情推進：揭曉。
畫面：`spring` 湖面／特寫倒影
角色：`swan`（就是他）＠中 — 看倒影 — 驚喜
道具：倒影
動畫：an-glow
翻頁：無
聲音：沿用

### P12
EN: "Come with us!" said the swans. Now he was happy.
ZH: 天鵝們說：「跟我們一起來！」現在他好快樂。
劇情推進：平安結局；收回三次「走開」。
畫面：`spring`／全景
角色：`swan` 3 隻（他在中間）— 一起游 — 開心
道具：`SK.flower`
動畫：an-bob
翻頁：無
聲音：要重錄

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 醜小鴨是什麼顏色？ | What color was the ugly duckling? | grey | grey / yellow / pink |
| 他變成了什麼？ | What did he become? | swan | swan / cat / fish |
| 哪一個季節很冷？ | Which season was cold? | winter | winter / sun / flower |

## 給美術的待辦（這本）
1. `ugly` 加「變白一半」的中間樣子（P10）。
2. 野鴨：`SK.animal` duck 換深色。

## 錄音
要重錄 5 頁：P02、P03、P05、P06、P12。沿用 7 頁：P01、P04、P07、P08、P09、P10、P11（改名的見各頁）。

## 已寫進
`beta/content_beta_V6.js`（2026-11-22）。新的角色道具還沒畫好前，先用現有的圖代替（見「給美術的待辦」）。
