# Git

## sol

### git 撤销 modified的文件

撤销工作区（working directory）中所有被修改（modified）的文件到它们最近一次提交（commit）的状态，同时保留新增加（untracked）的文件不被撤销

列出所有modified的文件

```bash
git status --porcelain | grep '^ M' | cut -c4-
```

这条命令使用`git status --porcelain`来获取一个简洁的、机器可读的输出，然后筛选出所有modified（M）的文件，并去除每行开头的空格和M字符。

批量撤销这些modified的文件

```bash
git restore --staged --worktree $(git status --porcelain | grep '^ M' | cut -c4-)
```

注意：`--staged`参数通常用于撤销暂存区的更改，但在这个场景中，如果你只关心工作区的更改，可以省略它（或者更明确地只使用`--worktree`）。然而，如果你的目的是同时清除暂存区和工作区的更改，则保留`--staged`和`--worktree`都是有用的。

如果只关心工作区，使用：

```bash
git restore --worktree $(git status --porcelain | grep '^ M' | cut -c4-)
```

### does not point to a valid object

:::danger 详细描述
git pull 出现 error: refs/remotes/origin xxxx does not point to a valid object
:::

这个错误通常表示远程仓库的引用数据已损坏或存在不一致。以下是可能的解决方法：

```bash
# 重新获取引用: 尝试重新获取远程仓库的引用数据：
git fetch --all

# 删除和重新添加远程仓库:
git remote remove origin
git remote add origin <repository_URL>
git fetch origin

# 检查并修复本地仓库: 使用 git fsck 检查和修复本地仓库中的损坏对象。
git fsck --full

# 手动更新引用: 可能需要手动更新引用：
git update-ref -d refs/remotes/origin/xxxx
git fetch origin

# 克隆新的仓库: 如果以上方法无效，考虑备份当前工作后重新克隆仓库。
git clone <repository_URL>
```

### 舍弃本地所有提交

`git reset --hard origin/your_branch`

### could not access submodule

just execute `git submodule update --init --recursive`

### git submodule: already exists in the index

`git rm -rf --cached xx/xx`

### git del commit

`git rebase -i commitID`  
> `git log` found id you want to del

rebase then enter, edit file, change `pick` to `drop`, then save

这个时候本地删除该 id 的操作已经完成 然后推送 `git push --force`

移除 rebase

```bash
git rebase --abort
```

这个命令会撤销当前正在进行的 rebase 操作并恢复到 rebase 之前的状态

### The following untracked working tree files would be overwritten by checkout

不知道怎么解决。但是日前，是因为把 remote 仓库 rename 了。后面是把本地仓库删了，重新拉取了。

### git 如何取消 merge

当我们使用 git merge 操作合并代码但还没add时，若想取消这次合并，使用`git merge --abort`命令即可

假如不幸已经 `git add` 了怎么办呢？ 其实也很简单，先用 `git reflog` 指令显示历史的操作

再用 `git reset --hard commit id`就可以回退到操作之前的状态了

### git 合并没有共同祖先的分支

> fatal: refusing to merge unrelated histories

`git pull origin master --allow-unrelated-histories`

## clone

`git clone <xxx.git>`

`git clone --branch your_branch_or_tag <xxx.git>`

## fetch

`git fetch [origin]` 从远程获取所有分支

## branch

```bash
git checkout <existing_branch>
git checkout -b <new_branch>
git switch <existing_branch>
git switch -c <non_existing_branch>

git branch
git branch -a # 查看历史
# 删除分支
git branch -d dev 
git branch –delete dev 
# 删除远程分支
git push <remote-name> --delete <branch-name>
git checkout -b dev origin/dev # checkout 远程

# 查看当前分支的追踪信息
git branch -vv
# 查看当前分支的远端分支列表
git remote show origin
# 直接查看当前分支追踪的远端分支名
git rev-parse --abbrev-ref --symbolic-full-name @{u}
```

## submodule

```bash
git submodule add <git_url>
# clone 时一同初始化并checkout子模块commit，且会拉取嵌套的子模块(即子模块又包含它引用的子模块)
git clone --recurse-submodules -j8 <url>
# For already cloned repos, or older Git versions, use:
git submodule update --init --recursive
# also 
git pull --recurse-submodules
```

```bash
# update submodule
cd submodule
git checkout <branch>
git pull
# 也可以在主模块更新
git submodule update --remote <submoduleName>
# 可以通过以下命令设置特定的分支
git config -f .gitmodules submodule.<submoduleName>.branch <branch>
```

确保子模块更新

```bash
# 在主模块 push 之前，检查子模块是否 push，包括嵌套子模块
git push --recurse-submodules=check
# 在主模块 push 之前，自动 push 子模块，包括嵌套子模块
git push --recurse-submodules=on-demand
```

移除子模块

```bash
# 删除子模块关联信息（.gitmodules文件中的条目和.git/config中的相应配置）
git submodule deinit <submodule_path>
# 清理子模块工作目录中的所有文件（物理删除）
rm -rf .git/modules/<submodule_path> # 如果是旧版本Git可能需要手动删除缓存
rm -rf <submodule_path>
# 将子模块相关的提交从历史记录中移除（可选，但通常建议这样做以保持仓库简洁）
git rm --cached <submodule_path> # 从索引中移除子模块
```

[refer](https://cloud.tencent.com/developer/article/2143377)

## lfs

[official](https://git-lfs.com/)

```bash
apt install git-lfs
git lfs install
git lfs track "*.psd"
git add .gitattributes
```

## remote

- `git remote -v`
- `git remote show [remote]` 显示某个远程仓库的信息
- `git remote add [shortname] [url]` 添加远程版本库
- `git push -u origin master` push
- `git remote rm name`  删除远程仓库
- `git remote rename old_name new_name`  修改仓库名
- `git remote set-url origin [new_url]` [修改仓库url](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url)

## config

```shell
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
# show list
git config --global -l 
```

## push

### push to remote

`git push <remote> <branch>`

If your upstream branch is not already created, you will need to create it by running the “git push” command with the “-u” option for upstream.

`git push -u origin feature`

### push b to anther b

`git push <remote> <local_branch>:<remote_name>`

## status

`git status`

`-s` 参数来获得简短的输出结果

`git status ./`

## merge

将远程分支合并到当前分支

```bash
git merge [alias]/[branch]
# Generate a merge commit even if merge is fast-forward
git merge --no-ff [alias]/[branch]
# abort if fast-forward is not possible
$ git merge --ff-only [alias]/[branch]
```

## diff

- 尚未缓存的改动：git diff
  - `git diff [file]`
  - `git diff [first-branch]...[second-branch]`
- 查看已缓存的改动： git diff --cached
  - `git diff --cached [file]`
- 查看已缓存的与未缓存的所有改动：git diff HEAD
- 显示摘要而非整个 diff：git diff --stat

## commit

`git commit -m "msg"`

### git commit log

`git commit -m [message]`

-a 参数设置修改文件后不需要执行 git add 命令，直接来提交

> Commit message 的格式
> 每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。

```markdown
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

> 其中，Header 是必需的，Body 和 Footer 可以省略。

不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。

#### Header

Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。

1. type

   type用于说明 commit 的类别，只允许使用下面7个标识。

    - feat：新功能（feature）
    - fix：修补bug
    - docs：文档（documentation）
    - style： 格式（不影响代码运行的变动）
    - refactor：重构（即不是新增功能，也不是修改bug的代码变动）
    - test：增加测试
    - chore：构建过程或辅助工具的变动

   如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。

2. scope

   scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

3. subject

   subject是 commit 目的的简短描述，不超过50个字符。

    - 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
    - 第一个字母小写
    - 结尾不加句号（.）

#### Body

Body 部分是对本次 commit 的详细描述，可以分成多行。

```md
More detailed explanatory text, if necessary. Wrap it to about 72 characters or so.

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```

有两个注意点。

1. 使用第一人称现在时，比如使用change而不是changed或changes。
2. 应该说明代码变动的动机，以及与以前行为的对比。

#### Footer

Footer 部分只用于两种情况。

1. 不兼容变动

   如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。

   ```md
   BREAKING CHANGE: isolate scope bindings definition has changed.  
   To migrate the code follow the example below:  
   Before:  
   scope: { myAttr: 'attribute', }  
   After:  
   scope: { myAttr: '@', }  
   The removed `inject` wasn't generaly useful for directives so there should be no code using it.
   ```

2. 关闭 Issue

   如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。

   ```md
   Closes #234
   ```

   也可以一次关闭多个 issue 。

   ```md
   Closes #123, #245, #992
   ```

## reset

`git reset [--soft | --mixed | --hard] [HEAD]`

- --mixed 为默认，可以不用带该参数，用于重置暂存区的文件与上一次的提交(commit)保持一致，工作区文件内容保持不变。
- --soft 参数用于回退到某个版本
- --hard 参数撤销工作区中所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交
    > 谨慎使用 –-hard 参数，它会删除回退点之前的所有信息。

**HEAD** 说明：

- HEAD 表示当前版本
- HEAD^ 上一个版本
- HEAD^^ 上上一个版本
- 以此类推...
可以使用 ～数字表示
- HEAD~0 表示当前版本
- HEAD~1 上一个版本
- HEAD^2 上上一个版本
- 以此类推...

## git遗弃本地所有修改

```shell
#本地所有的修改，没有提交的，都返回到原来的状态
git checkout .  
```

## git checkout 指定版本

1. 切换到master: `git checkout master`
2. 下载最新代码:  `git pull`
3. 下载head： `git checkout HEAD`
4. 查看log找到需要的版本: `git log`
5. 根据header checkout : `git checkout XXXXXX`

## linux 下 git 免密码登录配置

> [原链接][linux下git免密码登录配置]

使用git push提交时，每次都要输入密码，次数多了，感觉挺麻烦. 如果git以ssh协议通讯，免密码可以用ssh公钥设置免登录。如果git时以https方式访问呢，该怎么办？下面方式可以解决这个问题.

1. 编辑`git-credentials`文件(如果没有 键入 `touch ~/.git-credentials`)，`vi ~/.git-credentials`
2. 文件中添加`https://{username}:{passeord}@domain`，如果账号密码中有@符号，用40%代替
3. `git config --global credential.helper store`
4. `cat .gitconfig` 出现 `helper = store`, 再尝试git push不再需要输入密码.

   ```shell
   cat .gitconfig
   
   [credential]
   helper = store 
   ```

### better

[服务器上的 Git - 生成 SSH 公钥][服务器上的 Git - 生成 SSH 公钥]

[below](#ssh)

## ssh

本地存放多个 ssh

```bash [~/.ssh/config]
# gitlab
Host ssh1
HostName gitlab.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitlab_id_rsa
# github
Host ssh1
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_id_rsa
```

```bash
ssh-keygen -t ed25519 -C "email@example.com"
# or
ssh-keygen -o -t rsa -b 4096 -C "email@example.com"
# for name
ssh-keygen -o -t rsa -b 4096 -C "email@example.com" -f <keyname>
# To test whether your SSH key was added correctly
ssh -T git@gitlab.com
```

## QA

[linux下git免密码登录配置]: http://yongqing.is-programmer.com/posts/80371.html
[服务器上的 Git - 生成 SSH 公钥]: https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key
