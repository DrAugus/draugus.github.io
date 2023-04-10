#!/bin/bash

ls=($(ls))

echo ${ls[@]}

CURRENT_DIR=$(cd $(dirname $0); pwd)

for name in ${ls[@]}
do
    echo ">>> cd $name" && echo " "
    cd ${CURRENT_DIR}/$name || (echo "no dir $name" && echo " " && continue)
    mv 0.index.md index.md
    echo ""
done