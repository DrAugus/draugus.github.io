#!/bin/bash  
  
# 遍历当前目录下的所有文件（不包括子目录中的文件，如果你想要包括子目录，请去掉-mindepth和-maxdepth）  
find . -mindepth 1 -maxdepth 1 -type f -exec bash -c '  
    for file; do  
        # 使用mv和tr命令将文件名转换为小写  
        # ${file##./} 是去除文件名前面的路径部分（只保留文件名）  
        mv "$file" "$(dirname "$file")/$(tr '[:upper:]' '[:lower:]' <<< "${file##./}")"  
    done  
' bash {} +