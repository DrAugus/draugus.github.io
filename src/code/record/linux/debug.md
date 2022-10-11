# 调试

## Linux中用gdb查看代码堆栈的信息

> core dump 一般是在segmentation fault（段错误）的情况下产生的文件，需要通过ulimit来设置才会得到的。

调试的话输入： `gdb filename core`
> filename就是产生core文件的可执行文件，core就是产生的dump文件

## 查看栈信息

当程序被停住了，你需要做的第一件事就是查看程序是在哪里停住的。当你的程序调用了一个函数，函数的地址，函数参数，函数内的局部变量都会被压入“栈”（Stack）中。你可以用GDB命令来查看当前的栈中的信息。
下面是一些查看函数调用栈信息的GDB命令：

- backtrace
- bt

打印当前的函数调用栈的所有信息。如：

```shell
(gdb) bt
#0 func (n=250) at tst.c:6
#1 0x08048524 in main (argc=1, argv=0xbffff674) at tst.c:30
#2 0x400409ed in __libc_start_main () from /lib/libc.so.6
```

从上可以看出函数的调用栈信息：<code>__libc_start_main --> main()--> func()</code>

```shell
backtrace n
bt n
# n是一个正整数，表示只打印栈顶上n层的栈信息。
backtrace <-n>
bt <-n>
# -n表一个负整数，表示只打印栈底下n层的栈信息。
```

如果你要查看某一层的信息，你需要在切换当前的栈，一般来说，程序停止时，最顶层的栈就是当前栈，如果你要查看栈下面层的详细信息，首先要做的是切换当前栈。

```shell
frame n
f n
# n是一个从0开始的整数，是栈中的层编号。比如：frame 0，表示栈顶，frame 1，表示栈的第二层。
up
# 表示向栈的上面移动n层，可以不打n，表示向上移动一层。
down
# 表示向栈的下面移动n层，可以不打n，表示向下移动一层。
```

上面的命令，都会打印出移动到的栈层的信息。如果你不想让其打出信息。你可以使用这三个命令：

- `select-frame` 对应于 frame 命令。
- `up-silently` 对应于 up 命令。
- `down-silently` 对应于 down 命令。

查看当前栈层的信息，你可以用以下GDB命令：

`frame` 或 `f`

会打印出这些信息：栈的层编号，当前的函数名，函数参数值，函数所在文件及行号，函数执行到的语句。

- `info frame`
- `info f`

这个命令会打印出更为详细的当前栈层的信息，只不过，大多数都是运行时的内存地址。比如：函数地址，调用函数的地址，被调用函数的地址，目前的函数是由什么样的程序语言写成的、函数参数地址及值、局部变量的地址等等。如：

```shell
(gdb) info f
Stack level 0, frame at 0xbffff5d4:
eip = 0x804845d in func (tst.c:6); saved eip 0x8048524
called by frame at 0xbffff60c
source language c.
Arglist at 0xbffff5d4, args: n=250
Locals at 0xbffff5d4, Previous frame's sp is 0x0
Saved registers:
ebp at 0xbffff5d4, eip at 0xbffff5d8
```

- `info args` 打印出当前函数的参数名及其值。
- `info locals` 打印出当前函数中所有局部变量及其值。
- `info catch` 打印出当前的函数中的异常处理信息。

## 查看源程序

## 查看运行时数据

## 改变程序的执行

一旦使用GDB挂上被调试程序，当程序运行起来后，你可以根据自己的调试思路来动态地在GDB中更改当前被调试程序的运行线路或是其变量的值，这个强大的功能能够让你更好的调试你的程序，比如，你可以在程序的一次运行中走遍程序的所有分支。



