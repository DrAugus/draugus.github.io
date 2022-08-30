---
index: false
---

# C++ Feature

## C++ 11 有什么新特性

### lambda

### 线程库

### 智能指针

### auto

> 自动类型推导

当与`const`结合使用时

* 当类型不为引用时，auto 的推导结果将不保留表达式的 const 属性；
* 当类型为引用时，auto 的推导结果将保留表达式的 const 属性。

auto的限制

* 使用 auto 的时候必须对变量进行初始化
* auto 不能在函数的参数中使用
    * 这个很容易理解，我们在定义函数的时候只是对参数进行了声明，指明了参数的类型，但并没有给它赋值，只有在实际调用函数的时候才会给参数赋值；而
      auto 要求必须对变量进行初始化，所以这是矛盾的。
* auto 不能作用于类的非静态成员变量（也就是没有 static 关键字修饰的成员变量）中
    * 可以用`decltype`定义，如下就可以写成`decltype(T().begin()) m_it;`
  ```cpp
  template <typename T>
  class A {
  private:
      typename T::iterator m_it;
  }       
  ```
* auto 关键字不能定义数组
* auto 不能作用于模板参数

auto常用

* 使用 auto 定义迭代器
* auto 用于泛型编程

### using

使用`using`定义别名（替代`typedef`）

### 支持函数模板的默认模板参数

## from stroustrup

### C++11 features

> C++11 feels like a new language -- stroustrup

> [page29](https://www.stroustrup.com/hopl20main-p5-p-bfc9cd4--final.pdf)

C++11 introduced a bewildering number of language features, including:

* memory model - an efficient low level-model of modern hardware as a foundation for concurrency
* auto and decltype - avoiding redundant repetition of type names
* range-for - simple linear traversal of ranges
* move semantics and rvalue references - minimizing copying of data
* uniform initialization - an (almost) completely general syntax and semantics for initializing objects of all kinds and
  types
* nullptr - a name for the null pointer
* constexpr functions - compile-time evaluated functions
* user-defined literals - literals for user-defined types
* raw string literals - literals where escape characters are not needed, mostly for regular expressions
* attributes - associating essentially arbitrary information with a name
* lambdas - unnamed function objects
* variadic templates - templates that can handle an arbitrary number of arguments of arbitrary types
* template aliases - the ability to rename a template and to bind some template arguments for the new name
* noexcept - a way of ensuring that an exception isn’t thrown from a function
* override and final - explicit syntax for managing large class hierarchies
* static_assert - compile-time assertions
* long long - a longer integer type
* default member initializers - give a data member a default value that can be superseded by initialization in a
  constructor
* enum classes - strongly typed enumerations with scoped enumerators

And here is a list of the major standard-library components:

* unique_ptr and shared_ptr - resource-management pointers relying on RAII
* memory model and atomic variables
* thread, mutex, condition_variable, etc. - type-safe and portable support for basic system- level concurrency
* future, promise, and packaged_task, etc. - slightly higher-level concurrency
* tuple - unnamed simple composite types
* type traits - testable properties of types for use in metaprogramming
* regular expression matching
* random numbers - with many generators (engines) and distributions
* Time - time_point and duration
* unordered_map, etc. - hash tables
* forward_list - a singly-linked list
* array - a fixed-constant-sized array that knows its size
* emplace operations - construct objects right within a container to avoid copying
* exception_ptr - enables transfer of exceptions between threads

### C++17 features

C++17 had about 21 new language features (depending on how you count), including:

* Constructor template argument deduction - simplify object definitions
* Deduction guides - an explicit notation for resolving constructor template argument deduction ambiguities
* Structured bindings - simplify notation and eliminate a source of uninitialized variables
* inline variables - simplify the use of statically allocated variables in header-only libraries
* Fold expressions - simplify some uses of variadic templates
* Explicit test in conditions - a bit like conditions in for-statements
* Guaranteed copy elision - eliminate many redundant copy operations
* Stricter expression evaluation order - prevents some subtle order-of-evaluation mistakes
* auto as a template argument type - type deduction for value template arguments
* Standard attributes to catch common mistakes - [[maybe_unused]], [[nodiscard]], and [[fallthrough]]
* Hexadecimal floating-point literals
* Constant expression if - simplify compile-time evaluated code

The C++17 standard-library added about 13 new features plus many minor modifications:

* optional, variant, and any - standard-library types for expressing alternatives
* shared_mutex and shared_lock (reader-writer locks) and scoped_lock
* parallel STL - multi-threaded and/or vectorized versions of standard-library algorithms
* file system - the ability to portably manipulate file-system paths and directories
* string_view - a non-owning reference to an immutable sequence of characters
* Mathematical special functions - including Laguerre and Legendre polynomials, beta func- tions, Riemann zeta function
