# Lambda

## stroustrup intro

from [Thriving in a Crowded and Changing World: C++ 2006-2020](https://www.stroustrup.com/hopl20main-p5-p-bfc9cd4--final.pdf)(p53)
> The lambda library was a masterpiece of early template metaprogramming and very
> convenient and popular. Unfortunately, it wasn't particularly efficient. For years, I tracked its
> performance relative to hand-coded equivalents and found a fairly consistent 2.5 times overhead. I
> could not recommend something that was convenient, but slow. Doing so would damage C++’s reputation as a language for
> efficient code

lambda 表达式库是早期模板元编程的典范，非常方便和流行。不幸的是，它的效率并不特别高。多年来，我追踪了它相对于手工编码的同等实现的性能，发现它的开销是后者的 2.5 倍且这种差距相当一致。我不能推荐一种方便但却很慢的东西。这样做会损害C++ 作为产生高效代码的语言的声誉。

from [Thriving in a Crowded and Changing World: C++ 2006-2020](https://www.stroustrup.com/hopl20main-p5-p-bfc9cd4--final.pdf)(p55)

> If the callback is invoked on the same
> thread as test, `[&s]` capture is potentially efficient because s is not copied. If the callback is invoked
> on a different thread, `[&s]` capture could be a disaster because s could go out of scope before it
> was used; in that case, we want a copy. A `[=]` capture list means "copy all local variables into the
> lambda." A `[&]` capture list means "the lambda can refer to all local variables by reference" and
> implies that the lambda can be implemented as simply a local function.

如果回调函数在与 test 相同的线程上被调用，`[&s]` 捕获可能效率更高，因为 s 没有被复制。如果回调函数在不同的线程上被调用，`[&s]` 捕获可能是一个灾难，因为 s在被使用之前可能会超出作用域；这种情况下，我们想要一份副本。一个 `[=]` 捕获列表意味着“将所有局部变量复制到 lambda 表达式中”。而一个 `[&]` 捕获列表意味着“lambda 表达式可以通过引用指代所有局部变量”，并意味着lambda 表达式可以简单地实现为一个局部函数。

## other

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
