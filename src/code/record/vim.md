---
sidebar: false
---
# vim 使用

## 替换字符串

- `:s/source str/replace str/` replace current line first str 
- `:s/source str/replace str/g` replace current line all str
- `:n,$s/source str/replace str/` replace from n to the last line all first str
- `:%s/source str/replace str/` replace all str

## 光标移动

- `0` 移动光标到当前行行首
- `$` 移动光标到当前行行尾
- `^` 移动光标到当前行的第一个非空字符
- `nG` 移动光标到当前文件的第n行
- `:n` 移动光标到当前文件的第n行 (同上)
- `gg` 或 `:0` 移动光标到当前文件的第一行
- `GG` 或 `:$` 移动光标到当前未经的最后一行
- `w` 或 `W` 移动到下一单词的开头
- `b` 或 `B` 移动到上一单词的开头
- `e` 或 `E` 移动到光标所在单词的末尾
- `Ctrl` + `f` 向前滚动一页
- `Ctrl` + `b` 向后滚动一页
- `Ctrl` + `u` 向前滚动半页
- `Ctrl` + `d` 向后滚动半页

