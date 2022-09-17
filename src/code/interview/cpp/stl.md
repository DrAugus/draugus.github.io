# STL

## 常用的容器有哪些

## 简述 vector 的实现原理

## STL 中 vector 与 list 具体是怎么实现的？常见操作的时间复杂度是多少？

## C++ 的 vector 和 list中，如果删除末尾的元素，其指针和迭代器如何变化？若删除的是中间的元素呢？

## vector的reserve和capacity的区别?

reserve()用于让容器预留空间，避免再次内存分配；capacity() 返回在重新进行内存分配以前所能容纳的元素数量。

## auto_ptr能作为vector的元素吗？为什么？

不可以。 当复制一个auto_ptr时，它所指向的对象的所有权被交到复制的auto_ptr上面，而它自身将被设置为null。复制一个auto_ptr意味着改变它的值。

## STL中的vector：增减元素对迭代器的影响

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

## 简述 STL 中的 map 的实现原理

## STL中排序算法的实现是什么

STL中的sort()，在数据量大时，采用quicksort，分段递归排序；一旦分段后的数量小于某个门限值，改用Insertion
sort，避免quicksort深度递归带来的过大的额外负担，如果递归层次过深，还会改用heapsort。

## 函数模板特化与重载决议中的陷阱

模板特化

* 非特化的模板也被称为主模板；
* 类模板能全特化和偏特化；
* 函数模板只能全特化，不过由于函数重载的原因，能达到偏特化的效果。

1和2中的f(p)分别会调用a、b、c中的哪一个？ 1和2中的f(p)分别会调用a、b、c中的哪一个？

* code1
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
* code2
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

* 相等(equality)是以`operator==`为基础，如果`x==y`为真，则判定x和y相等。
* 等价(equivalence)是以`operator<`为基础，如果`!(x < y) && !(y < x)`为真，则判定x和y等价。

通常，关联容器采用“等价”，而顺序容器采用“相等”。

## vector 和 list 的区别

## vector 的扩容原理

## map 底层实现

## map 和 unordered_map 的区别

## stl sort 函数的实现




