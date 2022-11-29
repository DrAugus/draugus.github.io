---
icon: vscode-icons:file-type-cpp2
---

# 堆栈 内存

## 简述 C++ 的内存分区

## 简述 C++ 中内存对齐的使用场景

## C++ 是如何进行内存管理的？

## C/C++内存存储区有哪几种类型？

## 内存中堆与栈的区别是什么？

## 内存的分配方式有几种

1. 从静态存储区域分配。内存在程序编译的时候就已经分配好，这块内存在程序的整个运行期间都存在。例如全局变量。
2. 在栈上创建。在执行函数时，函数内局部变量的存储单元都可以在栈上创建，函数执行结束时这些存储单元自动被释放。栈内存分配运算内置于处理器的指令集中，效率很高，但是分配的内存容量有限。
3. 从堆上分配，亦称动态内存分配。程序在运行的时候用malloc或new申请任意多少的内存，程序员自己负责在何时用free或delete释放内存。动态内存的生存期由我们决定，使用非常灵活，但问题也最多。

## C++如何避免内存泄漏

> 这其实可以看做是一个编程风格的问题。

* 使用RAII(Resource Acquisition Is Initialization,资源获取即初始化)技法，以构造函数获取资源(内存),析构函数释放。
* 相比于使用原生指针，更建议使用智能指针，尤其是C++11标准化后的智能指针。
* 注意delete和delete[]的使用方法。
* 这是很复杂的一种情况，是关于类的copy constructor的。首先先介绍一些概念。

同default constructor一样，标准保证，如果类作者没有为class声明一个copy constructor，那么编译器会在需要的时候产生出来(这也是一个常考点：问道”如果类作者未定义出default/copy
constructor，编译器会自动产生一个吗？”答案是否定的)
不过请注意！！这里编译器即使产生出来，也是为满足它的需求，而非类作者的需求！！   
而什么时候是编译器”需要”的时候呢？是在当这个class 【不表现出】bitwise copy semantics(位逐次拷贝，即浅拷贝)
的时候。 在4中情况下class【不表现出】bitwise copy semantics

* 当class内含一个member object且该member object声明了一个copy constructor(无论该copy ctor是类作者自己生明的还是编译器合成的)；
* 当class继承自一个base class且该base class有一个copy constructor(无论该copy ctor是类作者自己生明的还是编译器合成的)；
* 当class声明了virtual function；
* 当class派生自一个继承链，且该链中存在virtual base class时。

言归正传，如果class中仅仅是一些普通资源，那么default memberwise copy是完全够用的；然而，挡在该class中存在了一块动态分配的内存，并且在之后执行了bitwise copy
semantics后，将会有一个按位拷贝的对象和原来class中的某个成员指向同一块heap空间，当执行它们的析构函数后，该内存将被释放两次，这是未定义的行为。因此，在必要的时候需要使用user###defined explicit
copy constructor，来避免内存泄露。
