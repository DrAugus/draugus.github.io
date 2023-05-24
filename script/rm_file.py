import os
import shutil

project_path = os.path.abspath(os.path.dirname(__file__))

print('project_path:', project_path)

op_dir = "/life/public/img/language/japanese/hira/"

os.chdir(project_path + "/.." + op_dir)

# 获取当前目录下的所有文件
file_list = os.listdir('.')

# print(file_list)


for vv in file_list:
    # print(vv)
    # ######### rm others
    # if not vv.endswith('.png'):
    #     print(f'rm {vv}')
    #     os.remove(vv)
    # ######### mv
    # if vv.endswith('(1).png'):
    #     shutil.move(vv, './details/')
    # ######### change name
    endwith = '(1).png'
    # if vv.endswith(endwith):
    #     old_name = vv
    #     newname = vv[:len(vv)-len(endwith)] + '.png'
    #     os.rename(old_name,  newname)
    endwith = "2.png"
    if vv.endswith(endwith):
        print(vv)

print('')
print('')
print('')
