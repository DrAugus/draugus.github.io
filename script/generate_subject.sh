#!/bin/bash  

BASE_DIR=$(cd $(dirname $0); pwd)

echo "BASE DIR: $BASE_DIR"

OP_DIR="../life/course"

cd $OP_DIR


# 定义不需要创建的英文学科  
excluded_subjects=("art" "economics" "engineering" "science")  
  
# 定义英文学科名和中文学科名的映射  
# 定义学科名和对应的英文路径  
declare -A subjects  
subjects[philosophy]="哲学"  
subjects[economics]="经济学"  
subjects[law]="法学"  
subjects[education]="教育学"  
subjects[literature]="文学"  
subjects[history]="历史学"  
subjects[science]="理学"  
subjects[engineering]="工学"  
subjects[agronomy]="农学"  
subjects[medicine]="医学"  
subjects[military-science]="军事学"  
subjects[management]="管理学"  
subjects[art]="艺术学" 
  
# 遍历所有学科  
for english_subject in "${!subjects[@]}"; do  
    # 检查该学科是否在排除列表中  
    if [[ ! " ${excluded_subjects[*]} " == *" $english_subject "* ]]; then  
        # 创建英文学科文件夹  
        mkdir -p "$english_subject/"  
  
        # 获取对应的中文学科名  
        chinese_subject="${subjects[$english_subject]}"  
  
        # 在文件夹中创建 index.md 文件，并写入内容  
        cat > "$english_subject/index.md" <<EOF
# $chinese_subject
EOF
    fi  
done
