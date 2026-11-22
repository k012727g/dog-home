# 拔蘿蔔 The Enormous Turnip｜故事稿 V1（2026-11-22）

規格見 `STORY_GUIDE.md` 和 `briefs/story_brief.md`。這一版是重寫 V4（content.js 的 `turnip`），頁數不變（12 頁）。
這是**故事稿**（給 Kevin 看、給美術畫）。Kevin 說 OK 後，才寫進 `content_beta_V?.js`。

## 劇情大綱（一句話）
爺爺種的蘿蔔長得超級大，拔不起來。爺爺叫奶奶、奶奶叫女孩、女孩叫小狗、小狗叫貓、貓叫來一隻小老鼠——「你？這麼小？」大家排成一串，一、二、三，拔！啵！大蘿蔔拔出來了，大家跌成一團哈哈笑。他們煮了蘿蔔湯，第一碗給小老鼠。

## 這一版用了哪些繪本技巧
| 技巧 | 用在哪 |
|---|---|
| 累加 | 每頁多一個人來幫忙（P04–P08），孩子會記住順序 |
| 重複句 | They pulled and pulled. No! |
| 翻頁驚喜 | P08「你？這麼小？」→ P09 一起拔 → P10 啵！ |
| 小狗的家 | 小狗是幫忙的一員；最小的老鼠是關鍵（和獅子與老鼠呼應） |

## 和 V4 的差別
- 新書。

---

## CHAR 角色表
| ID | 外型 | 固定顏色 | 需要的表情 | 需要的姿勢 | 狀態 |
|---|---|---|---|---|---|
| `grandpa`（現有 `G.gep` 或 `G.farmer`） | 爺爺，草帽、吊帶褲 | #8CC8F0 | 用力、驚訝、大笑 | 拔、跌倒 | 現有 |
| `grandma`（現有 `G.gran`） | 奶奶，眼鏡、髮髻 | #C9B3F5 | 用力 | 拉爺爺的衣服 | 現有 |
| `girl`（現有 `G.kid` 或 `SK.girl`） | 小女孩，綁兩根辮子 | #FFB86B | 用力、開心 | 拉奶奶 | 現有 |
| `dog`（現有 `SK.animal` dog） | 小狗 | — | 汪汪叫 | 咬女孩的裙子拉 | 現有 |
| `cat`（現有 `SK.animal` cat） | 貓 | — | 用力 | 拉小狗的尾巴 | 現有 |
| `mouse`（現有 `SK.animal` mouse） | 小老鼠 | 灰 | 認真、得意 | 拉貓的尾巴 | 現有 |

## BG 背景表
| ID | 地點 | 時間 | 必要元素 | 現有對應 |
|---|---|---|---|---|
| `garden` | 菜園 | 白天 | 泥土、籬笆 | `GRASS` |
| `kitchen` | 廚房 | 白天 | 桌子、大鍋 | `HOME`＋`SK.table` |

## PROP 道具表
| ID | 樣子 | 頁 | 劇情用途 | 狀態 |
|---|---|---|---|---|
| `turnip` | 好大的白色蘿蔔，紫色頭、綠葉子；只露出上半截在土外 | P02–P10 | 主角道具 | 新做 |
| `seed` | 一顆小種子 | P01 | — | 新做（或小圓點） |
| `pot` | 大鍋（蘿蔔湯） | P12 | — | 現有 `SK.cauldron` |

---

## 每一頁

### P01
EN: Grandpa planted a little turnip seed.
ZH: 爺爺種下一顆小小的蘿蔔種子。
劇情推進：開始。
畫面：`garden`／中景
角色：`grandpa`＠中 — 種 — 開心
道具：`seed`
動畫：—
翻頁：無
聲音：新錄

### P02
EN: The turnip grew big, bigger, BIGGEST!
ZH: 蘿蔔長大、更大、超級大！
劇情推進：問題出現（大到拔不動）。
畫面：`garden`／中景
角色：`grandpa`＠左 — 嚇一跳
道具：`turnip`（很大）
動畫：turnip an-pop
翻頁：無
聲音：新錄

### P03
EN: Grandpa pulled and pulled. It did not come up.
ZH: 爺爺拔呀拔，拔不起來。
劇情推進：第 1 次。
畫面：`garden`／中景
角色：`grandpa` — 用力拔
道具：`turnip`＠右
動畫：grandpa an-shake
翻頁：無
聲音：新錄

### P04
EN: Grandpa called Grandma. They pulled and pulled. No!
ZH: 爺爺叫來奶奶，拔呀拔，還是拔不動！
劇情推進：＋奶奶。
畫面：`garden`／中景
角色：`grandpa`、`grandma` 排成一串
道具：`turnip`＠右
動畫：an-shake
翻頁：無
聲音：新錄

### P05
EN: Grandma called the girl. They pulled and pulled. No!
ZH: 奶奶叫來女孩，拔呀拔，還是拔不動！
劇情推進：＋女孩。
畫面：`garden`／中景
角色：`grandpa`、`grandma`、`girl` 排成一串
道具：`turnip`＠右
動畫：an-shake
翻頁：無
聲音：新錄

### P06
EN: The girl called the dog. Woof! They pulled. No!
ZH: 女孩叫來小狗。汪！拔呀拔，拔不動！
劇情推進：＋小狗（一頁最多 4 個：只畫最後 3 個，前面的人只露出手在畫面邊）。
畫面：`garden`／中景
角色：`grandma`、`girl`、`dog`（爺爺只露出手）
道具：`turnip`＠右
動畫：an-shake
翻頁：無
聲音：新錄

### P07
EN: The dog called the cat. Meow! They pulled. No!
ZH: 小狗叫來貓。喵！拔呀拔，拔不動！
劇情推進：＋貓（同上，只畫最後 3 個）。
畫面：`garden`／中景
角色：`girl`、`dog`、`cat`
道具：`turnip` 只露葉子在右邊
動畫：an-shake
翻頁：無
聲音：新錄

### P08
EN: The cat called a tiny mouse. "You? So small?"
ZH: 貓叫來一隻小小的老鼠。「你？這麼小？」
劇情推進：最小的來了（大家不相信）。
畫面：`garden`／特寫地面
角色：`cat`＠右 — 驚訝；`mouse`＠左 — 挺胸 — 認真
道具：—
動畫：mouse an-bob
翻頁：有：這麼小有用嗎？
聲音：新錄

### P09
EN: Mouse, cat, dog, girl, Grandma, Grandpa. One, two, three, PULL!
ZH: 老鼠、貓、狗、女孩、奶奶、爺爺。一、二、三，拔！
劇情推進：全員一起（遠景，一串算 1 組）。
畫面：`garden`／遠景
角色：六個排成長長一串（算 1 組，畫小一點）
道具：`turnip`
動畫：an-shake
翻頁：無
聲音：新錄

### P10
EN: POP! Out came the enormous turnip!
ZH: 啵！大蘿蔔拔出來了！
劇情推進：解決。
畫面：`garden`／中景
角色：—
道具：`turnip` 飛到半空、泥土噴出來
動畫：an-pop
翻頁：無
聲音：新錄

### P11
EN: Everyone fell down. Bump, bump, bump! They laughed.
ZH: 大家都跌倒了。碰、碰、碰！大家哈哈笑。
劇情推進：好笑的結果。
畫面：`garden`／中景
角色：大家疊成一團（算 1 組）— 大笑；`mouse` 在最上面
道具：`turnip`
動畫：an-bob
翻頁：無
聲音：新錄

### P12
EN: They made turnip soup. The mouse got the first bowl!
ZH: 他們煮了蘿蔔湯，第一碗給小老鼠！
劇情推進：溫暖結局：最小的也很重要。
畫面：`kitchen`／中景
角色：`grandpa`＠左；`mouse`＠中 — 開心
道具：`pot`、`SK.bowl`
動畫：an-bob
翻頁：無
聲音：新錄

---

## 問答
| 題 | EN | 答案 | 選項 | 圖 |
|---|---|---|---|---|
| 最後來幫忙的是誰？ | Who came last to help? | mouse | mouse / cat / dog | 都有 |
| 女孩叫來了誰？ | Who did the girl call? | dog | dog / cat / cow | 都有 |
| 他們煮了什麼？ | What did they make? | soup | soup / cake / bread | 都有 |

## 給美術的待辦（這本）
1. 新做 `turnip`（超大蘿蔔）和 `seed`。
2. 排成一串拔蘿蔔的姿勢：每個角色都要有「往左拉」的動作。
3. P06、P07 只畫最後 3 個，前面的人只露出手。

## 錄音
新書，12 頁都要錄（`turnip-1` 到 `turnip-12`，英文＋中文）。
