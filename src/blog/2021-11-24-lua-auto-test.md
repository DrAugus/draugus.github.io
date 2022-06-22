---
sidebar: false
article: true
title: lua自动化测试指南
date: 2021-11-24 11:15:22  
category: 
  - 编程  
tag: 
  - lua  
excerpt: lua自动化测试指南
---


> [linux安装luarocks官方指南](https://github.com/luarocks/luarocks/wiki/Installation-instructions-for-Unix)

## luarocks安装过程

### linux安装luarocks（RedHat系列）

To get a default installation of Lua and LuaRocks under `/usr/local`

1. First, ensure that you have development tools installed on your system, otherwise run the command below to install
   them
    ```shell
    sudo yum install libtermcap-devel ncurses-devel libevent-devel readline-devel
    ```
2. build and install Lua, run the following commands to download the package tar ball, extract, build and install
   it.([lua source code](http://www.lua.org/ftp/))
    ```shell
    -$ curl -R -O http://www.lua.org/ftp/lua-5.1.4.tar.gz
    -$ tar -zxf lua-5.1.4.tar.gz
    -$ cd lua-5.1.4
    -$ make linux test
    -$ sudo make install
    ```
3. Download and unpack the LuaRocks tarball using following commands.
    ```shell
    -$ wget https://luarocks.org/releases/luarocks-3.8.0.tar.gz
    -$ tar zxpf luarocks-3.8.0.tar.gz
    -$ cd luarocks-3.8.0
    ```
4. Run `./configure --with-lua-include=/usr/local/include`. (This will attempt to detect your installation of Lua. If
   you get any error messages, see the section "Customizing your settings", below.)
5. Run `make`.
6. As superuser, run `make install`.

### linux安装luarocks（Debian系列）

To get a default installation of Lua and LuaRocks under `/usr/local`

1. First, ensure that you have development tools installed on your system, otherwise run the command below to install
   them
    ```shell
     -$ sudo apt install build-essential libreadline-dev unzip
    ```
2. build and install Lua, run the following commands to download the package tar ball, extract, build and install
   it.([lua source code](http://www.lua.org/ftp/))
    ```shell
    -$ curl -R -O http://www.lua.org/ftp/lua-5.1.4.tar.gz
    -$ tar -zxf lua-5.1.4.tar.gz
    -$ cd lua-5.1.4
    -$ make linux test
    -$ sudo make install
    ```
3. Download and unpack the LuaRocks tarball using following commands.
    ```shell
    -$ wget https://luarocks.org/releases/luarocks-3.8.0.tar.gz
    -$ tar zxpf luarocks-3.8.0.tar.gz
    -$ cd luarocks-3.8.0
    ```
4. Run `./configure --with-lua-include=/usr/local/include`. (This will attempt to detect your installation of Lua. If
   you get any error messages, see the section "Customizing your settings", below.)
5. Run `make`.
6. As superuser, run `make install`.

### windows子系统linux安装luarocks

1. 安装gcc
2. sudo apt install lua5.1
3. sudo apt install luarocks
4. sudo apt install lua-busted
5. 安装pcre2，安装rapidjson（这两个可以直接copy dbproxy项目里的lua文件）
6. 安装完成

### windows安装luarocks (极其难用 不建议在Windows下操作)

1. [安装流程](https://www.cnblogs.com/xulang/p/12535667.html)
2. 安装完成后cmd运行`luarocks`看是否安装成功
   > 找不到luarocks命令时，需要将图示四个文件copy放入`lua\5.1\`路径下 ![](https://i.loli.net/2021/11/24/HaimyRg9jqLStwb.png)

3. 安装busted`luarocks install busted`
    *
   如若出现[Error: Parse error processing dependency 'lua_cliargs = 3.0'](https://github.com/Olivine-Labs/busted/issues/590),请键入`where
   luarocks`查看路径是否为您的安装路径，此现象为您在设备上安装了多个版本的luarocks系统无法确定安装版本。
    * 如若出现 `'mingw32-gcc'不是内部或外部命令，也不是可运行的程序` ![](https://i.loli.net/2021/11/24/AjSJhNkOZ4FwKLY.png)
    * 您需要安装gcc
        1. mingw下载安装（windows安装[指南](https://www.msys2.org/)）
        2. 配置环境变量。 我的电脑->属性->高级系统设置->环境变量->系统变量  
           系统变量->Path->编辑->新建->D:\mingw\bin->确定  
           系统变量->新建->变量名：LIBRARY_path->变量值：D:\mingw\lib->确定  
           系统变量->新建->变量名：C_INCLUDE_PATH->变量值：D:\mingw\include->确定
        3. gcc -v验证安装

## 安装其他库

### 安装busted

`luarocks install busted` 100%安装失败

使用别的方式安装

1. 先安装`luarocks install luasocket`安装成功后 再安装 busted
2. `luarocks install busted`

### 安装 rapidjson

`luarocks install rapidjson`

### 安装 Lrexlib-PCRE2

`luarocks install Lrexlib-PCRE2`

出现错误
> Could not find header file for PCRE2

![](/image/blog/lua/install_pcre.png)

安装 `pcre2`
`yum -y install pcre2-devel`

应该安装so库
`yum -y install pcre2-static`

`find / -name "*pcre2.so*"`

```shell
#输出路径
/usr/local/lib/lua/5.1/rex_pcre2.so
```

拷贝至lua目录