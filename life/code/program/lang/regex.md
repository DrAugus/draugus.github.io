# 正则表达式

## 遇到的问题

### 匹配可选内容时

如匹配时分秒，可能会没有秒时，正常的正则书写为 `\d{1,2}:\d{1,2}(:\d{1,2})?` 使用 `search` 而后 `group` 可以找到，但使用 `findall` 则无法找到，需要改为 `\d{1,2}:\d{1,2}(?::\d{1,2})?` 增加 `?:` 前缀。具体说明解释参看[官方文档「非捕获和命名组」](https://docs.python.org/3/howto/regex.html#non-capturing-and-named-groups)。（下方[实例](#提取日期)也可参考）

## 实践

### 简单匹配

匹配中文 `[\u4e00-\u9fa5]`  
匹配英文 `[a-zA-Z]`  
匹配数字 `[0-9]`

匹配 字母+空格+汉字，形如”a 好“，`[a-zA-Z] [\u4e00-\u9fa5]`  
那么如果只匹配符合这个格式的空格呢？

### 正则表达式匹配空行、空白行

两种方法

- `^(\t)*$\n`
- `/^\s*$/`

### python 提取字符串中的指定字符  

```py
def match_strings(text, begin, end):
    pattern = re.compile(f'{begin}(.*?){end}')
    matches = pattern.findall(text)
    return matches
```

如果 字符串里有 `\n` 记得替换掉 否则不生效

### 提取日期

:::code-group

```py [single match]
import re
# single match
find_des = '2024/6/25 18:00—2024/7/16 14:59\n\n'
time_match = re.search(
    r"(\d{4}/\d{1,2}/\d{1,2}\s+\d{1,2}:\d{1,2}(:\d{1,2})?)", find_des
)
if time_match:
    time = time_match.group(1)
else:
    time = None
print(time)
```

```py [multi match]
def find_date(text):
    # 正则表达式匹配两种格式的时间字符串
    # 2024/1/2 or 2024/01/02 or 2024-01-02
    # 秒可选，可能会没有秒
    # (?::\d{1,2})?
    # 参考 群友 及 https://docs.python.org/3/howto/regex.html#non-capturing-and-named-groups
    pattern = r"\d{4}[/-]\d{1,2}[/-]\d{1,2}\s+\d{1,2}:\d{1,2}(?::\d{1,2})?"
    matches = re.findall(pattern, text)
    unique_matches = list(dict.fromkeys(matches))
    return unique_matches
```

:::
