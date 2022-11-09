---
category: 
  - 编程  
tag: 
  - Git
---

# Git

## submodule
`git submodule add <url> <path>`

## remote

- `git remote -v`
- `git remote show [remote]` 显示某个远程仓库的信息
- `git remote add [shortname] [url]` 添加远程版本库
- `git push -u origin master` push
- `git remote rm name`  删除远程仓库
- `git remote rename old_name new_name`  修改仓库名


## git commit log

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

### Header

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

### Body

Body 部分是对本次 commit 的详细描述，可以分成多行。

```text
More detailed explanatory text, if necessary. Wrap it to about 72 characters or so.

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```

有两个注意点。

1. 使用第一人称现在时，比如使用change而不是changed或changes。
2. 应该说明代码变动的动机，以及与以前行为的对比。

### Footer

Footer 部分只用于两种情况。

1. 不兼容变动

   如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。

   ```text
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

   ```text
   Closes #234
   ```

   也可以一次关闭多个 issue 。

   ```text
   Closes #123, #245, #992
   ```

## git遗弃本地所有修改

```shell
#本地所有的修改，没有提交的，都返回到原来的状态
git checkout .  
```

## git checkout 指定版本

1. 切换到master: git checkout master
2. 下载最新代码:  git pull
3. 下载head： git checkout HEAD
4. 查看log找到需要的版本: git log
5. 根据header checkout : git checkout XXXXXX

> 关于分支

1. git branch
2. git branch -a //查看历史
3. git branch -d dev //删除本地分支
4. git checkout -b dev origin/dev //checkout 远程

## git如何取消merge

当我们使用git merge操作合并代码但还没add时，若想取消这次合并，使用`git merge --abort`命令即可

假如不幸已经 `git add` 了怎么办呢？ 其实也很简单，先用 `git reflog` 指令显示历史的操作

再用 `git reset --hard commit id`就可以回退到操作之前的状态了

## git 合并没有共同祖先的分支

> fatal: refusing to merge unrelated histories

`git pull origin master --allow-unrelated-histories`

## linux下git免密码登录配置

> [原链接][linux下git免密码登录配置]

> 使用git push提交时，每次都要输入密码，次数多了，感觉挺麻烦. 如果git以ssh协议通讯，免密码可以用ssh公钥设置免登录。如果git时以https方式访问呢，该怎么办？下面方式可以解决这个问题.

1. 编辑`git-credentials`文件(如果没有 键入 `touch .git-credentials`)
    * `vi .git-credentials`

2. 文件中添加`https://username:passeord@项目地址`
    * 如果账号密码中有@符号，用40%代替

3. `git config --global credential.helper store`

4. `vi .gitconfig` 出现 `helper = store` 或者

   ```shell
   cat .gitconfig
   
   [credential]
   helper = store 
   ```

   > 再尝试git push不再需要输入密码.

## QA

1. github clone private repo, clone submodule private repo  
    ????
2. todo


[linux下git免密码登录配置]: http://yongqing.is-programmer.com/posts/80371.html
