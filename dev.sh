#!/bin/bash

print_usage() {
    echo "Usage: $0 [NAME]"
}

if [ ! -n "$1" ]; then
    print_usage
    exit 1
fi

# 指定要切换或创建的新分支名  
NEW_BRANCH=$1
  
# 获取当前分支名  
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)  
  

# 检查远程是否存在指定的分支  
echo ">>> CHECK branch if exist"
if ! git show-ref --verify --quiet "refs/remotes/origin/$NEW_BRANCH"; then  
    echo "Error: The remote branch '$NEW_BRANCH' does not exist on the remote repository."  
    echo "You may want to create it first or check the spelling."  
    # exit 1  
fi  


# 获取Git状态  
git_status=$(git status --porcelain)  
# 检查是否有未提交的改动  
echo ">>> CHECK git status"
if [ -n "$git_status" ]; then  
    echo "There are uncommitted changes or untracked files in your repository:"  
    echo "$git_status"  
    echo "Please commit or stash your changes before continuing."  
    exit 1      
else  
    echo "No uncommitted changes found."  
fi  

# 如果当前不在master分支上，切换到master分支  
if [ "$CURRENT_BRANCH" != "master" ]; then  
    echo "Switching to master branch..."  
    git checkout master  
fi  

git pull
 
  

  

  
# 从master分支创建并切换到新分支  
echo "Creating and switching to new branch '$NEW_BRANCH'..."  
git checkout -b $NEW_BRANCH  
  
echo "Now you are on branch '$NEW_BRANCH'. Start your development here."