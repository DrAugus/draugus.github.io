#!/bin/bash

git pull

# 使用git status --porcelain获取Git状态信息，该选项输出易于解析的格式  
# 然后使用grep和awk等工具来筛选和检查  
modified_files=$(git status --porcelain | awk '{print $2}')  
  
# echo $modified_files

webpage=(
life
game
)

for name in ${webpage[@]}
do
    for file in $modified_files; do  
        if [[ $file == ${name}* ]]; then  
            echo "Found a file starting with '$name': $file"  
            echo "ready to build $name"
            echo ""
            source ./run.sh ${name}/ -b
            break  
        fi  
    done  
done

