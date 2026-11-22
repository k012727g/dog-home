# 小精靈與鞋匠 The Elves and the Shoemaker｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `elves`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
善良的窮鞋匠只剩做一雙鞋的皮，剪好就去睡。早上竟然有一雙漂亮的新鞋！賣了鞋買更多皮，每天晚上剪好，每天早上都有新鞋。鞋匠和太太躲起來偷看，半夜跑來兩個小精靈在敲敲打打。小精靈沒有衣服，他們就做了小小的上衣、褲子和鞋子。小精靈開心地跳著舞離開。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 重複句 | Every night... Every morning — new shoes! |
| 翻頁驚喜 | P08 半夜了 → P09 小精靈出現 |
| 狀聲詞 | Tap, tap, tap |
| 溫暖 | 沒有壞人；互相幫忙、回禮 |

## 和 V4 的差別
- 新書。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `shoemaker`（現有 `G.gep`） | 老鞋匠，圍裙、眼鏡 | #9A6A4F | 累、驚喜、好奇、溫柔 | 剪皮、睡、偷看 | 現有；要加圍裙 |
| `wife`（現有 `G.gran`） | 鞋匠太太 | #C9B3F5 | 好奇、溫柔 | 偷看、縫衣服 | 現有 |
| `elf` | 兩個小精靈：拇指大小、尖耳朵、光著腳、頭髮亂亂的；**原創造型，不像任何卡通** | 膚色＋紅綠帽 | 認真、開心 | 敲鞋、跳舞 | 新做 |
| `lady`（現有 `P`） | 買鞋的太太，帽子有花 | #FF9EC4 | 開心 | 試鞋 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `shop` | 小鞋店 | 晚上／早上 | 工作桌、窗戶（晚上有月亮） | `HOME`＋`SK.table`＋`SK.moonTop` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `shoes` | 漂亮的紅色鞋子 | P04–P06 | 問答 | 現有（`SK.slipper` 換紅色，或新做） |
| `leather` | 一張咖啡色的皮 | P02、P03 | — | 新做 |
| `tinyclothes` | 小小的上衣、褲子、鞋子 | P11、P12 | 回禮 | 新做 |
| `candle` | 蠟燭 | P08 | 晚上 | 現有 `SK.candle` |

---

## 每一頁

### P01
EN: A kind shoemaker was very poor.
ZH: 一位善良的鞋匠很窮。
劇情推進：認識主角。
畫面：`shop`／中景
角色：`shoemaker`＠中 — 嘆氣
道具：空架子
動畫：—
翻頁：無
聲音：新錄

### P02
EN: He had leather for only one pair of shoes.
ZH: 他的皮只夠做一雙鞋。
劇情推進：困境。
畫面：`shop`／中景
角色：`shoemaker` — 拿著最後一張皮
道具：`leather`
動畫：—
翻頁：無
聲音：新錄

### P03
EN: He cut the leather and went to bed.
ZH: 他把皮剪好，就去睡覺了。
劇情推進：晚上。
畫面：`shop` 晚上／中景
角色：`shoemaker`＠右 — 打哈欠走開
道具：`leather`（剪好）在桌上
動畫：—
翻頁：無
聲音：新錄

### P04
EN: In the morning, wow! Beautiful new shoes!
ZH: 早上——哇！一雙漂亮的新鞋！
劇情推進：神祕的事。
畫面：`shop` 早上／中景
角色：`shoemaker` — 驚喜
道具：`shoes`（發光）
動畫：shoes an-glow
翻頁：無
聲音：新錄

### P05
EN: A lady bought them. Now he could buy more leather.
ZH: 一位太太買了鞋，他可以買更多皮了。
劇情推進：變好。
畫面：`shop`／中景
角色：`lady`＠左 — 開心；`shoemaker`＠右
道具：`shoes`
動畫：an-bob
翻頁：無
聲音：新錄

### P06
EN: Every night he cut. Every morning, new shoes!
ZH: 每天晚上他剪好皮，每天早上——新鞋子！
劇情推進：重複句。
畫面：`shop`／分兩格（晚上／早上）
角色：`shoemaker`
道具：`shoes` 一排
動畫：an-bob
翻頁：無
聲音：新錄

### P07
EN: "Who is helping us?" said his wife.
ZH: 太太說：「是誰在幫我們呢？」
劇情推進：好奇。
畫面：`shop`／中景
角色：`wife`＠左 — 好奇；`shoemaker`＠右
道具：—
動畫：—
翻頁：無
聲音：新錄

### P08
EN: They hid and watched. Tick, tock... midnight.
ZH: 他們躲起來偷看。滴答、滴答……半夜了。
劇情推進：等待。
畫面：`shop` 晚上／中景
角色：`shoemaker`、`wife` — 躲在簾子後 — 偷看
道具：`candle`、`SK.clock`
動畫：—
翻頁：有：誰會來？
聲音：新錄

### P09
EN: Two tiny elves came in! Tap, tap, tap!
ZH: 兩個小小的精靈跑進來！敲、敲、敲！
劇情推進：揭曉。
畫面：`shop` 桌上／特寫
角色：`elf` 兩個 — 敲鞋子 — 認真
道具：`leather`
動畫：elf an-bob
翻頁：無
聲音：新錄

### P10
EN: "The elves have no clothes. Let's make some!"
ZH: 「小精靈沒有衣服穿，我們來做吧！」
劇情推進：回報的想法。
畫面：`shop` 早上／中景
角色：`wife`＠左 — 拍手 — 溫柔；`shoemaker`＠右
道具：—
動畫：—
翻頁：無
聲音：新錄

### P11
EN: Tiny shirts, tiny pants, tiny shoes!
ZH: 小小的上衣、小小的褲子、小小的鞋子！
劇情推進：準備禮物。
畫面：`shop` 桌上／特寫
角色：—
道具：`tinyclothes`
動畫：an-bob
翻頁：無
聲音：新錄

### P12
EN: The elves danced away, happy. "Thank you!"
ZH: 小精靈開心地跳著舞離開了：「謝謝！」
劇情推進：溫暖結局。
畫面：`shop` 晚上／中景
角色：`elf` 兩個（穿新衣服）— 跳舞 — 開心
道具：`SK.stars`
動畫：an-bob
翻頁：無
聲音：新錄

---

## 問答
| 題 | EN | 答案 | 選項 | 圖 |
|---|---|---|---|---|
| 鞋匠做什麼？ | What did he make? | shoe | shoe / hat / bag | 都有 |
| 有幾個小精靈？ | How many elves? | two | two / four / seven | 都有 |
| 他們做了什麼給小精靈？ | What did they make for the elves? | clothes | clothes / cake / ball | 都有 |

## 給美術的待辦（這本）
1. 新做 `elf`（原創小精靈）、`leather`、`tinyclothes`。
2. `shoemaker` 加圍裙。

## 錄音
新書，12 頁都要錄（`elves-1` 到 `elves-12`，英文＋中文）。
