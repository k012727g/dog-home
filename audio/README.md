# 音源資料夾 audio/

繪本朗讀用的錄好的聲音檔（mp3，單聲道 48kbps）。

## 結構
`audio/<故事 id>/<聲音>/<語言>_<頁>.mp3`
- 頁 0 是書名，1～8 是內頁。
- 語言：`en` 英文、`zh` 中文。
- 目前只有 `snow`（白雪公主），給 `beta/story_voice_test.html` 試聽用。

## 聲音來源與授權
| 資料夾開頭 | 來源 | 授權 |
|---|---|---|
| `kokoro-` | Kokoro-82M 語音模型，用 GitHub 上的 thewh1teagle/kokoro-onnx 產生 | Apache-2.0，可以自由使用 |
| `edge-` | 微軟線上神經語音，用 GitHub 上的 rany2/edge-tts 工具產生 | 微軟沒有公開授權，只適合家裡自己用，不要拿去公開散布或商用 |

## 重新產生
選定聲音後，可以用同樣的方法一次產生 17 本書的全部頁面。
