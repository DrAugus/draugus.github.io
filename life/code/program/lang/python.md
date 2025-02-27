# Python

## Install

```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
# 如果在国内，可以在上面两行后面加上 `-i https://pypi.tuna.tsinghua.edu.cn/simple`
python -m pip install --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple
pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

:::details 其他源

- 阿里云 <http://mirrors.aliyun.com/pypi/simple/>
- 中国科技大学 <https://pypi.mirrors.ustc.edu.cn/simple/>
- 豆瓣(douban) <http://pypi.douban.com/simple/>  
- 中国科学技术大学 <http://pypi.mirrors.ustc.edu.cn/simple/>

:::

## Requirements

如果你想让你的项目在更多的环境中稳定运行，最好指定所有依赖包的版本。你可以通过运行`pip freeze > requirements.txt`来自动生成当前环境中所有包及其版本的列表，然后再从这个生成的列表中移除不需要的标准库项。如果你不确定当前项目中用到了哪些包，这个方法会很有用。

## 遇到的问题

### ValueError: check_hostname requires server_hostname

pip安装lib时报错`ValueError: check_hostname requires server_hostname`，是由网络代理导致，关掉VPN即可解决

### No such file or directory

使用 `os.path.dirname(__file__)`

```py
import os
print("当前路径 -  %s" %os.getcwd())
current_path = os.path.dirname(__file__)
def read_file() :
  with open(current_path + "/your_file.txt" , encoding = 'utf-8') as f_obj :
    content = f_obj.readline()
    print("文件内容 -  %s" %content)
 
if __name__ == '__main__' :
  read_file()
```

## 代码实践

### 一维转二维

```py
import numpy
new_list = [i for i in range(9)]
newnew = numpy.array(new_list).reshape(3, 3)
```

### 二维转一维

```py
foo = [[1,3,4], [1,3]]
new_foo = sum(foo, [])
```

### 使用filter()去除list的空值

```py
d = ['', 'ad', 'fi', '', 'ar', 'ff']
d = list(filter(None, d))
```

### 正则

正则相关参看 [正则专题](./regex)

### 去重

对于一维list, 可以直接使用set转换

```py
my_list = [1,2,3,1,2,3]
my_list = list(set(my_list))  # [1,2,3]
# 如果要保证顺序不变，则可使用下面的方法
from collections import OrderedDict  
unique_list = list(OrderedDict.fromkeys(my_list))  
print(unique_list)
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

### 剔除离群值

[数据离群值的检验及处理方法讨论](https://www.dxhx.pku.edu.cn/article/2018/1000-8438/20180812.shtml)

找到一组数据中偏差最大的数据点并剔除它

:::code-group

```py [普通数组]
import numpy as np

def remove_outliers_iqr_efficient(data, iqr_factor=1.5):
    # 计算Q1和Q3（使用NumPy的percentile函数）
    Q1 = np.percentile(data, 25)
    Q3 = np.percentile(data, 75)
    # 计算IQR
    IQR = Q3 - Q1
    # 识别离群值的边界
    lower_bound = Q1 - (iqr_factor * IQR)
    upper_bound = Q3 + (iqr_factor * IQR)
    # 使用布尔索引来剔除离群值
    filtered_data = data[(data >= lower_bound) & (data <= upper_bound)]
    # 计算剔除离群值后的平均值
    mean_after_removal = np.mean(filtered_data)
    return filtered_data, mean_after_removal

# 示例数据
data = np.array([1, 2, 2, 3, 4, 5, 100, 101])  # 使用NumPy数组

# 调用函数
filtered_data, mean_after_removal = remove_outliers_iqr_efficient(data)

print(f"剔除离群值后的数据: {filtered_data}")
print(f"剔除离群值后的平均值: {mean_after_removal}")
```

```py [结构体数组]
def remove_outliers_by_iqr(data, field="frames", iqr_factor=1.5):
    # 提取指定字段的值
    values = np.array([d[field] for d in data])
    # 计算Q1和Q3
    Q1 = np.percentile(values, 25)
    Q3 = np.percentile(values, 75)
    # 计算IQR
    IQR = Q3 - Q1
    # 识别离群值的边界
    lower_bound = Q1 - (iqr_factor * IQR)
    upper_bound = Q3 + (iqr_factor * IQR)
    # 筛选出非离群值的数据
    filtered_data = [d for d in data if lower_bound <= d[field] <= upper_bound]
    return filtered_data
```

:::

### os name

`os.name`: The name of the operating system dependent module imported. The following names have currently been registered: 'posix', 'nt', 'java'.

- `posix`: mac
- `nt`: windows

### [argparse]

good

### URL解码

```py
from urllib.parse import unquote

# 使用urllib.parse模块的unquote()函数来进行URL解码：
encoded_url = 'https%3A%2F%2Fwww.example.com%2F%3Fq%3Dhello%20world'
decoded_url = unquote(encoded_url)
print(decoded_url)  # 输出：https://www.example.com/?q=hello world
```

### html 解码

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

### 三目运算 (ternary operator)

问号冒号表达式

语法

```py
variable = a if exper else b
variable = (exper and [b] or [c])[0]
variable = exper and b or c
```

```py
a, b = 1, 2
max = a if a > b else b
max2 = (a > b and [a] or [b])[0]  # list
max3 = a > b and a or b
print max,max2,max3
```
