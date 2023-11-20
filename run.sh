#!/bin/bash

print_usage() {
    echo "Usage: $0 [NAME]"
}

if [ $# -lt 1 ]; then
    print_usage
    exit 1
fi


if [[ "$(uname)" == *"NT"* ]]; then
    echo "Windows"
    cd $1; pnpm dev
else
    echo "Not Windows"
    if [[ "$(uname)" == *"Linux"* ]]; then
        echo "Linux"
        cd $1 && pnpm dev
    else
        echo "Not Linux"
    fi
fi
