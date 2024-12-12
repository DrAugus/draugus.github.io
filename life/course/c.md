# C 语言

我们要让计算机做计算,就需要像这样找出计算的步骤,然后用编程语言写出来
计算机做的所有的事情都叫做计算
计算的步骤就是算法

程序的执行
解释:借助一个程序，那个程序能试图理解你的程序然后按照你的要求执行
编译:借助一个程序，就像一个翻译，把你的程序翻译成计算机真正能懂的语言--机器语言--写的程序，然后，这个机器语言写的程序就能直接执行了

解释语言vs编译语言
·语言本无编译/解释之分
。常用的执行方式而已
·解释型语言有特殊的计算能力。
编译型语言有确定的运算性能

现代的编程语言在语法上的差异很小·几乎都是C-like语言，
语言的能力/适用领域主要是由库和传统所决定的

C语言是从B语言发展而来的，B语言是从BCPL发展而来的，BCPL是从 FORTRAN发展而来的
BCPL和B都支持指针间接方式，所以C也支持了
C语言还受到了PL/1的影响，还和PDP-11的机器语言有很大的关系
1973年3月，第三版的Unix上出现了C语言的编译器
1973年11月，第四版的Unix(System Four)发布了这个版本是完全用C语言重新写的

经典C "K & R the C"

C的发展与版本-标准
1989年ANSI发布了一个标准--ANSI C
1990年ISO接受了ANSI的标准一C89
C的标准在1995年和1999年两次更新-C95和C99

C语言用在哪里？
操作系统、嵌入式系统、驱动程序、底层驱动(图形引擎、图像引擎、声音效果)

:::details Cygwin 和 MinGW 区别

Cygwin 和 MinGW 都是 Windows 平台下用于编译C/C++代码的工具，但它们在设计目标、功能特性和使用场景上存在显著的区别。

设计目标

* **Cygwin**：
  * 主要目标是为Windows平台提供一个类Unix环境，让原本运行在Unix/Linux环境中的程序代码可以在Windows下成功编译和运行。
  * 它通过抽象层将Windows API映射成POSIX API，使得Unix应用程序能够在Windows上运行。
* **MinGW**：
  * 全称是Minimalist GNU for Windows，即Windows平台的精简版GNU工具集。
  * 它提供了一组GNU工具和库（如GCC），使开发者能够在Windows环境中使用GCC编译和链接C、C++等语言的程序，并生成原生的Windows应用程序。

功能特性

* **Cygwin**：
  * 提供了完整的类Unix环境，包括Shell、编译器、工具、库等。
  * 支持广泛的Unix应用程序和工具链，如GCC、GnuPG、OpenSSH、Emacs等。
  * 编译后的程序需要依赖cygwin1.dll才能在Windows上运行。
* **MinGW**：
  * 专注于为Windows平台提供C/C++开发环境。
  * 支持各种Windows API和Windows SDK，可以生成与Windows API兼容的本地可执行文件。
  * 编译后的程序无需依赖额外的运行时环境，可直接在Windows上运行。

使用场景

* **Cygwin**：
  * 适用于需要在Windows上模拟Unix/Linux环境进行开发的场景。
  * 适用于运行类Unix的应用程序、Shell脚本和命令行工具。
  * 适用于需要与Unix环境兼容的开源工具和平台（如Git、Python、Perl、Ruby等）集成的场景。
* **MinGW**：
  * 适用于只需要在Windows上编写和编译C、C++等程序的场景。
  * 适用于需要生成与Windows系统集成度更高的本地应用程序的场景。
  * 适用于对内存和资源使用有较高要求的场景，因为MinGW编译的程序更加轻巧。

:::

数据类型

|类型|输入|输出|
|:---:|:---:|:---:|
|`int`|`scanf("%d", ...)`|`printf("%d", ...)`|
|`double`|`scanf("%lf", ...)`|`printf("%f", ...)`|

表达式

a = b + 5;

运算符(operator)：=、+  
算子(operand)：a、b、5

循环 for == while

for(;condition;) == while(condition)

```C
for (int i = 1; i <= n; i++) {
  fact *= i;
}

int i = 1;
while (i <= n) {
  fact *= i;
  i++;
}
```

Tips for loops
如果有固定次数，用for  
如果必须执行一次，用do_while  
其他情况用while

四则运算、关系运算、赋值运算、逻辑运算、条件运算(?:)、逗号运算符  
逗号运算符主要用在 `for (int i = 1, j = 1;;)` for 语句中

linux/macos `man sqrt` 找到库函数手册(Linux Programmer's Manual)

数组初始化

```c
int a[10]; // for 遍历初始化
int a[10] = {0}; // 同上
int a[10] = {[1] = 2, [3] = 4, 5,};
```
