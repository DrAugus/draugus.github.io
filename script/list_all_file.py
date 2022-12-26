import os

list_file_depth = 2
current_depth = 0
all_filename = []
output_filename = '.augus_output'
exclude_path = [
    '.github', '.vscode', '.gitignore',
    'LICENSE', '.git', output_filename
]


def list_all_files(root_dir):
    _files = []

    # 列出文件夹下的所有目录和文件
    l1 = os.listdir(root_dir)
    l1 = list(filter(lambda e: e not in exclude_path, l1))
    # print(l1)
    all_filename.append(l1)

    for i in range(0, len(l1)):
        path = os.path.join(root_dir, l1[i])
        if os.path.isdir(path):
            _files.extend(list_all_files(path))
        if os.path.isfile(path):
            _files.append(path)

    return _files


def format_line(s):
    pre = 'url_life'
    return pre + ' + "' + s + '",\n'


def display(filename):
    if not len(filename):
        return ""
    display_str = ""
    for v in filename:
        if not isinstance(v, list):
            display_str += format_line(v)
            continue
        for vv in v:
            display_str += format_line(vv)
    return display_str


def prefix_dir(current_dir, arr):
    return [s.replace(current_dir, "") for s in arr]


def write2file():
    current_dir = os.getcwd()
    lll = list_all_files(current_dir)
    lll = prefix_dir(current_dir, lll)

    # 使用 with 关键字打开文件
    with open(output_filename, "w") as f:
        # 将输出重定向到文件
        print(display(lll), file=f)


if __name__ == '__main__':
    write2file()
