# Mac Basin

## QA

### Mac OS: xcrun: error: invalid active developer path, missing xcrun

```bash
xcode-select --install
xcode-select --reset
```

### Mac发热严重

mac上vscode始终打开`code helper`这个进程，发热严重

vscode 设置 - followSymlinks - 设置为false， 即可解决！

"search.followSymlinks": false

### 控制台乱码

`reset`

## 低版本操作系统

- 原装 App 版本过低，无法安装；可以去[苹果系统之家](https://macoshome.com)搜索原装 app，低版本操作系统不受支持后，自带软件，诸如 Pages、Numbers 等都无法在 App Store 下载安装。  
- **Xcode** 可以参考[历史版本](./xcode#history-version)，下载对应操作系统支持的版本。  
- **VSCode** 可以参考对应 Xcode 的历史版本发布时间，找到最近的 release 时间（vscode [github releases](https://github.com/microsoft/vscode/releases)）。比如 MacOS Catalina，最后发布时间是 2020年9月23日，对应版本  10.15.7，而下一代 Big Sur 首发在 2020年11月12日，版本号对应 11.0.1。找这两个时间最近的即可。在 tags 找到附近日期的 tag 版本，如在 [1.54.1](https://github.com/microsoft/vscode/tags?after=1.54.1) 附近，就是`tags?after=1.54.1`，可以看到 `1.51.1` 版本是最近的，`on Nov 11, 2020`。

## 快捷键

### 删除操作

- **Command + Delete** 组合键可以直接将选中的文件或文件夹移到废纸篓，类似于Windows中按Delete键的效果。
- 跳过废纸篓直接永久删除文件，可以使用 **Command + Option + Delete** 组合键，此时会弹出确认对话框，点击“删除”后文件将被永久删除且无法恢复。
- **Shift + Command + Delete**：清空废纸篓，彻底删除废纸篓中的所有文件。
- **Control + D**：在文本编辑中删除光标后的一个字符。
- **Control + K**：删除光标后的所有字符。

## [截屏](https://support.apple.com/zh-cn/HT201361)

- 全屏幕：Shift + Command + 3
- 部分截屏：Shift + Command + 4
- 捕捉窗口：Shift + Command + 4 + space

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
