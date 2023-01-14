# 逐行读取 按行加入 ["",""]
def format_json(sa, sb):
    str = '["' + sa + '","' + sb + '"]'
    print(str)
    return str

def open_and_read(filename):
    with open(filename, "r", encoding='utf-8') as file_handle:
        line  = file_handle.readline()
        while line:
            line_str = line.strip()
            sss = "sss"
            # 英文 中文 直接的空格
            space_index = line_str.rfind(" ", 0)
            sa = line_str[:space_index]
            sb = line_str[space_index+1:]
            # split_line = line_str.split(' ')
            format_json(sa, sb)
            line  = file_handle.readline()

if __name__ == '__main__':
    open_and_read("script/test")
