# 并发

## 并发 并行 线程 进程 协程

- 一开始大家想要同一时间执行那么三五个程序，大家能一块跑一跑。特别是UI什么的，别一上计算量比较大的玩意就跟死机一样。于是就有了**并发**，从程序员的角度可以看成是多个独立的逻辑流。内部可以是多cpu并行，也可以是单cpu时间分片，能快速的切换逻辑流，看起来像是大家一块跑的就行。
- 但是一块跑就有问题了。我计算到一半，刚把多次方程解到最后一步，你突然插进来，我的中间状态咋办，我用来储存的内存被你覆盖了咋办？所以跑在一个cpu里面的并发都需要处理上下文切换的问题。**进程**就是这样抽象出来个一个概念，搭配虚拟内存、进程表之类的东西，用来管理独立的程序运行、切换。
- 后来一电脑上有了好几个cpu，好咧，大家都别闲着，一人跑一进程。就是所谓的**并行**。
- 因为程序的使用涉及大量的计算机资源配置，把这活随意的交给用户程序，非常容易让整个系统分分钟被搞跪，资源分配也很难做到相对的公平。所以核心的操作需要陷入内核(kernel)，切换到操作系统，让老大帮你来做。
- 有的时候碰着I/O访问，阻塞了后面所有的计算。空着也是空着，老大就直接把CPU切换到其他进程，让人家先用着。当然除了I/O阻塞，还有时钟阻塞等等。一开始大家都这样弄，后来发现不成，太慢了。为啥呀，一切换进程得反复进入内核，置换掉一大堆状态。进程数一高，大部分系统资源就被进程切换给吃掉了。后来搞出**线程**的概念，大致意思就是，这个地方阻塞了，但我还有其他地方的逻辑流可以计算，这些逻辑流是共享一个地址空间的，不用特别麻烦的切换页表、刷新TLB，只要把寄存器刷新一遍就行，能比切换进程开销少点。
- 如果连时钟阻塞、 线程切换这些功能我们都不需要了，自己在进程里面写一个逻辑流调度的东西。那么我们即可以利用到并发优势，又可以避免反复系统调用，还有进程切换造成的开销，分分钟给你上几千个逻辑流不费力。这就是**用户态线程**。
- 从上面可以看到，实现一个用户态线程有两个必须要处理的问题：一是碰着阻塞式I\O会导致整个进程被挂起；二是由于缺乏时钟阻塞，进程需要自己拥有调度线程的能力。如果一种实现使得每个线程需要自己通过调用某个方法，主动交出控制权。那么我们就称这种用户态线程是协作式的，即是协程。

**本质上协程就是用户空间下的线程。**

语义不同
> 关于语义不同 C++和Java有一处最大的区别在于语义不同
> Java 只生成了一个对象 a和b仅仅是把持对象的引用而已

```Java
Animal a = new Animal();  
Animal b = a;
```

> 而C++生成了两个对象

```cpp
Animal a;
Animal b = a;
```

## 高并发系统核心指标

高并发性能指标:QPS、TPS、RT、并发数、吞吐量

### QPS，每秒查询

QPS：Queries Per Second是衡量信息检索系统（例如搜索引擎或数据库）在一秒钟内接收到的搜索流量的一种常见度量。该术语在任何请求-响应系统中都得到更广泛的使用，更正确地称为每秒请求数（RPS：Request Per
Second）。

### TPS，每秒事务

TPS：是Transactions Per
Second的缩写，也就是事务数/秒。它是软件测试结果的测量单位。一个事务是指一个客户端向服务器发送请求然后服务器做出响应的过程。客户端在发送请求时开始计时，收到服务器响应后结束计时，以此来计算使用的时间和完成的事务个数。

QPS vs
TPS：QPS基本类似于TPS，但是不同的是，对于一个页面的一次访问，形成一个TPS；但一次页面请求，可能产生多次对服务器的请求，服务器对这些请求，就可计入“QPS”之中。如，访问一个页面会请求服务器2次，一次访问，产生一个“T”，产生2个“Q”。

### RT，响应时间

RT（Response-time）响应时间：执行一个请求从开始到最后收到响应数据所花费的总体时间，即从客户端发起请求到收到服务器响应结果的时间。该请求可以是任何东西，从内存获取，磁盘IO，复杂的数据库查询或加载完整的网页。

暂时忽略传输时间，响应时间是处理时间和等待时间的总和。处理时间是完成请求要求的工作所需的时间，等待时间是请求在被处理之前必须在队列中等待的时间。

响应时间是一个系统最重要的指标之一，它的数值大小直接反应了系统的快慢。

### Concurrency，并发数

并发数是指系统同时能处理的请求数量，这个也反应了系统的负载能力。

并发意味着可以同时进行多个处理。并发在现代编程中无处不在，网络中有多台计算机同时存在，一台计算机上同时运行着多个应用程序。

### 吞吐量

系统的吞吐量（承压能力）和处理对CPU的消耗、外部接口、IO等因素紧密关联。单个处理请求对CPU消耗越高，外部系统接口、IO速度越慢，系统吞吐能力越低，反之越高。

系统吞吐量有几个重要指标参数：QPS（TPS）、并发数、响应时间。

1. QPS（TPS）：（Queries Per Second）每秒钟请求/事务数量。
2. 并发数： 系统同时处理的请求/事务数。
3. 响应时间： 一般取平均响应时间。

> QPS（TPS）= 并发数/平均响应时间  
> 并发数 = QPS*平均响应时间

### 结语

按二八定律来看，如果每天 80% 的访问集中在 20% 的时间里，这 20% 的时间就叫做峰值时间。

- 公式：( 总PV数 *80% ) / ( 每天秒数* 20% ) = 峰值时间每秒请求数(QPS)
- 机器：峰值时间每秒QPS / 单台机器的QPS = 需要的机器

1. 每天300w PV 的在单台机器上，这台机器需要多少QPS？  
  ( 3000000 *0.8 ) / (86400* 0.2 ) = 139 (QPS)

2. 如果一台机器的QPS是58，需要几台机器来支持？
    139 / 58 = 3

最佳线程数、QPS、RT

1. 单线程QPS公式：QPS=1000ms/RT
  对同一个系统而言，支持的线程数越多，QPS越高。假设一个RT是80ms，则可以很容易的计算出QPS，QPS = 1000/80 = 12.5。  
  多线程场景，如果把服务端的线程数提升到2，那么整个系统的QPS则为 2*（1000/80） = 25，可见QPS随着线程的增加而线性增长，那QPS上不去就加线程呗，听起来是这个道理，但是往往现实并非如此。

2. 最佳线程数量

  刚好消耗完服务器的瓶颈资源的临界线程数，公式如下 最佳线程数量=（（线程等待时间+线程cpu时间）/ 线程cpu时间）* cpu数量

特性：

- 在达到最佳线程数的时候，线程数量继续递增，则QPS不变，而响应时间变长，持续递增线程数量，则QPS开始下降。
- 每个系统都有其最佳线程数量，但是不同状态下，最佳线程数量是会变化的。
- 瓶颈资源可以是CPU，可以是内存，可以是锁资源，IO资源，超过最佳线程数-->导致资源的竞争，超过最佳线程数-->响应时间递增。
