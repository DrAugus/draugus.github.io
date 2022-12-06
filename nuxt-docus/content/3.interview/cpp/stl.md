# STL

[refer](https://zintrulcre.vip/posts/cpp/basics/basics/#%E6%89%80%E6%9C%89%E5%AE%B9%E5%99%A8)

| 容器                 |  实现            | 查询        |  插入删除            | 特点            |
|:-------------------|:---------------|:----------|:-----------------|:--------------|
| array              |  数组            |  O(1)     | O(1)             | 大小固定          |
| vector             |  数组            |  O(1)     | 尾部 O(1)，其他 O(n)  |  大小可变，扩容耗时    |
| deque              |  双端队列          | O(n)      | 头尾 O(1)，其他 O(n)  | 一个中央控制器，多个缓冲区 |
| list               |  双向链表          |  O(n)     | O(1)             ||
| forward_list       |  单向链表          | O(n)      | O(1)             ||
| stack              | deque / list   | /         | O(1)             |  先进后出         |
| queue              | deque / list   | /         |  O(1)            | 先进先出          |
| priority_queue     |  vector        | /         |  O(logn) 堆，完全二叉树 |
| set                | 红黑树            | O(logn)   |  O(logn)         ||
| multiset           | 红黑树            |  O(logn)  | O(logn)          ||
| map                | 红黑树            | O(logn)   |  O(logn)         ||
| multimap           | 红黑树            | O(logn)   |  O(logn)         ||
| unordered_set      | 哈希表            | 平均 O(1)   | 平均 O(1)          ||
| unordered_multiset |           哈希表  | 平均 O(1)   | 平均 O(1)          ||
| unordered_map      | 哈希表            |  平均 O(1)  |  平均 O(1)         ||
| unordered_multimap |  哈希表           |  平均 O(1)  |  平均 O(1)         ||

## 常用的容器有哪些

STL（Standard Template Library，标准模板库）是C++语言的一个重要组成部分，它提供了一组用于管理内存和容器数据结构的模板类。STL中常用的容器包括：

- vector：动态数组，可以存储任意类型的对象。
- deque：双端队列，可以在队列两端进行插入和删除操作。
- list：双向链表，可以在链表中任意位置进行插入和删除操作。
- set：集合，可以存储不重复的元素，并支持快速查找。
- map：映射，可以存储键值对，并支持快速查找。

除了上述容器之外，STL还包括许多其他容器，例如`stack`、`queue`、`priority_queue`等。程序员可以根据实际需要选择适当的容器来管理内存和数据。

## 简述 vector 的实现原理

Vector 是一种数据结构，它的实现原理是将数据存储在一个连续的内存空间中，以便更快地访问和修改数据。与数组不同，Vector 可以自动扩展和收缩，以便存储更多的数据。由于 Vector 在内存中连续存储数据，所以它可以更快地进行读写操作，比数组更加高效。

## STL 中 vector 与 list 具体是怎么实现的？常见操作的时间复杂度是多少？

vector 是一种数组，其中的数据是连续存储在内存中的。因此，vector 是一个顺序容器，可以快速随机访问其中的元素。vector 的内部实现是一个动态数组，它会在需要的时候自动扩展或缩小，以适应存储的数据量。

list 是一种链表，它的内部实现是一个单向链表。因此，list 是一个链式容器，可以高效地插入和删除元素。list 的内存分配方式和 vector 不同，它会为每个元素在内存中分配一个独立的空间，因此它可以存储不连续的数据。

在 STL 中，vector 和 list 的常见操作的时间复杂度通常如下：

vector:

- 在 vector 的末尾插入或删除元素：O(1)（常数时间）
- 在 vector 的中间插入或删除元素：O(n)（线性时间）
- 访问 vector 中的元素：O(1)（常数时间）
list:
- 在 list 的末尾插入或删除元素：O(1)

## C++ 的 vector 和 list中，如果删除末尾的元素，其指针和迭代器如何变化？若删除的是中间的元素呢？

在 C++ 的 vector 和 list 中，如果删除的是末尾的元素，那么容器的大小会减少 1，所有指向容器末尾的指针和迭代器都会失效。但指向容器内部的指针和迭代器不会发生变化，仍然可以正常使用。

如果删除的是容器中间的元素，那么容器的大小也会减少 1，所有指向容器中间被删除元素的指针和迭代器都会失效。而指向容器内部其它位置的指针和迭代器可能会发生变化，例如在 vector 中，它们的位置会向前移动，因为被删除的元素会导致整个容器向前移动。因此，在删除容器中间元素时，需要格外小心，以避免导致指针和迭代器失效。

## vector的reserve和capacity的区别?

reserve()用于让容器预留空间，避免再次内存分配；capacity() 返回在重新进行内存分配以前所能容纳的元素数量。

## auto_ptr能作为vector的元素吗？为什么？

不可以。 当复制一个auto_ptr时，它所指向的对象的所有权被交到复制的auto_ptr上面，而它自身将被设置为null。复制一个auto_ptr意味着改变它的值。

## STL中的vector：增减元素对迭代器的影响

在 STL 中的 vector 中，增加或删除元素对迭代器的影响取决于操作的位置。

如果在 vector 的末尾增加或删除元素，那么不会对迭代器产生任何影响。指向 vector 中任意位置的迭代器都会保持有效，并且可以继续正常使用。

如果在 vector 的中间增加或删除元素，那么会导致指向 vector 中间被操作位置的迭代器失效。如果是在 vector 中间插入元素，那么所有指向 vector 中间被插入元素后面的位置的迭代器都会失效，因为整个 vector 后续的元素都会向后移动。如果是在 vector 中间删除元素，那么所有指向 vector 中间被删除元素后面的位置的迭代器都会失效，因为整个 vector 后续的元素都会向前移动。

因此，在 STL 中的 vector 中，如果要在 vector 的中间增加或删除元素，需要特别小心，避免导致指向 vector 中间的迭代器失效。

## 在模板中，如何声明嵌套从属类型(即模板嵌套类型)？

template内出现的类型如果依赖于某个template参数，则称之为从属类型；如果从属类型在class内呈嵌套状，则称之为嵌套从属类型。

```cpp
template<typename C>
void doSomething(const C& container)
{
    if(container.size() > 0)
    C::iterator iter(container.begin());
}
```

此时，根据C++的规则，编译器先假设C::iterator不是一个类型。然而iter的声明只有在C::iterator是一个类型时才合理。因此需要我们自己告诉编译器。
那么，就需要再C::
iterator之前加上typename，告诉编译器C::iterator是一个类型。

```cpp
template<typename C>
void doSomething(const C& container)
{
    if(container.size() > 0)
    typename C::iterator iter(container.begin());
}
```

如上就是。

## STL中排序算法的实现是什么

STL中的sort()，在数据量大时，采用quicksort，分段递归排序；一旦分段后的数量小于某个门限值，改用Insertion
sort，避免quicksort深度递归带来的过大的额外负担，如果递归层次过深，还会改用heapsort。

## 函数模板特化与重载决议中的陷阱

模板特化

- 非特化的模板也被称为主模板；
- 类模板能全特化和偏特化；
- 函数模板只能全特化，不过由于函数重载的原因，能达到偏特化的效果。

1和2中的f(p)分别会调用a、b、c中的哪一个？ 1和2中的f(p)分别会调用a、b、c中的哪一个？

- code1

    ```cpp
    template<typename T> void f(T);/* a */          
    template<typename T> void f(T*);/* b */         
    template< > void f<int>(int*);/* c */           
    int* p;                                         
    f(p);   
    ```

  这里，a是第一个主模板，b是第二个主模板，且b是第一个主模板a的重载而非偏特化(函数模板没有偏特化)
  。c是第二个主模板b的显式特化(全特化)。 在f(p)调用时，发生重载决议，会无视特化存在(
  标准规定：重载决议无视模板特化，重载决议只会发生在主模板之间)。在主模板a和b中决议出b，即第二个主模板被决议选中，然后再调用其全特化版本c。
- code2

    ```cpp
    template<typename T> void f(T);/* a */
    template< > void f<int*>(int*);/* b */
    template<typename T> void f(T*);/* c */
    int* p;
    f(p);
    ```

  这里a是第一个主模板，b是第一个主模板a的全特化，c是第二个主模板。在f(p)
  调用时，发生重载决议，同样会无视特化存在，在主模板a和c中决议出c，而c并无全特化版本，因此直接调用c。

## 相等和等价的区别？哪些类型的容器使用相等或等价？

- 相等(equality)是以`operator==`为基础，如果`x==y`为真，则判定x和y相等。
- 等价(equivalence)是以`operator<`为基础，如果`!(x < y) && !(y < x)`为真，则判定x和y等价。

通常，关联容器采用“等价”，而顺序容器采用“相等”。

## vector 和 list 的区别

vector 和 list 都是常用的数据结构，它们都可以用来存储一组数据。不同之处在于，vector 是一种更高效的数据结构，它的内存分配是连续的，而 list 的内存分配是离散的。这意味着，当需要在 vector 中存储或访问大量数据时，它会比 list 更快。另一方面，list 比 vector 更灵活，因为它允许在任意位置插入或删除元素。总之，两者都有各自的优势，应根据具体情况选择合适的数据结构使用。

## vector 的扩容原理

vector 是一种动态数组，它的内存空间是可以自动扩容的。当在 vector 中添加新元素时，如果 vector 内部的存储空间不够用，那么 vector 会自动分配更多的空间来存储新的元素。

具体来说，当 vector 的存储空间不够用时，它会把当前的存储空间扩大一倍，然后把原来的数据复制到新的存储空间中。这样就能保证 vector 在扩容时的时间复杂度为 O(1)，即使在 vector 中添加了大量数据，它的性能也不会下降。

不过，有时候这种自动扩容的方式可能会造成内存的浪费，因为 vector 扩容时会分配更多的空间，但并不一定全部都会被使用。因此，在使用 vector 时，应该根据具体情况来选择合适的扩容策略，以提高 vector 的内存利用率。

## 简述 STL 中的 map 的实现原理

STL 中的 map 是一种关联式容器，它可以将键值对存储在一起，每个键都与一个值相关联。map 可以快速查找、插入和删除元素，因此在许多应用场景中都非常有用。

map 的底层实现通常是基于红黑树这种数据结构，红黑树是一种平衡二叉树，它能够保证查找、插入和删除的时间复杂度都为 O(log n)。在红黑树中，每个节点都有一个颜色（红色或黑色），通过控制节点的颜色和插入、删除的方式，能够保证红黑树的深度接近于log n，从而保证了红黑树的高性能。

红黑树中的每个节点都存储着一个键值对，并且键是有序的，因此 map 中的元素也是有序的。当插入、查找或删除元素时，map 都会在红黑树中执行相应的操作，从而保证了 map 的高性能。总之，map 是一种非常实用的数据结构，能够满足许多应用场景的需求。

## map 和 unordered_map 的区别

map 和 unordered_map 都是 STL 中的容器，它们都可以用来存储键值对。不同之处在于，map 是一种有序容器，它会根据键的大小自动排序，而 unordered_map 是一种无序容器，它不会对键进行排序。

另一方面，map 的底层实现是基于红黑树这种数据结构，它的查找、插入和删除操作的时间复杂度都是 O(log n)，而 unordered_map 的底层实现是基于哈希表，它的查找、插入和删除操作的时间复杂度都是 O(1)。

因此，如果你需要保证键值对的顺序，那么可以使用 map，否则可以使用 unordered_map。另外，如果你需要高性能，那么可以使用 unordered_map，因为它的时间复杂度更低。总之，两者都有各自的优势，应根据具体情况选择合适的容器使用。

## stl sort 函数的实现

STL 中的 sort 函数是一种高效的排序算法，它可以对一个数组或容器中的元素进行排序。sort 函数的实现通常是基于快速排序这种排序算法，快速排序的时间复杂度为 O(n log n)，它能够在大多数情况下保证排序的高性能。

在快速排序中，首先会选择一个基准元素，然后把数组分成两部分，一部分的元素都小于基准元素，另一部分的元素都大于基准元素。接下来，分别对这两部分的元素再次进行快速排序，直到所有的元素都排好序为止。

STL 中的 sort 函数也是采用类似的方式来实现的。首先，它会选择一个基准元素，然后把容器中的元素分成两部分，一部分的元素都小于基准元素，另一部分的元素都大于基准元素。接着，分别对这两部分的元素再次进行快速排序，直到所有的元素都排好序为止。总之，sort 函数是一种非常实用的排序工具，能够满足许多应用场景的需求。

## stl容器里哪个是线程安全的

STL 容器提供了许多常用的数据结构，如 vector、list、set 等。但是，由于它们不是线程安全的，所以在多线程环境下使用时需要注意。

在多线程环境下，同一个 STL 容器的不同线程可能同时对其进行写操作，如果不加锁的话，可能会导致数据冲突和数据不一致的问题。例如，下面的代码使用了 STL 中的 vector 模板类来实现一个线程不安全的示例：

```cpp
#include <vector>
#include <thread>

std::vector<int> v;

void add_value(int value)
{
    v.push_back(value);
}

int main()
{
    std::thread t1(add_value, 1);
    std::thread t2(add_value, 2);
    std::thread t3(add_value, 3);
    std::thread t4(add_value, 4);

    t1.join();
    t2.join();
    t3.join();
    t4.join();

    return 0;
}
```

在上面的代码中，v 是一个全局变量，它是 vector 类型的。程序启动了四个线程，每个线程都调用了 add_value 函数，并向 v 中添加了一个值。但是，由于 v 是线程不安全的，所以如果不加锁的话，它可能会导致数据冲突和数据不一致的问题。

为了解决线程不安全的问题，可以在使用 STL 容器时使用同步机制，如互斥锁或信号量。例如，下面的代码使用了互斥锁来保证 vector 是线程安全的：

```cpp
#include <vector>
#include <thread>
#include <mutex>

std::vector<int> v;
std::mutex m;

void add_value(int value)
{
    std::lock_guard<std::mutex> lock(m);
    v.push_back(value);
}

int main()
{
    std::thread t1(add_value, 1);
    std::thread t2(add_value, 2);
    std::thread t3(add_value, 3);
    std::thread t4(add_value, 4);

    t1.join();
    t2.join();
    t3.join();
    t4.join();

    return 0;
}
```

在上面的代码中，vector 模板类用于实现一个动态数组。为了保证 vector 是线程安全的，程序使用了互斥锁来同步多个线程的访问。在调用 add_value 函数时，会先加锁，然后再调用 vector 的 push_back 方法，并在函数结束时自动解锁。这样就能保证 vector 是线程安全的了。

另外，STL 中也提供了一些线程安全的容器，如 queue、stack 等。例如，下面的代码使用 STL 中的 queue 模板类来实现一个线程安全的例子：

```cpp
#include <queue>
#include <thread>

std::queue<int> q;

void add_value(int value)
{
    q.push(value);
}

int main()
{
    std::thread t1(add_value, 1);
    std::thread t2(add_value, 2);
    std::thread t3(add_value, 3);
    std::thread t4(add_value, 4);

    t1.join();
    t2.join();
    t3.join();
    t4.join();

    return 0;
}
```

在上面的代码中，queue 模板类用于实现一个队列。由于 queue 是线程安全的，所以在多线程环境下使用时不需要加锁。可以直接调用 queue 的 push 方法，将元素加入队列尾部。

总之，在使用 STL 容器时，应该根据实际情况选择合适的容器，并在必要时使用同步机制，来保证线程安全。这样才能让程序更稳定，并且避免出现数据不一致的问题。
