import op_file


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
        op_file.write_file(arr_res)


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
        op_file.write_file(arr_res)


def add_prefix(filename, str):
    with open(filename, "r", encoding='utf-8') as file_handle:
        line = file_handle.readline()
        arr_res = []
        while line:
            line_str = line.strip()
            if not len(line_str):
                line = file_handle.readline()
                continue
            arr_res.append(str + line_str + '\n')
            line = file_handle.readline()
        op_file.write_file(arr_res)


def replace_str(filename, a, b):
    with open(filename, "r", encoding='utf-8') as file_handle:
        line = file_handle.readline()
        arr_res = []
        while line:
            line_str = line.strip()
            if not len(line_str):
                line = file_handle.readline()
                continue
            arr_res.append(line_str.replace(a, b))
            line = file_handle.readline()
        op_file.write_file(arr_res)


def change_line(filename, a):
    with open(filename, "r", encoding='utf-8') as file_handle:
        line = file_handle.readline()
        arr_res = []
        while line:
            line_str = line.strip()
            if not len(line_str):
                line = file_handle.readline()
                continue
            line_str = line_str.split(a)
            for ls in line_str:
                arr_res.append(ls + '\n')
            line = file_handle.readline()
        op_file.write_file(arr_res)


def invoke_similar_words():
    split_all_space("script/test")


def invoke_translate():
    open_and_read("script/test")


def invoke_add_prefix(str):
    add_prefix("script/test", str)


def invoke_replace_str(src, dis):
    replace_str("script/test", src, dis)


def invoke_change_line(str):
    change_line("script/test", str)


all_feature = '\n=========*****=========\n' \
    'What do you want to do? \n' \
    '   1: invoke_similar_words\n' \
    '   2: invoke_translate\n' \
    '   3: invoke_add_prefix\n' \
    '   4: invoke_replace_str, replace a to b\n' \
    '   5: invoke_change_line\n' \
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
            while 1:
                print("please input str you want to add prefix")
                input_str = input()
                invoke_add_prefix(input_str)
                break
            break
        elif judge == '4':
            while 1:
                print("please input str a, b you want to replace")
                print("e.g. a b")
                input_str = input()
                input_str.split(' ')
                invoke_replace_str(input_str[0], input_str[1])
                break
            break
        elif judge == '5':
            while 1:
                print("please input str you want to split and line break")
                input_str = input()
                invoke_change_line(input_str)
                break
            break
        elif judge == '6':
            break
        elif judge == '7':
            break
        elif judge == '0':
            break
        else:
            print('error input, check again')
