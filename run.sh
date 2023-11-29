#!/bin/bash

print_usage() {
    echo "Usage: $0 [NAME] [-b OPTION] [-i OPTION]"
}

if [ ! -n "$1" ]; then
    print_usage
    exit 1
fi

cd $1

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

[ ! -n "$2" ] && pnpm dev

[ "$2" = "-b" ] && pnpm build

[ "$2" = "-i" ] && pnpm i


