# 关键字

## constexpr

它的主要作用是在编译时求值。这意味着，被 `constexpr` 修饰的表达式的值可以在编译阶段就确定，而不是在程序运行时计算。

```cpp
constexpr int add(int a, int b) {
    return a + b;
}
int main() {
    constexpr int result = add(2, 3);
    // 这里的add(2, 3)在编译阶段就计算出结果为5
    // result的值在编译时就确定为5了
    return 0;
}
```

constexpr可用于修饰函数（像上述add函数）、变量等。用在函数上时，函数体通常较为简单，且在编译阶段能计算出返回值；用于变量时，变量会被当作编译时常量来处理。这样有助于提升程序性能，因为编译时求值减少了运行时的计算开销，同时编译器还能对涉及这些常量的代码进行更多优化。
