# cmd

:::tip 系统常用
[system base info](./sys_base_info)

`uname` `uname -a` `uname -m`
:::

:::warning 常用

- 显示文件夹大小`du -sh */` 其中，du是查看磁盘使用情况的命令；-s选项表示只显示总大小；-h选项表示以易读的方式显示文件夹大小，即以B、KB、MB等单位显示；*/表示只匹配目录名称，表示当前目录下所有子目录。  
- `du -h --max-depth=1 | sort -h` 其中，--max-depth=1选项表示只显示当前目录下一级的目录和文件大小。sort命令用于排序。-h选项表示将大小以人类可读的方式排序，即以B、KB、MB等单位排序。默认情况下，sort命令按字典序排序。  
- 显示磁盘占用情况 `df -h`  
- 查看端口占用情况 `sudo lsof -i :8888`
- 只显示文件名 `ls -l | awk '{print $9}'`

:::

## ls

list directory contents, 用于显示指定工作目录下之内容(列出目前工作目录所含之文件及子目录)。

`ls [-alrtAFR] [name...]`

- -a 显示所有文件及目录 (. 开头的隐藏文件也会列出)
- -l 除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出
- -r 将文件以相反次序显示(原定依英文字母次序)
- -t 将文件依建立时间之先后次序列出
- -A 同 -a ，但不列出 "." (目前目录) 及 ".." (父目录)
- -F 在列出的文件名称后加一符号；例如可执行档则加 "*", 目录则加 "/"
- -R 若目录下有文件，则以下之文件亦皆依序列出

- `ls -ll` 会显示成字节大小
- `ls- lh` 会以 KB、MB 等为单位进行显示，这样比较直观一些
- `ls -lt` 时间最近的在前面
- `ls -ltr` 时间从前到后

## cut

```bash
cut [-bn] [file]
cut [-c] [file]
cut [-df] [file]
```

cut 命令从文件的每一行剪切字节、字符和字段并将这些字节、字符和字段写至标准输出。  
如果不指定 File 参数，cut 命令将读取标准输入。必须指定 `-b`、`-c` 或 `-f` 标志之一。

- `-b` ：以字节为单位进行分割。这些字节位置将忽略多字节字符边界，除非也指定了 `-n` 标志。
- `-c` ：以字符为单位进行分割。
- `-d` ：自定义分隔符，默认为制表符。
- `-f` ：与`-d`一起使用，指定显示哪个区域。
- `-n` ：取消分割多字节字符。仅和 `-b` 标志一起使用。如果字符的最后一个字节落在由 `-b` 标志的 List 参数指示的范围之内，该字符将被写出；否则，该字符将被排除

## du

> disk usage

`du [-abcDhHklmsSx][-L <符号连接>][-X <文件>][--block-size][--exclude=<目录或文件>][--max-depth=<目录层数>][--help][--version][目录或文件]`
参数说明

- `-a`或`-all` 显示目录中个别文件的大小。
- `-b`或`-bytes` 显示目录或文件大小时，以byte为单位。
- `-c`或`--total` 除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和。
- `-D`或`--dereference-args` 显示指定符号连接的源文件大小。
- `-h`或`--human-readable` 以K，M，G为单位，提高信息的可读性。
- `-H`或`--si`与-h参数相同，但是K，M，G是以1000为换算单位。
- `-k`或`--kilobytes`以1024 bytes为单位。
- `-l`或`--count-links`重复计算硬件连接的文件。
- `-L<符号连接>`或`--dereference<符号连接>`显示选项中所指定符号连接的源文件大小。
- `-m`或`--megabytes`以1MB为单位。
- `-s`或`--summarize`仅显示总计。
- `-S`或`--separate-dirs`显示个别目录的大小时，并不含其子目录的大小。
- `-x`或`--one-file-xystem`以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。
- `-X<文件>`或`--exclude-from=<文件>`在<文件>指定目录或文件。
- `--exclude=<目录或文件>` 略过指定的目录或文件。
- `--max-depth=<目录层数>` 超过指定层数的目录后，予以忽略。
- `--help` 显示帮助。
- `--version` 显示版本信息。

`du -sh` 显示总计

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

Linux chmod（英文全拼：change mode）命令是控制用户对文件的权限的命令
Linux/Unix 的文件调用权限分为三级 : 文件所有者（Owner）、用户组（Group）、其它用户（Other Users）。

![1](/img/code/notes/file-permissions-rwx.jpg)
![1](/img/code/notes/rwx-standard-unix-permission-bits.png)

```bash
chmod [-cfvR] [--help] [--version] mode file...
```

mode 权限设定字串，格式如下

```bash
[ugoa...][[+-=][rwxX]...][,...]
```

- `u` 表示该文件的拥有者，`g` 表示与该文件的拥有者属于同一个群体(group)者，`o` 表示其他以外的人，`a` 表示这三者皆是。
- `+` 表示增加权限、`-` 表示取消权限、`=` 表示唯一设定权限。
- `r` 表示可读取，`w` 表示可写入，`x` 表示可执行，`X` 表示只有当该文件是个子目录或者该文件已经被设定过为可执行。

其他

- `-c` : 若该文件权限确实已经更改，才显示其更改动作
- `-f` : 若该文件权限无法被更改也不要显示错误讯息
- `-v` : 显示权限变更的详细资料
- `-R` : 对目前目录下的所有文件与子目录进行相同的权限变更(即以递归的方式逐个变更)
- `--help` : 显示辅助说明
- `--version` : 显示版本

使用八进制
|#| 权限 |rwx| 二进制|
|:---|:---|:---|:---|
|7| 读 + 写 + 执行 |rwx |111|
|6| 读 + 写 |rw- |110|
|5| 读 + 执行| r-x |101|
|4| 只读 |r-- |100|
|3| 写 + 执行| -wx |011|
|2| 只写 |-w- |010|
|1| 只执行| --x| 001|
|0| 无| --- |000|

|命令| 说明|
|:---|:---|
|`chmod a+r file` |给file的所有用户增加读权限|
|`chmod a-x file` |删除file的所有用户的执行权限|
|`chmod a+rw file` |给file的所有用户增加读写权限|
|`chmod +rwx file` |给file的所有用户增加读写执行权限|
|`chmod u=rw,go= file` |对file的所有者设置读写权限，清空该用户组和其他用户对file的所有权限（空格代表无权限）|
|`chmod -R u+r,go-r docs` |对目录docs和其子目录层次结构中的所有文件给用户增加读权限，而对用户组和其他用户删除读权限|
|`chmod 664 file` |对file的所有者和用户组设置读写权限, 为其其他用户设置读权限|
|`chmod 0755 file` |相当于u=rwx (4+2+1),go=rx (4+1 & 4+1)。0 没有特殊模式。|
|`chmod 4755 file` |4设置了设置用户ID位，剩下的相当于 u=rwx (4+2+1),go=rx (4+1 & 4+1)。|
|`find path/ -type d -exec chmod a-x {} \;` |删除可执行权限对path/以及其所有的目录（不包括文件）的所有用户，使用'-type f'匹配文件|
|`find path/ -type d -exec chmod a+x {} \;` |允许所有用户浏览或通过目录path/|

`chmod +x lib.so`

## kill

`killall -9 pid`

## top

`htop` 查看所有图形显示界面

:::tip 概览区域通常包含以下信息

- **当前时间和系统启动时间**：如`top - 14:07:53 up 256 days, 3:35`，表示当前时间为14:07:53，系统已运行256天3小时35分钟。
- **登录用户数**：如`1 user`，表示当前有1个用户登录。
- **系统负载**：如`load average: 0.07, 0.03, 0.00`，分别表示过去1分钟、5分钟、15分钟的系统平均负载。
- **任务统计**：如`Tasks: 162 total, 1 running, 161 sleeping, 0 stopped, 0 zombie`，表示系统中共有162个进程，其中1个正在运行，161个在睡眠，0个停止，0个僵尸进程。
- **CPU使用情况**：如`%Cpu(s): 0.2 us, 0.1 sy, 0.0 ni, 99.6 id, 0.0 wa, 0.0 hi, 0.0 si, 0.0 st`，详细列出了CPU在不同状态下的使用时间百分比。
- **内存和交换空间使用情况**：包括物理内存（MiB Mem）和虚拟内存（MiB Swap）的总量、空闲量、使用量等信息。
:::

任务区域显示当前运行的进程列表，通常包含以下字段：

- **PID**：进程ID。
- **USER**：进程所有者的用户名。
- **PR**：进程优先级。
- **NI**：nice值，负值表示高优先级，正值表示低优先级。
- **VIRT**：进程使用的虚拟内存总量（以KB为单位）。
- **RES**：进程当前正在使用的、未被换出的物理内存大小（以KB为单位）。
- **SHR**：共享内存总大小（以KB为单位）。
- **S**：进程状态，如R（运行）、S（睡眠）等。
- **%CPU**：自上次屏幕更新以来任务占用的CPU时间份额，表示为总CPU时间的百分比。
- **%MEM**：进程使用的物理内存百分比。
- **TIME+**：CPU时间，显示任务自启动以来占用的CPU总时间。
- **COMMAND**：命令行名称或程序名称。

:::warning 交互式命令

- **P**：按照CPU使用率排序。
- **M**：按照内存使用率排序。
- **T**：按照进程运行时间排序。
- **k**：终止指定的进程（需要输入进程ID）。
- **d**：改变信息更新的时间间隔（单位为秒）。
- **q**：退出top命令。
- **h**或**?**：显示帮助信息。
- **1**: 查看每个逻辑CPU使用情况

:::

## tar

- zip `tar -zcvf zip.tar.gz zip/`
- unzip `tar -zxvf zip.tar.gz`
- unzip .tar.bz2 `tar -jxvf zip.tar.bz2`
- unzip .tat.xz `tar -xvf zip.tar.xz`

## pwd

pwd 获取当前位置  
获取文件的真实路径，可以用 `realpath file`

## pidof

`pidof + pid`

## tcpdump

`tcpdump -i admin port 1433 or port 3306 -vvv -w /home/clog/name.pcap`

## chown

Linux chown（英文全拼：change owner）命令用于设置文件所有者和文件关联组的命令。
chown 需要超级用户 root 的权限才能执行此命令。

```bash
chown [-cfhvR] [--help] [--version] user[:group] file...
```

- user : 新的文件拥有者的使用者 ID
- group : 新的文件拥有者的使用者组(group)
- -c : 显示更改的部分的信息
- -f : 忽略错误信息
- -h : 修复符号链接
- -v : 显示详细的处理信息
- -R : 处理指定目录以及其子目录下的所有文件

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

:::info Linux 查找当前目录下 包含特定字符串 的所有文件
:::

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

`rm -rf`

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

```bash
wc [-clw][--help][--version][file...]
```

- -c或--bytes或--chars 只显示Bytes数。
- -l或--lines 显示行数。
- -w或--words 只显示字数。
- --help 在线帮助。
- --version 显示版本信息。

## ar

Linux ar命令用于建立或修改备存文件，或是从备存文件中抽取文件。  
ar可让您集合许多文件，成为单一的备存文件。在备存文件中，所有成员文件皆保有原来的属性与权限。

```bash
ar[-dmpqrtx][cfosSuvV][a<成员文件>][b<成员文件>][i<成员文件>][备存文件][成员文件]
```

> **必要参数**

- `-d` 　删除备存文件中的成员文件。
- `-m`　 变更成员文件在备存文件中的次序。
- `-p` 　显示备存文件中的成员文件内容。
- `-q` 　将文件附加在备存文件末端。
- `-r` 　将文件插入备存文件中。
- `-t` 　显示备存文件中所包含的文件。
- `-x` 　自备存文件中取出成员文件。

> **选项参数**  

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
- `-d` option displays only directories
- `-I` option allows to exclude directories that match specific pattern
    `tree -I 'node_modules|cache|test_*'`

e.g.  
`tree -a -I 'node_modules|.git|.github|.idea|.vscode|.cache|.temp|nuxt*|dist' -L 4 > 1.txt`

`-a` All files are printed.  By default tree does not print hidden files
(those beginning with a dot `.').  
In no event does tree print the file system constructs
`.`(current directory) and`..` (previous directory).

## cat

Linux复制文件内容到另一个文件中

```shell
# 将a文件中的内容追加到b文件中的末尾命令
cat a >> b

# 将a文件中的内容覆盖b文件内容命令
cat a > b

# 清空文件内容
> filename
echo "" > filename
cat /dev/null > filename
```

## >

输出重定向

mac

有两种方式可以将输出重定向：

- `n> file` 将文件描述符n重定向到文件file中，如果文件不存在则会创建文件，如果存在的话将会覆盖原有内容。
- `n>> file` 将文件描述符n重定向到文件file中，如果文件不存在将会创建文件，如果存在则会在文件的结尾开始写入输出。

## rz sz

```bash
apt-get install lrzsz
# 从服务端发送文件到客户端：
sz filename 
# 从客户端上传文件到服务端：
rz
```

sz 命令

- 用途说明：将选定的文件发送（send）到本地机器。sz命令是利用ZModem协议来从Linux服务器传送文件到本地，一次可以传送一个或多个文件。相对应的从本地上传文件到Linux服务器，可以使用rz命令。
- 常用参数
  - `-a`： 以文本方式传输（ascii）。
  - `-b`： 以二进制方式传输（binary）。
  - `-e`： 对控制字符转义（escape），这可以保证文件传输正确。
- 如果能够确定所传输的文件是文本格式的，使用： `sz -a files`
- 如果是二进制文件，使用： `sz -be files`

[rz](https://linux.die.net/man/1/rz)

- `rz -bye`

## scp

`scp -r server_a server_b`

```bash
scp -r local_folder remote_username@remote_ip:remote_folder 
# 或者 
scp -r local_folder remote_ip:remote_folder 
```

如果使用了指定端口，则需要加上 `-P your_port_number`

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

## crontab

```bash
crontab [-u username]　　　　#省略用户表表示操作当前用户的crontab
    -e      #(编辑工作表)
    -l      #(列出工作表里的命令)
    -r      #(删除工作作)
```

我们用`crontab -e`进入当前用户的工作表编辑，是常见的vim界面。每行是一条命令。
crontab的命令构成为 时间+动作，其时间有分、时、日、月、周五种，操作符有

- `*` 取值范围内的所有数字
- `/` 每过多少个数字
- `-` 从X到Z
- `,` 散列数字

实例

```
实例1：每1分钟执行一次myCommand
* * * * * myCommand
实例2：每小时的第3和第15分钟执行
3,15 * * * * myCommand
实例3：在上午8点到11点的第3和第15分钟执行
3,15 8-11 * * * myCommand
实例4：每隔两天的上午8点到11点的第3和第15分钟执行
3,15 8-11 */2  *  * myCommand
实例5：每周一上午8点到11点的第3和第15分钟执行
3,15 8-11 * * 1 myCommand
实例6：每晚的21:30重启smb
30 21 * * * /etc/init.d/smb restart
实例7：每月1、10、22日的4 : 45重启smb
45 4 1,10,22 * * /etc/init.d/smb restart
实例8：每周六、周日的1 : 10重启smb
10 1 * * 6,0 /etc/init.d/smb restart
实例9：每天18 : 00至23 : 00之间每隔30分钟重启smb
0,30 18-23 * * * /etc/init.d/smb restart
实例10：每星期六的晚上11 : 00 pm重启smb
0 23 * * 6 /etc/init.d/smb restart
实例11：每一小时重启smb
0 */1 * * * /etc/init.d/smb restart
实例12：晚上11点到早上7点之间，每隔一小时重启smb
0 23-7/1 * * * /etc/init.d/smb restart
```

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

```shell
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

```shell
netstat -ntlp   //查看当前所有tcp端口
netstat -ntulp | grep 80   //查看所有80端口使用情况
netstat -ntulp | grep 3306   //查看所有3306端口使用情况
```

## curl

> [refer][curl]

### command

[curl command][curl1]

### 查看网页源码

```shell
curl genshin.hoyoverse.com/main/news/
```

```
<html>
<head><title>301 Moved Permanently</title></head>
<body>
<center><h1>301 Moved Permanently</h1></center>
<hr><center>CloudFront</center>
</body>
</html>
```

如果要把这个网页保存下来，可以使用`-o`参数，这就相当于使用wget命令了。

```shell
curl -o file_name genshin.hoyoverse.com/main/news/
```

### 自动跳转

有的网址是自动跳转的。使用`-L`参数，curl就会跳转到新的网址。

```shell
curl -L genshin.hoyoverse.com/main/news/
```

### 显示头信息

`-i`参数可以显示http response的头信息，连同网页代码一起。

`-I`参数则是只显示http response的头信息。

### 显示通信过程

`-v`参数可以显示一次http通信的整个过程，包括端口连接和http request头信息。

如果你觉得上面的信息还不够，那么下面的命令可以查看更详细的通信过程。

```shell
curl --trace output.txt genshin.hoyoverse.com/main/news/
# or
curl --trace-ascii output.txt genshin.hoyoverse.com/main/news/
```

### 发送表单信息

发送表单信息有GET和POST两种方法。GET方法相对简单，只要把数据附在网址后面就行。

```shell
curl example.com/augus?data=xxx
```

POST方法必须把数据和网址分开，curl就要用到`--data`参数。

```shell
curl -X POST --data "data=xxx" example.com/augus
```

如果你的数据没有经过表单编码，还可以让curl为你编码，参数是`--data-urlencode`。

```shell
curl -X POST --data-urlencode "date=April 1" example.com/augus
```

### HTTP动词

curl默认的HTTP动词是GET，使用`-X`参数可以支持其他动词。

```shell
curl -X POST www.example.com
curl -X DELETE www.example.com
```

## readelf

readelf 命令来查看该二进制可执行文件是否包含 debugging symbols 信息。带 debug_ 开头表示有 debug 信息

`readelf -S someone | grep debug`

## objdump

## addr2line

## dos2unix

.sh 无法在 Linux 平台正常运行，`dos2unix some.sh`

## hexdump

使用十六进制查看文件裸数据

`hexdump -C somefile`

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
[curl]: https://catonmat.net/cookbooks/curl
[curl1]: https://www.ruanyifeng.com/blog/2019/09/curl-reference.html
