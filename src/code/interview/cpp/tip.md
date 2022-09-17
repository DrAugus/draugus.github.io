# 一些要点

## 二维动态数组的申请和删除

首先是如何申请二维的数组，这里我们先申请一个指针数组，然后令指针数组中的每一个元素都指向一个数组，这样二维数组就成了：

```cpp
size_t row, col;
//输入row和col的数值
int **MathTable = new int*[row];
for (int i = 0; i < row; i++)
  MathTable[i] = new int[col];
```

然后是释放空间的过程：

```cpp
//code
for (int i = 0; i < row; i++)
  delete[] MathTable[i];
delete[]MathTable;
```

符合new和delete配对的原则，怎么new出来就怎么delete掉。

## [为什么要内存对齐](https://blog.csdn.net/lgouc/article/details/82354710)

## 将程序跳转到指定内存地址

要对绝对地址0x100000赋值，我们可以用`(unsigned int*)0x100000 = 1234;`那么要是想让程序跳转到绝对地址是0x100000去执行，应该怎么做？

`*((void (*)( ))0x100000 ) ( );`
首先要将0x100000强制转换成函数指针,即:
`(void (*)())0x100000`
然后再调用它:
` *((void (*)())0x100000)();`
用typedef可以看得更直观些:
`typedef void(*)() voidFuncPtr;`
` *((voidFuncPtr)0x100000)();`

## 如何实现仿函数？为什么需要通过继承自unary_function 或者 binary_function来实现仿函数？

function object就是重载了函数调用操作符 operator()的一个struct或者class
所有内置一元仿函数均继承自unary_function，所有内置二元仿函数均继承自binary_function
继承自unary_function和binary_function的仿函数可以成为“可配接“的仿函数。可配接的仿函数，能够与其他STL组件更”和谐“地协同工作。

## 什么是字节对齐，为什么要采用这种机制？

## 两种常用的实现隐式类类型转换的方式是什么？如何避免隐式类型转换？

1. 使用单参数的构造函数或N个参数中有N-1个是默认参数的构造函数，

    ```cpp
    class A {
    public:
        A(string s);
        A(string s, int a = 0);
    };
    ```

   使用operator what_you_want_to_convert_type() const
   ```cpp
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

## 面向对象的设计原则

## 函数调用的具体实现

## 构造函数可以调用虚函数吗？语法上通过吗？语义上可以通过吗？

不能，语法上通过，语义上有问题。  
`derived class`对象内的`base class`成分会在`derived class`自身构造之前构造完毕。因此，在`base class`
的构造函数中执行的`virtual`函数将会是`base class`
的版本，决不会是`derived class`的版本。 即使目前确实正在构造`derived class`。

## 拷贝构造函数作用及用途？什么时候需要自定义拷贝构造函数？

* 在C++中，有下面三种对象需要拷贝的情况：
    * 一个对象以值传递的方式传入函数体
    * 一个对象以值传递的方式从函数返回
    * 一个对象需要通过另外一个对象进行初始化 以上的情况就需要拷贝构造函数的调用。
* 当类中的数据成员需要动态分配存储空间时，不可以依赖`default copy constructor`。当`default copy constructor`
  被因编译器需要而合成时，将执行`default memberwise copy`语义。   
  此时如果类中有动态分配的存储空间时，将会发生惨重的灾情。 在需要时（包括这种对象要赋值、这种对象作为函数参数要传递、函数返回值为这种对象等情况），要考虑到自定义拷贝构造函数。

## 如果在构造函数和析构函数中抛出异常会发生什么？什么是栈展开？

* 构造函数抛异常：不会发生资源泄漏。假设在operator new()
  时抛出异常，那么将会因异常而结束此次调用，内存分配失败，不可能存在内存泄露。假设在别处(operator new() )
  执行之后抛出异常，此时析构函数调用，已构造的对象将得以正确释放，且自动调用operator delete()释放内存 析构函数抛异常：
  可以抛出异常，但该异常必须留在析构函数；若析构函数因异常退出，情况会很糟糕(all
  kinds of bad things are likely to happen)
    * 可能使得已分配的对象未能正常析构，造成内存泄露；
    *
  例如在对像数组的析构时，如果对象的析构函数抛出异常，释放代码将引发未定义行为。考虑一个对象数组的中间部分在析构时抛出异常，它无法传播，因为传播的话将使得后续部分不能正常释放；它也无法吸收，因为这违反了”异常中立“原则(
  异常中立，就是指任何底层的异常都会抛出到上层，也就相当于是异常透明的)。
* 抛出异常时，将暂停当前函数的执行，开始查找匹配的catch子句。  
  首先检查throw本身是否在try块内部如果是，检查与该try相关的catch子句，看是否可以处理该异常。如果不能处理，就退出当前函数，并且释放当前函数的内存并销毁局部对象，继续到上层的调用函数中查找，直到找到一个可以处理该异常的catch。

## virtual函数能声明为内联吗？为什么？

* 通常情况下是不能的
* 原因：inline是编译期决定，他意味着在执行前就将调用动作替换为被调用函数的本体； virtual是运行期决定，他意味着直道运行期才决定调用哪个函数。
  这两者之间通常是冲突的。
  然而也有特例，就是当编译阶段就已经知道调用虚函数的指针为多态指针。这里就不再赘述了。

## 基类的析构函数不是虚函数，会带来什么问题？

派生类的析构函数用不上，会造成资源的泄漏。

## 子类析构时要调用父类的析构函数吗

析构函数调用的次序是先派生类的析构后基类的析构，也就是说在基类的的析构调用的时候,派生类的信息已经全部销毁了。定义一个对象时先调用基类的构造函数、然后调用派生类的构造函数；析构的时候恰好相反：先调用派生类的析构函数、然后调用基类的析构函数。

## 哪些类型的对象不可以作为union的成员？为什么有这种限制？

标准规定，凡是具有`non-trivial constructor`、`non-trivial destructor`、`non-trivial copy constructor`
、`non-trivial assignment operator`的class对象都不能作为union的成员。 即是说，这个class的以上四种成员必须均经由编译器合成且该class无虚函数和虚基类。
有这种限制是为了兼容C。

## C++中的转化机制？各适用于什么环境？dynamic_cast转换失败时，会出现什么情况？

对指针，返回NULL.对引用，抛出bad_cast异常more Effective C++ C++引入了4种类型转化操作符（cast
operator）：static_cast，const_cast，dynamic_cast和reinterpret_cast，使用方法与C语言中略有不同：

```c
(type)expression; //这是C语言的
``` 

然后引入C++的：

```cpp
static_cast<type>(expression);//这是C++的
```

然后看一下各自的适用范围：

* static_cast：static_cast基本上拥有与C旧式转型相同的威力和意义，以及相同的限制。但是，该类型转换操作符不能移除常量性，因为有一个专门的操作符用来移除常量性。
* const_cast：用来改变表达式中的常量性（constness）或者易变形（volatileness），只能用于此功能。
* dynamic_cast：将指向基类basic class object的pointer或者reference转型为指向派生类derived（或这sibling base）class
  object的pointer或者reference中，并且可以获知是否转型成功：如果转型失败，当转型对象是指针的时候会返回一个null指针；当转型对象是reference会抛出一个异常exception。dynamic_cast无法应用在缺乏虚函数的类型上，也不能改变类型的常量性。
  此外，dynamic_cast还有一个用途就是找出被对象占用的内存的起始点。
* reinterpret_cast：这个操作符的转换结果几乎总是和编译器平台相关，所以不具有移植性。reinterpret_cast的最常用用途是转换“函数指针”类型，如下：

    ```cpp
    typedef void (*FuncPtr)();
    int doSomething();
    int main() {
        FuncPtr funcPtrArray[10];
        funcPtrArray[0] = reinterpret_cast<FuncPtr>(&doSomething);
        return 0;
    }
    ```

  通过reinterpret_cast强迫编译器了，并成功的将不同的类型的函数&doSomething转换为需要的类型。不过这个操作符进行的转换动作不具有移植性（C++不保证所有的函数指针都能以此方式重新呈现），某些情况下这样的转型可能会导致不正确的结果，所以这种操作不到万不得已不要使用。

## 为什么函数参数的入栈的顺序是从右往左

因为好多函数是不定参数个数的，比如最常用的printf，所以需要参数的入栈顺序是从右往左。

## 有哪几种强制类型转换以及使用场景

## 如何避免循环依赖

## unique_ptr中std::move()作用

## main函数执行以前，还会执行什么代码？之后呢？

全局对象的构造函数会在main函数之前执行

## C++是不是类型安全的？

不是。两个不同类型的指针之间可以强制转换（用reinterpret cast)。C#是类型安全的。

## 有哪几种情况只能用initialization list而不能用assignment?

当类中含const、reference成员变量；基类的构造函数都需要初始化表。

## List 和 Set

List 可以存放相同元素 Set 不可存放相同元素

## 写一个http网络服务器，该如何写 

## 谈一谈 c++ 的 this 

## 不同类型的语言有什么差异

## 如何优化冒泡排序


