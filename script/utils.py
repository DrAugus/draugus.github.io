import json
import re
import requests
import inspect
import os
import yaml

from functools import wraps
from datetime import datetime
from collections import OrderedDict


def log_args(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        func_args = inspect.signature(func).bind(*args, **kwargs).arguments
        func_args_str = ", ".join(f"{k}={v!r}" for k, v in func_args.items())
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
    new_my_list = list(OrderedDict.fromkeys(my_list))
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


def find_date(text):
    # 正则表达式匹配两种格式的时间字符串
    # 2024/1/2 or 2024/01/02 or 2024-01-02
    # 秒可选，可能会没有秒
    # (?::\d{1,2})?
    # 参考 群友 及 https://docs.python.org/3/howto/regex.html#non-capturing-and-named-groups
    pattern = r"\d{4}[/-]\d{1,2}[/-]\d{1,2}\s+\d{1,2}:\d{1,2}(?::\d{1,2})?"
    matches = re.findall(pattern, text)
    unique_matches = list(dict.fromkeys(matches))
    return unique_matches


# escape 避免传入可能引起正则错误的符号
# 包含 start_str end_str：r'({}.*?{})'
# 不包含 start_str：r'{}(.*?{})'
def find_all_substr(text, start_str, end_str):
    pattern = r"{}(.*?{})".format(re.escape(start_str), re.escape(end_str))
    return re.findall(pattern, text, re.IGNORECASE)


# 查找子串在字符串中第n次出现的方法
def find_nth_occurrence_1(string: str, substring: str, occurrence: int) -> int:
    if occurrence == 1:
        return string.find(substring)
    else:
        return string.find(
            substring, find_nth_occurrence_1(string, substring, occurrence - 1) + 1
        )


# 查找子串2在字符串中从子串1开始之后 第n次出现的方法
def find_nth_occurrence_2(
    text_full: str, start_str: str, find_str: str, occurrence: int
) -> int:
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


def replace_characters(input_string: str) -> str:
    new_str = re.sub(r"[-·.,& ]", "_", input_string)
    while "__" in new_str:
        new_str = new_str.replace("__", "_")
    new_str = new_str.lower()
    return new_str


# 找到第一个和最后一个英文字母，并提取这两个字母及其之间的内容
def clear_non_letters(input_str) -> str:

    match = re.search(r"[a-zA-Z].*[a-zA-Z]", input_str)

    # 如果匹配成功，从原字符串中提取匹配内容，否则返回原字符串
    if match:
        return match.group()
    else:
        return input_str


def merge_insert(insert_list: list):
    output = ""
    for obj in insert_list:
        if "insert" in obj and isinstance(obj["insert"], str):
            output += obj["insert"]
    return output


def got_insert_info(text, callback):
    if isinstance(text, str):
        callback(text)
        return

    for vv in text:
        find_des = vv.get("insert")
        if isinstance(find_des, str):
            callback(find_des)


def get_char_name(input_string):
    pattern = r'"(.*?)"\s(.*?)\s\((.*?)\)'
    matches = re.finditer(pattern, input_string)
    result = []
    for match in matches:
        prefix_name, name, type = match.groups()
        result.append((prefix_name, name, type))
    return result


def get_only_name(character_info: list) -> list:
    character_info_only_name = [info.split("(")[0] for info in character_info]
    character_info_only_name = [name.strip() for name in character_info_only_name]
    character_info_only_name = [
        clear_non_letters(clear) for clear in character_info_only_name
    ]
    character_info_only_name = clean_list_none(character_info_only_name)
    # print('only name:', character_info_only_name)
    return character_info_only_name


def get_date(text):
    arr = []

    def append_match(find_des):
        arr.extend(find_date(find_des))

    got_insert_info(text, append_match)

    return clean_list_none(arr)


def get_duration(text):
    arr = []

    def append_match(find_des: str):

        def got_dur(start: str, end: str):
            if start != None and end != None:
                arr.append(
                    {"start_time": format_date(start), "end_time": format_date(end)}
                )

        # time_match = re.search(
        #     r"(\d{4}/\d{1,2}/\d{1,2}\s+\d{1,2}:\d{1,2}(:\d{1,2})?)", find_des
        # )
        time_match = find_date(find_des)
        if len(time_match) >= 2:
            start_time = time_match[0]
            end_time = time_match[1]
            got_dur(start_time, end_time)
            return
        elif len(time_match):
            version_match = re.search(r"Version (\d+\.\d+)", find_des, re.IGNORECASE)
            if version_match:
                version = version_match.group(1)
            else:
                version = None

            time = time_match[0]

            if version != None and time != None:
                # print(f'version:{version}', f'time:{time}')
                got_dur(version, time)
                return

        # 大版本更新时
        # update – 2024/01/17 11:59:00(server time)
        if "update" in find_des and "server time" in find_des:
            version_match = re.search(r"Version (\d+\.\d+)", find_des, re.IGNORECASE)
            if version_match:
                version = version_match.group(1)
            else:
                version = None

            time_match = re.search(
                r"(\d{4}/\d{1,2}/\d{1,2}\s+\d{1,2}:\d{1,2}:\d{1,2})", find_des
            )
            if time_match:
                time = time_match.group(1)
            else:
                time = None

            if version != None and time != None:
                # print(f'version:{version}', f'time:{time}')
                got_dur(version, time)
                return

        # 小版本更新时
        # Event Duration\n2023/12/06 12:00:00 – 2023/12/26 14:59:00(server time)
        if "Event Duration" in find_des and "server time" in find_des:
            # 正则表达式模式匹配 ISO 8601 风格的日期和时间
            pattern = r"(\d{4}/\d{1,2}/\d{1,2}\s+\d{1,2}:\d{1,2}:\d{1,2})"
            # 使用正则表达式搜索所有匹配的时间
            matches = re.findall(pattern, find_des)
            # 检查是否找到了两个匹配的时间，表示开始和结束时间
            if matches and len(matches) == 2:
                start_time, end_time = matches
                got_dur(start_time, end_time)
                # print(f"start_time:{start_time} end_time:{end_time}")

        got_dur(None, None)

    got_insert_info(text, append_match)

    return arr


# original_time_str = "2024/4/2  17:59:59"
def format_date(original_time_str):
    # 去除多余的空格
    normalized_time_str = re.sub(r"\s+", " ", original_time_str.strip())

    # 尝试将字符串解析为datetime对象
    try:
        dt = datetime.strptime(normalized_time_str, "%Y/%m/%d %H:%M:%S")
        # 格式化datetime对象为xxxx/xx/xx xx:xx:xx形式
        standardized_time_str = dt.strftime("%Y/%m/%d %H:%M:%S")
        # print("标准化后的时间字符串:", standardized_time_str)
        return standardized_time_str
    except ValueError as e:
        # print("无法解析时间字符串:", e)
        return original_time_str


def timestamp2date(ts: int):
    dt_object = datetime.fromtimestamp(ts)
    return dt_object.strftime("%Y-%m-%d")


@log_args
def wget_file(url: str, output):
    if (
        url.endswith(".png") or url.endswith(".jpg") or url.endswith(".jpeg")
    ) and os.path.exists(output):
        return
    os.system(f"wget '{url}' -O {output}")


# abc=123
# \w+ 匹配一个或多个字母数字字符（等价于 [a-zA-Z0-9_]+）
# \d+ 匹配一个或多个数字
def match_value_by_key(text: str, key: str, sign: str = "="):
    pattern = r"\w+=\d+"
    matches = re.finditer(pattern, text)
    for match in matches:
        k, v = match.group().split(sign)
        if k == key:
            return v
    return ""


def get_yaml_config(yaml_path):
    f = open(yaml_path, "rb")
    config = yaml.safe_load_all(f)
    config_list = list(config)
    config_value = config_list[0]
    return config_value


def is_match(sub_str: str, text: str):
    match_info = re.search(sub_str, text, re.IGNORECASE)
    return True if match_info else False
