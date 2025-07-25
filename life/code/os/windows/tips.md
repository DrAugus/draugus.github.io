# 使用提示

## QA

### bat 脚本相关

参看 [cmd](./cmd)

### 开机自启动，如新版 outlook 开机自启

打开文件资源管理器，在地址栏中键入 `shell:startup`，然后按 Enter。  
这将打开一个文件夹，当您登录 Windows 时，快捷方式会在其中打开。

[参考链接](https://answers.microsoft.com/zh-hans/outlook_com/forum/all/%e5%a6%82%e4%bd%95%e5%85%b3%e9%97%adoutlook/4e5a854d-1d21-4435-8368-efbd150a070c)

### 命令行使用代理

:::code-group

```bash [cmd]
set HTTPS_PROXY=127.0.0.1:7890
```

```bash [powershell]
$env:HTTPS_PROXY = "127.0.0.1:7890"
```

:::

## 快捷键

Windows系统中的常用快捷键可以极大地提高用户的操作效率，以下是一些常用的快捷键及其功能介绍：

### 单独按键

* **Esc**：退出键，常用于取消当前操作或退出全屏模式。
* **Tab**：跳格键，在文本编辑软件中增加四个空格，Windows中可用于切换屏幕上的焦点。
* **Ctrl**：控制键，与其他键组合使用，实现多种功能，如复制（Ctrl+C）、粘贴（Ctrl+V）等。
* **Shift**：上档键，用于输入大写字母或与其他键组合实现特殊功能，如Shift+Delete快速彻底删除文件。
* **Alt**：换档键，常用于激活菜单命令或与其他键组合使用。
* **Windows**：打开“开始”菜单或与其他键组合使用，如Windows+D显示桌面。
* **Delete**：删除键

### Windows键组合

* **Windows + D**：显示或隐藏桌面，快速切换到桌面视图。
* **Windows + E**：打开文件资源管理器，快速访问文件和文件夹。
* **Windows + L**：锁定计算机，保护隐私和安全。
* **Windows + R**：打开运行对话框，输入命令执行特定操作。
* **Windows + Tab**：切换任务视图，以3D效果显示打开的窗口和任务。
* **Windows + M**：最小化所有打开的窗口。
* **Windows + Shift + M**：还原所有最小化的窗口。
* **Windows + F**：打开“查找”窗口，搜索文件或文件夹。
* **Windows + T**：切换到任务栏中的下一个程序。
* **Windows + U**：在某些版本中打开“轻松访问中心”或执行其他特定功能（注意：不同版本的Windows可能有所不同）。

### Ctrl键组合

* **Ctrl + C**：复制选中的内容到剪贴板。
* **Ctrl + X**：剪切选中的内容到剪贴板。
* **Ctrl + V**：粘贴剪贴板中的内容到当前位置。
* **Ctrl + Z**：撤销上一步操作。
* **Ctrl + Y**：恢复上一步撤销的操作。
* **Ctrl + A**：全选当前页面或文件夹中的内容。
* **Ctrl + S**：保存当前文档或文件。
* **Ctrl + N**：新建文件或文档。
* **Ctrl + O**：打开文件或文档。
* **Ctrl + F**：查找页面或文档中的内容。

### 其他常用组合

* **Alt + F4**：关闭当前窗口或退出程序。
* **Ctrl + Alt + Delete**：打开安全选项（Windows 10及更高版本为任务管理器）。
* **PrintScreen**：截取当前屏幕并保存到剪贴板。
* **Alt + PrintScreen**：截取当前活动窗口并保存到剪贴板。
* **F1**：打开帮助文档或提示。
* **F2**：重命名选中的文件或文件夹。
* **F5**：刷新当前页面或文件夹视图。
* **Shift + Delete**：永久删除文件。

请注意，以上快捷键可能因Windows版本的不同而有所差异。此外，一些软件可能会定义自己的快捷键，这些快捷键可能与系统快捷键冲突，用户可以根据需要调整或禁用它们。

## 微软输入法

中文输入法

**U 模式**输入，首先在设置中打开（默认是开启的。设置→时间和语言→区域和语言→中文→选项→微软拼音→选项→高级→U模式输入）。在中文输入法下，键入 uu 即可进入 U 模式。  
uudw：单位  
uuxh：序号  
uuts：特殊  
uubd：标点  
uusx：数学  
uujh：几何  
uuzm：字母
