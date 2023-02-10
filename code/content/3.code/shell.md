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

### 逻辑控制

- `-eq` =
- `-ne` !=
- `-gt` >
- `-lt` <
- `ge` >=
- `le` <=

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

## QA

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

## skill

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
