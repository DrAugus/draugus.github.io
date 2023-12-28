import json
import re
import requests
import inspect

from functools import wraps


def log_args(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        func_args = inspect.signature(func).bind(*args, **kwargs).arguments
        func_args_str = ', '.join(f"{k}={v!r}" for k, v in func_args.items())
        print(f"====== Calling function: {func.__name__} ======")
        print(f"Arguments: {func_args_str}")
        return func(*args, **kwargs)
    return wrapper


def is_1d_array(arr):
    for ele in arr:
        if isinstance(ele, list):
            return False
    return True


def clean_list_none(my_list):
    if not is_1d_array(my_list):
        return my_list
    new_my_list = list(set(my_list))
    return [x for x in new_my_list if x is not None]


def get_url_data(api_url):
    response = requests.get(api_url)
    data = response.json()
    return data


def str_to_dict(text):
    try:
        json_str = text
        if isinstance(text, str):
            # 剔除左右两侧可能的单引号
            json_str = text.strip().lstrip("'").rstrip("'")
        else:
            # 对象转换成json对象，生成的是字符串
            json_str = json.dumps(json_str)
        # 使用json.loads函数将字符串转换为Python结构
        data_dict = json.loads(json_str)
        # print(data_dict)
        return data_dict
    except json.JSONDecodeError as e:
        print(f"解析错误：{e}")
        return None


def find_unique_timestamps(text):
    # 正则表达式匹配两种格式的时间字符串
    pattern = r'\b\d{4}[/-]\d{2}[/-]\d{2} \d{2}:\d{2}:\d{2}\b'

    # 在文本中查找所有匹配的时间字符串
    matches = re.findall(pattern, text)

    # 使用set数据结构来去重，然后转换为列表
    unique_matches = list(set(matches))

    return unique_matches


# escape 避免传入可能引起正则错误的符号
# 包含 start_str end_str：r'({}.*?{})'
# 不包含 start_str：r'{}(.*?{})'
def find_substrs(text, start_str, end_str):
    pattern = r'{}(.*?{})'.format(re.escape(start_str), re.escape(end_str))
    return re.findall(pattern, text, re.IGNORECASE)


# 查找子串在字符串中第n次出现的方法
def find_nth_occurrence_1(string: str, substring: str, occurrence: int) -> int:
    if (occurrence == 1):
        return string.find(substring)
    else:
        return string.find(substring, find_nth_occurrence_1(string, substring, occurrence - 1) + 1)


# 查找子串2在字符串中从子串1开始之后 第n次出现的方法
def find_nth_occurrence_2(text_full: str, start_str: str, find_str: str, occurrence: int) -> int:
    # 检查起始字符串是否存在于文本中
    start_index = text_full.find(start_str)
    if start_index == -1:
        return -1  # 如果起始字符串不在文本中，返回-1

    # 将搜索的起点设置为起始字符串之后
    search_start_point = start_index + len(start_str)

    # 查找指定数量的find_str
    while occurrence > 0:
        # 从指定位置开始查找 find_str
        find_index = text_full.find(find_str, search_start_point)
        if find_index == -1:
            return -1  # 如果找不到更多的 find_str，返回-1

        # 减少 occurrence 的数量，并将搜索起点移动到刚找到的 find_str 之后
        occurrence -= 1
        search_start_point = find_index + len(find_str)

    # 返回最后一个找到的find_str的索引位置
    return find_index - len(find_str)


def match_char_event_warp_name_string(text):
    pattern = r'"([^"]*)" Character Event Warp'
    match = re.search(pattern, text)
    if match:
        return match.group(1)
    return None
