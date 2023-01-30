---  
title: mac primary
date: 2022-09-26 16:42:00
category:

- 编程

tag:

- mac
- 工具

---

## mac上显示.开头的文件

- 第一种方法是在`finder`中按下`command+shift+.`键。
- 第二种方法是在命令行输入如下命令`defaults write com.apple.Finder AppleShowAllFiles YES`

## Mac发热严重

mac上vscode始终打开`code helper`这个进程，发热严重

vscode 设置 - followSymlinks - 设置为false， 即可解决！

"search.followSymlinks": false

## mac 多屏幕固定 dock

将鼠标指针放置在想要显示的屏幕最下方，越下方越好，看不到更好，持续1-2s，即可在你想要显示的屏幕上显示

## mac应用内窗口切换

command + ~

## 光标移动

> 应该不限制操作系统

command + 左右，行首行尾移动光标  
option + 左右，跨单词移动

## mac osx 自带拼音输入法卡顿

【键盘】-【文本】，所有选项全部勾掉

## 控制台乱码

`reset`

## 解压 rar

> [refer](https://www.cnblogs.com/ningy1009/p/16571791.html)

1. 下载，[官网](https://www.rarlab.com/download.htm)
2. 解压
3. 安装

    ```bash
    cd rar
    sudo install -c -o $USER rar /usr/local/bin/
    sudo install -c -o $USER unrar /usr/local/bin/
    ```

4. 使用

    ```bash
    unrar x xxx.rar
    rar a xxx.rar file or dir
    ```
