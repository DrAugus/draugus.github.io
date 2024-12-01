# Linux 问题收集

## 命令行使用代理

`export HTTPS_PROXY=your_proxy_addr`，Windows 平台参考[这里](../windows/tips#qa)

## zsh: 权限不够解决方法

`chmod u+x *.sh`

## 杀掉进程

[Linux下如何通过一行命令查找并杀掉进程](https://www.cnblogs.com/wintest/p/12749090.html)

1. 查找指定进程：agent `ps -ef | grep agent`
2. 根据找到的进程号pid，强制杀掉进程（假设进程号为 15750） `kill -9 15750`
3. 如果我们要杀掉的进程个数不多的话，用上面的命令不需要耗费多少时间，但如果进程个数比较多的时候,
  使用 kill -9 进程号 一个个的杀掉进程，可能会比较麻烦，且耗时长。于是，我们需要一个能够快速杀掉进程的命令，如下（以杀掉所有 flask 进程为例）：

```shell
ps -ef | grep flask | grep -v grep | awk '{print $2}' | xargs kill -9
```

命令分析

|命令 |作用|
|:--:|:--:|
|`ps -ef \| grep flask` |找到所有 flask 进程|
|`grep -v grep` |过滤包含 grep 的进程行|
|`awk '{print $2}'` |提取找到的进程行记录中第二列的参数，也就是flask的进程号|
|`xargs kill -9` |把前面的参数都传递给后面的命令 kill -9|

## 解决linux的-bash: ./xx: Permission denied

在linux下执行sh文件时提示下面信息：

```shell
./xx.sh: Permission denied
```

解决：`chmod 777 xx.sh`

## g++: command not found

G++没有装或却没有更新

查看：`g++ --version`

```shell
# centos：
yum -y update gcc #(更新)
yum -y install gcc+ gcc-c++
# ubuntu：
apt-get update gcc #(更新)
apt-get install g++
```

## 修改 Linux 环境变量

临时生效 `export NAME='value'`

全局环境变量配置永久生效

```shell
#切换到root用户下
su - root
#编辑全局系统环境变量存储配置文件，所有用户都生效，永久生效。
vim /etc/profile
```

尾行加入 `export NAME='value'`

execute `source /etc/profile`
