---
icon: vscode-icons:file-type-powershell-psd2
---

# Shell

[refer](https://www.runoob.com/linux/linux-shell.html)

第一个 shell 脚本

```shell [test.sh]
#!/bin/bash
echo "Hello World !"
```

`#!` 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell。扩展名并不影响脚本执行  
echo 命令用于向窗口输出文本。

```shell
chmod +x ./test.sh  #使脚本具有执行权限
./test.sh  #执行脚本
```

## run

1. 作为可执行程序
将上面的代码保存为 test.sh，并 cd 到相应目录：

```shell
chmod +x ./test.sh  #使脚本具有执行权限
./test.sh  #执行脚本
```

注意，一定要写成 ./test.sh，而不是 test.sh，运行其它二进制的程序也一样，直接写 test.sh，linux 系统会去 PATH 里寻找有没有叫 test.sh 的，而只有 /bin, /sbin, /usr/bin，/usr/sbin 等在 PATH 里，你的当前目录通常不在 PATH 里，所以写成 test.sh 是会找不到命令的，要用 ./test.sh 告诉系统说，就在当前目录找。
2. 作为解释器参数
这种运行方式是，直接运行解释器，其参数就是 shell 脚本的文件名，如：

```shell
/bin/sh test.sh
/bin/php test.php
```

这种方式运行的脚本，不需要在第一行指定解释器信息，写了也没用。

## Grammar

### 注释

以 `#` 开头的行就是注释，会被解释器忽略。通过每一行加一个 # 号设置多行注释，如

```shell
# comment
## ff
# foo
# fo
```

EOF 注释

```shell
:<<EOF
注释内容...
注释内容...
注释内容...
EOF

# EOF 也可以使用其他符号

:<<'
注释内容...
注释内容...
注释内容...
'

:<<!
注释内容...
注释内容...
注释内容...
!
```

其他 (需要在自己编译环境下，亲测每种注释方法的有效性)

```shell
:'
被注释的内容
'

if false; then
被注释的内容
fi

((0)) && {
被注释的内容
}
```

### 变量

#### 类型

**局部变量** 局部变量在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量。  
**环境变量** 所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候shell脚本也可以定义环境变量。

#### 定义

```shell
foo="foo.name"
```

变量名的命名须遵循如下规则：

- 命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。
- 中间不能有空格，可以使用下划线 `_` 。
- 不能使用标点符号。
- 不能使用bash里的关键字（可用help命令查看保留关键字）。

除了显式地直接赋值，还可以用语句给变量赋值，如：

```shell
for file in `ls /etc`
#或
for file in $(ls /etc)
```

已定义的变量，可以被重新定义

```shell
foo="augus"
echo ${foo}
foo="meow"
echo ${foo}
```

#### 使用

使用一个定义过的变量，只要在变量名前面加美元符号即可

```shell
foo="augus"
echo $foo
echo ${foo}
```

变量名外面的花括号是可选的，加花括号是为了帮助解释器识别变量的边界

```shell
for skill in C Vue Rust JS; do
    echo "I am good at ${skill} lang"
done
```

#### 只读

使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。

```shell
url="https://draugus.github.io/"
readonly url
```

#### 删除变量

使用 unset 命令可以删除变量。语法：

```shell
unset variable_name
```

变量被删除后不能再次使用。unset 命令不能删除只读变量。

#### string

字符串可以用单引号，也可以用双引号，也可以不用引号。

##### 单引号

```shell
str='this is a string'
```

单引号字符串的限制：

- 单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的；
- 单引号字串中不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为[字符串拼接](#拼接字符串)使用。

##### 双引号

```shell
your_name="au"
str="Hello, I know you are \"$your_name\"! \n"
echo -e $str
```

双引号的优点：

- 双引号里可以有变量
- 双引号里可以出现转义字符

##### 拼接字符串

```shell
your_name="meow"
# 使用双引号拼接
greeting="hello, "$your_name" !"
greeting_1="hello, ${your_name} !"
echo $greeting  $greeting_1

# 使用单引号拼接 
greeting_2='hello, '$your_name' !'
greeting_3='hello, ${your_name} !'
echo $greeting_2  $greeting_3
```

##### 获取字符串长度

```shell
string="abcd"
echo ${#string}     # 输出 4
echo ${#string[0]}  # 输出 4
```

变量为数组时，`${#string}` 等价于 `${#string[0]}`

##### 提取子字符串

以下实例从字符串第 2 个字符开始截取 4 个字符：

```shell
string="augus is a person"
echo ${string:1:4} # 输出 ugus
```

注意：第一个字符的索引值为 0。

##### 查找子字符串

查找字符 g 或 u 的位置(哪个字母先出现就计算哪个)：

```shell
string="augus is a great person"
echo `expr index "$string" gu`  # 输出 1
```

#### 数组

支持一维数组（不支持多维数组），并且没有限定数组的大小。  
类似于 C 语言，数组元素的下标由 0 开始编号。获取数组中的元素要利用下标，下标可以是整数或算术表达式，其值应大于或等于 0。

##### 定义

用括号来表示数组，数组元素用"空格"符号分割开。定义数组的一般形式为：

```shell
# 数组名=(值1 值2 ... 值n)
array_name=(value0 value1 value2 value3)
```

可以不使用连续的下标，而且下标的范围没有限制。

##### 读取

```shell
# ${数组名[下标]}
valuen=${array_name[n]}

# 使用 @ 符号可以获取数组中的所有元素
echo ${array_name[@]}
```

##### 获取数组的长度

```shell
# 取得数组元素的个数
length=${#array_name[@]}
# 或者
length=${#array_name[*]}
# 取得数组单个元素的长度
lengthn=${#array_name[n]}
```

### echo

```bash
echo -e "OK! \n" # -e 开启转义
echo "It is a test"
echo -e "OK! \c" # -e 开启转义 \c 不换行
echo "It is a test"
echo "It is a test" > myfile # 重定向
echo `date` # 显示命令执行结果
```

### 运算符

#### 算术运算符

假定变量 a 为 10，变量 b 为 20
|运算符| 说明| 举例|
|:----|:----|:----|
|`+`| 加法| `expr $a + $b` 结果为 30。|
|`-` |减法| `expr $a - $b` 结果为 -10。|
|`*` |乘法| `expr $a \* $b` 结果为  200。|
|`/` |除法| `expr $b / $a` 结果为 2。|
|`%` |取余| `expr $b % $a` 结果为 0。|
|`=` |赋值| `a=$b` 把变量 b 的值赋给 a。|
|`==` |相等。用于比较两个数字，相同则返回 true。| `[ $a == $b ]` 返回 false。|
|`!=` |不相等。用于比较两个数字，不相同则返回 true。| `[ $a != $b ]` 返回 true。|
>注意：条件表达式要放在方括号之间，并且要有空格，例如: `[$a==$b]` 是错误的，必须写成 `[ $a == $b ]`。

推荐用 `$()` 代替 ``:

```bash
val=`expr 10 + 20`
val=$(expr 10 + 20)
```

#### 关系运算符

> 只支持数字

假定变量 a 为 10，变量 b 为 20

- `-eq` = EQUAL `[ $a -eq $b ]` 返回 false
- `-ne` != NOT EQUAL `[ $a -ne $b ]` 返回 true
- `-gt` > GREATER THAN `[ $a -gt $b ]` 返回 false
- `-lt` < LESS THAN `[ $a -lt $b ]` 返回 true
- `ge` >= GREATER THAN OR EQUAL `[ $a -ge $b ]` 返回 false
- `le` <= LESS THAN OR EQUAL `[ $a -le $b ]` 返回 true

#### 布尔运算符

- `!` 非
- `-o` 或
- `-a` 与

#### 逻辑运算符

`&&` `||`

```bash
command1 && command2     #命令1执行成功后，命令2才执行
command1 || command2     #命令1执行失败后，命令2才执行
```

> 使用 `[[ ... ]]` 条件判断结构，而不是 `[ ... ]`，能够防止脚本中的许多逻辑错误。比如，`&&`、`||`、`<` 和 `>` 操作符能够正常存在于 `[[ ]]` 条件判断结构中，但是如果出现在 `[ ]` 结构中的话，会报错。

#### 字符串运算符

假定变量 a 为 "abc"，变量 b 为 "efg"
|运算符| 说明| 举例|
|:---|:---|:---|
|`=`| 检测两个字符串是否相等，相等返回 true| `[ $a = $b ]` 返回 false|
|`!=`| 检测两个字符串是否不相等，不相等返回 true| `[ $a != $b ]` 返回 true|
|`-z`| 检测字符串长度是否为0，为0返回 true| `[ -z $a ]` 返回 false|
|`-n`| 检测字符串长度是否不为0，不为0返回 true| `[ -n "$a" ]` 返回 true (`$a`注意加双引号)  |
|`$`| 检测字符串是否不为空，不为空返回 true| `[ $a ]` 返回 true|

#### 文件测试运算符

文件测试运算符用于检测 Unix 文件的各种属性

|操作符| 说明| 举例|
|:---|:---|:---|
|-b file |检测文件是否是块设备文件，如果是，则返回 true| `[ -b $file ]` 返回 false|
|-c file| 检测文件是否是字符设备文件，如果是，则返回 true| `[ -c $file ]` 返回 false|
|-d file| 检测文件是否是目录，如果是，则返回 true| `[ -d $file ]` 返回 false|
|-e file| 检测文件（包括目录）是否存在，如果是，则返回 true| `[ -e $file ]` 返回 true|
|-f file| 检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true| `[ -f $file ]` 返回 true|
|-g file| 检测文件是否设置了 SGID 位，如果是，则返回 true| `[ -g $file ]` 返回 false|
|-k file| 检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true| `[ -k $file ]` 返回 false|
|-p file| 检测文件是否是有名管道，如果是，则返回 true| `[ -p $file ]` 返回 false|
|-u file| 检测文件是否设置了 SUID 位，如果是，则返回 true| `[ -u $file ]` 返回 false|
|-r file| 检测文件是否可读，如果是，则返回 true| `[ -r $file ]` 返回 true|
|-w file| 检测文件是否可写，如果是，则返回 true| `[ -w $file ]` 返回 true|
|-x file| 检测文件是否可执行，如果是，则返回 true| `[ -x $file ]` 返回 true|
|-s file| 检测文件是否为空（文件大小是否大于0），不为空返回 true| `[ -s $file ]` 返回 true|
|-S file|判断某文件是否 socket|-|
|-L file| 检测文件是否存在并且是一个符号链接|-|

### 参数获取

假设执行 `./test.sh a b c` 这样一个命令，则可以使用下面的参数来获取一些值：

- `$0` 对应 `./test.sh` 这个值。如果执行的是 `./work/test.sh`， 则对应 `./work/test.sh` 这个值，而不是只返回文件名本身的部分。
- `$1` 会获取到 a，即 `$1` 对应传给脚本的第一个参数。
- `$2` 会获取到 b，即 `$2` 对应传给脚本的第二个参数。
- `$3` 会获取到 c，即 `$3` 对应传给脚本的第三个参数。`$4`、`$5` 等参数的含义依此类推。
- `$#` 会获取到 3，对应传入脚本的参数个数，统计的参数不包括 `$0`。
- `$@` 会获取到 "a" "b" "c"，也就是所有参数的列表，不包括 `$0`。
- `$*` 也会获取到 "a" "b" "c"， 其值和 `$@` 相同。但 `$*` 和 `$@` 有所不同。 `$*` 把所有参数合并成一个字符串，而 `$@` 会得到一个字符串参数数组。
- `$?` 可以获取到执行 `./test.sh a b c` 命令后的返回值。 在执行一个前台命令后，可以立即用 `$?` 获取到该命令的返回值。 该命令可以是系统自身的命令，可以是 shell 脚本，也可以是自定义的 bash 函数。
  - 当执行系统自身的命令时，`$?` 对应这个命令的返回值。
  - 当执行 shell 脚本时，`$?` 对应该脚本调用 exit 命令返回的值。如果没有主动调用 exit 命令，默认返回为 0。
  - 当执行自定义的 bash 函数时，`$?` 对应该函数调用 return 命令返回的值。如果没有主动调用 return 命令，默认返回为 0。

### 输入/输出重定向

|命令| 说明|
|:---|:---|
|`command > file`| 将输出重定向到 file|
|`command < file`| 将输入重定向到 file|
|`command >> file`| 将输出以追加的方式重定向到 file|
|`n > file`| 将文件描述符为 n 的文件重定向到 file|
|`n >> file`| 将文件描述符为 n 的文件以追加的方式重定向到 file|
|`n >& m`| 将输出文件 m 和 n 合并|
|`n <& m`| 将输入文件 m 和 n 合并|
|`<< tag`| 将开始标记 tag 和结束标记 tag 之间的内容作为输入|

>文件描述符 0 通常是标准输入（STDIN），1 是标准输出（STDOUT），2 是标准错误输出（STDERR）。

一般情况下，每个 Unix/Linux 命令运行时都会打开三个文件：

- 标准输入文件(stdin)：stdin的文件描述符为0，Unix程序默认从stdin读取数据。
- 标准输出文件(stdout)：stdout 的文件描述符为1，Unix程序默认向stdout输出数据。
- 标准错误文件(stderr)：stderr的文件描述符为2，Unix程序会向stderr流中写入错误信息。
默认情况下，command > file 将 stdout 重定向到 file，command < file 将stdin 重定向到 file。  
如果希望 stderr 重定向到 file，可以这样写：`command 2>file`  
如果希望 stderr 追加到 file 文件末尾，可以这样写：`command 2>>file`  
**2** 表示标准错误文件(stderr)。  
如果希望将 stdout 和 stderr 合并后重定向到 file，可以这样写：

```bash
command > file 2>&1
# 或者
command >> file 2>&1
```

如果希望对 stdin 和 stdout 都重定向，可以这样写：`command < file1 >file2`  
command 命令将 stdin 重定向到 file1，将 stdout 重定向到 file2。  

/dev/null 文件

如果希望执行某个命令，但又不希望在屏幕上显示输出结果，那么可以将输出重定向到 /dev/null：`command > /dev/null`  
/dev/null 是一个特殊的文件，写入到它的内容都会被丢弃；如果尝试从该文件读取内容，那么什么也读不到。但是 /dev/null 文件非常有用，将命令的输出重定向到它，会起到"禁止输出"的效果。  
如果希望屏蔽 stdout 和 stderr，可以这样写： `command > /dev/null 2>&1`  
> 注意：0 是标准输入（STDIN），1 是标准输出（STDOUT），2 是标准错误输出（STDERR）。这里的 2 和 > 之间不可以有空格，2> 是一体的时候才表示错误输出。

### 文件包含

和其他语言一样，Shell 也可以包含外部脚本

```bash
. filename   # 注意点号(.)和文件名中间有一空格
# 或
source filename
```

> 被包含的文件 filename 不需要可执行权限。

### exit

When used in a shell script, the commands `exit 0` and `exit 1` indicate the success or failure of a command or script. Generally, `exit 0` is used to indicate successful completion, while `exit 1` is used to indicate an error or failure. It is important to note that the exit code is -1 if the script is terminated by a signal such as SIGINT or SIGKILL.

## QA

### /bin/bash^M: bad interpreter: No such file or directory

这个错误信息提示的问题是由于在 `build.sh` 脚本文件中包含了 Windows 风格的换行符（CR LF，即回车加换行），而 Linux 或 Unix 系统通常只识别 LF（换行符）作为行结束符。这里的 `^M` 是回车符（CR）在命令行中的表示方式。

要解决这个问题，你可以使用几种不同的方法来转换文件的换行符格式：

方法 1: 使用 `dos2unix` 工具

如果你的系统中安装了 `dos2unix` 工具，可以很方便地转换文件：

```bash
dos2unix build.sh
```

如果没有安装 `dos2unix`，你可以通过包管理器安装它。例如，在 Ubuntu 上，你可以使用：

```bash
sudo apt-get install dos2unix
```

方法 2: 使用 `sed` 命令

如果你不想安装额外的工具，可以使用 `sed` 命令来删除回车符：

```bash
sed -i 's/\r$//' build.sh
```

注意：在某些系统中（如 macOS），你可能需要使用 `sed -i '' 's/\r$//' build.sh` 来避免 `-i` 选项后面直接跟空格。

方法 3: 使用 Vim 编辑器

如果你熟悉 Vim，可以在 Vim 中打开文件，然后使用 `:set ff=unix` 命令来设置文件格式为 Unix 格式，并保存退出。

```bash
vim build.sh
```

在 Vim 中，输入 `:set ff=unix`，然后按 `:wq` 保存并退出。

方法 4: 使用 Notepad++（如果你是在 Windows 上编辑的）

如果你是在 Windows 上编辑文件，然后将其转移到 Linux 上，可以使用 Notepad++ 这类文本编辑器，它允许你保存文件时使用 Unix/Linux 风格的换行符。在 Notepad++ 中，可以通过“编辑”->“EOL 转换”->“UNIX/OSX 格式”来实现。

完成上述任何一种转换后，你的 `build.sh` 脚本应该就能在 Linux 或 Unix 系统上正常运行了。

### mkdir err

```shell [foo.sh]
#!/bin/bash 
mkdir -p {bin,lib,etc}
```

execute this sh, `sh foo.sh`, 会创建一个名字为`{bin,lib,etc}`的文件夹。  
sol: `chmod a+x foo.sh` then execute `./foo.sh`

### zsh: 权限不够解决方法

> `chmod u+x *.sh`

### ubuntu（linux）下 source、sh、bash、./ 执行脚本的区别是什么？

#### `source`命令用法

```shell
source FileName
```

作用:在当前 bash 环境下读取并执行 FileName 中的命令。该 filename 文件可以无 "执行权限"。  
注：该命令通常用命令 `.` 来替代。

#### `sh`、`bash`的命令用法

```shell
sh FileName
或
bash FileName
```

作用:打开一个子 shell 来读取并执行 FileName 中命令。该 filename 文件可以无 "执行权限"。  
注：运行一个shell脚本时会启动另一个命令解释器。

#### `./`的命令用法

```shell
./FileName
```

作用: 打开一个子 shell 来读取并执行 FileName 中命令，该 filename 文件需要 "执行权限"。  
注：运行一个 shell 脚本时会启动另一个命令解释器。

## 实践

### 控制台输出重定向

默认情况下，`>` 只重定向标准输出（stdout），而标准错误（stderr）仍然会显示在终端上。为了同时捕获标准输出和标准错误，你可以使用 `&>` 或者分别重定向它们

```bash
./build.sh &> compile.log
# 或者在一些 shell 中可能需要使用
./build.sh > compile.log 2>&1
# 独立错误
./build.sh > compile.log 2> compile.err
```

当使用 `>` 或 `&>` 进行重定向时，如果 compile.log 文件已存在，它会被自动替换。如果需要保留原有内容，请使用追加模式（`>>` 或 `&>>`，如果可用）。

### 遍历文件个数

遍历某个目录下所有文件的个数（包括子目录）

```bash
ls -lR | grep "^-" | wc -l
```

遍历某个目录下所有目录的个数（包括子目录）

```bash
ls -lR | grep "^d" | wc -l
```

### 判断字符串包含关系

#### grep

```bash
strA="long string"
strB="string"
result=$(echo $strA | grep "${strB}")
if [[ "$result" != "" ]]
then
    echo "包含"
else
    echo "不包含"
fi
```

### =~

```bash
strA="long string"
strB="string"
if [[ $strA =~ $strB ]]
then
    echo "包含"
else
    echo "不包含"
fi
```

### 通配符

```bash
strA="long string"
strB="string"
if [[ $A == *$B* ]]
then
    echo "包含"
else
    echo "不包含"
fi
```
