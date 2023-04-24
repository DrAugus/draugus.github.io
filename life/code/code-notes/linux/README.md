---
article: true
title: linux记录  
index: false
isOriginal: true
date: 2021-12-07 09:32:11  
category:
  - 编程  
tag:
  - linux
---

# Linux 日常

[安装pg](../../other-code/stroll.md#pg-坑)

[安装nodejs](../../other-code/stroll.md#安装-nodejs-流程)

- [linux系统分类](./sys_category)
- [查看Linux的基本信息](./sys_base_info)

## 遇到的问题

- `bash: cd: too many arguments`
  - 原因：路径名或者变量有空格时候，会造成参数太多的错误提示
  - 解决：把空格的地方用引号包括起来
- `Can't locate Digest/MD5.pm in @INC (@INC contains:`
  - 原因：缺少perl-Digest-MD5包， 安装perl-Digest-MD5即可解决。
  - 解决：`yum -y install perl-Digest-MD5`

## 其他

### 修改Linux上Vim的molokai配色方案

下载

- `git clone https://github.com/tomasr/molokai`
- use molokai/colors/molokai.vim

安装

1. 更改所有用户的vim配色方案
    - `whereis vim` 找到vim
    - `cp yourdownload/molokai/colors/molokai.vim /urs/share/vim/vim版本号/colors`
    - `vim /etc/vimrc`进行编辑，加上`colorscheme molokai`后保存退出即安装molokai插件成功。
2. 只想更改自己/当前用户的配色
    - `cd ~` 进入自己用户文件夹下，ls .vim检查.vim是否存在，如果不存在则mkdir .vim创建即可
    - `mkdir ~/.vim/colors` 文件夹，然后将上面的molokai.vim文件放入~/.vim/colors/文件夹中。
    - `vim ~/.vimrc` 进行编辑，加入colorscheme molokai即安装molokai配色插件成功。
