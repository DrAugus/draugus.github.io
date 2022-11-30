---
icon: logos:python
title: Python
---

## 遇到的问题

### ValueError: check_hostname requires server_hostname

pip安装lib时报错`ValueError: check_hostname requires server_hostname`，是由网络代理导致，关掉VPN即可解决


## python 提取字符串中的指定字符 正则表达式

## 一维转二维

```py
import numpy
new_list = [i for i in range(9)]
newnew = numpy.array(new_list).reshape(3, 3)
```

## 二维转一维

```py
foo = [[1,3,4], [1,3]]
new_foo = sum(foo, [])
```

## 使用filter()去除list的空值

```py
d = ['', 'ad', 'fi', '', 'ar', 'ff']
d = list(filter(None, d))
```

## os name

`os.name`: The name of the operating system dependent module imported. The following names have currently been registered: 'posix', 'nt', 'java'.
- `posix`: mac
- `nt`: windows

## [argparse]

good

[argparse]: https://docs.python.org/zh-cn/3.11/library/argparse.html