import os

# 获取当前目录下的所有文件
file_list = os.listdir(".")

# 遍历文件列表
for old_name in file_list:
    # 只处理文件，忽略文件夹
    if os.path.isfile(old_name):
        if old_name.endswith('flv.far'):
            new_name = old_name.replace('flv','master.flv',1)
            os.rename(old_name, new_name)
        elif 'fps1_' in old_name:
            new_name = old_name.replace('fps1_','',1)
            os.rename(old_name, new_name)                                    