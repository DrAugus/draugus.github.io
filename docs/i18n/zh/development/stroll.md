# 瞎玩

## play bot

### [zhenxun bot](https://github.com/HibiKier/zhenxun_bot)

> intro: 基于 Nonebot2 和 go-cqhttp 开发，以 postgresql 作为数据库，非常可爱的绪山真寻bot

[食用指南](https://github.com/DrAugus/zhenxun_bot/tree/augus)，直接一键部署。如果不想一键部署，也可以参考[安装文档](https://hibikier.github.io/zhenxun_bot/docs/installation_doc/)

踩坑了吗？好像踩了，又好像没踩。不了解机制。注意查看日志即可！

pg的坑肯定是踩了的！

* 本想在win平台，安装pg，但安装最新的[v14](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)出错。遂放弃，改用wsl，安装过程直接蓝屏笑嘻嘻。
* 直接购买服务器！
* 在centos上安装pg。然后发现自己购买的centos8，而官网写着
  > The PostgreSQL Yum Repository currently supports: **CentOS (7 and 6 only)**

  无奈重装了centos7。
* 按照官网[文档](https://www.postgresql.org/download/linux/redhat/)
  ```bash
  sudo yum install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
  sudo yum install -y postgresql14-server
  sudo /usr/pgsql-14/bin/postgresql-14-setup initdb
  sudo systemctl enable postgresql-14
  sudo systemctl start postgresql-14
  ```

更多使用方法，请参考[使用文档](https://hibikier.github.io/zhenxun_bot/docs/help_doc/)

### [yunzai bot](https://github.com/Le-niao/Yunzai-Bot)

> 原神QQ群机器人，通过米游社接口，查询原神游戏信息，快速生成图片返回

[部署](https://github.com/Le-niao/Yunzai-Bot/issues/3)过程在安装nodejs时摔了个跟头。

1. 如果nodejs版本不对，会在执行下列命令时卡死。

  ```bash
  npm install cnpm -g --registry=https://registry.npm.taobao.org
  ```

2. 我的服务器在执行下述命令时，操作失败。

  ```bash
  yum install -y dnf
  dnf module install nodejs:16 -y
  ```

3. 无奈使用官网的教程进行安装

#### 安装 nodejs 流程

- [官网](https://nodejs.org/en/download/)复制 [linux 二进制文件](https://nodejs.org/dist/v16.15.0/node-v16.15.0-linux-x64.tar.xz) (以16.15.0为准 (includes npm 8.5.5))
- 执行命令安装
  ```bash
  cd /usr/local/src/
  wget https://nodejs.org/dist/v16.15.0/node-v16.15.0-linux-x64.tar.xz
  tar xf node-v16.15.0-linux-x64.tar.xz
  cd node-v16.15.0-linux-x64/
  ./bin/node -v # 执行node命令 查看版本
  ```
- 设置软连接
  ```bash
  ln -s /usr/local/src/node-v16.15.0-linux-x64/bin/node /usr/bin/node
  node -v
  # v16.15.0
    
  ln -s /usr/local/src/node-v16.15.0-linux-x64/bin/npm /usr/bin/npm
  npm -v
  # 8.5.5
  ```

#### 插件

- [喵喵插件](https://github.com/yoimiya-kokomi/miao-plugin)