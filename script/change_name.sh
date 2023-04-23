#!/bin/bash

BASE_DIR=$(cd $(dirname $0); pwd)

echo "BASE DIR: $BASE_DIR"


FILENAME="0.index.md"
OP_PATH=$BASE_DIR/../code/content

files=$(find $OP_PATH -name $FILENAME)

echo "${files[@]}"

echo ""

echo "ready to rename: " && echo ""

# 长度
# ${#var}

# 从左边第几个字符开始一直到结束
# ${var:7}

# 指定从左边第几个字符开始以及子串中字符的个数
# ${var:start:len}

for name in ${files[@]}
do
    prefix_index=`expr ${#name} - ${#FILENAME}`
    prefix=${name:0:$prefix_index}
    echo "$prefix"
    mv $name "${prefix}index.md"
done
