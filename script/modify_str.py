import op_file


# 逐行读取 按空格分割 取第一部分
def open_and_read(filename):
    with open(filename, "r", encoding="utf-8") as file_handle:
        line = file_handle.readline()
        while line:
            line_str = line.strip()
            split_line = line_str.split(" ")
            modify_part = split_line[0]
            arr = modify_part.split("或")
            if len(split_line) > 2:
                tail = split_line[1] + " " + split_line[2]
            else:
                tail = split_line[1]
            format_line(arr[0], arr[1], tail)
            line = file_handle.readline()


def format_line(sa, sb, tail):
    res = "- " + add_code(sa) + "或" + add_code(sb) + tail
    print(res)


def add_code(s):
    return "`" + s + "`"


res = []
str_res = ""


def get_some(line_str):

    global str_res

    if "url" in line_str:
        url = line_str.split("=")[1]
        url = url.strip()
        start = url.rfind("/") + 1
        end = url.rfind(".")
        key = url[start:end]

        ret = ""

        # format -----
        ret = f"[{key}]: {url}"
        # ret = f'[{key}][{key}], '
        # -----------

        str_res += ret

        ret += "\n"

        res.append(ret)

    # return res


op_file.open_file("", get_some)

print(res)
print(str_res)

op_file.write_file(res)


if __name__ == "__main__":
    open_and_read("test")
