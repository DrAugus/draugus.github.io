# install

## Linux 安装PCRE库

```shell
cd /usr/local/
#下载
wget https://netix.dl.sourceforge.net/project/pcre/pcre/8.40/pcre-8.40.tar.gz
#解压安装包:
tar -zxvf pcre-8.40.tar.gz
#进入安装包目录
cd pcre-8.40
#编译安装  
./configure
# 如果报错:configure: error: You need a C++ compiler for C++ support.则表示[系统缺少c++环境]，需要先安装:yum install -y gcc gcc-c++
make && make install
#查看pcre版本
pcre-config --version 
```

## 卸载安装包

### RedHat 系列

```shell
yum list installed
yum -y remove vsftpd
```

### Debian系列

```shell
# 使用apt 列出已经安装的程序包：
sudo apt list --installed
# 卸载程序包
sudo apt remove vsftpd
# 添加 --purge选项，卸载 把程序包的配置文件也删掉。
sudo apt remove --purge vsftpd
```
