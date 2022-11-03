# 指南

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
 
