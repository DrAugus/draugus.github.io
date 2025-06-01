# 配环境

:::tip 简单参考一下
当你获得一台**全新机器**，根据系统不同，可以参考下方的开发环境配置
:::

## Linux

### Debian 系列

> ssh 远程连接：本机配置 ssh，[生成 ssh](../code/os/linux/command#ssh-keygen)，复制到服务器的`~/.ssh/authorized_keys`路径

推荐安装 [fish](./cmd-line-tools/fish) 命令行，[官网](https://fishshell.com/)  

- 版本控制 Git：`apt-get install git`，git [config](../code/version-ctrl/git#config)，[官网指南](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)，[Git 命令参考](../code/version-ctrl/git)，如果需要大文件支持，则跳转 [LFS](https://git-lfs.github.com/)
- 生成 ssh [pubkey](../code/version-ctrl/github#generate-ssh) 放入 GitHub 以访问 GitHub，直接使用 `git clone git@github.com:name/repo`
- 安装 [nodejs](../code/front-end/webtools#node)，安装 yarn、pnpm 皆可从左侧链接内查看

除了 git 以外，还有

```bash
sudo apt install cmake python3 python3-pip
```

## Mac

基础安装 [homebrew](https://brew.sh)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

::::danger 可能会报错
`curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused`

直接使用镜像加速（参看[中科大镜像站](https://lug.ustc.edu.cn/wiki/mirrors/help/brew.git)），参考 [brew 正确姿势](https://www.cnblogs.com/chenyablog/p/14343707.html)

```bash
/usr/bin/ruby -e "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install)"
```

:::details 或者继续尝试用官方的
需要修改一下 host，ip 从 `ipaddress.com` 中获取

```bash
vim /etc/hosts
```

添加

```bash
199.232.68.133 raw.githubusercontent.com 
199.232.68.133 user-images.githubusercontent.com 
199.232.68.133 avatars2.githubusercontent.com 
199.232.68.133 avatars1.githubusercontent.com 
```

:::
::::

推荐安装 oh my zsh

```bash
# install
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# auto suggestion
brew install zsh-autosuggestions
echo "source /opt/homebrew/share/zsh-autosuggestions/zsh-autosuggestions.zsh" >> ~/.zshrc
```

也可以安装 [fish](./cmd-line-tools/fish) 命令行，[官网](https://fishshell.com/)  

zsh-highlight（官方[安装指南](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md)）：

```bash
brew install zsh-syntax-highlighting
echo "source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
```

xcode [history version](../code/os/macos/xcode#history-version)

## Windows

### 开发者安装

:::warning 说明
这年头谁用 Windows 做开发？
:::

一台新机器，首先要安装的也是必需的，是下面这些软件

- 压缩软件：bandizip [官网](https://www.bandisoft.com/bandizip/) [下载页](https://www.bandisoft.com/bandizip/dl.php?web)
- VPN 软件：clash [第三方下载链接](https://zmssr.lanzoum.com/ie1is16ec5uj) <Badge type="tip" text="开发者必备" /> ([intro](https://a76yyyy.github.io/clash/))
- 访问 GitHub：[FastGithub](https://github.com/WangGithubUser/FastGitHub/releases/)，解决 GitHub 打不开，GitHub 加速神器（清华大学[镜像](https://cloud.tsinghua.edu.cn/d/df482a15afb64dfeaff8/)）

上面的软件安装优先级很高，安装完毕之后，便于继续安装下面的软件

- 包管理：Chocolatey [详细查看本文档](../code/os/windows/chocolatey) (The Package Manager for Windows - Modern Software Automation)  <Badge type="warning" text="非必需" />
- Node.js：[官网](https://nodejs.org/)，安装可以勾选 Chocolatey，并且会自动安装 Python
- 代码工具 VS Code：[官网](https://code.visualstudio.com/)
- 版本控制 SVN：TortoiseSVN [下载页/汉化页](https://tortoisesvn.net/downloads.html)
- 版本控制 Git：[官网指南](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)，直接进入 Windows 版本[下载页](https://git-scm.com/download/win)，[Git 命令参考](../code/version-ctrl/git)
- C/C++ 编译构建：[CMake](https://www.cmake.org/download/)
- 终端 Tabby：[官网](https://tabby.sh/)

其他软件

- 视频软件：[PotPlayer](https://potplayer.info/download/)
- 查看电脑配置: [图拉丁吧工具箱](https://www.tbtool.cn/)

### 普通使用者

压缩软件：bandizip [官网](https://www.bandisoft.com/bandizip/) [下载页](https://www.bandisoft.com/bandizip/dl.php?web)  
视频软件：[PotPlayer](https://potplayer.info/download/)  
社交软件：QQ，微信  
游戏相关：[战网平台](https://www.blizzard.com/)，[steam 平台](https://store.steampowered.com/)，[米哈游启动器](https://launcher.mihoyo.com/)
