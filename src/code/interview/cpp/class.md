---
index: false
---

# 类

## 一个空类会生成哪些函数

## 类默认的构造函数是什么？

## 只定义析构函数，会自动生成哪些构造函数？

## 如何实现一个不能在堆分配的类，如何实现一个不能被继承的类

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


