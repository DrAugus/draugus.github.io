# C++

## stroustrup

### C++11 features

> C++11 feels like a new language -- stroustrup

> [page29](https://www.stroustrup.com/hopl20main-p5-p-bfc9cd4--final.pdf)

C++11 introduced a bewildering number of language features, including:

* memory model - an efficient low level-model of modern hardware as a foundation for concurrency
* auto and decltype - avoiding redundant repetition of type names
* range-for - simple linear traversal of ranges
* move semantics and rvalue references - minimizing copying of data
* uniform initialization - an (almost) completely general syntax and semantics for initializing objects of all kinds and types
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

## 概念

### C 和 C++ 的区别

* 简单版本
    - C++是面向对象的语言，而C是面向过程的语言
    - C++引入new/delete运算符，取代了C中的malloc/free库函数
    - C++引入引用的概念，而C中没有
    - C++引入类的概念，而C中没有
    - C++引入函数重载的特性，而C中没有
* 标准：分别隶属于两个不同的标准委员会。C以C99标准为主流，C11已经发布；C++以C++98/03为主流，C++11/14也日趋流行。
* 语言本身：
    * C++是面向对象语言，C是面向过程语言。
    * 结构：C以结构体struct为核心结构；C++以类class为核心结构。
    * 多态：C可以以宏定义的方式“自定义”部分地支持多态；C++自身提供多态，并以模板templates支持编译期多态，以虚函数virtual function支持运行期多态。
    * 头文件的调用：C++用< >代替” “代表系统头文件；且复用C的头文件时，去掉”.h”在开头加上”C”。
    * 输入输出：鉴于C++中以对象作为核心，输入和输出都是在流对象上的操作。
    * 封装：C中的封装由于struct的特性全部为公有封装，C++中的封装由于class的特性更加完善、安全。
    * 常见风格：C中常用宏定义来进行文本替换，不具有类型安全性；C++中常建议采用常量定义，具有类型安全性。
    * 效率：常见的说法是同等目的C通常比C++更富有效率(这其实有一定的误解，主要在于C++代码更难于优化且少有人使用编译期求值的特性)。
    * 常用语言/库特性：
    * 数组：C中采用内建数组，C++中建议采用vector。相比之下vector的大小可以动态增长，且使用一些技巧后增长并不低效，且成员函数丰富。
    * 字符串 C中采用C风格的string(实则为字符串数组)，C++中建议采用string，对比与上一条类似。
    * 内存分配：C中使用malloc与free，它们是是C标准库函数，C++中建议使用new/delete代替前者，他们说是C++的运算符(这是笔试面试常考点)以C++中的new为例，new可分为operator new(new 操作)、new operator(new 操作符)和placement new(定位 new)。其中operator new执行和malloc相同的任务，即分配内存，但对构造函数一无所知；而 new
      operator则调用operator new，分配内存后再调用对象构造函数进行对象的构造。其中operator new是可以重载的。placement new，就是operator
      new的一个重载版本，允许你在一个已经分配好的内存中构造一个新的对象。
    * 指针：C中通常使用的是原生指针(raw pointer)，由于常出现程序员在申请后忘记释放造成资源泄漏的问题，在C++98中加入了“第一代”基于引用计数的智能指针auto_ptr，由于初代的各种问题(
      主要是无法解决循环指针)，在03标准也就是TR1中引入了shared_ptr,weak_ptr和unique_ptr这三个功能各异的智能指针，并与11标准中正式确定，较好的解决了上述问题。
* 仅有C++才有的常用特性：
    * 语言(范式)特性：
        * 面向对象编程：C++中以关键字class和多态特性支持的一种编程范式；
        * 泛型编程：C++中以关键字template支持的一种编程范式；
        * 模板元编程 ：C++中以模板特化和模板递归调用机制支持的一种编程范式。
        * C++中以对象和类型作为整个程序的核心，在对象方面，时刻注意对象创建和析构的成本，例如有一个很常用的(具名)返回值优化((N)RVO); 在类型方面，有运行时类型信息(RTTI)等技术作为C++类型技术的支撑。
        * 函数重载：C++允许拥有不同变量但具有相同函数名的函数(函数重载的编译器实现方式、函数重载和(主)模板特化的区别都曾考过)。
        * 异常：以catch、throw、try等关键字支持的一种机制。
        * 命名空间：namespace，可以避免和减少命名冲突且让代码具有更强的可读性。
        * 谓词用法：通常以bool函数或仿函数(functor)或lambda函数的形式，出现在STL的大多数算法的第三个元素。
    * 常见关键字(操作符)特性：
        * auto：在C中，auto代表自动类型通常都可省略；而在C++11新标准中，则起到一种“动态类型”的作用——通常在自动类型推导和decltype搭配使用。
        * 空指针：在C中常以NULL代表空指针，在C++中根据新标准用nullptr来代表空指针。
        * &: 在C中仅代表取某个左值(lvalue)的地址，在C++中还可以表示引用(别名)。
        * &&：在C中仅能表示逻辑与，在C++中还可以表示右值引用。
        * []：在C中仅能表示下标操作符，在C++中还可以表示lambda函数的捕捉列表。
        * {}：在C中仅能用于数组的初始化，在C++中由于引入了初始化列表(initializer_list)，可用于任何类型、容器等的初始化。
        * 常量定义：C中常以define来定义常量，C++中用const来定义运行期常量，用constexpr来定义编译器常量。
    * 常用新特性：
        * 右值引用和move语义(太多内容，建议自查)。
        * 基于范围的for循环(与python中的写法类似，常用于容器)。
        * 基于auto——decltype的自动类型推导。
        * lambda函数(一种局部、匿名函数，高效方便地出现在需要局部、匿名语义的地方)。
        * 标准规范后的多线程库。

### 编译时链接有几种方式？[静态链接和动态链接的区别](https://www.cnblogs.com/cyyljw/p/10949660.html)是什么？

问题变形，

- 简述 C++ 从代码到可执行二进制文件的过程
- 简述 C++ 编译的过程
    * 编译分为3步
        * 首先对源文件进行预处理，这个过程主要是处理一些#号定义的命令或语句（如宏、#include、预编译指令#ifdef等），生成*.i文件；
        * 然后进行编译，这个过程主要是进行词法分析、语法分析和语义分析等，生成*.s的汇编文件；
        * 最后进行汇编，这个过程比较简单，就是将对应的汇编指令翻译成机器指令，生成可重定位的二进制目标文件。
    * 静态链接
    * 动态链接
    * 更多细节，[从编写源代码到程序在内存中运行的全过程解析](https://blog.csdn.net/kang___xi/article/details/79571137)

### 转移语义(Move Semantics)

### 左值和右值

### malloc 和 new，free 和 delete 的区别

malloc是函数，而new是关键字。然后new作为C++中动态对象创建的基石，除了完成堆空间的分配操作以外还要完成一些初始化操作，及new的过程中会调用对象的构造函数去初始化，而malloc不会。最后要明确的是malloc分配的内存只能用free来释放，而new分配的地址只能用delete来释放，如果new分配的是数组，则需要delete[ ]
来释放，否则会出现未定义行为。

`delete`会调用对象的析构函数,和`new`对应`free`
只会释放内存，new调用构造函数。malloc与free是C++/C语言的标准库函数，new/delete是C++的运算符。它们都可用于申请动态内存和释放内存。对于非内部数据类型的对象而言，光用maloc/free无法满足动态对象的要求。对象在创建的同时要自动执行构造函数，对象在消亡之前要自动执行析构函数。由于malloc/free是库函数而不是运算符，不在编译器控制权限之内，不能够把执行构造函数和析构函数的任务强加于malloc/free。因此C++语言需要一个能完成动态内存分配和初始化工作的运算符new，以及一个能完成清理与释放内存工作的运算符delete。注意new/delete不是库函数。

`delete` 与 `delete []`区别

delete只会调用一次析构函数，而delete[]会调用每一个成员的析构函数。在More Effective C++中有更为详细的解释：“当delete操作符用于数组时，它为每个数组元素调用析构函数，然后调用operator
delete来释放内存。”delete与new配套，delete []与new []配套

```c++
MemTest *mTest1 = new MemTest[10];
MemTest *mTest2 = new MemTest;
Int *pInt1 = new int[10];
Int *pInt2 = new int;
delete[]pInt1; //-1-
delete[]pInt2; //-2-
delete[]mTest1;//-3-
delete[]mTest2;//-4-
```

在-4-处报错。 这就说明：对于内建简单数据类型，delete和delete[]功能是相同的。对于自定义的复杂数据类型，delete和delete[]不能互用。delete[]
删除一个数组，delete删除一个指针。简单来说，用new分配的内存用delete删除；用new[]分配的内存用delete[]删除。delete[]
会调用数组元素的析构函数。内部数据类型没有析构函数，所以问题不大。如果你在用delete时没用括号，delete就会认为指向的是单个对象，否则，它就会认为指向的是一个数组。

### 二维动态数组的申请和删除

* 首先是如何申请二维的数组，这里我们先申请一个指针数组，然后令指针数组中的每一个元素都指向一个数组，这样二维数组就成了：

```c++
size_t row, col;
//输入row和col的数值
int **MathTable = new int*[row];
for (int i = 0; i < row; i++)
  MathTable[i] = new int[col];
```

* 然后是释放空间的过程：

```c++
//code
for (int i = 0; i < row; i++)
  delete[] MathTable[i];
delete[]MathTable;
```

* 符合new和delete配对的原则，怎么new出来就怎么delete掉。

### [为什么要内存对齐](https://blog.csdn.net/lgouc/article/details/82354710)

### 动态绑定和静态绑定的区别

* 对象的静态类型：对象在声明时采用的类型。是在编译期确定的。
* 对象的动态类型：目前所指对象的类型。是在运行期决定的。对象的动态类型可以更改，但是静态类型无法更改。
* 静态绑定：绑定的是对象的静态类型，某特性(比如函数)依赖于对象的静态类型，发生在编译期。
* 动态绑定：绑定的是对象的动态类型，某特性(比如函数)依赖于对象的动态类型，发生在运行期。

### `int id[sizeof(unsigned long)];`这个对吗？为什么？

正确 这个 sizeof是编译时运算符，编译时就确定了，可以看成和机器有关的常量。

### 将程序跳转到指定内存地址

要对绝对地址0x100000赋值，我们可以用`(unsigned int*)0x100000 = 1234;`那么要是想让程序跳转到绝对地址是0x100000去执行，应该怎么做？

* `*((void (*)( ))0x100000 ) ( );`
  首先要将0x100000强制转换成函数指针,即:
  `(void (*)())0x100000`
  然后再调用它:
  ` *((void (*)())0x100000)();`
  用typedef可以看得更直观些:
  `typedef void(*)() voidFuncPtr;`
  ` *((voidFuncPtr)0x100000)();`

### 变量的声明和定义有什么区别？

* **声明**告诉编译器，这个变量或函数已经在程序其他地方存在了，所以我正在把这个信息告诉你，下面我要调用的时候请放行。但请不要为我分配任何内存空间，因为已经这个步骤在变量或函数定义的地方进行分配了 而**定义**
  则很清楚了，就是要求分配内存空间。 很多时候，声明和定义是合而为一的。
  ```c++
  int a;
  void func() {};
  ```
  这里同时声明且定义了一个变量和一个函数。
* 声明可以进行多次，定义只能进行一次
* [more info](https://www.jianshu.com/p/92e81ecc8737)

### 如何实现仿函数？为什么需要通过继承自unary_function 或者 binary_function来实现仿函数？

function object就是重载了函数调用操作符 operator()的一个struct或者class 所有内置一元仿函数均继承自unary_function，所有内置二元仿函数均继承自binary_function
继承自unary_function和binary_function的仿函数可以成为“可配接“的仿函数。可配接的仿函数，能够与其他STL组件更”和谐“地协同工作。

### C++ 11 有什么新特性

* lambda
* 线程库
* 智能指针
* auto
    * 自动类型推导
    * 当与`const`结合使用时
        * 当类型不为引用时，auto 的推导结果将不保留表达式的 const 属性；
        * 当类型为引用时，auto 的推导结果将保留表达式的 const 属性。
    * auto的限制
        * 使用 auto 的时候必须对变量进行初始化
        * auto 不能在函数的参数中使用
            * 这个很容易理解，我们在定义函数的时候只是对参数进行了声明，指明了参数的类型，但并没有给它赋值，只有在实际调用函数的时候才会给参数赋值；而 auto 要求必须对变量进行初始化，所以这是矛盾的。
        * auto 不能作用于类的非静态成员变量（也就是没有 static 关键字修饰的成员变量）中
            * 可以用`decltype`定义，如下就可以写成`decltype(T().begin()) m_it;`
          ```c++
          template <typename T>
          class A {
          private:
              typename T::iterator m_it;
          }       
          ```
        * auto 关键字不能定义数组
        * auto 不能作用于模板参数
    * auto常用
        * 使用 auto 定义迭代器
        * auto 用于泛型编程
* 使用`using`定义别名（替代`typedef`）
* 支持函数模板的默认模板参数

### [C++ 20 有什么新特性](http://jimmysue.me/c-20-features/)

### 深拷贝与浅拷贝区别是什么？

* **浅拷贝**：如果在类中没有显式地声明一个[拷贝构造函数](##copyConstructor)，那么，编译器将会根据需要生成一个默认的[拷贝构造函数](##copyConstructor)，完成对象之间的位拷贝。default
  memberwise copy即称为浅拷贝。 此处需要注意，并非像大多数人认为的“如果class未定义出copy constructor，那么编译器就会为之合成一个执行default memberwise copy语义的copy
  constructor”。 通常情况下，只有在default copy constructor被视为trivial时，才会发生上述情况。一个class，如果既没有任何base/member class含有copy
  constructor，也没有任何virtual base class或 virtual functions， 它就会被视为trivial。 通常情况下，浅拷贝是够用的。
* **深拷贝**：然而在某些状况下，类内成员变量需要动态开辟堆内存，如果实行位拷贝，也就是把对象里的值完全复制给另一个对象，如A=B。
  这时，如果B中有一个成员变量指针已经申请了内存，那A中的那个成员变量也指向同一块内存。如果此时B中执行析构函数释放掉指向那一块堆的指针，这时A内的指针就将成为悬挂指针。
  因此，这种情况下不能简单地复制指针，而应该复制“资源”，也就是再重新开辟一块同样大小的内存空间。

### 什么是字节对齐，为什么要采用这种机制？

### const、static 关键字有什么区别

### 如何初始化const和static数据成员？

通常在类外初始化static数据成员，但是 static const 的整型(ool，char，int，long)可以再类声明中初始化， static const的其他类型也必须在类外初始化(包括整型的数组)。

### const

如何在const成员函数中赋值？

> 使用`mutable`去掉const的成员函数的const性质

为什么要有这种去除常量标志的需求？

* 两个概念：物理常量性和逻辑常量性
    * 物理常量性：实际上就是常量。
    * 逻辑常量性：对用户而言是常量，但在用户不能访问的细节上不是常量。

const_cast和mutable的比较

* const_cast:
    * 强制去掉对象的const属性。
    * 缺点：对const对象，调用包含const_cast的const成员函数，属于未定义行为。
* mutable:
    * 使用场景：对可能要发生变化的成员前，加上存储描述符mutable。
    * 实质：对加了mutable的成员，无视所有const声明。


* const 与 #define 的比较，const有什么优点?
    - const 常量有数据类型，而宏常量没有数据类型。编译器可以对前者进行类型安全检查。而对后者只进行字符替换，没有类型安全检查，并且在字符替换可能会产生意料不到的错误（边际效应） 。
    - 有些集成化的调试工具可以对 const 常量进行调试，但是不能对宏常量进行调试。

### 两种常用的实现隐式类类型转换的方式是什么？如何避免隐式类型转换？

1. 使用单参数的构造函数或N个参数中有N-1个是默认参数的构造函数，

    ```c++
    class A {
    public:
        A(string s);
        A(string s, int a = 0);
    };
    ```

   使用operator what_you_want_to_convert_type() const
   ```c++
   class A {
   public:
   operator char *() const {
   return data;//当从其他类型转换到char*时自动调用
   }
   private:
   char *data;
   };
   ```

2. 在单参数的构造函数或N个参数中有N-1个是默认参数的构造函数声明之前加上explicit。

### 面向对象的设计原则

### 函数调用的具体实现

### 关于复杂声明

```C++
void * ( * (*fp1)(int))[10];
```

`fp1`是一个指针，指向一个函数，这个函数的参数为`int`型，函数的返回值是一个指针，这个指针指向一个数组，这个数组有10个元素，每个元素是一个`void*`型指针。

```C++
float (*(* fp2)(int,int,int))(int);
```

`fp2`是一个指针，指向一个函数，这个函数的参数为3个`int`型，函数的返回值是一个指针，这个指针指向一个函数，这个函数的参数为`int`型，函数的返回值是`float`型。

```C++
int (* ( * fp3)())[10]();
```

`fp3`是一个指针，指向一个函数，这个函数的参数为空，函数的返回值是一个指针，这个指针指向一个数组，这个数组有10个元素，每个元素是一个指针，指向一个函数，这个函数的参数为空，函数的返回值是`int`型。
> have error: 'fp3' declared as array of functions of type 'int ()'

```c++
int (*s[10])(int)
```

函数指针数组，每个指针指向一个`int func(int param)`的函数

### 分别写出bool,int,float,指针类型的变量a 与“零”的比较语句。

> 直接!!a不香吗

* `bool`  `if(a)`or`if(!a)`
* `int` `if(a==0)`
* `float` `const EXPRESSION EXP = 0.000001; if ( a < EXP && a > -EXP)`
* `pointer`  `if ( a != NULL)` or `if(a == NULL)`

### 哪些类型的对象不可以作为union的成员？为什么有这种限制？

标准规定，凡是具有`non-trivial constructor`、`non-trivial destructor`、`non-trivial copy constructor`、`non-trivial assignment operator`的class对象都不能作为union的成员。 即是说，这个class的以上四种成员必须均经由编译器合成且该class无虚函数和虚基类。 有这种限制是为了兼容C。

### C++中的转化机制？各适用于什么环境？dynamic_cast转换失败时，会出现什么情况？

对指针，返回NULL.对引用，抛出bad_cast异常more Effective C++ C++引入了4种类型转化操作符（cast operator）：static_cast，const_cast，dynamic_cast和reinterpret_cast，使用方法与C语言中略有不同：

```c
(type)expression; //这是C语言的
``` 

然后引入C++的：

```c++
static_cast<type>(expression);//这是C++的
```

然后看一下各自的适用范围：

* static_cast：static_cast基本上拥有与C旧式转型相同的威力和意义，以及相同的限制。但是，该类型转换操作符不能移除常量性，因为有一个专门的操作符用来移除常量性。
* const_cast：用来改变表达式中的常量性（constness）或者易变形（volatileness），只能用于此功能。
* dynamic_cast：将指向基类basic class object的pointer或者reference转型为指向派生类derived（或这sibling base）class
  object的pointer或者reference中，并且可以获知是否转型成功：如果转型失败，当转型对象是指针的时候会返回一个null指针；当转型对象是reference会抛出一个异常exception。dynamic_cast无法应用在缺乏虚函数的类型上，也不能改变类型的常量性。
  此外，dynamic_cast还有一个用途就是找出被对象占用的内存的起始点。
* reinterpret_cast：这个操作符的转换结果几乎总是和编译器平台相关，所以不具有移植性。reinterpret_cast的最常用用途是转换“函数指针”类型，如下：

    ```c++
    typedef void (*FuncPtr)();
    int doSomething();
    int main() {
        FuncPtr funcPtrArray[10];
        funcPtrArray[0] = reinterpret_cast<FuncPtr>(&doSomething);
        return 0;
    }
    ```

  通过reinterpret_cast强迫编译器了，并成功的将不同的类型的函数&doSomething转换为需要的类型。不过这个操作符进行的转换动作不具有移植性（C++不保证所有的函数指针都能以此方式重新呈现），某些情况下这样的转型可能会导致不正确的结果，所以这种操作不到万不得已不要使用。

### 为什么函数参数的入栈的顺序是从右往左

因为好多函数是不定参数个数的，比如最常用的printf，所以需要参数的入栈顺序是从右往左。

### 简述 C++ 的内联函数

### lambda 函数的特点，和普通函数相比有什么优点？

### extern C 的作用

### volatile关键字的作用

### 有哪几种强制类型转换以及使用场景

### 如何避免循环依赖

### unique_ptr中std::move()作用

### static关键字的使用

### const关键字的使用

### define和online的区别

### main函数执行以前，还会执行什么代码？

全局对象的构造函数会在main函数之前执行

### C++是不是类型安全的？

不是。两个不同类型的指针之间可以强制转换（用reinterpret cast)。C##是类型安全的。

### 有哪几种情况只能用initialization list而不能用assignment?

当类中含const、reference成员变量；基类的构造函数都需要初始化表。

### 结构（struct）与联合（union）的区别

- 结构和联合都是由多个不同的数据类型成员组成, 但在任何同一时刻, 联合中只存放了一个被选中的成员（所有成员共用一块地址空间）, 而结构的所有成员都存在（不同成员的存放地址不同）。
- 对于联合的不同成员赋值, 将会对其它成员重写, 原来成员的值就不存在了, 而对于结构的不同成员赋值是互不影响的。

## 引用

- 左值引用
    * 常规引用，一般表示对象的身份。
- 右值引用
    * 右值引用就是必须绑定到右值（一个临时对象、将要销毁的对象）的引用，一般表示对象的值。
    * 右值引用可实现转移语义（Move Semantics）和完美转发（Perfect Forwarding），它的主要目的有两个方面：
        * 消除两个对象交互时不必要的对象拷贝，节省运算存储资源，提高效率。
        * 能够更简洁明确地定义泛型函数。

- 引用折叠
    * `X& &`、`X& &&`、`X&& & `可折叠成 `X&`
    * `X&& &&` 可折叠成 `X&&`

- 什么是“引用”？申明和使用“引用”要注意哪些问题
    * 引用就是某个目标变量的“别名”(alias)
      ，对应用的操作与对变量直接操作效果完全相同。申明一个引用的时候，切记要对其进行初始化。引用声明完毕后，相当于目标变量名有两个名称，即该目标原名称和引用名，不能再把该引用名作为其他变量名的别名。声明一个引用，不是新定义了一个变量，它只表示该引用名是目标变量名的一个别名，它本身不是一种数据类型，因此引用本身不占存储单元，系统也不给引用分配存储单元。不能建立数组的引用。

- 将“引用”作为函数参数有哪些特点
    * 传递引用给函数与传递指针的效果是一样的。这时，被调函数的形参就成为原来主调函数中的实参变量或对象的一个别名来使用，所以在被调函数中对形参变量的操作就是对其相应的目标对象（在主调函数中）的操作。
    * 使用引用传递函数的参数，在内存中并没有产生实参的副本，它是直接对实参操作；而使用一般变量传递函数的参数，当发生函数调用时，需要给形参分配存储单元，形参变量是实参变量的副本；如果传递的是对象，还将调用拷贝构造函数。因此，当参数传递的数据较大时，用引用比用一般变量传递参数的效率和所占空间都好。
    * 使用指针作为函数的参数虽然也能达到与使用引用的效果，但是，在被调函数中同样要给形参分配存储单元，且需要重复使用"*指针变量名"的形式进行运算，这很容易产生错误且程序的阅读性较差；另一方面，在主调函数的调用点处，必须用变量的地址作为实参。而引用更容易使用，更清晰。

- 在什么时候需要使用“常引用”
    * 如果既要利用引用提高程序的效率，又要保护传递给函数的数据不在函数中被改变，就应使用常引用。常引用声明方式：const 类型标识符 &引用名=目标变量名；
        * 例1
          ```c++
            int a ;
            const int &ra=a;
            ra=1; //错误
            a=1; //正确
          ```
        * 例2
          ```c++
            string foo( );
            void bar(string & s);
          ```
          那么下面的表达式将是非法的：
          ```c++
            bar(foo( ));
            bar("hello world");
          ```
          原因在于foo( )和"hello world"
          串都会产生一个临时对象，而在C++中，这些临时对象都是const类型的。因此上面的表达式就是试图将一个const类型的对象转换为非const类型，这是非法的。引用型参数应该在能被定义为const的情况下，尽量定义为const
          。

- 将“引用”作为函数返回值类型的格式、好处和需要遵守的规则?
    * 格式：`类型标识符 &函数名（形参列表及类型说明）{ //函数体 }`
    * 好处：在内存中不产生被返回值的副本（注意：正是因为这点原因，所以返回一个局部变量的引用是不可取的。因为随着该局部变量生存期的结束，相应的引用也会失效，产生runtime error!
    * 注意事项：
        * 不能返回局部变量的引用。这条可以参照Effective C++[1]的Item 31。主要原因是局部变量会在函数返回后被销毁，因此被返回的引用就成为了"无所指"的引用，程序会进入未知状态。
        * 不能返回函数内部new分配的内存的引用。这条可以参照Effective C++[1]的Item
          31。虽然不存在局部变量的被动销毁问题，可对于这种情况（返回函数内部new分配内存的引用），又面临其它尴尬局面。例如，被函数返回的引用只是作为一个临时变量出现，而没有被赋予一个实际的变量，那么这个引用所指向的空间（由new分配）就无法释放，造成memory
          leak。
        * 可以返回类成员的引用，但最好是const。这条原则可以参照Effective C++[1]的Item 30。主要原因是当对象的属性是与某种业务规则（business
          rule）相关联的时候，其赋值常常与某些其它属性或者对象的状态有关，因此有必要将赋值操作封装在一个业务规则当中。如果其它对象可以获得该属性的非常量引用（或指针），那么对该属性的单纯赋值就会破坏业务规则的完整性。
        * 流操作符重载返回值申明为“引用”的作用：
            * 流操作符<<和>>，这两个操作符常常希望被连续使用，例如：cout << "hello" << endl;
              因此这两个操作符的返回值应该是一个仍然支持这两个操作符的流引用。可选的其它方案包括：返回一个流对象和返回一个流对象指针。但是对于返回一个流对象，程序必须重新（拷贝）构造一个新的流对象，也就是说，连续的两个<<
              操作符实际上是针对不同对象的！这无法让人接受。对于返回一个流指针则不能连续使用<<
              操作符。因此，返回一个流对象引用是惟一选择。这个唯一选择很关键，它说明了引用的重要性以及无可替代性，也许这就是C++语言中引入引用这个概念的原因吧。
            * 赋值操作符=。这个操作符象流操作符一样，是可以连续使用的，例如：x = j = 10;或者(x=10)=100;赋值操作符的返回值必须是一个左值，以便可以被继续赋值。因此引用成了这个操作符的惟一返回值选择。
        * 在另外的一些操作符中，却千万不能返回引用：+-*/ 四则运算符。它们不能返回引用，Effective C++[1]的Item23详细的讨论了这个问题。主要原因是这四个操作符没有side
          effect，因此，它们必须构造一个对象作为返回值，可选的方案包括：返回一个对象、返回一个局部变量的引用，返回一个new分配的对象的引用、返回一个静态对象引用。根据前面提到的引用作为返回值的三个规则，第2、3两个方案都被否决了。静态对象的引用又因为((
          a+b) == (c+d))会永远为true而导致错误。所以可选的只剩下返回一个对象了。

```c++
int &put(int n);
int vals[10];
int error = -1;
void main() {
  put(0) = 10; //以put(0)函数值作为左值，等价于vals[0]=10;
  put(9) = 20; //以put(9)函数值作为左值，等价于vals[9]=20;
  cout << vals[0];
  cout << vals[9];
}
int &put(int n) {
  if (n >= 0 && n <= 9) return vals[n];
  else {
    cout << "subscript error";
    return error;
  }
}
```

## 指针

- 简述 C++ 中智能指针的特点
    * shared_ptr, 关于shared_ptr使用需要记住什么？
        * 尽量避免使用raw pointer构建shared_ptr，至于原因此处不便于多讲，后续还有讲解
        * shared_ptr使得依据共享生命周期而经行地资源管理进行垃圾回收更为方便
        * shared_ptr对象的大小通常是unique_ptr的两倍，这个差异是由于Control Block导致的，并且shared_ptr的引用计数的操作是原子的，这里的分析也会在后续看到
        * 默认的资源销毁是采用delete，但是shared_ptr也支持用户提供deleter，与unique_ptr不同，不同类型的deleter对shared_ptr的类型没有影响。

C++程序设计中使用堆内存是非常频繁的操作。C++11中引入了`智能指针`的概念，方便管理`堆内存`。   
使用`普通指针`，容易造成堆内存泄露（忘记释放），二次释放，程序发生异常时内存泄露等问题等，使用智能指针能更好的管理堆内存。    
从较浅的层面看，智能指针是利用了一种叫做RAII（资源获取即初始化）的技术对普通的指针进行封装，这使得智能指针实质是一个对象，行为表现的却像一个指针。     
智能指针的作用是防止忘记调用delete释放内存和程序异常的进入catch块忘记释放内存。       
另外指针的释放时机也是非常有考究的，多次释放同一个指针会造成程序崩溃，这些都可以通过智能指针来解决。     
智能指针还有一个作用是把值语义转换成引用语义

- C++ 中智能指针和指针的区别是什么？
- 指针和引用的区别是什么？
  > 本质：指针是一个变量，存储内容是一个地址，指向内存的一个存储单元。而引用是原变量的一个别名，实质上和原变量是一个东西，是某块内存的别名。  
  指针的值可以为空，且非const指针可以被重新赋值以指向另一个不同的对象。而引用的值不能为空，并且引用在定义的时候必须初始化，一旦初始化，就和原变量“绑定”，不能更改这个绑定关系。
    * 引用必须被初始化，指针不必。
    * 引用初始化以后不能被改变，指针可以改变所指的对象。
    * 不存在指向空值的引用，但是存在指向空值的指针。
- 简述数组与指针的区别？
    * 数组要么在静态存储区被创建（如全局数组），要么在栈上被创建。指针可以随时指向任意类型的内存块。
        - 修改内容上的差别
        ```c++
        char a[] = "hello";
        a[0] = 'X';
        char *p = "world"; // 注意p 指向常量字符串
        p[0] = 'X'; // 编译器不能发现该错误，运行时错误
        ```
        - 用运算符`sizeof`可以计算出数组的容量（字节数）。`sizeof(p)` p 为指针得到的是一个指针变量的字节数，而不是p 所指的内存容量。C++/C
          语言没有办法知道指针所指的内存容量，除非在申请内存时记住它。注意当数组作为函数的参数进行传递时，该数组自动退化为同类型的指针。
        ```c++
        char a[] = "hello world";
        char *p = a;
        cout << sizeof(a) << endl; // 12 字节
        cout << sizeof(p) << endl; // 4 字节
        ```
      计算数组和指针的内存容量
        ```c++
        void Func(char a[100]) {
          cout << sizeof(a) << endl; // 4 字节而不是100 字节
        }
        ```

## 特性 —— 封装 继承 多态

**多态**：是对于不同对象接收相同消息时产生不同的动作。C++的多态性具体体现在运行和编译两个方面：

- 在程序运行时的多态性通过继承和虚函数来体现；
- 在程序编译时多态性体现在函数和运算符的重载上；

**虚函数**：在基类中冠以关键字 virtual 的成员函数。 它提供了一种接口界面。允许在派生类中对基类的虚函数重新定义。

**纯虚函数的作用**：在基类中为其派生类保留一个函数的名字，以便派生类根据需要对它进行定义。作为接口而存在 纯虚函数不具备函数的功能，一般不能直接被调用。

从基类继承来的纯虚函数，在派生类中仍是虚函数。如果一个类中至少有一个纯虚函数，那么这个类被称为**抽象类**（abstract class）。

抽象类中不仅包括纯虚函数，也可包括虚函数。抽象类必须用作派生其他类的基类，而不能用于直接创建对象实例。但仍可使用指向抽象类的指针支持运行时多态性。

|   继承描述符   |  父public成员   | 父protected成员 | 父private成员 |
|:---------:|:------------:|:------------:|:----------:|
|  public   |  子public成员   | 子protected成员 |     -      |
| protected | 子protected成员 | 子protected成员 |     -      |
|  private  |  子private成员  |  子private成员  |     -      |

1. `public`：只继承基类的接口。当继承是接口的一部分时，就选用public继承。
2. `private`：只继承基类的实现。当继承是实现细节时，就选用private继承。
3. `protected`：当继承是面向派生类而不是面向用户接口中的一部分时，就选用protected继承。 private意味着”根据某物实现出“的语义。和复合拥有同样的语义。

- C++ 中虚函数与纯虚函数的区别
- C++ 的重载和重写是如何实现的？
- C++ 中什么是菱形继承问题？
- 父类和子类是不是在同一个虚函数表
- C++ 中多态是怎么实现的
- 虚表指针的大小
- 虚函数表的存放内容
- 构造函数可以是虚函数吗
- 析构函数可以是虚函数吗
- 构造函数可以调用虚函数吗？语法上通过吗？语义上可以通过吗？  
  不能，语法上通过，语义上有问题。  
  `derived class`对象内的`base class`成分会在`derived class`自身构造之前构造完毕。因此，在`base class`的构造函数中执行的`virtual`函数将会是`base class`
  的版本，决不会是`derived class`的版本。 即使目前确实正在构造`derived class`。
- 拷贝构造函数作用及用途？什么时候需要自定义拷贝构造函数？
    * 在C++中，有下面三种对象需要拷贝的情况：
        * 一个对象以值传递的方式传入函数体
        * 一个对象以值传递的方式从函数返回
        * 一个对象需要通过另外一个对象进行初始化 以上的情况就需要拷贝构造函数的调用。
    * 当类中的数据成员需要动态分配存储空间时，不可以依赖`default copy constructor`。当`default copy constructor`
      被因编译器需要而合成时，将执行`default memberwise copy`语义。   
      此时如果类中有动态分配的存储空间时，将会发生惨重的灾情。 在需要时（包括这种对象要赋值、这种对象作为函数参数要传递、函数返回值为这种对象等情况），要考虑到自定义拷贝构造函数。
- 如果在构造函数和析构函数中抛出异常会发生什么？什么是栈展开？
    * 构造函数抛异常：不会发生资源泄漏。假设在operator new()时抛出异常，那么将会因异常而结束此次调用，内存分配失败，不可能存在内存泄露。假设在别处(operator new() )
      执行之后抛出异常，此时析构函数调用，已构造的对象将得以正确释放，且自动调用operator delete()释放内存 析构函数抛异常： 可以抛出异常，但该异常必须留在析构函数；若析构函数因异常退出，情况会很糟糕(all
      kinds of bad things are likely to happen)
        * 可能使得已分配的对象未能正常析构，造成内存泄露；
        * 例如在对像数组的析构时，如果对象的析构函数抛出异常，释放代码将引发未定义行为。考虑一个对象数组的中间部分在析构时抛出异常，它无法传播，因为传播的话将使得后续部分不能正常释放；它也无法吸收，因为这违反了”异常中立“原则(
          异常中立，就是指任何底层的异常都会抛出到上层，也就相当于是异常透明的)。
    * 抛出异常时，将暂停当前函数的执行，开始查找匹配的catch子句。  
      首先检查throw本身是否在try块内部如果是，检查与该try相关的catch子句，看是否可以处理该异常。如果不能处理，就退出当前函数，并且释放当前函数的内存并销毁局部对象，继续到上层的调用函数中查找，直到找到一个可以处理该异常的catch。
- virtual函数能声明为内联吗？为什么？
    * 通常情况下是不能的
    * 原因：inline是编译期决定，他意味着在执行前就将调用动作替换为被调用函数的本体； virtual是运行期决定，他意味着直道运行期才决定调用哪个函数。 这两者之间通常是冲突的。
      然而也有特例，就是当编译阶段就已经知道调用虚函数的指针为多态指针。这里就不再赘述了。
- <a href="/" title="派生类的析构函数用不上，会造成资源的泄漏。">基类的析构函数不是虚函数，会带来什么问题？</a>
- 重载（`overload`)和重写(`override`，有的书也叫做“覆盖”）的区别？
    * 常考的题目。从定义上来说：
        * 重载：是指允许存在多个同名函数，而这些函数的参数表不同（或许参数个数不同，或许参数类型不同，或许两者都不同）。
        * 重写：是指子类重新定义父类虚函数的方法。
    * 从实现原理上来说：
        * **重载**：编译器根据函数不同的参数表，对同名函数的名称做修饰，然后这些同名函数就成了不同的函数（至少对于编译器来说是这样的）。如，有两个同名函数：function func(p:integer):
          integer;和function func(p:string):
          integer;。那么编译器做过修饰后的函数名称可能是这样的：int_func、str_func。对于这两个函数的调用，在编译器间就已经确定了，是静态的。也就是说，它们的地址在编译期就绑定了（早绑定），因此，重载和多态无关！
        * **重写**：和多态真正相关。当子类重新定义了父类的虚函数后，父类指针根据赋给它的不同的子类指针，动态的调用属于子类的该函数，这样的函数调用在编译期间是无法确定的（调用的子类的虚函数的地址无法给出）。因此，这样的函数地址是在运行期绑定的（晚绑定）。
- 子类析构时要调用父类的析构函数吗
    * 析构函数调用的次序是先派生类的析构后基类的析构，也就是说在基类的的析构调用的时候,派生类的信息已经全部销毁了。定义一个对象时先调用基类的构造函数、然后调用派生类的构造函数；析构的时候恰好相反：先调用派生类的析构函数、然后调用基类的析构函数。

在基类的函数前加上virtual关键字，在派生类中重写该函数，运行时将会根据对象的实际类型来调用相应的函数。       
如果对象类型是派生类，就调用派生类的函数；如果对象类型是基类，就调用基类的函数  
用virtual关键字申明的函数叫做虚函数，虚函数肯定是类的成员函数。   
存在虚函数的类都有一个一维的虚函数表叫做虚表，类的对象有一个指向虚表开始的虚指针。       
虚表是和类对应的，虚表指针是和对象对应的。       
多态性是一个接口多种实现，是面向对象的核心，分为类的多态性和函数的多态性。       
多态用虚函数来实现，结合动态绑定。       
纯虚函数是虚函数再加上 = 0； 抽象类是指包括至少一个纯虚函数的类。         
纯虚函数:virtual void fun()=0;即抽象类！必须在子类实现这个函数，即先有名称，没有内容，在派生类实现内容。

## STL

### 常用的容器有哪些

### 简述 vector 的实现原理

### STL 中 vector 与 list 具体是怎么实现的？常见操作的时间复杂度是多少？

### C++ 的 vector 和 list中，如果删除末尾的元素，其指针和迭代器如何变化？若删除的是中间的元素呢？

### vector的reserve和capacity的区别?

reserve()用于让容器预留空间，避免再次内存分配；capacity() 返回在重新进行内存分配以前所能容纳的元素数量。

### auto_ptr能作为vector的元素吗？为什么？

不可以。 当复制一个auto_ptr时，它所指向的对象的所有权被交到复制的auto_ptr上面，而它自身将被设置为null。复制一个auto_ptr意味着改变它的值。

### STL中的vector：增减元素对迭代器的影响

### 在模板中，如何声明嵌套从属类型(即模板嵌套类型)？

template内出现的类型如果依赖于某个template参数，则称之为从属类型；如果从属类型在class内呈嵌套状，则称之为嵌套从属类型。

```c++
template<typename C>
void doSomething(const C& container)
{
if(container.size() > 0)
C::iterator iter(container.begin());
}
```

此时，根据C++的规则，编译器先假设C::iterator不是一个类型。然而iter的声明只有在C::iterator是一个类型时才合理。因此需要我们自己告诉编译器。 那么，就需要再C::
iterator之前加上typename，告诉编译器C::iterator是一个类型。

```c++
template<typename C>
void doSomething(const C& container)
{
if(container.size() > 0)
typename C::iterator iter(container.begin());
}
```

如上就是。

### 简述 STL 中的 map 的实现原理

### STL中排序算法的实现是什么

STL中的sort()，在数据量大时，采用quicksort，分段递归排序；一旦分段后的数量小于某个门限值，改用Insertion sort，避免quicksort深度递归带来的过大的额外负担，如果递归层次过深，还会改用heapsort。

### 函数模板特化与重载决议中的陷阱

模板特化

* 非特化的模板也被称为主模板；
* 类模板能全特化和偏特化；
* 函数模板只能全特化，不过由于函数重载的原因，能达到偏特化的效果。

1和2中的f(p)分别会调用a、b、c中的哪一个？ 1和2中的f(p)分别会调用a、b、c中的哪一个？

* code1
    ```c++
    template<typename T> void f(T);/* a */          
    template<typename T> void f(T*);/* b */         
    template< > void f<int>(int*);/* c */           
    int* p;                                         
    f(p);   
    ```

  这里，a是第一个主模板，b是第二个主模板，且b是第一个主模板a的重载而非偏特化(函数模板没有偏特化)。c是第二个主模板b的显式特化(全特化)。 在f(p)调用时，发生重载决议，会无视特化存在(
  标准规定：重载决议无视模板特化，重载决议只会发生在主模板之间)。在主模板a和b中决议出b，即第二个主模板被决议选中，然后再调用其全特化版本c。
* code2
    ```c++
    template<typename T> void f(T);/* a */
    template< > void f<int*>(int*);/* b */
    template<typename T> void f(T*);/* c */
    int* p;
    f(p);
    ```
  这里a是第一个主模板，b是第一个主模板a的全特化，c是第二个主模板。在f(p)调用时，发生重载决议，同样会无视特化存在，在主模板a和c中决议出c，而c并无全特化版本，因此直接调用c。

### 相等和等价的区别？哪些类型的容器使用相等或等价？

* 相等(equality)是以operator==为基础，如果x==y为真，则判定x和y相等。
* 等价(equivalence)是以operator<为基础，如果!(x < y) && !(y < x)为真，则判定x和y等价。

通常，关联容器采用“等价”，而顺序容器采用“相等”。

### vector 和 list 的区别

### vector 的扩容原理

### map 底层实现

### map 和 unordered_map 的区别

### stl sort 函数的实现

## 类

### 一个空类会生成哪些函数

### 类默认的构造函数是什么？

### 只定义析构函数，会自动生成哪些构造函数？

### 如何实现一个不能在堆分配的类，如何实现一个不能被继承的类

如何实现一个不能在堆上分配的类，如果要在堆上分配就是会使用new，所以可以重载new 操作符，并将其重载于class A的private内：

```c++
class A 
{
public:
    A(int a):_x(a){}
    int Display() {
    return _x;
}
void setVal(int x) {
    _x = x;
    return;
}
private:
    //
    int _x;
    void* operator new(size_t t){
    }
};
```

如何实现一个不能被继承的类，这里有一个比较简单的方法，利用C++11的新关键字final：

```c++
class B final {
    public:
        B(int a) {
        }
};  
```

## 异常

<p><span style="color: red; "> 在实际的 C++ 开发中，我们经常会遇到诸如程序运行中突然崩溃、程序运行所用内存越来越多最终不得不重启等问题，这些问题往往都是内存资源管理不当造成的。比如：</span>
<li><span style="color: green; ">有些内存资源已经被释放，但指向它的指针并没有改变指向（成为了野指针），并且后续还在使用；</span></li>
<li><span style="color: green; ">有些内存资源已经被释放，后期又试图再释放一次（重复释放同一块内存会导致程序运行崩溃）；</span></li>
<li><span style="color: green; ">没有及时释放不再使用的内存资源，造成内存泄漏，程序占用的内存资源越来越多。</span></li></p>

### C++如何避免内存泄漏

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

### 如何确保对象在抛出异常时也能被删除？什么是RAII？

总的思想是RAII：设计一个class，令他的构造函数和析构函数分别获取和释放资源。 有两个方法：

* 利用“函数的局部对象无论函数以何种方式(包括因异常)结束都会被析构”这一特性，将“一定要释放的资源”放进局部对象的析构函数；
* 使用智能指针。

### 简述 C++ 的内存分区

### 简述 C++ 中内存对齐的使用场景

### C++ 是如何进行内存管理的？

### C/C++内存存储区有哪几种类型？

### 内存中堆与栈的区别是什么？

### 内存的分配方式有几种

1. 从静态存储区域分配。内存在程序编译的时候就已经分配好，这块内存在程序的整个运行期间都存在。例如全局变量。
2. 在栈上创建。在执行函数时，函数内局部变量的存储单元都可以在栈上创建，函数执行结束时这些存储单元自动被释放。栈内存分配运算内置于处理器的指令集中，效率很高，但是分配的内存容量有限。
3. 从堆上分配，亦称动态内存分配。程序在运行的时候用malloc或new申请任意多少的内存，程序员自己负责在何时用free或delete释放内存。动态内存的生存期由我们决定，使用非常灵活，但问题也最多。

### 栈内存与文字常量区

```c++
char str1[] = "abc";
char str2[] = "abc";

const char str3[] = "abc";
const char str4[] = "abc";

const char *str5 = "abc";
const char *str6 = "abc";

char *str7 = "abc";
char *str8 = "abc";

cout << (str1 == str2) << endl;//0  分别指向各自的栈内存
cout << (str3 == str4) << endl;//0  分别指向各自的栈内存

cout << (str5 == str6) << endl;//1指向文字常量区地址相同
cout << (str7 == str8) << endl;//1指向文字常量区地址相同
```

结果是：0 0 1 1

解答：str1,str2,str3,str4是数组变量，它们有各自的内存空间；而str5,str6,str7,str8是指针，它们指向相同的常量区域。

## 一些程序题

1.

```c++
  int a = 4;

  int &f(int x) {
    a = a + x;
    return a;
  }
  
  int main() {
    int t = 5;
    cout << f(t) << endl; //a = 9
    f(t) = 20; //a = 20
    cout << f(t) << endl; //a = 25
    t = f(t); //a = 30 t = 30
    cout << f(t) << endl; // a = 60
  }
```

2.求下面函数的返回值

```c++
int func(int x) {
  int countx = 0;
  while (x) {
    countx++;
    x = x & (x - 1);
  }
  return countx;
}
```

假定x = 9999。 答案：8

思路：将x转化为2进制，看含有的1的个数。

3.

```c++
int main()
{
    int i = 1;
    printf("%d,%d\n", ++i, ++i);    
    printf("%d,%d\n", ++i, i++);   
    printf("%d,%d\n", i++, i++);    
    printf("%d,%d\n", i++, ++i);   
    system("pause");
    return 0;
}
```

3 3 5 3 6 5 8 9
