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