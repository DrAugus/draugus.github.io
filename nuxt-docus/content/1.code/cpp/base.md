# base

## 读书笔记

1. 不要在头文件使用`using`，防止多个引用造成命名冲突

2. `vector`能够高效增长，不要在初始化的时候指定`vector`大小，除非所有值都一样

3. class

    ![1](/code/cpp_class.png)

## count

> 需要某元素总个数时，使用count

对于只需要知道包含特定元素的数量的应用来说，这是最简单的方式。如果count返回0，则表示不存在该元素。

```cpp
if (count(v.begin(), v.end(), key))
```

## find

> 仅判断是否存在某元素，使用find

find会在查找到指定值后立即返回，所以它一般比count更快（因为count总是要遍历整个容器）。

```cpp
if (std::find(v.begin(), v.end(), key) != v.end())
```

## find_if any_of

> 支持复杂条件的查找时，使用any_of(仅知道是否存在)/find_if(返回了第一个元素的迭代器)

### std::find_if

它也能完成任务，但有点大材小用了。

find_if需要一个判别式。如果查找的值需要满足特定的条件时，比如查找小于3且大于1的值时，适合该方式。

如果有多个值符合条件，则返回查找到符合条件的第一个值的迭代器。

```cpp
if (std::find_if(v.begin(), v.end(), [] (int i) { return i < 3 && i > 1 } ) != v.end())
```

### std::any_of

与find_if类似，但它返回bool值。

如果判断式返回true，则它也返回true。否则返回false。

```cpp
if (std::any_of(v.begin(), v.end(), [] (int i) { return i < 3 && i > 1 } ))
```

扩展：std::none_of，是any_of的反面。也就是，当判断式是false时它返回true，否则返回flase。

## binary_search

> 对于已经排序的vector，使用 binary_search

作为磨刀不误砍柴工的一种方式，可以对vector先排序，再查找，就可以使用二分查找了。

二分查找的时间效率为O(logn)。

```cpp
sort(v.begin(), v.end());
if (std::binary_search(v.begin(), v.end(), key))
```
