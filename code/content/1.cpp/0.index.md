# 特性

## C++ 11 有什么新特性

与之前的版本相比，C++11增加了许多新的特性，包括：

- 新的类型：C++11增加了多种新的类型，例如auto和decltype，它们可以让程序员更容易地定义变量。
- 字面常量：C++11提供了新的字面常量，例如nullptr和u8"hello"，它们可以让程序员更方便地声明和使用指针和字符串。
- 智能指针：C++11提供了多种新的智能指针，例如unique_ptr和shared_ptr，它们可以自动管理内存，避免出现内存泄漏和野指针等错误。
- [Lambda表达式](./concept#lambda-函数的特点和普通函数相比有什么优点)：C++11增加了Lambda表达式，它可以让程序员在代码中定义和使用匿名函数。
- 新的容器：C++11增加了多种新的容器，例如unordered_map和array，它们可以提高容器的性能和使用方便性。
- 多线程支持：C++11增加了对多线程的支持，它提供了一系列的多线程库，可以让程序员方便地编写多线程程序。

除了以上特性之外，C++11还增加了许多其他的特性，例如对默认构造函数、拷贝构造函数、赋值运算符和移动运算符的编译器自动生成（叫做"自动类型推导"），以及对Unicode字符集的支持等等。

### 线程库

C++11中提供了一个多线程库，它可以让程序员在C++代码中创建和管理多线程。这个库包含了许多类和函数，可以用来操作线程、互斥量、条件变量和其他的同步对象。

下面是一个简单的C++11多线程程序的例子，它创建了两个线程，分别打印"hello"和"world"：

```cpp
#include <iostream>
#include <thread>

int main() {
  std::thread t1([]() { std::cout << "hello" << std::endl; });
  std::thread t2([]() { std::cout << "world" << std::endl; });

  t1.join();
  t2.join();

  return 0;
}
```

在这个程序中，我们使用了`std::thread`类来创建新的线程，并使用`join()`函数来等待线程结束。由于C++11的多线程库包含了许多类和函数，所以可以支持多种多线程编程模型，比如生产者-消费者模型、同步-异步模型等等。

在C++11中，如果想要使用多线程库，需要在代码中包含`<thread>`头文件。这个头文件包含了所有多线程库的声明，并且提供了一些宏定义和常量，可以用来查询系统的多线程支持情况。

例如，可以使用`std::thread::hardware_concurrency()`函数来获取系统的最大线程数，或者使用`std::this_thread::get_id()`函数来获取当前线程的标识符，等等。

除了`<thread>`头文件之外，C++11的多线程库还包含了其他几个头文件，它们可以用来实现更为复杂的多线程程序。例如，`<mutex>`头文件包含了互斥量类型和函数，可以用来保证多个线程对共享数据的互斥访问；`<future>`头文件包含了`future`和`promise`类型，可以用来实现线程间的同步和通信等等。

总之，C++11的多线程库为C++程序员提供了一系列的工具和类型，可以让他们编写高性能的多线程程序。

### 智能指针

智能指针是一种智能指针类型，它在管理内存时具有智能化的行为。普通的指针只能表示一个内存地址，而智能指针则具有自动释放内存和避免野指针等特性。

在C++11中，智能指针主要由两个模板类实现：`std::unique_ptr`和`std::shared_ptr`。

`std::unique_ptr`表示一个独占的指针，它管理的内存在任何时候都只能被一个指针所指向。例如，当一个`std::unique_ptr`对象被析构时，它所管理的内存会被自动释放。
`std::shared_ptr`表示一个共享的指针，它管理的内存可以被多个指针所指向。例如，当一个`std::shared_ptr`对象的引用计数变为0时，它所管理的内存会被自动释放。
下面是一个使用`std::unique_ptr`的简单示例：

```cpp
#include <iostream>
#include <memory>

int main() {
  std::unique_ptr<int> p(new int(5));  // 声明一个独占指针，并分配一个int类型的对象
  std::cout << *p << std::endl;  // 输出指针指向的对象的值

  return 0;
}
```

在这个程序中，我们声明了一个`std::unique_ptr`类型的指针p，并使用它来指向一个int类型的内存。我们可以通过解引用指针的方式来访问指针指向的对象，就像使用普通指针一样。当程序执行完毕，智能指针p会被析构，它所管理的内存就会被自动释放，避免了内存泄漏。

另一个模板类`std::shared_ptr`的用法也非常相似，下面是一个使用`std::shared_ptr`的简单示例：

```cpp
#include <iostream>
#include <memory>

int main() {
  std::shared_ptr<int> p1(new int(5));  // 声明一个共享指针，并分配一个int类型的对象
  std::cout << *p1 << std::endl;  // 输出指针指向的对象的值

  std::shared_ptr<int> p2 = p1;  // 将一个共享指针赋值给另一个共享指针
  std::cout << p1.use_count() << " " << p2.use_count() << std::endl;  // 输出两个指针的引用计数

  return 0;
}
```

在这个程序中，我们声明了两个`std::shared_ptr`类型的指针p1和p2，并让它们指向同一个int类型的对象。我们可以通过调用指针的`use_count()`方法来获取它的引用计数，表示当前有多少个指针指向这个内存。当程序执行完毕，如果所有的指针都被析构了，智能指针所管理的内存就会被自动释放，避免了内存泄漏。

总之，智能指针是C++11中一个非常实用的类型，它可以自动管理内存的生命周期，减少程序员手动管理内存的工作量，并且可以避免常见的内存错误。

### auto

> 自动类型推导

当与`const`结合使用时

- 当类型不为引用时，auto 的推导结果将不保留表达式的 const 属性；
- 当类型为引用时，auto 的推导结果将保留表达式的 const 属性。

auto的限制

- 使用 auto 的时候必须对变量进行初始化
- auto 不能在函数的参数中使用
  - 这个很容易理解，我们在定义函数的时候只是对参数进行了声明，指明了参数的类型，但并没有给它赋值，只有在实际调用函数的时候才会给参数赋值；而
      auto 要求必须对变量进行初始化，所以这是矛盾的。
- auto 不能作用于类的非静态成员变量（也就是没有 static 关键字修饰的成员变量）中
  - 可以用`decltype`定义，如下就可以写成`decltype(T().begin()) m_it;`

  ```cpp
  template <typename T>
  class A {
  private:
      typename T::iterator m_it;
  }       
  ```

- auto 关键字不能定义数组
- auto 不能作用于模板参数

auto常用

- 使用 auto 定义迭代器
- auto 用于泛型编程

### using

使用`using`定义别名（替代`typedef`）

### 支持函数模板的默认模板参数

函数模板是C++中一种常见的技术，它允许定义一个函数，接受任意类型的参数。例如，下面是一个简单的函数模板示例：

```cpp
#include <iostream>

template<typename T>
void print(T value) {
  std::cout << value << std::endl;
}

int main() {
  print(5);
  print("hello world");

  return 0;
}
```

在这个程序中，我们定义了一个名为print的函数模板，它接受一个模板参数T，表示函数接受任意类型的参数。在函数体内，我们可以像使用普通类型一样使用这个模板参数T。

C++11标准引入了一种新的语法，允许为函数模板定义默认模板参数。例如，下面是一个使用默认模板参数的函数模板示例：

```cpp
#include <iostream>

template<typename T = int>
void print(T value) {
  std::cout << value << std::endl;
}

int main() {
  print(5);
  print("hello world");

  return 0;
}
```

在这个程序中，我们为函数模板print定义了一个默认模板参数T = int，表示如果调用函数时没有指定模板参数，就会使用默认的int类型作为模板参数。因此，在上面的程序中，调用函数print时，第一次调用会自动使用默认的模板参数int，并将实际参数5赋值给函数的形式参数value。

默认模板参数的作用是简化函数模板的调用，减少程序员的工作量。例如，我们可以通过使用默认模板参数，定义一个通用的排序函数，支持任意类型的数组排序，并且不需要显式地指定模板参数：

```cpp
#include <algorithm>

template<typename T>
void sort(T* array, int size) {
  std::sort(array, array + size);
}

int main() {
  int array[] = {5, 3, 2, 4, 1};
  sort(array, 5);

  return 0;
}
```

在这个程序中，我们定义了一个名为sort的函数模板，它接受一个类型为T的数组和数组的长度作为参数。在函数体内，我们使用了C++标准库中的std::sort函数，将数组进行排序。因为我们没有为函数模板指定模板参数，所以编译器会自动推断出模板参数的类型，并使用默认的模板参数int进行编译。

总之，支持函数模板的默认模板参数是C++11标准的一项重要特性，它可以简化函数模板的定义和调用，提高程序的可读性和可维护性。

## from stroustrup

### C++11 features

> C++11 feels like a new language -- stroustrup

> [page29](https://www.stroustrup.com/hopl20main-p5-p-bfc9cd4--final.pdf)

C++11 introduced a bewildering number of language features, including:

- memory model - an efficient low level-model of modern hardware as a foundation for concurrency
- auto and decltype - avoiding redundant repetition of type names
- range-for - simple linear traversal of ranges
- move semantics and rvalue references - minimizing copying of data
- uniform initialization - an (almost) completely general syntax and semantics for initializing objects of all kinds and
  types
- nullptr - a name for the null pointer
- constexpr functions - compile-time evaluated functions
- user-defined literals - literals for user-defined types
- raw string literals - literals where escape characters are not needed, mostly for regular expressions
- attributes - associating essentially arbitrary information with a name
- lambdas - unnamed function objects
- variadic templates - templates that can handle an arbitrary number of arguments of arbitrary types
- template aliases - the ability to rename a template and to bind some template arguments for the new name
- noexcept - a way of ensuring that an exception isn’t thrown from a function
- override and final - explicit syntax for managing large class hierarchies
- static_assert - compile-time assertions
- long long - a longer integer type
- default member initializers - give a data member a default value that can be superseded by initialization in a
  constructor
- enum classes - strongly typed enumerations with scoped enumerators

And here is a list of the major standard-library components:

- unique_ptr and shared_ptr - resource-management pointers relying on RAII
- memory model and atomic variables
- thread, mutex, condition_variable, etc. - type-safe and portable support for basic system- level concurrency
- future, promise, and packaged_task, etc. - slightly higher-level concurrency
- tuple - unnamed simple composite types
- type traits - testable properties of types for use in metaprogramming
- regular expression matching
- random numbers - with many generators (engines) and distributions
- Time - time_point and duration
- unordered_map, etc. - hash tables
- forward_list - a singly-linked list
- array - a fixed-constant-sized array that knows its size
- emplace operations - construct objects right within a container to avoid copying
- exception_ptr - enables transfer of exceptions between threads

### C++17 features

C++17 had about 21 new language features (depending on how you count), including:

- Constructor template argument deduction - simplify object definitions
- Deduction guides - an explicit notation for resolving constructor template argument deduction ambiguities
- Structured bindings - simplify notation and eliminate a source of uninitialized variables
- inline variables - simplify the use of statically allocated variables in header-only libraries
- Fold expressions - simplify some uses of variadic templates
- Explicit test in conditions - a bit like conditions in for-statements
- Guaranteed copy elision - eliminate many redundant copy operations
- Stricter expression evaluation order - prevents some subtle order-of-evaluation mistakes
- auto as a template argument type - type deduction for value template arguments
- Standard attributes to catch common mistakes - [[maybe_unused]], [[nodiscard]], and [[fallthrough]]
- Hexadecimal floating-point literals
- Constant expression if - simplify compile-time evaluated code

The C++17 standard-library added about 13 new features plus many minor modifications:

- optional, variant, and any - standard-library types for expressing alternatives
- shared_mutex and shared_lock (reader-writer locks) and scoped_lock
- parallel STL - multi-threaded and/or vectorized versions of standard-library algorithms
- file system - the ability to portably manipulate file-system paths and directories
- string_view - a non-owning reference to an immutable sequence of characters
- Mathematical special functions - including Laguerre and Legendre polynomials, beta func- tions, Riemann zeta function
