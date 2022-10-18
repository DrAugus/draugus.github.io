# cmd

[system base info](./sys_base_info)

`uname` `uname -a` `uname -m`

## ps

`ps [options] [--help]`

`ps` 的参数非常多, 在此仅列出几个常用的参数并大略介绍含义
- `-A` 列出所有的进程
- `-w` 显示加宽可以显示较多的资讯
- `-au` 显示较详细的资讯
- `-aux` 显示所有包含其他使用者的进程

au(x) 输出格式   
|USER |PID| %CPU| %MEM| VSZ |RSS |TTY |STAT| START |TIME| COMMAND`|
|---|---|---|---|---|---|---|---|---|---|---|
|行程拥有者|pid|-|-|占用的虚拟记忆体大小|占用的记忆体大小|终端的次要装置号码 (minor device number of tty)|该行程的状态|行程开始时间|执行的时间|所执行的指令|

## w

查看当前用户名、实际SSH连接的终端数量

## cp

`cp -frap from_folder/* dist_folder`

- -f 强制覆盖，不询问yes/no（-i的默认的，即默认为交互模式，询问是否覆盖）
- -r 递归复制，包含目录
- -a 做一个备份，这里可以不用这个参数，我们可以先备份整个test目录
- -p 保持新文件的属性不变

## date

重命名文件，cp副本+\`date +%F\`

> 其他命令参考[runoob](https://www.runoob.com/linux/linux-comm-date.html)

## ln

建立软连接 `ln -s lib lib.so`

## chmod

`chmod +x lib.so`

## kill

`killall -9 pid`

## tar

- zip `tar -zcvf zip.tar.gz zip/`
- unzip `tar -zxvf zip.tar.gz`

## pidof

`pidof + pid`


## tcpdump
`tcpdump -i admin port 1433 or port 3306 -vvv -w /home/clog/name.pcap`


## chown

`chown -R clog:clog /home/clog/`

## ldd

## netstat

`netstat -anp | grep gateway`

## gdb

`gdb gateway /data/coredump/...`

## perf

`perf top -K -p 27041`

> Perf 内置于Linux 内核源码树中的性能剖析工具。它基于事件采样原理，以性能事件为基础，支持针对处理器相关性能指标与操作系统相关性能指标的性能剖析。可用于性能瓶颈的查找与热点代码的定位

## find

**Linux 查找当前目录下 包含特定字符串 的所有文件**

使用 Linux 经常会遇到这种情况：只知道文件中包含某些特定的字符串，但是不知道具体的文件名。需要根据“特定的字符串”反向查找文件。

查找当前目录下，包含“Hello”字符串的所有文件

1. 【方式1】（其中，r 表示递归， n 表示查询结果显示行号）：`grep -rn "Hello" ./`
2. 【方式2】 `find ./ -name "*.*" | xargs grep  "Hello"`
3. 【方式3】（-l 表示只显示文件名）`find . | xargs grep -ri "Hello"`或`find . | xargs grep -ri "Hello" -l`
4. 【方式4】 如果不知道文件所在的大致目录，知道文件的类型（例如文本类型 txt），可以在root根目录 /
   下根据特定字符串进行查找：`find / -type f -name "*.txt" | xargs grep "Hello"`



## others

- [Linux使用sar进行性能分析](https://blog.csdn.net/xusensen/article/details/54606401)
- [使用iostat分析IO性能](https://blog.csdn.net/xusensen/article/details/73080887)






-----

**参考：**
- [runoob](https://www.runoob.com/linux/linux-comm-date.html)