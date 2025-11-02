# Xcode

## history version

参考

- [macOS 版本对应的 Xcode 版本，以及 Xcode 历史版本下载](https://uovol.com/macos-xcode-version)
- [Xcode Releases](https://xcodereleases.com)
- [苹果系统之家](https://macoshome.com/app/developertools/11427.html)

## hot keys

control + shift + I: format file  
cmd + L: 快速定位到指定行数  

代码操作  

| 快捷键             | 功能                 |
| --------------- | ------------------ |
| Cmd + B         | 编译项目               |
| Cmd + R         | 运行项目               |
| Cmd + .         | 停止运行               |
| Ctrl + Cmd + ↑  | 切换.h/.m文件          |
| Cmd + Shift + O | 快速打开（Open Quickly） |
  
**调试**  

| 快捷键             | 功能       |
| --------------- | -------- |
| Cmd + \\        | 切换断点     |
| F6              | 步过       |
| F7              | 步入       |
| Cmd + Shift + Y | 显示/隐藏调试区 |
  
**界面管理**  

| 快捷键             | 功能        |
| --------------- | --------- |
| Cmd + 0         | 显示/隐藏导航器  |
| Cmd + Alt + 0   | 显示/隐藏检查器  |
| Cmd + Shift + Y | 显示/隐藏调试区域 |

## download version

[link](https://developer.apple.com/download/all/?q=Xcode)

## support

Minimum requirements and supported SDKs

[link](https://developer.apple.com/support/xcode/)

## sol

### error: unable to find utility "simctl"

:::danger unable to find utility "simctl"
xcrun: error: unable to find utility "simctl", not a developer tool or in PATH  
error Could not get the simulator list from Xcode. Please open Xcode and try running project directly from there to resolve the remaining issues.  
Error: Command failed: xcrun simctl list --json devices
:::

[refer](https://stackoverflow.com/a/53046024/17744936)

While running Xcode, open the **Xcode** menu, go to **Preferences**, then select **Locations**  
In Locations, "Command Line Tools", choose your version of Xcode.  
It should be fine.
