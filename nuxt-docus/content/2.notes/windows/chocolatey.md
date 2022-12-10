---  
title: chocolatey
icon: simple-icons:chocolatey
date: 2022-07-20 17:52:11
category:

- 编程

tag:

- chocolatey
- 工具
- 包

---


## [Install]

Install Chocolatey for Individual Use

use an administrative shell

run

```shell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## [Upgrade]

See more info on the official website

## 安装其他包

例如: `docfx`

```shell
choco install docfx -y
```

> TIPS:
Environment Vars (like PATH) have changed. Close/reopen your shell to
see the changes (or in powershell/cmd.exe just type `refreshenv`).

[Install]: https://chocolatey.org/install
[Upgrade]: https://docs.chocolatey.org/en-us/getting-started#upgrade
