# 格式说明

## [IDIOM json](./idiom.json)

```json
{
  "望眼欲穿": [
    "wàng yǎn yù chuān",
    "形容盼望急切。",
    ["力所不及"],
    ["左右逢源"],
    "明·西湘居士《明月环》：“小姐望眼欲穿；老身去回覆小姐去也。”"
  ]
}
```

obj: key 为成语，value为定长数组 0 注音 1 释义 2 近义词数组 3 反义词数组 4 出处


## [ENGLISH json](./english.json)

```json
{
  "afford": [
    [
      "买得起",
      "have enough money to pay for.",
      "the best that I could afford was a first-floor room"
    ],
    [
      "给予",
      "provide or supply (an opportunity or facility)",
      "the rooftop terrace affords beautiful views"
    ]
  ]
}
```

obj: key 为单词，value 为不定长数组，代表 0-N 个释义，每个释义内部分为 0 中文释义 1 英文释义 2 对应例句

