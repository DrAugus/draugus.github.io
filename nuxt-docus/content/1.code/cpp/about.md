# about

from [Thriving in a Crowded and Changing World: C++ 2006-2020](https://www.stroustrup.com/hopl20main-p5-p-bfc9cd4--final.pdf)(
p53)
> The lambda library was a masterpiece of early template metaprogramming and very
> convenient and popular. Unfortunately, it wasn't particularly efficient. For years, I tracked its
> performance relative to hand-coded equivalents and found a fairly consistent 2.5 times overhead. I
> could not recommend something that was convenient, but slow. Doing so would damage C++’s reputation as a language for
> efficient code

lambda 表达式库是早期模板元编程的典范，非常方便和流行。不幸的是，它的效率并不特别高。多年来，我追踪了它相对于手工编码的同等实现的性能，发现它的开销是后者的 2.5 倍且这种差距相当一致。我不能推荐一种方便但却很慢的东西。这样做会损害
C++ 作为产生高效代码的语言的声誉。

from [Thriving in a Crowded and Changing World: C++ 2006-2020](https://www.stroustrup.com/hopl20main-p5-p-bfc9cd4--final.pdf)(
p55)

> If the callback is invoked on the same
> thread as test, [&s] capture is potentially efficient because s is not copied. If the callback is invoked
> on a different thread, [&s] capture could be a disaster because s could go out of scope before it
> was used; in that case, we want a copy. A [=] capture list means "copy all local variables into the
> lambda." A [&] capture list means "the lambda can refer to all local variables by reference" and
> implies that the lambda can be implemented as simply a local function.

如果回调函数在与 test 相同的线程上被调用，[&s] 捕获可能效率更高，因为 s 没有被复制。如果回调函数在不同的线程上被调用，[&s] 捕获可能是一个灾难，因为 s
在被使用之前可能会超出作用域；这种情况下，我们想要一份副本。一个 [=] 捕获列表意味着“将所有局部变量复制到 lambda 表达式中”。而一个 [&] 捕获列表意味着“lambda 表达式可以通过引用指代所有局部变量”，并意味着
lambda 表达式可以简单地实现为一个局部函数。

## 代码风格

[Google 开源项目风格指南](https://zh-google-styleguide.readthedocs.io/en/latest/google-cpp-styleguide/contents/)
[Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html)