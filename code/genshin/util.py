import re


def string_match(str, begin, end):
    # 正则表达式
    pattern = begin + "(.*?)" + end
    # 匹配所有符合条件的字符串
    res = re.findall(pattern, str)
    return res


# 正则表达式的懒惰匹配模式可以处理任意长度的字符串
def match_strings(text, begin, end):
    pattern = re.compile(f'{begin}(.*?){end}')
    matches = pattern.findall(text)
    return matches


def remove_html_tags(text):
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)


def remove_line_break(text):
    return text.replace('\n', '')


def remove_duplicate(arr):
    # 判断是否为一维list
    if len(arr) > 0 and isinstance(arr[0], list):
        # 如果是多维list, 递归进行去重
        for i in arr:
            remove_duplicate(i)
    else:
        # 如果是一维list, 直接使用set进行去重
        print(arr)
        arr[:] = list(set(arr))
