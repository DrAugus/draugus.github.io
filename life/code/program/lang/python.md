# Python

## requirements

如果你想让你的项目在更多的环境中稳定运行，最好指定所有依赖包的版本。你可以通过运行`pip freeze > requirements.txt`来自动生成当前环境中所有包及其版本的列表，然后再从这个生成的列表中移除不需要的标准库项。如果你不确定当前项目中用到了哪些包，这个方法会很有用。

## 遇到的问题

### ValueError: check_hostname requires server_hostname

pip安装lib时报错`ValueError: check_hostname requires server_hostname`，是由网络代理导致，关掉VPN即可解决

## python 提取字符串中的指定字符 正则表达式

```py
def match_strings(text, begin, end):
    pattern = re.compile(f'{begin}(.*?){end}')
    matches = pattern.findall(text)
    return matches
```

如果 字符串里有 `\n` 记得替换掉 否则不生效

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

## 去重

对于一维list, 可以直接使用set转换

```py
a = [1,2,3,1,2,3]
a = list(set(a))  # [1,2,3]
```

对于多维list, 可以使用递归的方法，先对每一维进行去重，然后递归进行下一维的去重

```py
a = [[1,2,3],[2,3,4],[1,2,3]]

def remove_duplicate(arr):
    # 判断是否为一维list
    if isinstance(arr[0], list):
        # 如果是多维list, 递归进行去重
        for i in arr:
            remove_duplicate(i)
    else:
        # 如果是一维list, 直接使用set进行去重
        arr[:] = list(set(arr))
        
remove_duplicate(a)

print(a)  # [[1,2,3],[2,3,4]]
```

上面的代码可以处理多维list的去重问题，但是这种方法需要修改原来的list，如果不希望修改原来的list，可以使用深拷贝来进行去重

```py
b = copy.deepcopy(a)
remove_duplicate(b)
```

## os name

`os.name`: The name of the operating system dependent module imported. The following names have currently been registered: 'posix', 'nt', 'java'.

- `posix`: mac
- `nt`: windows

## [argparse]

good

## URL解码

```py
from urllib.parse import unquote

# 使用urllib.parse模块的unquote()函数来进行URL解码：
encoded_url = 'https%3A%2F%2Fwww.example.com%2F%3Fq%3Dhello%20world'
decoded_url = unquote(encoded_url)
print(decoded_url)  # 输出：https://www.example.com/?q=hello world
```

## html 解码

```py
import html

html_string = "&ndash;"
ddd = html.unescape(html_string)
print(ddd)
```

```py
from bs4 import BeautifulSoup

html_string = "&lt;p&gt;This is a paragraph&lt;/p&gt;"

soup = BeautifulSoup(html_string, "html.parser")
decoded_html = soup.unescape()

print(decoded_html) # "<p>This is a paragraph</p>"
```

[argparse]: https://docs.python.org/zh-cn/3.11/library/argparse.html
