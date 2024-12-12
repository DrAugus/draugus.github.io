from enum import Enum
import json
import re
import requests
import inspect
import os
import yaml

from functools import wraps
from datetime import datetime
from collections import OrderedDict
from bs4 import BeautifulSoup as be


class LANG(Enum):
    ZH_CN = 0
    EN_US = 1


def log_args(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        func_args = inspect.signature(func).bind(*args, **kwargs).arguments
        func_args_str = ", ".join(f"{k}={v!r}" for k, v in func_args.items())
        print(f"====== Calling function: {func.__name__} ======")
        print(f"Arguments: {func_args_str}")
        return func(*args, **kwargs)

    return wrapper


def strip_str_list(info: list):
    return [v.strip() for v in info if v]


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


def is_subset(sub: list, all: list):
    return set(sub).issubset(set(all))


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
def find_all_substr(text, start_str, end_str, include_start=False, include_end=False):
    if include_start and include_end:
        pattern = r"({}.*?{})".format(re.escape(start_str), re.escape(end_str))
    elif include_start:
        pattern = r"({}.*?){}".format(re.escape(start_str), re.escape(end_str))
    elif include_end:
        pattern = r"{}(.*?{})".format(re.escape(start_str), re.escape(end_str))
    else:
        pattern = r"{}(.*?){}".format(re.escape(start_str), re.escape(end_str))

    return re.findall(pattern, text, re.IGNORECASE)


# 查找子串在字符串中第n次出现的方法
def find_nth_occurrence_1(string: str, substring: str, occurrence: int) -> int:
    if occurrence == 1:
        return string.find(substring)
    else:
        return string.find(
            substring, find_nth_occurrence_1(
                string, substring, occurrence - 1) + 1
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


def remove_dict_duplicates(dicts, key):
    seen = {}
    unique_dicts = []
    for d in dicts:
        k = d[key]
        if k not in seen:
            seen[k] = d
            unique_dicts.append(d)
    return unique_dicts


def get_only_name(character_info: list) -> list:
    character_info_only_name = [info.split("(")[0] for info in character_info]
    character_info_only_name = [name.strip()
                                for name in character_info_only_name]
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
                    {"start_time": format_date(
                        start), "end_time": format_date(end)}
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
            version_match = re.search(
                r"Version (\d+\.\d+)", find_des, re.IGNORECASE)
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
            version_match = re.search(
                r"Version (\d+\.\d+)", find_des, re.IGNORECASE)
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
    if url_is_img(url) and os.path.isfile(output):
        return
    os.system(f"wget '{url}' -O {output}")


@log_args
def cp_file(src: str, des: str):
    if not os.path.isfile(src):
        print("!!! ERROR SOURCE !!!")
        return
    if not os.path.isfile(des):
        os.system(f'cp {src} {des}')


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


# 仅移除简单的
def rm_simple_html_tag(txt: str):
    return be(txt, "lxml").p.text.strip()


def get_all_text_from_html(html_text):
    soup = be(html_text, 'lxml')
    # 提取所有文本（这里使用了get_text()方法，它会获取标签内的所有文本，忽略标签本身）
    all_text = soup.get_text(strip=True)  # strip=True会去除多余的空白符
    return all_text


def get_all_img_from_html(html_text):
    soup = be(html_text, 'lxml')
    img_src = [img['src'] for img in soup.find_all('img')]
    return img_src


def is_match(sub_str: str, text: str):
    match_info = re.search(sub_str, text, re.IGNORECASE)
    return True if match_info else False


def make_dir(dir):
    if not os.path.exists(dir):
        os.makedirs(dir)


def clean_dir(dir):
    for filename in os.listdir(dir):
        file_path = os.path.join(dir, filename)
        try:
            # 如果是文件，则删除
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            # 如果是目录，可以递归地清空它（这里不处理子目录的清空）
            # elif os.path.isdir(file_path):
            #     shutil.rmtree(file_path)
        except Exception as e:
            print(f"Failed to delete {file_path}. Reason: {e}")


def get_num_from_str(text):
    # 使用正则表达式匹配所有数字（包括整数和小数）
    numbers = re.findall(r"\d+(?::\.\d+)?", text)
    if len(numbers) == 0 or numbers[0] == '':
        return []
    # 将结果转换为float（如果可能的话），否则保持为str
    numbers_float_or_str = [
        float(num) if "." in num else int(num) for num in numbers]
    return numbers_float_or_str


IMAGE_EXTENSIONS = ('.png', '.jpg', '.jpeg', '.gif', '.bmp')


def url_is_img(url: str, extensions=IMAGE_EXTENSIONS) -> bool:
    return url.lower().endswith(extensions)


def get_project_root():
    # 获取当前文件的绝对路径
    current_file_path = os.path.abspath(__file__)
    # 获取当前文件所在的目录
    current_dir = os.path.dirname(current_file_path)
    # 假设项目根目录是当前目录的上级目录（根据实际情况可能需要多次使用os.path.dirname）
    project_root = os.path.dirname(current_dir)
    return project_root


# list is [{key: val}, {key: val}, ...]
def find_value_by_key(foo: list, key: str):
    for obj in foo:
        if not isinstance(obj, dict):
            return None
        if key in obj:
            return obj[key]


class Game:
    LANG_KEY_EN = 'en-us'
    LANG_KEY_ZH = 'zh-cn'

    @staticmethod
    def attach_url(url_prefix: str, appId: int, chanId: int, langKey: str, page: int = 1, pageSize: int = 99):
        order = "&iOrder=6"
        return f'{url_prefix}?iAppId={appId}&iChanId={chanId}&iPageSize={pageSize}&iPage={page}&sLangKey={langKey}'

    @staticmethod
    def i18n_filename(lang: LANG = LANG.ZH_CN):
        return lang.name.lower()

    @staticmethod
    # match "prefix"name(ele)
    # e.g. "Plane of Euthymia" Raiden Shogun (Electro)
    def match_en_char_prefix_name_ele(text):
        pattern = r'"([^"]+)"\s*([\w\s]+?)\s*\(\s*([^()]+)\s*\)'
        match = re.findall(pattern, text)
        res = []
        for m in match:
            prefix, name, ele = m
            res.append({
                'prefix': prefix,
                'name': name,
                'ele': ele
            })
        if len(res) > 0:
            res = remove_dict_duplicates(res, 'name')
        return res

    @staticmethod
    # match xxx·xxx(xx)
    # e.g.「一心净土·雷电将军(雷)」
    def match_zh_char_prefix_name_ele(text):
        matches = find_all_substr(text, '「', '」')
        res = []
        for m in matches:
            condition_brackets = '(' in m or '（' in m
            condition_separation_dot = '·' in m
            if not condition_brackets or not condition_separation_dot:
                continue

            if '(' in m:
                brackets = '('
            elif '（' in m:
                brackets = '（'

            split_separation_dot = m.split('·')
            prefix = split_separation_dot[0].strip()
            name_and_ele = split_separation_dot[1]
            split_brackets = name_and_ele.split(brackets)
            name = split_brackets[0].strip()
            ele = split_brackets[1].strip()[:-1]

            res.append({
                'prefix': prefix,
                'name': name,
                'ele': ele
            })

        if len(res) > 0:
            res = remove_dict_duplicates(res, 'name')

        if len(res) == 4:
            for idx, obj in enumerate(res):
                obj['star'] = 5 if idx == 0 else 4

        return res

    @staticmethod
    def get_version(text):
        start_tag = 'Version'
        end_tag = 'Event'
        return strip_str_list(find_all_substr(text, start_tag, end_tag))

    @staticmethod
    def get_duration(text):
        arr = []

        def got_dur(start: str, end: str):
            if start != None and end != None:
                arr.append(
                    {"start_time": format_date(
                        start), "end_time": format_date(end)}
                )

        # time_match = re.search(
        #     r"(\d{4}/\d{1,2}/\d{1,2}\s+\d{1,2}:\d{1,2}(:\d{1,2})?)", text
        # )
        time_match = find_date(text)
        if len(time_match) >= 2:
            start_time = time_match[0]
            end_time = time_match[1]
            got_dur(start_time, end_time)
        elif len(time_match):
            version_match = re.search(
                r"Version (\d+\.\d+)", text, re.IGNORECASE)
            if version_match:
                version = version_match.group(1)
            else:
                version = None

            time = time_match[0]

            if version != None and time != None:
                # print(f'version:{version}', f'time:{time}')
                got_dur(version, time)

        # 大版本更新时
        # update – 2024/01/17 11:59:00(server time)
        if "update" in text and "server time" in text:
            version_match = re.search(
                r"Version (\d+\.\d+)", text, re.IGNORECASE)
            if version_match:
                version = version_match.group(1)
            else:
                version = None

            time_match = re.search(
                r"(\d{4}/\d{1,2}/\d{1,2}\s+\d{1,2}:\d{1,2}:\d{1,2})", text
            )
            if time_match:
                time = time_match.group(1)
            else:
                time = None

            if version != None and time != None:
                # print(f'version:{version}', f'time:{time}')
                got_dur(version, time)

        # 小版本更新时
        # Event Duration\n2023/12/06 12:00:00 – 2023/12/26 14:59:00(server time)
        if "Event Duration" in text and "server time" in text:
            # 正则表达式模式匹配 ISO 8601 风格的日期和时间
            pattern = r"(\d{4}/\d{1,2}/\d{1,2}\s+\d{1,2}:\d{1,2}:\d{1,2})"
            # 使用正则表达式搜索所有匹配的时间
            matches = re.findall(pattern, text)
            # 检查是否找到了两个匹配的时间，表示开始和结束时间
            if matches and len(matches) == 2:
                start_time, end_time = matches
                got_dur(start_time, end_time)
                # print(f"start_time:{start_time} end_time:{end_time}")

        got_dur(None, None)

        return arr


class Genshin(Game):
    class City(Enum):
        Invalid = -1
        Mondstadt = 0
        Liyue = 1
        Inazuma = 2
        Sumeru = 3
        Fontaine = 4
        Natlan = 5
        Snezhnaya = 6

    @staticmethod
    def get_wish_name_en(text):
        start_tag = 'Event Wish "'
        end_tag = '" - Boosted Drop Rate'
        return find_all_substr(text, start_tag, end_tag)

    @staticmethod
    def get_wish_name_zh(text):
        matches = find_all_substr(text, '「', '」')
        if len(matches) != 1:
            return ""
        return matches[0]


class OperateFile:

    current_path = f"{get_project_root()}/script/"

    @staticmethod
    def get_filename_input(filename):
        if filename is None or not len(filename):
            filename = OperateFile.current_path + "test"
        if OperateFile.current_path not in filename:
            filename = OperateFile.current_path + filename
        return filename

    @staticmethod
    def get_filename_output(filename):
        if filename is None or not len(filename):
            filename = OperateFile.current_path + ".augus_output"
        if OperateFile.current_path not in filename:
            filename = OperateFile.current_path + filename
        return filename

    @staticmethod
    def check_filename(filename):
        return OperateFile.get_filename_output(filename)

    # str 为最终合并完成的 str 至少一行
    @staticmethod
    def write_file(arr, filename):
        filename = OperateFile.check_filename(filename)
        if not len(arr) or not isinstance(arr, list) or arr[0].find("\n") == -1:
            print("str must be one more rows: ", arr)
            return
        with open(filename, "w", encoding="utf-8") as file:
            for aa in arr:
                file.write(aa)

    @staticmethod
    def write_file_anything(anything, filename):
        filename = OperateFile.check_filename(filename)
        with open(filename, "w", encoding="utf-8") as file:
            file.write(anything)

    @staticmethod
    def open_and_read(filename, callback):
        filename = OperateFile.get_filename_input(filename)
        with open(filename, "r", encoding="utf-8") as file_handle:
            line = file_handle.readline()
            arr_res = []
            while line:
                line_str = line.strip()
                res = callback(line_str)
                # print('res', res)
                arr_res.append(res)
                line = file_handle.readline()
            OperateFile.write_file(arr_res)

    @staticmethod
    def open_and_read_no_strip(filename, callback, output):
        filename = OperateFile.get_filename_input(filename)
        with open(filename, "r", encoding="utf-8") as file_handle:
            line = file_handle.readline()
            arr_res = []
            while line:
                line_str = line
                res = callback(line_str)
                # print('res', res)
                arr_res.append(res)
                line = file_handle.readline()
            OperateFile.write_file(arr_res, output)

    @staticmethod
    def open_file(filename, callback):
        filename = OperateFile.get_filename_input(filename)
        with open(filename, "r", encoding="utf-8") as file_handle:
            line = file_handle.readline()
            arr_res = []
            while line:
                line_str = line.strip()
                res = callback(line_str)
                # print('res', res)
                arr_res.append(res)
                line = file_handle.readline()

    @staticmethod
    def get_dict_by_read_file(filename, callback):
        filename = OperateFile.get_filename_input(filename)
        with open(filename, "r", encoding="utf-8") as file_handle:
            line = file_handle.readline()
            arr_res = []
            while line:
                line_str = line.strip()
                res = callback(line_str)
                # print('res', res)
                arr_res.append(res)
                line = file_handle.readline()
            return arr_res

    @staticmethod
    def prepend_to_file(filename, new_content):
        """
        在文件的开头插入新的内容。

        参数:
        - filename: 要更新的文件名（字符串）
        - new_content: 要插入到文件开头的内容（字符串）
        """
        # 读取原文件内容
        try:
            with open(filename, "r", encoding="utf-8") as file:
                old_content = file.read()
        except FileNotFoundError:
            old_content = ""  # 如果文件不存在，则视为空文件

        updated_content = new_content + old_content

        with open(filename, "w", encoding="utf-8") as file:
            file.write(updated_content)

    @staticmethod
    def read_one_line():
        filename_input = OperateFile.get_filename_input()
        filename_output = OperateFile.get_filename_output()
        # 打开input.txt文件进行读取
        with open(filename_input, "r", encoding="utf-8") as file:
            lines = file.readlines()

        # 新建一个output.txt文件，如果文件已存在，则覆盖它
        with open(filename_output, "w", encoding="utf-8") as file:
            for line in lines:
                # 将当前行写入文件
                file.write(line)
                # 如果当前行包含'id:'，则再次写入相同的行
                if "id:" in line:
                    newline = line.replace("id:", "key:")
                    arr = newline.split('"')
                    if len(arr) == 1:
                        arr = arr[0].split("'")
                    newline = arr[0] + '"' + \
                        replace_characters(arr[1]) + '"' + arr[2]
                    file.write(newline)

    @staticmethod
    def get_md_title(filename):
        if not len(filename):
            return ""
        try:
            with open(filename, "r", encoding="utf-8") as file_handle:
                line = file_handle.readline()
                while line:
                    line_str = line.strip()
                    if line_str.startswith("# "):
                        html_tag = line_str.find("<")
                        new_line = line_str[2:]
                        if html_tag != -1:
                            new_line = line_str[2:html_tag]
                        return new_line
                    line = file_handle.readline()
        except FileNotFoundError:
            return ""
        return ""

    @staticmethod
    def save_dict_to_file(dict_data, file_path, format=True):
        directory = os.path.dirname(file_path)
        make_dir(directory)
        with open(file_path, "w", encoding="utf-8") as f:
            if format is True:
                json.dump(dict_data, f, ensure_ascii=False, indent=4)
            else:
                json.dump(dict_data, f, ensure_ascii=False)

    @staticmethod
    def load_dict_from_file(file_path):
        if os.path.exists(file_path):
            with open(file_path, "r", encoding="utf-8") as f:
                return json.load(f)
        else:
            return {}  # 如果文件不存在，返回一个空字典

    @staticmethod
    def read_file_and_truncate(file_path):
        with open(file_path, "r", encoding="utf-8") as file:
            # 读取文件内容，移除空行，并用空格替换
            lines = [line.strip() for line in file if line.strip()]
            # 用空格连接非空行，并截断到最多 500 个字符
            content = " ".join(lines)[:500]
            return content

    @staticmethod
    def op_one_line(txt):
        if "frames" in txt:
            res = txt.split("frames")[1]
            return res
        return txt

    @staticmethod
    def read_file_and_op_one_line(file_path):
        with open(file_path, "r", encoding="utf-8") as file:
            line = file.readline()
            res = []
            status = False
            while line:
                line_str = line.strip()
                get_num = get_num_from_str(line_str)
                for a in get_num:
                    obj = {"status": status, "frames": a}
                    res.append(obj)
                    status = not status
                print(get_num)
                line = file.readline()
            print(res)
            OperateFile.save_dict_to_file(
                res, OperateFile.current_path + "/.datafps.json")
