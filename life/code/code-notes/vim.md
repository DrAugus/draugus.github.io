---
icon: logos:vimeo-icon
---
# vim

## 模式

4种模式

### 普通模式

- `h` left `j` down `k` up `l` right
  - `4j` 向下跳4行
- `w` 跳转下一个单词
- `b` 跳转到前一个单词开头
- `gg` 回到文档最上方 即 home 键
- `G` 回到文档最下方 即 end 键
- `Ctrl U` 即 PgUp
- `Ctrl D` 即 PgDn
- `f`
  - `fr`移动到离你最近的r
- `y` `yaw` yank all words
  - `y4j` 复制包含当前行的下四行
  - `yfr` 复制到r为止的内容
- `p` 粘贴
- `d` 删除
  - `dj` 删除当前行和下一行
  - `dfr` 删除到r为止的内容
- `caw` change all words 改变当前这个单词 进入输入模式
- `cc` 删除当前行进入输入模式
  - `c4j` 删除下四行进入输入模式
- `i` 是在当前光标的前一个字母进行输入
- `a` 是在当前光标之后进行输入
- `I` 从这一行开头开始输入
- `A` 从这一行末尾开始输入
- `o` 在当前行之后插入一行
- `O` 在当前行之前插入一行
- 撤销 `u` 撤销整行`U` 取消撤销 `ctrl + r`

### 命令模式

> 在普通模式下键入:进入命令模式

退出

- `:q`退出编辑
- `:q!`强制退出
- `:wq`保存并退出
- `:w`保存文件但不退出
- `:w file`将修改另存为file文件里不退出vim
- `:w!`强制保存文件但不退出
- `:wq!`强制保存文件并退出
- `:e!`放弃所有更改

> 以:和/开头的命令都有历史纪录，可以首先键入:或/然后按上下箭头来选择某个历史命令。

- 搜索 `/`正向往下搜索 `?`反向往上搜索 `n`正向向下寻找下一个 `N`反向向上寻找上一个
- 全局替换 `%s/源字符串/目的字符串/g`

### 输入模式

> 在普通模式下键入 `i` 进入输入模式
> 其他进入方式，如 `a` `I` `A` `caw` `cc`

- 此时可以对文件内容进行编辑，左下角会显示`"-- INSERT --"`
- 按"ESC"进入底行模式

### 可视模式

> 在普通模式下键入v进入可视模式

移动光标就会选中内容

y就可以直接复制选中的内容

[本文已足够，如果还想看点冗余的](https://blog.csdn.net/feosun/article/details/73196299)

## 补充

vim +10 filename.txt //打开文件并跳到第10行

vim -R /etc/passwd //以只读模式打开文件

## vimrc

`vim ~/.vimsc`

### tab

```txt [.vimsc]
set shiftwidth=4 #"这个量是每行的缩进深度，一般设置成和tabstop一样的宽度"
set tabstop=4 #"设置Tab显示的宽度，Python建议设置成4"

set expandtab
#"如果只想在Python文件中将Tab展开成空格，就改换成下面这句"
autocmd FileType python set expandtab

set smartindent #"智能缩进"
set cindent #"C语言风格缩进"
set autoindent #"自动缩进"
```

### 显示行号

临时显示行号 `set nu`  
永久显示行号 `vim ~/.vimsc` 末尾加上 `set number`

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

## 撤销

- `u` 撤销
- `ctrl+r` 恢复刚刚的撤销

## 查找

命令模式下，按`/`或`?`，然后输入要查找的字符，Enter。

- `/` 向前（下）找
- `?` 向后（上）找

### 全词匹配

如果你输入 `/int`，你也可能找到 “print”。  
要找到以 “int” 结尾的单词，可以用 `/int\>`

`\>` 是一个特殊的记号，表示只匹配单词末尾。类似地，`\<` 只匹配单词的开头。  
要匹配一个完整的单词 “int”，只需：`/\<int\>`
