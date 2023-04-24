import os
import op_file

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
link_pre = "/code"

# 一级目录
depth1_dirs = []
depth1_path = []
# 二级目录
depth2_dirs = []
depth2_path = []


def print_list(l):
    print('len: ', len(l))
    for i in l:
        print(i)


def print_map(m):
    print('len: ', len(m))
    for k in m:
        print(f'{k}: {m[k]}')


def list_all_files(dirs):
    global current_depth
    _files = []

    # 列出文件夹下的所有目录和文件
    l1 = os.listdir(dirs)
    l1 = list(filter(lambda e: e not in exclude_path, l1))

    # 获取所有一级目录
    if current_depth == 0:
        # print(l1)
        for i in range(0, len(l1)):
            path = os.path.join(dirs, l1[i])
            if os.path.isdir(path):
                depth1_path.append(path)
                depth1_dirs.append(l1[i])
        print(depth1_dirs)
        print_list(depth1_path)

    # 获取所有 二级目录
    if current_depth == 1:
        # print(l1)
        for i in range(0, len(l1)):
            path = os.path.join(dirs, l1[i])
            if os.path.isdir(path):
                depth2_path.append(path)
                depth2_dirs.append(l1[i])
        print(depth2_dirs)
        print_list(depth2_path)

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
    # print(filename)
    filename = filename[len(link_pre):]

    res_line = ''
    # print(root_dir, filename)
    with open(os.path.join(root_dir, sub_dir + filename), 'r') as f:
        line = f.readline()
        while line:
            if line.startswith('# '):
                res_line = line[2:]
                res_line = res_line.rstrip('\n')
                break

            if line.startswith('title: '):
                res_line = line[7:]
                res_line = res_line.rstrip('\n')
                break

            line = f.readline()
    res = {}
    res['text'] = res_line
    res['link'] = f'{link_pre}{filename}'
    return res


def display_map(m):
    # key 无须调整，只调整 value
    for k in m:
        v = m[k]
        for vv in range(len(v)):
            filename = v[vv]
            v[vv] = format_line(filename)
    # print_map(m)
    return m


def replace_sub_str(replace_str, arr):
    return [s.replace(replace_str, "") for s in arr]


def add_pre(pre, arr):
    return [pre + s for s in arr]


def adjust_file(arr):
    # 把当前目录前缀也要加上
    arr = add_pre(link_pre, arr)
    return arr


def list2map(dir_list):
    # list 格式为 全部文件及目录
    res_map = {}
    for v in dir_list:
        if v.endswith('.md'):
            prefix = v[:v.rfind("/") + 1]
            if prefix not in res_map:
                res_map[prefix] = []
            res_map[prefix].append(v)
    return res_map


def modify_display(m):
    arr = []
    for k in m:
        kk = f"'{k}':[\n"
        arr.append(kk)
        for v in m[k]:
            vv = f'{v},\n'
            arr.append(vv)
        arr.append(']\n')
    return arr


def write2file():
    os.chdir(os.path.join(root_dir, sub_dir))
    current_dir = os.getcwd()

    all_file_path_with_prefix = list_all_files(current_dir)
    all_file_path = replace_sub_str(current_dir, all_file_path_with_prefix)

    all_file_path = adjust_file(all_file_path)
    # print_list(all_file_path)
    map_file = list2map(all_file_path)
    # 每一个键值对是一组列表 不做细化区分
    print_map(map_file)

    display_map(map_file)
    op_file.write_file(modify_display(map_file), output_filename)

    # with open('.augus_output', "w") as f:
    #     print(display_map(map_file), file=f)

    # print_list(all_filename)

    print('当前目录下所有文件及目录个数: ', len(all_file_path))
    print('一级目录个数 :', len(depth1_dirs))
    print('二级目录个数 :', len(depth2_dirs))

    cmd = f"find {current_dir} -type f | wc -l"
    obj = os.popen(cmd)
    print('当前目录下所有文件个数: ', obj.read())


if __name__ == '__main__':
    write2file()
