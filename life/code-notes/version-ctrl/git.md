# Git

## sol

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

## clone

`git clone <xxx.git>`

`git clone --branch your_branch_or_tag <xxx.git>`

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

[refer](https://cloud.tencent.com/developer/article/2143377)

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

## git reset

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

## branch

```bash
git checkout <existing_branch>
git checkout -b <new_branch>
git switch <existing_branch>
git switch -c <non_existing_branch>
```

1. `git branch`
2. `git branch -a` //查看历史
3. `git branch -d dev` or `git branch –delete dev` //删除分支
4. `git push <remote-name> --delete <branch-name>` //删除远程分支
5. `git checkout -b dev origin/dev` //checkout 远程

## git如何取消merge

当我们使用git merge操作合并代码但还没add时，若想取消这次合并，使用`git merge --abort`命令即可

假如不幸已经 `git add` 了怎么办呢？ 其实也很简单，先用 `git reflog` 指令显示历史的操作

再用 `git reset --hard commit id`就可以回退到操作之前的状态了

## git 合并没有共同祖先的分支

> fatal: refusing to merge unrelated histories

`git pull origin master --allow-unrelated-histories`

## linux下git免密码登录配置

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
