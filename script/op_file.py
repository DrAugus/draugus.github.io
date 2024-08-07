import os
import utils
import json

current_path = os.path.dirname(__file__)


# str 为最终合并完成的 str 至少一行
def write_file(arr, filename=current_path + "/.augus_output"):
    if filename is None:
        filename = current_path + "/.augus_output"
    if not len(arr) or not isinstance(arr, list) or arr[0].find("\n") == -1:
        print("str must be one more rows: ", arr)
        return
    with open(filename, "w", encoding="utf-8") as file:
        for aa in arr:
            file.write(aa)


def write_file_anything(anything, filename=current_path + "/.augus_output"):
    with open(filename, "w", encoding="utf-8") as file:
        file.write(anything)


def open_and_read(filename, callback):
    if not len(filename):
        filename = current_path + "/test"
    if current_path not in filename:
        filename = current_path + filename
    with open(filename, "r", encoding="utf-8") as file_handle:
        line = file_handle.readline()
        arr_res = []
        while line:
            line_str = line.strip()
            res = callback(line_str)
            # print('res', res)
            arr_res.append(res)
            line = file_handle.readline()
        write_file(arr_res)


def open_and_read_no_strip(filename, callback, output):
    if filename is None or not len(filename):
        filename = current_path + "/test"
    if current_path not in filename:
        filename = current_path + filename
    with open(filename, "r", encoding="utf-8") as file_handle:
        line = file_handle.readline()
        arr_res = []
        while line:
            line_str = line
            res = callback(line_str)
            # print('res', res)
            arr_res.append(res)
            line = file_handle.readline()
        write_file(arr_res, output)


def open_file(filename, callback):
    if not len(filename):
        filename = current_path + "/test"
    filename = current_path + filename
    with open(filename, "r", encoding="utf-8") as file_handle:
        line = file_handle.readline()
        arr_res = []
        while line:
            line_str = line.strip()
            res = callback(line_str)
            # print('res', res)
            arr_res.append(res)
            line = file_handle.readline()


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


def read_one_line():
    filename_input = current_path + "/test"
    filename_output = current_path + "/.augus_output"
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
                newline = arr[0] + '"' + utils.replace_characters(arr[1]) + '"' + arr[2]
                file.write(newline)


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


def save_dict_to_file(dict_data, file_path):
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(dict_data, f, ensure_ascii=False, indent=4)


def load_dict_from_file(file_path):
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            return json.load(f)
    else:
        return {}  # 如果文件不存在，返回一个空字典


def read_file_and_truncate(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        # 读取文件内容，移除空行，并用空格替换
        lines = [line.strip() for line in file if line.strip()]
        # 用空格连接非空行，并截断到最多 500 个字符
        content = " ".join(lines)[:500]
        return content


def op_one_line(txt):
    if "frames" in txt:
        res = txt.split("frames")[1]
        return res
    return txt


def read_file_and_op_one_line(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        line = file.readline()
        res = []
        status = False
        while line:
            line_str = line.strip()
            get_num = utils.get_num_from_str(line_str)
            for a in get_num:
                obj = {"status": status, "frames": a}
                res.append(obj)
                status = not status
            print(get_num)
            line = file.readline()
        print(res)
        save_dict_to_file(res, current_path + "/.datafps.json")
