import os

project_path = os.path.realpath(os.path.dirname(__file__))
op_dir = "/game/public/image/test"
filename = "0.index.md"
newname = "index.md"

# cmd = f"cd {project_path}/..{op_dir} && find . -name {filename}"
# obj = os.popen(cmd)
# file_list = obj.read().split('\n')
# 获取当前目录下的所有文件
file_list = os.listdir('.')

print("need change file list")
for vv in file_list:
    print(vv)


print('')
print('')
print('')


def modify_name(old):
    print(old)
    begin = 'Character_'
    end = '_Icon.png'

    end = '_Splash_Art.png'

    len_old = len(old)
    newname = ''
    condition = old.startswith(begin) and old.endswith(end)
    if condition:
        newname = old[len(begin):len_old - len(end)].lower()
        print(newname)
        newname += '.png'
        return newname
    return old


# 遍历文件列表
for old_name in file_list:
    # 只处理文件，忽略文件夹
    if os.path.isfile(old_name):
        newname = modify_name(old_name)
        os.rename(old_name,  newname)
        print(f"rename {old_name} to { newname}")
