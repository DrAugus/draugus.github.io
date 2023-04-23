import os

project_path = os.path.realpath(os.path.dirname(__file__))
op_dir = "/code/content"
filename = "0.index.md"
newname = "index.md"

cmd = f"cd {project_path}/..{op_dir} && find . -name {filename}"
obj = os.popen(cmd)
file_list = obj.read().split('\n')
# 获取当前目录下的所有文件
# file_list = os.listdir(".")

print("need change file list")
for vv in file_list:
    print(vv)

# 遍历文件列表
for old_name in file_list:
    # 只处理文件，忽略文件夹
    if os.path.isfile(old_name):
        prefix = old_name[:len(old_name)-len(filename)]
        print(prefix)
        os.rename(old_name, prefix + newname)
        print(f"rename {old_name} to {prefix + newname}")
