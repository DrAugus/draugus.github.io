import os

current_depth = 0
all_filename = []
output_filename = '.augus_output'
exclude_path = [
    output_filename,
    '.github', '.vscode', '.gitignore',
    'LICENSE', '.git',
    'node_modules',
    'dist', 'cache',
    '.vitepress', '.nuxt', '.output',
    # 'china','abroad'
]
root_dir = os.getcwd()
sub_dir = "life/code/"
link_pre = "/trip/abroad"

depth2_dirs = []
depth2_path = []

def list_all_files(dirs):
    global current_depth
    _files = []

    # 列出文件夹下的所有目录和文件
    l1 = os.listdir(dirs)
    l1 = list(filter(lambda e: e not in exclude_path, l1))

    # 获取所有一级目录
    if current_depth == 0:
        # print(l1)
        depth1_dirs = []
        depth1_path = []
        for i in range(0, len(l1)):
            path = os.path.join(dirs, l1[i])
            if os.path.isdir(path):
                depth1_path.append(path)
                depth1_dirs.append(l1[i])
        print(depth1_dirs)
        print(depth1_path)

    # 获取所有 二级目录
    if current_depth == 1:
        # print(l1)
        for i in range(0, len(l1)):
            path = os.path.join(dirs, l1[i])
            if os.path.isdir(path):
                depth2_path.append(path)
                depth2_dirs.append(l1[i])
        print(depth2_dirs)
        print(depth2_path)
        
    all_filename.append(l1)
    print(current_depth)

    for i in range(0, len(l1)):
        path = os.path.join(dirs, l1[i])
        if os.path.isdir(path):
            # 一旦递归即 +1
            current_depth = current_depth + 1
            _files.extend(list_all_files(path))
        if os.path.isfile(path):
            _files.append(path)

    # 退出当前目录 -1
    current_depth = current_depth - 1

    return _files


def format_line(filename):
    first_line = ''
    # print(root_dir, filename)
    with open(os.path.join(root_dir, sub_dir + filename), 'r') as f:
        first_line = f.readline()
        first_line = first_line[2:]
        first_line = first_line.rstrip('\n')

    pre = 'url_life'
    res = f"{{ text: '{first_line}', link: '{link_pre}{filename}' }},"
    # res = pre + ' + "' + s + '",'
    res += '\n'
    return res


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
    os.chdir(os.path.join(root_dir, sub_dir))
    current_dir = os.getcwd()

    lll = list_all_files(current_dir)
    lll = prefix_dir(current_dir, lll)

    # print(all_filename)

    # 使用 with 关键字打开文件
    with open(output_filename, "w") as f:
        # 将输出重定向到文件
        print(display(lll), file=f)


if __name__ == '__main__':
    write2file()
