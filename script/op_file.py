# str 为最终合并完成的 str 至少一行
def write_file(arr, filename="script/.augus_output"):
    if not len(arr) or not isinstance(arr, list) or arr[0].find('\n') == -1:
        print("str must be one more rows: ", arr)
        return
    with open(filename, "w") as file:
        for aa in arr:
            file.write(aa)


def open_and_read(filename, callback):
    if not len(filename):
        filename = "script/test"
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
        filename = "script/test"
    with open(filename, "r", encoding='utf-8') as file_handle:
        line = file_handle.readline()
        arr_res = []
        while line:
            line_str = line.strip()
            res = callback(line_str)
            # print('res', res)
            arr_res.append(res)
            line = file_handle.readline()
