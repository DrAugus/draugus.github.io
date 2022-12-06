# 设计模式

## 单例模式的双锁分别有什么作用

## 实现单例设计模式（懒汉，饿汉）

> [singleton-how-should-it-be-used](https://stackoverflow.com/a/92193/17744936)

- 意图：保证一个类仅有一个实例，并提供一个访问他的全局访问点。
- 主要解决：一个全局使用的类频繁的创建与销毁。
- 何时使用：当您想控制实例数目节省系统资源的时候。
- 如何解决：判断系统是否已经有这个单例，如果有则返回，如果没有则创建。
- 关键代码：构造函数是私有的。
  
饿汉：在类加载时就创建实例；懒汉：在第一次使用时进行实例化

::callout
#summary
code
#content

```cpp
class Singleton
{
private:
static Singleton instance;
private:
Singleton();
~Singleton();
Singleton(const Singleton&);
Singleton& operator=(const Singleton&);
public:
static Singleton& getInstance() {
return instance;
}
}

// initialize defaultly
Singleton Singleton::instance;
```

::

## 简述常见的工厂模式以及单例模式的使用场景

## 如何实现单例模式？如何避免发生对象的用户复制行为？如何实现线程安全的单例模式？DCLP是什么，有什么问题？

- 将构造函数、析构函数、复制构造函数、赋值操作符声明为私有，即可实现单例模式
  单例模式实现代码通常为：

  ```cpp
  class Singleton
  {
  public:
      static Singleton* Instance();
  protected:
      Singleton();
  private:
      static Singleton* _instance;
  };
  Singleton::Singleton(){}
  Singleton* Singleton::_instance = nullptr;
  Singleton* Singleton::Instance()
  {
      if(_instance == nullptr)
      _instance = new Singleton;
      return _instance;
  }
  ```

- 避免用户的复制行为，可以将复制构造函数声明为private或者使用C++11中的delete语法。
- 实现线程安全的单例模式：上面实现中的GetInstance()不是线程安全的，因为在单例的静态初始化中存在竞争条件。如果碰巧有多个线程在同时调用该方法，那么就有可能被构造多次。

  `比较简单`的做法是在存在竞争条件的地方加上互斥锁。这样做的代价是开销比较高。因为每次方法调用时都需要加锁。  
  `比较常用`的做法是使用双重检查锁定模式(DCLP)
  。但是DCLP并不能保证在所有编译器和处理器内存模型下都能正常工作。如，共享内存的对称多处理器通常突发式提交内存写操作，这会造成不同线程的写操作重新排序。这种情况通常可以采用volatile解决，他能将读写操作同步到易变数据中，但这样在多线程环境下仍旧存在问题。

<PDF url="/pdf/DDJ_Jul_Aug_2004_revised.pdf" />

## 手写生产者消费者模型
