#!/bin/bash

gene_dir=$(cd $(dirname $0); pwd)

arr_root_dir=(
fps
fps1
fps5
fps10
fps15
)

echo ${arr_root_dir[@]}
echo ""


mv_name(){
    for name in ${arr_root_dir[@]}
    do
        echo ">>> cd $name" && echo " "
        cd ${gene_dir}/$name || (echo "no dir $name" && echo " " && continue)
        cur_dir_files=($(ls))
        for cur_file in ${cur_dir_files[@]}
        do
            sudo cp $cur_file ../master_far/${name}.${cur_file}
        done
        echo " "
    done
}

# mv_name

change_name(){
    cur_dir_files=($(ls))
    for cur_file in ${cur_dir_files[@]}
    do
        sudo mv $cur_file ../master_far/${name}.${cur_file}
    done
    echo " "    
}
