---
sidebar: false
article: true
title: windows11更新纪要
date: 2021-10-05 13:16:44
isOriginal: true
permalinkPattern: blog/:year/:month/:day/:slug.html  
category: 
  - windows
tag: 
  - windows 
  - 更新
excerpt: 介绍win11更新路上的绊脚石
---


> 2021-10-11 update AMD用户一定不要升级Windows11

如果需要跨过这些绊脚石，进PE直接安装win11镜像即可。
[附官方更新地址](https://www.microsoft.com/zh-cn/software-download/windows11)

## TMP2.0 开启

> 启用 TPM 的选项可能标记为"安全设备、安全设备支持、TPM 状态、AMD fTPM开关、AMD PSP fTPM、IntelPTT或Intel平台信任技术"。

## 安全启动 开启

可以直接在bios里搜索`security`或`安全`，找到`安全启动`选项，此时点击开启，可能会提示

> System in Setup Mode!Secure Boot can be enabled when System in User Mode. Repeat operation after enrolling Platform Key(PK)

解决办法

* 启动模式改为`UEFI`模式 （如果是`LEGACY+UEFI`模式 可能切换了导致系统无法进入 需要重装系统 设置为`UEFI`模式[或者使用分区助手](#dg_op)）
* 关闭csm 在bios搜索csm将csm模式改为`UEFI`
* 解决以上两步，重新去启用`安全启动`，则可成功启动


<span id="dg_op">使用分区助手修改为UEFI</span>
* 前置操作，在磁盘管理中分一个>200MB的区
* 进入pe桌面后打开DG硬盘分区工具，选中自己的硬盘右键单击选择转换分区表类型为GUID格式，点确定然后点左上方保存更改。此时我们的硬盘已经从MBR变为GPT
* 右键单击前置操作的分区，选择建立ESP/MSR分区

  ![set_esp.png](https://i.loli.net/2021/10/07/xmoZ9JuesbIWTgN.png)
* 完成之后DiskGenius工具会自动为ESP分区设置一个盘符，如果没有，请手动设置。至此，ESP分区创建完成。
* 最后，打开pe上的修复工具，修复下引导即可


## 其他问题[20201019bug fixed](#fixed20536)

### [KB5007125：升级到安装了 Oracle VirtualBox 的 Windows 11 时保持兼容性](https://support.microsoft.com/zh-cn/topic/kb5007125-%E5%8D%87%E7%BA%A7%E5%88%B0%E5%AE%89%E8%A3%85%E4%BA%86-oracle-virtualbox-%E7%9A%84-windows-11-%E6%97%B6%E4%BF%9D%E6%8C%81%E5%85%BC%E5%AE%B9%E6%80%A7-ea84b50c-77f5-473c-99a8-81c2b7b53d35)

[官方解决方案](https://www.virtualbox.org/ticket/20536)

执行 `bcdedit /set hypervisorlaunchtype off`

* 用管理员权限打开CMD或window powershell 关闭 启动项

![hypervisorlaunchtype_off.png](https://i.loli.net/2021/10/11/K7sOnQZbuvaqBic.png)

之后输入 `bcdedit` 查看启动管理器，查看 `hypervisorlaunchtype` 是不是off状态的，重启之后生效。

![bcdedit.png](https://i.loli.net/2021/10/11/T4vshnFbzEkf5Oj.png)

> 注意这个解决办法 是能够升级win11但是无法使用virtualbox


<span id="fixed20536">2020-10-19 bug已修复</span>
> fixed in 6.1.28
> This incompatibility with the Windows Hypervisor related interface in Windows 11 (host) should be fixed with VirtualBox 6.1.28.
> Using the Windows Hypervisor (Hyper-V) is working again. However, the performance is unchanged, i.e. still very noticeably lower than with VirtualBox's own hypervisor code, so it can make sense to disable Hyper-V. You decide.

需要注意
- win11默认关闭Hyper-V服务，需要你重新打开（在windows功能里重新打开）
- 管理员命令执行`.\VBoxSDS.exe --regservice`
