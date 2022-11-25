# cmd

[system base info](./sys_base_info)

`uname` `uname -a` `uname -m`

## ls

list directory contents, 用于显示指定工作目录下之内容（列出目前工作目录所含之文件及子目录)。

`ls [-alrtAFR] [name...]`

- -a 显示所有文件及目录 (. 开头的隐藏文件也会列出)
- -l 除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出
- -r 将文件以相反次序显示(原定依英文字母次序)
- -t 将文件依建立时间之先后次序列出
- -A 同 -a ，但不列出 "." (目前目录) 及 ".." (父目录)
- -F 在列出的文件名称后加一符号；例如可执行档则加 "*", 目录则加 "/"
- -R 若目录下有文件，则以下之文件亦皆依序列出

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

> 其他命令参考[runoob date]

## ln

建立软连接 `ln -s lib lib.so`

## chmod

`chmod +x lib.so`

## kill

`killall -9 pid`

## tar

- zip `tar -zcvf zip.tar.gz zip/`
- unzip `tar -zxvf zip.tar.gz`
- unzip .tar.bz2 `tar -jxvf zip.tar.bz2`


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

**在系统中查找包含 bra 的文件或目录**, combine [rm](#rm) [xargs](#xagrs) [wc](#wc)

`find / -name '*bra*'`

**在某目录下查找名为`app.cc`”`的文件**

`find /home/app/ -name app.cc`

**查找文件名中包含某字符（如`app`）的文件**

`find /home/app/ -name '*app*'`  
`find /home/app/ -name 'app*'`  
`find /home/app/ -name '*app'`   

## rm

- `-i` 删除前逐一询问确认。
- `-f` 即使原档案属性设为唯读，亦直接删除，无需逐一确认。
- `-r` 将目录及以下之档案亦逐一删除。



`rm -rf `

find and then delete
- `find . -name "*.a" | wc -l`
- `find . -name "*.a" | xargs rm -rfv`

## xargs

xargs（英文全拼： eXtended ARGuments）是给命令传递参数的一个过滤器，也是组合多个命令的一个工具。

`somecommand | xargs -item  command`

- -a file 从文件中读入作为 stdin
- -e flag ，注意有的时候可能会是-E，flag必须是一个以空格分隔的标志，当xargs分析到含有flag这个标志的时候就停止。
- -p 当每次执行一个argument的时候询问一次用户。
- -n num 后面加次数，表示命令在执行的时候一次用的argument的个数，默认是用所有的。
- -t 表示先打印命令，然后再执行。
- -i 或者是-I，这得看linux支持了，将xargs的每项名称，一般是一行一行赋值给 {}，可以用 {} 代替。
- -r no-run-if-empty 当xargs的输入为空的时候则停止xargs，不用再去执行了。
- -s num 命令行的最大字符数，指的是 xargs 后面那个命令的最大命令行字符数。
- -L num 或者是 -l num 从标准输入一次读取 num 行送给 command 命令。
- -d delim 分隔符，默认的xargs分隔符是回车，argument的分隔符是空格，这里修改的是xargs的分隔符。
- -x exit的意思，主要是配合-s使用。。
- -P 修改最大的进程数，默认是1，为0时候为as many as it can

## wc

`wc [-clw][--help][--version][file...]`

- -c或--bytes或--chars 只显示Bytes数。
- -l或--lines 显示行数。
- -w或--words 只显示字数。
- --help 在线帮助。
- --version 显示版本信息。

## ar

Linux ar命令用于建立或修改备存文件，或是从备存文件中抽取文件。  
ar可让您集合许多文件，成为单一的备存文件。在备存文件中，所有成员文件皆保有原来的属性与权限。

`ar[-dmpqrtx][cfosSuvV][a<成员文件>][b<成员文件>][i<成员文件>][备存文件][成员文件]`

**必要参数** 
- `-d` 　删除备存文件中的成员文件。
- `-m`　 变更成员文件在备存文件中的次序。
- `-p` 　显示备存文件中的成员文件内容。
- `-q` 　将文件附加在备存文件末端。
- `-r` 　将文件插入备存文件中。
- `-t` 　显示备存文件中所包含的文件。
- `-x` 　自备存文件中取出成员文件。

**选项参数**  
- `a<成员文件>` 　将文件插入备存文件中指定的成员文件之后。
- `b<成员文件>` 　将文件插入备存文件中指定的成员文件之前。
- `c` 　建立备存文件。
- `f` 　为避免过长的文件名不兼容于其他系统的ar指令指令，因此可利用此参数，截掉要放入备存文件中过长的成员文件名称。
- `i<成员文件>` 　将文件插入备存文件中指定的成员文件之前。
- `o` 　保留备存文件中文件的日期。
- `s` 　若备存文件中包含了对象模式，可利用此参数建立备存文件的符号表。
- `S` 　不产生符号表。
- `u` 　只将日期较新文件插入备存文件中。
- `v` 　程序执行时显示详细的信息。
- `V` 　显示版本信息。

## tree

获取目录结构

win
- `tree` 只显示文件夹
- `tree /f` 显示文件夹及所有文件
- 导出 
    ```bash
    tree /f >1.txt
    保存的树形结构，只含有文件夹
    tree /f >1.txt
    保存的树形结构，包含文件夹和文件
    ```

mac
- `brew install tree`
- `tree`
- `tree -L 1` 只显示一级目录

## > 

输出重定向

mac

有两种方式可以将输出重定向：

- `n> file` 将文件描述符n重定向到文件file中，如果文件不存在则会创建文件，如果存在的话将会覆盖原有内容。
- `n>> file` 将文件描述符n重定向到文件file中，如果文件不存在将会创建文件，如果存在则会在文件的结尾开始写入输出。

## scp

服务器A上执行scp到服务器B，报错：`Permission denied (publickey)`.
> 解决方法，把A的公钥放到B上

具体操作：
- A：cat .ssh/id_rsa.pub
- B: cat .ssh/authorized_keys 

把A的公钥贴过来即可

## [ssh-keygen]

`ssh-keygen -t rsa -C "your_email@example.com"`

- -t 指定密钥类型，默认是 rsa ，可以省略。
- -C 设置注释文字，比如邮箱。
- -f 指定密钥文件存储文件名。

## clip

`clip < ~/.ssh/id_rsa.pub`

## [logrotate]

主流Linux发行版上都默认安装有logrotate包，如果出于某种原因，logrotate没有出现在里头，你可以使用apt-get或yum命令来安装。
- `apt-get install logrotate cron`
- `yum install logrotate crontabs`

logrotate的配置文件是`/etc/logrotate.conf`，通常不需要对它进行修改。日志文件的轮循设置在独立的配置文件中，它（们）放在`/etc/logrotate.d/`目录下。

案例

从创建一个日志文件开始，然后在其中填入一个10MB的随机比特流数据。
```shell
touch /var/log/log-file
head -c 10M < /dev/urandom > /var/log/log-file
```
创建一个配置文件 `vim /etc/logrotate.d/log-file`
```
/var/log/log-file {
    monthly
    rotate 5
    compress
    delaycompress
    missingok
    notifempty
    create 644 root root
    postrotate
        /usr/bin/killall -HUP rsyslogd
    endscript
}
```
- monthly: 日志文件将按月轮循。其它可用值为‘daily’，‘weekly’或者‘yearly’。
- rotate 5: 一次将存储5个归档日志。对于第六个归档，时间最久的归档将被删除。
- compress: 在轮循任务完成后，已轮循的归档将使用gzip进行压缩。
- delaycompress: 总是与compress选项一起用，delaycompress选项指示logrotate不要将最近的归档压缩，压缩将在下一次轮循周期进行。这在你或任何软件仍然需要读取最新归档时很有用。
- missingok: 在日志轮循期间，任何错误将被忽略，例如“文件无法找到”之类的错误。
- notifempty: 如果日志文件为空，轮循不会进行。
- create 644 root root: 以指定的权限创建全新的日志文件，同时logrotate也会重命名原始日志文件。
- postrotate/endscript: 在所有其它指令完成后，postrotate和endscript里面指定的命令将被执行。在这种情况下，rsyslogd 进程将立即再次读取其配置并继续运行。

## lsof

list open files

`lsof -i: port`

```
lsof -i:8080：查看8080端口占用
lsof abc.txt：显示开启文件abc.txt的进程
lsof -c abc：显示abc进程现在打开的文件
lsof -c -p 1234：列出进程号为1234的进程所打开的文件
lsof -g gid：显示归属gid的进程情况
lsof +d /usr/local/：显示目录下被进程开启的文件
lsof +D /usr/local/：同上，但是会搜索目录下的目录，时间较长
lsof -d 4：显示使用fd为4的进程
lsof -i -U：显示所有打开的端口和UNIX domain文件
```

## netstat

`netstat -tunlp` 用于显示 tcp，udp 的端口和进程等相关情况。

`netstat -tunlp | grep port`

- -t (tcp) 仅显示tcp相关选项
- -u (udp)仅显示udp相关选项
- -n 拒绝显示别名，能显示数字的全部转化为数字
- -l 仅列出在Listen(监听)的服务状态
- -p 显示建立相关链接的程序名

```
netstat -ntlp   //查看当前所有tcp端口
netstat -ntulp | grep 80   //查看所有80端口使用情况
netstat -ntulp | grep 3306   //查看所有3306端口使用情况
```

## readelf

## objdump

## addr2line


## others

- [Linux使用sar进行性能分析]
- [使用iostat分析IO性能]






-----

**参考：**
- [runoob date]
- [ssh-keygen]
- [logrotate]




[runoob date]: https://www.runoob.com/linux/linux-comm-date.html
[ssh-keygen]: https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key
[logrotate]: https://www.xmodulo.com/logrotate-manage-log-files-linux.html
[Linux使用sar进行性能分析]: https://blog.csdn.net/xusensen/article/details/54606401
[使用iostat分析IO性能]: https://blog.csdn.net/xusensen/article/details/73080887

