#!/bin/bash

print_usage() {
    echo "Usage: $0 [NAME] [-b OPTION] [-i OPTION]"
}

if [ ! -n "$1" ]; then
    print_usage
    exit 1
fi

# $1 is sub $2 is all
contains_word() {
    local word=$1
    local text=$2

    if echo "$text" | grep -qFe "$word"; then
        echo "'$word' found in '$text'"
        return 0
    else
        echo "'$word' not found in '$text'"
        return 1
    fi
}


# cd $1

# 同时执行多个命令时的不同
# if [[ "$(uname)" == *"NT"* ]]; then
#     echo "Windows"
#     cd $1; pnpm dev
# else
#     echo "Not Windows"
#     if [[ "$(uname)" == *"Linux"* ]]; then
#         echo "Linux"
#         cd $1 && pnpm dev
#     else
#         echo "Not Linux"
#     fi
# fi

run=$1

webpage=(
life
game
)

for name in ${webpage[@]}
do
    if contains_word "$name" "$run"; then
        [ ! -n "$2" ] && pnpm $name && exit 1
        [ "$2" = "-b" ] && pnpm $name:build && exit 1
    fi
done


