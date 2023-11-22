# 配环境

:::tip 简单参考一下
当你获得一台**全新机器**，根据系统不同，可以参考下方的开发环境配置
:::

## Linux

### Debian 系列

> ssh 远程连接：本机配置 ssh，[生成 ssh](../code/os/linux/command#ssh-keygen)，复制到服务器的`~/.ssh/authorized_keys`路径

推荐安装 [fish](./cmd-line-tools/fish) 命令行，[官网](https://fishshell.com/)  

- 版本控制 Git：`apt-get install git`，git [config](../code-notes/version-ctrl/git#config)，[官网指南](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)，[Git 命令参考](../code-notes/version-ctrl/git)
- 生成 ssh [pubkey](./version-ctrl/github#generate-ssh) 放入 Github 以访问 Github，直接使用 `git clone git@github.com:name/repo`
- 安装 [nodejs](../code/front-end/webtools#node)，安装 yarn、pnpm 皆可从左侧链接内查看

todo

## Mac

基础安装 [homebrew](https://brew.sh): `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

推荐安装 [fish](./cmd-line-tools/fish) 命令行，[官网](https://fishshell.com/)  

todo

## Windows

一台新机器，首先要安装的也是必需的，是下面这些软件

- 压缩软件：bandizip [官网](https://www.bandisoft.com/bandizip/) [下载页](https://www.bandisoft.com/bandizip/dl.php?web)
- VPN 软件：clash [第三方下载链接](https://zmssr.lanzoum.com/ie1is16ec5uj) <Badge type="tip" text="开发者必备" />
- 访问 Github：[FastGithub](https://github.com/WangGithubUser/FastGitHub/releases/)

上面的软件安装优先级很高，安装完毕之后，便于继续安装下面的软件

- 包管理：Chocolatey [详细查看本文档](../code/os/windows/chocolatey) (The Package Manager for Windows - Modern Software Automation)  <Badge type="warning" text="非必需" />
- Node.js：[官网](https://nodejs.org/)，安装可以勾选 Chocolatey，并且会自动安装 Python
- 代码工具 VS Code：[官网](https://code.visualstudio.com/)
- 版本控制 SVN：TortoiseSVN [下载页/汉化页](https://tortoisesvn.net/downloads.html)
- 版本控制 Git：[官网指南](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)，直接进入 Windows 版本[下载页](https://git-scm.com/download/win)，[Git 命令参考](../code-notes/version-ctrl/git)
- 终端 Tabby：[官网](https://tabby.sh/)
