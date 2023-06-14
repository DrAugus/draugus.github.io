---  
date: 2022-09-26 16:42:00
category:

- 编程

tag:

- mac
- 工具

---

# Mac Basin

## [截屏](https://support.apple.com/zh-cn/HT201361)

## mac上显示.开头的文件

- 第一种方法是在`finder`中按下`command+shift+.`键。
- 第二种方法是在命令行输入如下命令`defaults write com.apple.Finder AppleShowAllFiles YES`

## 桌面切换

control + 左右键

## mac 多屏幕固定 dock

将鼠标指针放置在想要显示的屏幕最下方，越下方越好，看不到更好，持续1-2s，即可在你想要显示的屏幕上显示

## mac应用内窗口切换

command + ~

## 光标移动

> 应该不限制操作系统

command + 左右，行首行尾移动光标  
option + 左右，跨单词移动

## mac osx 自带拼音输入法卡顿

【键盘】-【文本】，所有选项全部勾掉。但是还是卡……不知道是什么问题

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

## env

[环境变量](https://support.apple.com/zh-cn/guide/terminal/apd382cc5fa-4f58-4449-b20a-41c53c006f8f/mac)

```bash
PATH=/bin:/sbin:/user/bin:/user/sbin:/system/Library/ export PATH
# 查看环境变量
env
```

在一个“终端”窗口设置变量不会影响其他“终端”窗口的设置。
