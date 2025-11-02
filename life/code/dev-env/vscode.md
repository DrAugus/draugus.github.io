# VS Code

## 热键

快速定位到指定行数的常用快捷键：

* 快捷键：Ctrl + G
* 或使用组合键：Ctrl + P，然后输入 : 加行号（例如 :42 跳转到第42行）。

编辑增强  

| 快捷键              | 功能     |
| ---------------- | ------ |
| `Ctrl + ``       | 打开终端   |
| Ctrl + P         | 快速打开文件 |
| Ctrl + Shift + P | 命令面板   |
| Alt + Z          | 切换自动换行 |
| Ctrl + G         | 跳转到指定行 |
  
**多光标操作**  

| 快捷键              | 功能       |
| ---------------- | -------- |
| Alt + 点击         | 添加多个光标   |
| Ctrl + Alt + ↑/↓ | 上下添加光标   |
| Ctrl + D         | 选中下一个相同词 |
  
**窗口管理**  

| 快捷键              | 功能          |
| ---------------- | ----------- |
| Ctrl + B         | 切换侧边栏       |
| Ctrl + J         | 切换面板（终端/输出） |
| Ctrl + Shift + E | 显示资源管理器     |

## tips

打开文件快捷键 Ctrl + P  

**文本自动换行**  
文本超出显示时，需要拖动下面的滑块才能看到超出的部分，

* 可以设置自动换行显示，在菜单“查看-切换自动换行”选中，就可以自动换行了，
* 也可以快捷键`ALT+Z`

**切换窗口**  
`control + w`

**run**  
`command + shift + b`

保存自动格式化代码：setting 里搜索 format，勾选 format on save  
格式化代码：Shift + Alt + F （macOS Shift + Option + F）

**清除没有用到的 import 语句**  
`option+shift+O` (`Alt+shift+O`)

**快速跳转指定行号位置**
`Ctrl+G`

compare 代码，首先选择第一个文件，右键“**Select for Compare**”，再选择第二个文件，右键“**Compare with Selected**”，即可对比代码

大小写转换

使用命令面板

1. 选中文本。
2. 按 Ctrl + Shift + P 打开命令面板。
3. 搜索 Uppercase 或 Lowercase。
4. 点击相应选项即可完成转换。
