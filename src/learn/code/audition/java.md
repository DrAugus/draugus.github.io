# JAVA

## 线程

- HashMap 与 ConcurrentHashMap 的实现原理是怎样的？ConcurrentHashMap 是如何保证线程安全的？
- 集合类中的 List 和 Map 的线程安全版本是什么，如何保证线程安全的？
- ThreadLocal 实现原理是什么？
- 线程池是如何实现的？简述线程池的任务策略
- 如何设计一个线程池
- Java 线程和操作系统的线程是怎么对应的？Java线程是怎样进行调度的?
- Java 线程池里的 arrayblockingqueue 与 linkedblockingqueue 的使用场景和区别
- Java 是如何实现线程安全的，哪些数据结构是线程安全的？
- Java 中 sleep() 与 wait() 的区别

## 垃圾回收

- Java 中垃圾回收机制中如何判断对象需要回收？常见的 GC 回收算法有哪些？

## 设计模式

- 实现单例设计模式（懒汉，饿汉）
- 简述常见的工厂模式以及单例模式的使用场景
- 如何实现单例模式？如何避免发生对象的用户复制行为？如何实现线程安全的单例模式？DCLP是什么，有什么问题？
    * 将构造函数、析构函数、复制构造函数、赋值操作符声明为私有，即可实现单例模式   
      单例模式实现代码通常为：

      ```c++
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
    * 避免用户的复制行为，可以将复制构造函数声明为private或者使用C++11中的delete语法。
    * 实现线程安全的单例模式：上面实现中的GetInstance()不是线程安全的，因为在单例的静态初始化中存在竞争条件。如果碰巧有多个线程在同时调用该方法，那么就有可能被构造多次。

  `比较简单`的做法是在存在竞争条件的地方加上互斥锁。这样做的代价是开销比较高。因为每次方法调用时都需要加锁。  
  `比较常用`的做法是使用双重检查锁定模式(DCLP)
  。但是DCLP并不能保证在所有编译器和处理器内存模型下都能正常工作。如，共享内存的对称多处理器通常突发式提交内存写操作，这会造成不同线程的写操作重新排序。这种情况通常可以采用volatile解决，他能将读写操作同步到易变数据中，但这样在多线程环境下仍旧存在问题。

- 手写生产者消费者模型
- 如何设计 Java 的异常体系？

## 锁

- synchronized 关键字底层是如何实现的？它与 Lock 相比优缺点分别是什么？
- 简述 Synchronized，Volatile，可重入锁的不同使用场景及优缺点
- Java 常见锁有哪些？ReetrantLock 是怎么实现的？
- 简述 Synchronized，Volatile，可重入锁的不同使用场景及优缺点

## JVM

- 简述 JVM 的内存模型 JVM 内存是如何对应到操作系统内存的？
- JVM 中内存模型是怎样的，简述新生代与老年代的区别？
- JVM 是怎么去调优的？简述过程和调优的结果


- 什么是内存泄漏，怎么确定内存泄漏？
- Java 异常有哪些类型？


- volatile 关键字解决了什么问题，它的实现原理是什么？


- String 类能不能被继承？为什么？
- == 和 equals() 的区别？
- 简述 BIO, NIO, AIO 的区别
- 简述 Spring AOP 的原理
- 简述 Java 的反射机制及其应用场景
- 简述动态代理与静态代理
- 简述 Java 的 happen before 原则
- 简述 ArrayList 与 LinkedList 的底层实现以及常见操作的时间复杂度
- Java 类的加载流程是怎样的？什么是双亲委派机制？
- Java 中接口和抽象类的区别
- hashcode 和 equals 方法的联系
- Spring MVC 的原理和流程
