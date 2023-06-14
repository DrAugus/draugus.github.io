# Prepare

> What are you preparing to do

- web service
- 数据结构 算法
- 操作系统

> 因此优先考虑使用组合而不是继承。

## [题库每日](./practice)

## Hang in There

- [BST查找树中是否有指定元素](https://raw.githubusercontent.com/DrAugus/cpp/master/src/leetcode/700.cpp)
- [括号匹配](https://raw.githubusercontent.com/DrAugus/cpp/master/src/leetcode/20.cpp)
- 十个桶的hash表，key%10，142存放在哪里
- 搜索排序的时间复杂度
- 合并有序/无序的两个数组时间复杂度
- 排序算法的稳定性
- 先序、中序、后序遍历
- In a binary tree that has K nodes having two children and L leaves, show the relation between K and L
- B-Trees are used commonly for ?
- 影响哈希表查找的效率有哪些
- Big(O) notation
- A Priority-Queue is implemented as a Max-Heap. 最小堆、最大堆的插入
- 双向链表什么时候比单链表效率更高

## 其他

- [解释面向对象语言](../../cpp/concept/#面向对象编程与面向过程编程的区别与联系)，[C和C++的区别](../../cpp/c-cpp-diff)
- 各种排序
- 数组中找重复值
- Git常用命令、简单解释一下Git原理、怎么理解git是一个分布式系统
- CI/CD的Job
- zookeeper介绍一下 (从CAP 数据一致性等分布式问题出发 介绍了基本原理和应用场景)
- 主节点崩溃了, 集群会发生什么
- 讲一下HTTP协议,为什么说是无状态的, POST/GET请求的区别, 1.X 和 2.0区别
- [paxos](../distributed/paxos)
- 举一个会出现StackOverflow错误的情况,并说说为什么(递归...)
- 如何处理网页的大量请求
- 如何处理并发造成的数据不一致问题，加锁，锁的类型有哪些
- 如何不采用加锁处理并发问题
- 如何查找一个同学的课程平均成绩并排序，每个同学选择的课程可能不一样，不使用冗余字段
- 如果课程成绩具有权重，如何设计表，如何进行平均成绩排序
- 如何设计一个OJ系统
  就刚才设计的OJ系统，设计出对应数据库表的关系
  如何处理高并发情况下，用户提交代码造成系统卡死问题
- 把1000个球放入10盒子后，保证给任意1——1000任意一个数n，能找到对应几个盒子中的个数的和sum等于n
- 访问一个网页的具体流程
- 解释LSTM
- 给定一个天平，一个2g的砝码和一个7g的砝码，以及若干盐，求如何在三次以内称到50g的盐
- 给定链表和整数k，链表的每k个数逆序，如链表为1->2->3->4->5->null, k=3,结果得到3->2->1->5->4-null(
  编程界面没有像leetcod一样给出链表的结构定义和后台没有测试用例，需要自己写链表结构定义和测试过程，测试用例自己想)
- 给定一个有序的数组，和一个整数k，求数组里和为k的所有数对

## C++

- c++的基础知识
- c++11特性
- [设计模式](../sys-design/design-pattern),单例、适配器模式
- 内存管理
- C/C++的段错误是什么
- 写一个c++的类 实现一个string类，然后支持拷贝构造和移动构造和支持vector容器，用智能指针
- 多态
- 死锁

## 算法

- 递归二叉树
- [括号匹配](https://raw.githubusercontent.com/DrAugus/cpp/master/src/leetcode/20.cpp)
- 树状数组
- 图表设计合理性
- 反转链表
- 堆的插入删除具体过程
- 图算法（最短路、最小生成树）
- 跳表、数组链表的优缺点
- 一道dfs，一道dp，一道字符串处理，写完了指着代码一个个问变量分别在jvm中的什么区域，引出提问jvm内存区域，垃圾回收算法.
  然后dfs问了复杂度,
  dp问了最优子结构这些基本概念,字符串问了StringBuilder和StringBuffer的区别.
- 一维二分查找，手写代码
- 二维二分查找，讲解思路，计算时间复杂度，如何将时间复杂度将到O(n)
- 给出BST，然后给出number，返回number是否在BST
- 二叉树的按层求和，递归和迭代
- 给定数组，求两个数的最大差值，要求，大数在小数后面
- HashMap和HashTable
- ArrayList和Vector
- GC
- 垃圾回收算法
- 编写代码求股票最大利润（假如一个数组中存储了一个股票，第i个元素表示第i天的股票价格，只允许一次买入和一次卖出，请提供一个算法，计算出通过卖出和买入可以得到的最大利润）

## 操作系统

- 为什么要分段分页
- 虚拟内存原理
- 银行家算法
- 进程和线程的区别

## 前端

- 跨域问题
- TypeScript中Interface和Type的区别
- TypeScript中的类型断言
- 事件捕获
- 事件冒泡
- Async函数以及得到的返回值，如果Aysnc return new Promise那返回值是什么
- let和const的区别，const常量为啥是不可以改变的
- 对this的理解，This在不同的情况下代表什么
- 浏览器缓存
- Cookie，session，localStorage，sessionStorage的区别和使用场景
- Css盒模型，如果Width是100，Border是1，padding是10，在浏览器上的width是多少（很简单的问题但是太久没看忘记了哈哈哈）
- Relative和absolute的区别
- React单向数据流
- Hook在什么情况下不能使用，为什么
- SetState为啥不能立即看到改变
- React中的key有什么作用
- 非受控组件和受控组件
- 高阶组件
- 类组件和函数组件的区别
