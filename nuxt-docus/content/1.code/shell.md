---
icon: vscode-icons:file-type-powershell-psd2
---

# Bash

[refer]

第一个 shell 脚本
```shell
#!/bin/bash
echo "Hello World !"
```
`#!` 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell。  
echo 命令用于向窗口输出文本。

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

 todo others grammars

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

foo.sh
```shell
#!/bin/bash 
mkdir -p {bin,lib,etc}
```
execute this sh, `sh foo.sh`, 会创建一个名字为`{bin,lib,etc}`的文件夹。  
sol: `chmod a+x foo.sh` then execute `./foo.sh`

**zsh: 权限不够解决方法**
> `chmod u+x *.sh`



[refer]: https://www.runoob.com/linux/linux-shell.html