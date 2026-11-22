# 獅子與老鼠 The Lion and the Mouse｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `lion`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
大獅子在睡覺，小老鼠跑過他的鼻子，獅子抓住牠。小老鼠說「有一天我會幫你」，獅子大笑「哈！你？」，還是放了牠。後來獅子被網子困住，吼——！小老鼠聽見了，說「別怕！」，咬咬咬，咬斷網子。獅子自由了：「謝謝你，小朋友！」小小的朋友，也可以是很棒的朋友。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 前面埋、後面收 | P05「有一天我會幫你」「哈！你？」→ P10 真的做到 |
| 狀聲詞 | Zzz、Tickle、ROAR、Nibble |
| 對比 | 大 vs 小（畫面大小要很明顯，問答也用） |

## 和 V4 的差別
- 獅子笑「哈！你？」讓結尾更有反差。
- 拿掉「獵人來了」那頁（網子自己出現就好，畫面不要有獵人）。
- 拆開 V4 第 5 頁（13 個字）。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `lion`（現有 `SK.animal` lion） | 大獅子，鬃毛蓬蓬 | #FFB84D | 睏、生氣、大笑、害怕、感謝 | 睡、抓、被網住、跳起來 | 現有 |
| `mouse`（現有 `SK.animal` mouse） | 灰色小老鼠，大耳朵 | 灰 | 害怕、認真、勇敢、開心 | 跑、拜託、咬 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `jungle` | 森林大樹下 | 白天 | 大樹 | `FOREST`＋`SK.tree` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `net` | 繩網 | P07–P10 | 問答 | 現有 `SK.net` |

---

## 每一頁

### P01
EN: In the forest lived a big, strong lion.
ZH: 森林裡住著一隻又大又強壯的獅子。
劇情推進：認識大獅子。
畫面：`jungle`／中景
角色：`lion`＠中 — 站著 — 威風
道具：—
動畫：an-bob
翻頁：無
聲音：沿用

### P02
EN: The lion was sleeping. Zzz...
ZH: 獅子在睡覺。呼嚕嚕……
劇情推進：—
畫面：`jungle`／中景
角色：`lion`＠中 — 睡
道具：`SK.zz`
動畫：—
翻頁：無
聲音：要重錄

### P03
EN: A little mouse ran over his nose. Tickle, tickle!
ZH: 一隻小老鼠跑過他的鼻子。癢癢的！
劇情推進：小老鼠出現。
畫面：`jungle`／特寫獅子的臉
角色：`lion` — 皺鼻子；`mouse` — 在鼻子上跑
道具：—
動畫：mouse an-walk
翻頁：無
聲音：要重錄

### P04
EN: The lion caught the mouse. "Please let me go!"
ZH: 獅子抓住老鼠。「請放我走！」
劇情推進：危險。
畫面：`jungle`／中景
角色：`lion`＠右 — 抓住 — 生氣；`mouse` 在爪子下 — 害怕
道具：—
動畫：mouse an-shake
翻頁：無
聲音：沿用

### P05
EN: "One day I will help you." The lion laughed. "Ha! You?"
ZH: 「有一天我會幫你。」獅子大笑：「哈！你？」
劇情推進：埋下伏筆。
畫面：`jungle`／中景
角色：`lion`＠右 — 大笑；`mouse`＠左 — 認真
道具：—
動畫：lion an-shake
翻頁：無
聲音：要重錄

### P06
EN: But he let the little mouse go.
ZH: 可是他還是放了小老鼠。
劇情推進：善良的選擇。
畫面：`jungle`／中景
角色：`mouse`＠左 — 跑走 — 開心；`lion`＠右 — 揮手
道具：—
動畫：mouse an-walk
翻頁：無
聲音：要重錄

### P07
EN: Later, the lion was caught in a net.
ZH: 後來，獅子被網子困住了。
劇情推進：反轉：大的也會有困難。
畫面：`jungle`／中景
角色：`lion`＠中 — 被網住 — 害怕
道具：`net`
動畫：lion an-shake
翻頁：無
聲音：沿用

### P08
EN: "ROAR!" The little mouse heard him.
ZH: 「吼——！」小老鼠聽見了。
劇情推進：求救。
畫面：`jungle` 遠處／中景
角色：`mouse`＠左 — 豎起耳朵；遠處 `lion` 在網裡
道具：`net`
動畫：—
翻頁：無
聲音：要重錄

### P09
EN: "Do not worry! I will help you!"
ZH: 「別怕！我來救你！」
劇情推進：小老鼠來了。
畫面：`jungle`／中景
角色：`mouse`＠左 — 跑來 — 勇敢；`lion`＠右 在網裡 — 驚訝
道具：`net`
動畫：mouse an-walk
翻頁：無
聲音：沿用

### P10
EN: Nibble, nibble, nibble. The mouse chewed the net.
ZH: 咬、咬、咬，小老鼠咬斷了網子。
劇情推進：解決；收回伏筆。
畫面：`jungle`／特寫
角色：`mouse` — 咬繩子 — 認真
道具：`net`（斷開）
動畫：mouse an-bob
翻頁：無
聲音：要重錄

### P11
EN: The lion was free! "Thank you, little friend!"
ZH: 獅子自由了！「謝謝你，小朋友！」
劇情推進：感謝。
畫面：`jungle`／中景
角色：`lion`＠右 — 開心；`mouse`＠左 — 開心
道具：`net` 掉在地上
動畫：an-bob
翻頁：無
聲音：沿用

### P12
EN: Little friends can be great friends.
ZH: 小小的朋友，也可以是很棒的朋友。
劇情推進：結局＋道理。
畫面：`jungle` 夕陽／中景
角色：`mouse` 坐在 `lion` 頭上 — 開心
道具：—
動畫：an-bob
翻頁：無
聲音：沿用

---

## 問答
| 題 | EN | 答案 | 選項 |
|---|---|---|---|
| 誰救了獅子？ | Who saved the lion? | mouse | mouse / cat / bird |
| 什麼困住了獅子？ | What caught the lion? | net | net / box / bag |
| 誰比較大？ | Who is big? | lion | lion / mouse / chick |

## 給美術的待辦（這本）
1. 大小對比要很明顯（獅子 1.4 倍以上、老鼠 0.5 倍以下）。

## 錄音
要重錄 6 頁：P02、P03、P05、P06、P08、P10。沿用 6 頁：P01、P04、P07、P09、P11、P12（改名的見各頁）。
