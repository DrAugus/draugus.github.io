# lambda

lambda 表达式的价值在于，就地封装短小的功能闭包，可以极其方便地表达出我们希望执行的具体操作，并让上下文结合得更加紧密。
lambda 表达式的类型在 C++11 中被称为“闭包类型（Closure Type）”。它是一个特殊的，匿名的非 union 的类类型。
lambda表达式有如下优点：

- 声明式编程风格：就地匿名定义目标函数或函数对象，不需要额外写一个命名函数或者函数对象。以更直接的方式去写程序，好的可读性和可维护性。
- 简洁：不需要额外再写一个函数或者函数对象，避免了代码膨胀和功能分散，让开发者更加集中精力在手边的问题，同时也获取了更高的生产率。 在需要的时间和地点实现功能闭包，使程序更灵活。

语法形式   `[ capture ] ( params ) opt -> ret { body; };`
其中 capture 是捕获列表，params 是参数表，opt 是函数选项，ret 是返回值类型，body是函数体。
lambda 表达式还可以通过捕获列表捕获一定范围内的变量：

- `[]` 不捕获任何变量。
- `[&]` 捕获外部作用域中所有变量，并作为引用在函数体中使用（按引用捕获）。
- `[=]` 捕获外部作用域中所有变量，并作为副本在函数体中使用（按值捕获）。
- `[=, &foo]` 按值捕获外部作用域中所有变量，并按引用捕获 foo 变量。
- `[bar]` 按值捕获 bar 变量，同时不捕获其他变量。
- `[this]` 捕获当前类中的 this 指针，让 lambda

表达式拥有和当前类成员函数同样的访问权限。如果已经使用了 & 或者 =，就默认添加此选项。捕获 this 的目的是可以在 lambda 中使用当前类的成员函数和成员变量。

Lambda表达式完整的声明格式如下：
`[capture list] (params list) mutable exception-> return type { function body }`
各项具体含义如下

- capture list：捕获外部变量列表
- params list：形参列表
- mutable指示符：用来说用是否可以修改捕获的变量
- exception：异常设定
- return type：返回类型
- function body：函数体

此外，我们还可以省略其中的某些成分来声明“不完整”的Lambda表达式，常见的有以下几种：

1. `[capture list] (params list) -> return type {function body}`
2. `[capture list] (params list) {function body}`
3. `[capture list] {function body}`

其中：
格式1声明了const类型的表达式，这种类型的表达式不能修改捕获列表中的值。
格式2省略了返回值类型，但编译器可以根据以下规则推断出Lambda表达式的返回类型：
（1）：如果function
body中存在return语句，则该Lambda表达式的返回类型由return语句的返回类型确定；
（2）：如果function body中没有return语句，则返回值为void类型。
格式3中省略了参数列表，类似普通函数中的无参函数。
