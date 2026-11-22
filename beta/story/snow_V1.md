# 白雪公主 Snow White｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `snow`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
壞皇后每天問魔鏡誰最美。魔鏡第二次說「白雪公主」，皇后把她趕進森林；七個小矮人收留她，叮嚀不要開門。魔鏡第三次還是說「白雪公主」，皇后扮成老婆婆送來紅蘋果，白雪公主咬一口就睡著了。王子來幫忙抬她，一顛，蘋果掉出來，她醒了，大家一起歡呼。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 重複句＋三次法則 | Mirror, mirror, who is the most beautiful?（P02、P03、P08）：第一次「是您」、第二次「白雪公主」、第三次「還是白雪公主！」 |
| 前面埋、後面收 | P07 小矮人說不要開門 → P09 她開了門（孩子會想喊「不要！」） |
| 翻頁驚喜 | P09 停在「Just one bite!」，翻到 P10 才睡著 |
| 圖說、文字不說 | P09 老婆婆的影子是皇后的皇冠形狀（文字不說她是皇后） |
| 數字 | seven 在 P05、P06、P12 都出現（問答用） |

## 和 V4 的差別
- 魔鏡問三次（V4 只有一次）。
- 拿掉「老婆婆其實是皇后」那一頁，改用影子讓孩子自己發現。
- 結尾：蘋果被顛出來才醒（原版童話），不是王子親她。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `snow`（現有 `G.snow`／`SK.girl`） | 黑短髮、紅髮帶、黃裙子；造型要原創，避開電影版的藍黃配色泡泡袖 | 髮帶 #E85A5A | 開心、害怕、睡著、驚喜 | 跑、坐、咬蘋果、躺著 | 現有 |
| `queen`（現有 `SK.queen`） | 高高的皇冠、紫色長袍 | 袍 #9B6BD6 | 得意、生氣 | 站著照鏡子、指著門 | 現有 |
| `oldw`（現有 `SK.oldw`） | 駝背老婆婆、黑斗篷、提籃子；**影子是皇冠形狀** | 斗篷 #3A3A3A | 假笑 | 遞蘋果 | 現有；要加「皇冠影子」 |
| `dw`（現有 `G.dw`） | 七個小矮人，每人帽子顏色不同（紅橙黃綠藍紫粉） | 七色 | 開心、叮嚀、難過、歡呼 | 排成一排走、揮手 | 現有 |
| `prince`（現有 `SK.prince`） | 短髮、披風、沒有劍 | 披風 #4A90E2 | 驚訝、笑 | 幫忙抬 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `castle` | 城堡裡 | 白天 | 牆上掛魔鏡 | `CASTLE` |
| `forest` | 黑黑的森林 | 白天（偏暗） | 高高的樹 | `FOREST`＋`GRASS` |
| `dwhouse` | 小矮人的小屋 | 白天 | 小小的門、窗；室內有一排七張小床 | `SK.house`／`HOME`＋`SK.bed` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `mirror` | 金框魔鏡，鏡面會發光、有一張臉 | P02、P03、P08 | 重複句的主角 | 現有 `SK.mirror` |
| `apple` | 又大又紅的蘋果 | P09、P10 | 問答題 | 現有 `SK.apple` |
| `beds7` | 七張小床排一排（算 1 組） | P05 | 數字 seven | 現有 `SK.bed`，要縮小排一排 |

---

## 每一頁

### P01
EN: Once upon a time, there was a kind princess, Snow White.
ZH: 從前從前，有一位善良的公主，叫白雪公主。
劇情推進：認識主角。
畫面：`castle` 花園／中景
角色：`snow`＠中 — 和小鳥玩 — 開心
道具：—
動畫：an-bob
翻頁：無
聲音：要重錄

### P02
EN: "Mirror, mirror, who is the most beautiful?" "You, my Queen."
ZH: 「魔鏡魔鏡，誰是最美麗的人？」「是您，皇后。」
劇情推進：壞人和魔鏡出場；重複句第 1 次。
畫面：`castle` 室內／中景
角色：`queen`＠左 — 照鏡子 — 得意
道具：`mirror`＠右
動畫：mirror an-glow
翻頁：無
聲音：要重錄

### P03
EN: Snow White grew up. "Mirror, mirror?" "Now it is Snow White!"
ZH: 白雪公主長大了。「魔鏡魔鏡？」「現在是白雪公主！」
劇情推進：重複句第 2 次，答案變了。
畫面：`castle` 室內／中景
角色：`queen`＠左 — 嚇一跳 — 生氣；鏡子裡出現 `snow` 的臉
道具：`mirror`＠右
動畫：queen an-shake
翻頁：無
聲音：要重錄

### P04
EN: The queen was angry. "Go away!" Snow White ran into the forest.
ZH: 皇后好生氣：「走開！」白雪公主跑進了森林。
劇情推進：白雪公主被趕走。
畫面：`forest`／遠景
角色：`snow`＠中 — 跑 — 害怕
道具：—
動畫：an-walk
翻頁：無
聲音：要重錄

### P05
EN: She found a little house with seven little beds.
ZH: 她找到一間小房子，裡面有七張小床。
劇情推進：找到安全的地方；數字 seven。
畫面：`dwhouse` 室內／中景
角色：`snow`＠左 — 看著小床 — 好奇
道具：`beds7`＠右
動畫：—
翻頁：無
聲音：要重錄

### P06
EN: Seven dwarfs came home. "You can live with us!"
ZH: 七個小矮人回家了：「你可以跟我們住！」
劇情推進：新朋友出場。
畫面：`dwhouse` 門口／全景
角色：`dw` 七個排一排（算 1 組）— 揮手 — 開心；`snow`＠右 — 開心
道具：—
動畫：dw an-bob
翻頁：無
聲音：要重錄

### P07
EN: The dwarfs went to work. "Do not open the door for anyone!"
ZH: 小矮人出門工作：「不要幫別人開門喔！」
劇情推進：埋下規則。
畫面：`dwhouse` 門口／中景
角色：`dw` 4 個＠左 — 扛工具、回頭叮嚀 — 認真；`snow`＠右門口 — 點頭
道具：—
動畫：dw an-walk
翻頁：無
聲音：沿用

### P08
EN: "Mirror, mirror?" "Still Snow White, in the little house!"
ZH: 「魔鏡魔鏡？」「還是白雪公主，她在小房子裡！」
劇情推進：重複句第 3 次；皇后知道她在哪了。
畫面：`castle` 室內／特寫鏡子
角色：`queen`＠左 — 握拳 — 生氣；鏡子裡出現小房子
道具：`mirror`＠右
動畫：mirror an-glow
翻頁：無
聲音：要重錄

### P09
EN: Knock, knock. An old woman had a red apple. "Just one bite!"
ZH: 叩叩叩。老婆婆拿著紅蘋果：「咬一口就好！」
劇情推進：她打開了門（打破規則）。
畫面：`dwhouse` 門口／中景
角色：`snow`＠左門內 — 伸手 — 好奇；`oldw`＠右 — 遞蘋果 — 假笑，**地上影子是皇冠形狀**
道具：`apple`
動畫：apple an-bob
翻頁：有：停在「咬一口」
聲音：要重錄

### P10
EN: Snow White took a bite and fell asleep.
ZH: 白雪公主咬了一口，就睡著了。
劇情推進：最低點。
畫面：`dwhouse` 室內／中景
角色：`snow`＠中 — 躺著 — 睡著
道具：`apple` 滾在地上
動畫：`SK.zz`
翻頁：無
聲音：沿用

### P11
EN: A prince came to help carry her. Bump! Out popped the apple!
ZH: 王子來幫忙抬她。碰！那一小口蘋果掉出來了！
劇情推進：解決（原版童話的結局，不用親）。
畫面：`forest`／中景
角色：`prince`＠右、`dw` 2 個＠左 — 一起抬 — 驚訝；`snow` 躺在中間
道具：`apple` 一小塊飛出來
動畫：an-pop
翻頁：無
聲音：要重錄

### P12
EN: Snow White woke up! The dwarfs and the prince cheered. Hooray!
ZH: 白雪公主醒來了！小矮人和王子一起歡呼：好耶！
劇情推進：平安結局。
畫面：`forest` 花叢／全景
角色：`snow`＠中 — 坐起來 — 開心；`dw` 一組＠左；`prince`＠右 — 歡呼
道具：—
動畫：an-bob
翻頁：無
聲音：要重錄

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 老婆婆帶了什麼來？ | What did the old woman bring? | apple | apple / ball / cake |
| 有幾個小矮人？ | How many dwarfs? | seven | seven / three / five |
| 誰來幫忙抬白雪公主？ | Who came to help? | prince | prince / queen / wolf |

## 給美術的待辦（這本）
1. `oldw` 加「皇冠形狀的影子」（P09）。
2. `beds7`：七張小床排一排的小圖（或用 `SK.bed` 縮小）。
3. 七個小矮人一起出現的頁（P06、P12）請畫成「一組」，不要太擠。

## 錄音
要重錄 10 頁：P01、P02、P03、P04、P05、P06、P08、P09、P11、P12。沿用 2 頁：P07、P10（改名的見各頁）。
