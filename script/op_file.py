import os
import utils

current_path = os.path.dirname(__file__)


# str 为最终合并完成的 str 至少一行
def write_file(arr, filename=current_path+"/.augus_output"):
    if not len(arr) or not isinstance(arr, list) or arr[0].find('\n') == -1:
        print("str must be one more rows: ", arr)
        return
    with open(filename, "w", encoding='utf-8') as file:
        for aa in arr:
            file.write(aa)


def open_and_read(filename, callback):
    if not len(filename):
        filename = current_path+"/test"
    filename = current_path + filename
    with open(filename, "r", encoding='utf-8') as file_handle:
        line = file_handle.readline()
        arr_res = []
        while line:
            line_str = line.strip()
            res = callback(line_str)
            # print('res', res)
            arr_res.append(res)
            line = file_handle.readline()
        write_file(arr_res)


def open_file(filename, callback):
    if not len(filename):
        filename = current_path+"/test"
    filename = current_path + filename
    with open(filename, "r", encoding='utf-8') as file_handle:
        line = file_handle.readline()
        arr_res = []
        while line:
            line_str = line.strip()
            res = callback(line_str)
            # print('res', res)
            arr_res.append(res)
            line = file_handle.readline()


def read_one_line():
    filename_input = current_path+"/test"
    filename_output = current_path + '/.augus_output'
    # 打开input.txt文件进行读取
    with open(filename_input, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # 新建一个output.txt文件，如果文件已存在，则覆盖它
    with open(filename_output, 'w', encoding='utf-8') as file:
        for line in lines:
            # 将当前行写入文件
            file.write(line)
            # 如果当前行包含'id:'，则再次写入相同的行
            if 'id:' in line:
                newline = line.replace('id:', 'key:')
                arr = newline.split('"')
                if (len(arr) == 1):
                    arr = arr[0].split('\'')
                newline = arr[0] + '"' + \
                    utils.replace_characters(arr[1]) + '"' + arr[2]
                file.write(newline)


# read_one_line()
