# Chocolatey

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
