# str 为最终合并完成的 str 至少一行
def write_file(arr):
    if not len(arr) or not isinstance(arr, list) or arr[0].find('\n') == -1:
        print("str must be one more rows: ", arr)
        return
    with open("script/.augus_output", "w") as file:
        for aa in arr:
            file.write(aa)


# 逐行读取 按行加入 ["",""]
def format_json(sa, sb):
    str = '["' + sa + '","' + sb + '"],'
    print(str)
    str += '\n'
    return str


# 适用于 英中 or 其他语言/中文 的双语句子
def open_and_read(filename):
    with open(filename, "r", encoding='utf-8') as file_handle:
        line = file_handle.readline()
        arr_res = []
        while line:
            line_str = line.strip()
            # 英文 中文 的空格
            # 找最后一个空格即可
            space_index = line_str.rfind(" ", 0)
            sa = line_str[:space_index]
            sb = line_str[space_index+1:]
            # split_line = line_str.split(' ')
            arr_res.append(format_json(sa, sb))
            line = file_handle.readline()
        write_file(arr_res)


def plus_mark(arr_str, mark):
    str = '['
    for s in arr_str:
        str += mark + s + mark + ','
    # remove last
    str = str[:-1]
    str += '],'
    print(str)
    str += '\n'
    return str


# 适用于相似单词
def split_all_space(filename):
    with open(filename, "r", encoding='utf-8') as file_handle:
        line = file_handle.readline()
        arr_res = []
        while line:
            line_str = line.strip()
            arr_split_space = line_str.split(" ")
            # print(arr_split_space)
            arr_res.append(plus_mark(arr_split_space, '"'))
            line = file_handle.readline()
        write_file(arr_res)


def invoke_similar_words():
    split_all_space("script/test")


def invoke_translate():
    open_and_read("script/test")


all_feature = '\n=========*****=========\n' \
    'What do you want to do? \n' \
    '   1: invoke_similar_words\n' \
    '   2: invoke_translate\n' \
    '   0: nothing\n' \
    '=========*****=========\n'

if __name__ == '__main__':
    print(all_feature)
    while 1:
        judge = input()
        if judge == '1':
            invoke_similar_words()
            break
        elif judge == '2':
            invoke_translate()
            break
        elif judge == '3':
            break
        elif judge == '4':
            break
        elif judge == '5':
            break
        elif judge == '0':
            break
        else:
            print('error input, check again')
