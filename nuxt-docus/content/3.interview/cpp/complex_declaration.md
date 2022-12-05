# 复杂声明

## case 1

```cpp
void * ( * (*fp1)(int))[10];
```

`fp1`是一个指针，指向一个函数，这个函数的参数为`int`型，函数的返回值是一个指针，这个指针指向一个数组，这个数组有10个元素，每个元素是一个`void*`型指针。

## case 2

```cpp
float (*(* fp2)(int,int,int))(int);
```

`fp2`是一个指针，指向一个函数，这个函数的参数为3个`int`型，函数的返回值是一个指针，这个指针指向一个函数，这个函数的参数为`int`型，函数的返回值是`float`型。

## case 3

```cpp
int (* ( * fp3)())[10]();
```

`fp3`是一个指针，指向一个函数，这个函数的参数为空，函数的返回值是一个指针，这个指针指向一个数组，这个数组有10个元素，每个元素是一个指针，指向一个函数，这个函数的参数为空，函数的返回值是`int`型。
> have error: 'fp3' declared as array of functions of type 'int ()'

## case 4

```cpp
int (*s[10])(int)
```

函数指针数组，每个指针指向一个`int func(int param)`的函数

## case 5

```cpp
int id[sizeof(unsigned long)];
```

这个对吗？为什么？

正确 这个 sizeof是编译时运算符，编译时就确定了，可以看成和机器有关的常量。
