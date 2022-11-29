---
icon: vscode-icons:file-type-cpp2
---

# const

## 如何在const成员函数中赋值？

> 使用`mutable`去掉const的成员函数的const性质

为什么要有这种去除常量标志的需求？

* 两个概念：物理常量性和逻辑常量性
    * 物理常量性：实际上就是常量。
    * 逻辑常量性：对用户而言是常量，但在用户不能访问的细节上不是常量。

## const_cast和mutable的比较

* const_cast:
    * 强制去掉对象的const属性。
    * 缺点：对const对象，调用包含const_cast的const成员函数，属于未定义行为。
* mutable:
    * 使用场景：对可能要发生变化的成员前，加上存储描述符mutable。
    * 实质：对加了mutable的成员，无视所有const声明。

## const 与 #define 的比较，const有什么优点?

- const 常量有数据类型，而宏常量没有数据类型。编译器可以对前者进行类型安全检查。而对后者只进行字符替换，没有类型安全检查，并且在字符替换可能会产生意料不到的错误（边际效应）
  。
- 有些集成化的调试工具可以对 const 常量进行调试，但是不能对宏常量进行调试。

## const、static 关键字有什么区别

## 如何初始化const和static数据成员？

通常在类外初始化static数据成员，但是 static const 的整型(ool，char，int，long)可以再类声明中初始化， static
const的其他类型也必须在类外初始化(包括整型的数组)。

