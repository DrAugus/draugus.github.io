# 疑难排查

- Q: div标签设置背景时发现实际显示效果图片高度为0  
  A: 增加 padding-bottom 即可显示

- Q: div background-image url路径错误 或者 该路径下无此文件  
  A: 增加多个url

- Q: img src路径错误 或者 该路径下无此文件  
  A: onerror="this.src=''"

- Q: 反思  
  A: 知识的匮乏让你想思考都没东西去思考

- Q: css层级问题 div span 与 div > span  
  A: div span 设置是的div下的所有span div > span 设置的是紧挨着的二级span

- Q: css文字竖向排列   
  A: 标签writing-mode vertical-lr; 从左向右 从右向左是 vertical-rl;IE浏览器的从左向右 从右向左是tb-rl

- Q: querySelector .开头和#开头  
  A: .开头是class \#开头是id

- Q: Linux删除某个字母开头的所有文件  
  A: 比如删除temp目录下以a开头的所有文件：<br>首先要进到temp目录下<br>在删除前先使用ls a*查看要删除哪些文件，防止误删除<br>确认无误后，使用 rm -rf a* 命令，删除a开头的所有文件

- Q: slice不会改变原始数组  
  A:

- Q: jQuery $ .# 区别  
  A: html自带标签 直接写标签 类用. id用#

- Q: clion如何编译so库  
  A:

- Q: clion如何链接使用dll库  
  A:

- Q: run libuv, got "Process finished with exit code -1073741515 (0xC0000135)"  
  A: if you are using visual studio toolchains in CLion, You need to paste in folder cmake-build-debug or
  cmake-build-release the files .dll, but no only SDL2_image.dll, all files from folder lib/x86.
  refer https://stackoverflow.com/a/65268629/17744936

- Q:  
  A:

## DB2

- DB2跨库操作失败
  > 使用命令`ALTER TABLESPACE MAXDATA EXTEND ( ALL 500 )`，但是之后还是会出现同样的报错[参考的这个](https://www.toolbox.com/tech/data-management/question/exception-when-importing-using-the-move-command-050911/)

## 同时使用GitHub和GitLab

想要在同一项目里使用不同的远端仓库，使用不同的用户名邮箱来推送。找到了一个方案，本地能够改好，但是似乎不能生效。[☞](https://www.cnblogs.com/popfisher/p/5731232.html)

## ODPS

[参考文档](https://help.aliyun.com/document_detail/281088.htm?spm=a2c4g.11186623.0.0.39405b78gVdDqA#task-2095600)

## jetbrains 编辑器

<kbd>ctrl</kbd>+<kbd>z</kbd>撤回代码

<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>z</kbd>恢复撤回代码

# 一些有的没的

关于网狐棋牌框架

+ `CTCPSocketService`用来处理各个服务器之间的通信的 `TCPNetworkEngine`用来和客户端用户之间的通信
+ 同时`TCPNetworkEngine`还承担`CTCPSocketService`处理过的消息的转发
+ `CTCPSocketService`应用了windows下两种常见的socket通信模式
    + `WSAAsyncSelect`异步I/O模型处理各个服务器之间的通信
    + 完成端口模型，为windows下特有的通信模型，支持高并发的模型

#### 对 Javascript 中闭包、函数式语言等概念有清晰的认知

### 并发 并行 线程 进程 协程

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

